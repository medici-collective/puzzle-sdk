import { useEffect } from 'react';
import {
  AccountSelectedResponse,
  GenericRequest,
  GetSelectedAccountResponse,
} from '@puzzlehq/sdk-core';
import { useWalletStore } from '../store.js';
import { useInjectedRequestQuery } from './utils/useRequest.js';
import useInjectedSubscriptions from './utils/useInjectedSubscription.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';

export const shortenAddress = (
  address?: string,
  aleo: boolean = true,
  length: number = 4,
  short: boolean = true,
) => {
  if (!address) return '';
  if (address.length < length) return address;
  if (short) {
    return `(...${address.slice(-length)})`;
  }
  if (address.length < length * 2) return address;
  return `${address.slice(
    0,
    length + (aleo ? 'aleo1'.length : 0),
  )}...${address.slice(address.length - length, address.length)}`;
};

export const useAccount = () => {
  const isConnected = useIsConnected()
  const [account, setAccount, onDisconnect] = useWalletStore((state) => [
    state.account,
    state.setAccount,
    state.onDisconnect,
  ]);

  const query: GenericRequest = {
    method: 'getSelectedAccount',
  };

  const {
    refetch,
    data,
    error: _error,
    isLoading: loading,
  } = useInjectedRequestQuery<GetSelectedAccountResponse | undefined>({
    queryKey: ['useAccount'],
    enabled: isConnected,
    fetchFunction: async () => {
      const response: GetSelectedAccountResponse =
        await window.aleo.puzzleWalletClient.getSelectedAccount.query(query);
      return response;
    },
  });

  // listen for injected wallet-originating account updates
  useInjectedSubscriptions({
    configs: [
      {
        subscriptionName: 'onAccountSelected',
        condition: () => {
          return true;
        },
        onData: (data: AccountSelectedResponse) => {
          setAccount({
            network: data.network,
            address: data.address,
            shortenedAddress: shortenAddress(data.address),
          });
        },
        onError: (e: Error) => {
          console.error(e)
        },
        dependencies: [],
      },
    ],
  });

  useInjectedSubscriptions({
    configs: [
      {
        subscriptionName: 'onDisconnect',
        condition: () => true,
        onData: () => {
          onDisconnect();
          setAccount(undefined);
        },
        onError: (e: Error) => {
          console.error(e)
        },
        dependencies: [],
      },
    ],
  });

  // send initial account request...
  useEffect(() => {
    if (isConnected && !loading) {
      refetch();
    }
  }, [isConnected]);

  // ...and listen for a response
  useEffect(() => {
    if (data) {
      const puzzleData: GetSelectedAccountResponse | undefined = data;
      const account = puzzleData?.account;
      if (account) {
        setAccount(account);
      }
    }
  }, [data]);

  const error: string | undefined = _error
    ? (_error as Error).message
    : data && data.error;

  return {
    account,
    error,
    loading,
  };
};
