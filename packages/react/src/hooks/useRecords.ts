import {
  GetRecordsRequest,
  GetRecordsResponse,
  RecordsFilter,
  log_sdk,
  hasInjectedConnection,
} from '@puzzlehq/sdk-core';
import { type RecordWithPlaintext } from '@puzzlehq/types';
import { SessionTypes } from '@walletconnect/types';
import { useWalletStore } from '../store.js';
import { useSession } from './wc/useSession.js';
import { useExtensionRequestQuery, useRequestQuery } from './wc/useRequest.js';
import { useOnSessionEvent } from './wc/useOnSessionEvent.js';
import { useDebounce } from 'use-debounce';
import useInjectedSubscriptions from './utils/useInjectedSubscription.js';

type UseRecordsParams = {
  address?: string;
  multisig?: boolean;
  filter?: RecordsFilter;
  page?: number;
};

export const getFormattedRecordPlaintext = (data: any) => {
  try {
    return JSON.stringify(data, null, 2).replaceAll('"', '') ?? '';
  } catch {
    return '';
  }
};

export const useRecords = ({
  address,
  multisig = false,
  filter,
  page,
}: UseRecordsParams) => {
  const session: SessionTypes.Struct | undefined = useSession();
  const [account] = useWalletStore((state) => [state.account]);

  const useQueryFunction = hasInjectedConnection()
    ? useExtensionRequestQuery
    : useRequestQuery;

  const query = {
    topic: session?.topic,
    chainId: 'aleo:1',
    request: {
      jsonrpc: '2.0',
      method: 'getRecords',
      params: {
        address,
        filter,
        page,
      } as GetRecordsRequest,
    },
  };

  const [debouncedFilter] = useDebounce(filter, 500);

  const {
    refetch,
    data: wc_data,
    error: wc_error,
    isLoading: loading,
  } = useQueryFunction<GetRecordsResponse | undefined>({
    queryKey: [
      'useRecords',
      account?.address,
      address,
      multisig,
      debouncedFilter,
      page,
      session?.topic,
    ],
    enabled: (multisig ? !!address : true) && !!session && !!account,
    fetchFunction: async () => {
      const response: GetRecordsResponse =
        await window.aleo.puzzleWalletClient.getRecords.query(query);
      return response;
    },
    wcParams: query,
  });

  const readyToRequest =
    !!session && !!account && (multisig ? !!address : true);

  useInjectedSubscriptions({
    session,
    configs: [
      {
        subscriptionName: 'onSelectedAccountSynced',
        condition: () => !multisig,
        onData: () => refetch(),
      },
      {
        subscriptionName: 'onSharedAccountSynced',
        condition: (data) => {
          console.log('onSharedAccountSynced data', data);
          return !!multisig && data?.address === address;
        },
        onData: () => refetch(),
      },
    ],
  });

  useOnSessionEvent(({ params }) => {
    const eventName = params.event.name;
    const _address = params.event.address ?? params.event.data.address;
    if (
      !hasInjectedConnection() &&
      ((eventName === 'selectedAccountSynced' && !multisig) ||
        (eventName === 'sharedAccountSynced' &&
          multisig &&
          _address === address))
    ) {
      refetch();
    }
  });

  const fetchPage = () => {
    if (readyToRequest && !loading) {
      log_sdk('useRecords refetching...', [address, multisig, filter, page]);
      refetch();
    }
  };

  const error: string | undefined = wc_error
    ? (wc_error as Error).message
    : wc_data && wc_data.error;
  const response: GetRecordsResponse | undefined = wc_data;
  const records: RecordWithPlaintext[] | undefined = response?.records;
  const pageCount = response?.pageCount ?? 0;

  return { fetchPage, records, error, loading, page, pageCount };
};