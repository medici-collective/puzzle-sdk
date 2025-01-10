import { type RecordWithPlaintext, Network, RecordStatus } from '@puzzlehq/types';
import { hasInjectedConnection } from '../utils/clientInfo.js';
import { SdkError } from '../data/errors.js';
import { GenericRequest } from '../data/types.js';

export type RecordStatusFilter = RecordStatus | 'All';

export type RecordsFilter = {
  programIds?: string[];
  functionId?: string;
  status: RecordStatusFilter;
  names?: string[];
};

export type GetRecordsRequest = {
  filter?: RecordsFilter;
  page?: number;
  address?: string;
  network?: Network;
};

export type GetRecordsResponse = {
  records?: RecordWithPlaintext[];
  pageCount?: number;
  error?: string;
};

export const getRecords = async ({
  filter,
  page = 0,
  address,
  network,
}: GetRecordsRequest): Promise<GetRecordsResponse> => {
  if (!hasInjectedConnection()) throw new Error(SdkError.PuzzleWalletNotDetected);
  if (!window.aleo.puzzleWalletClient.getRecords?.query) throw new Error('getRecords.query not found!')

  const query: GenericRequest = {
    request: {
      method: 'getRecords',
      params: {
        filter,
        page,
        address,
        network
      } as GetRecordsRequest,
    },
  };

  try {
    const response: GetRecordsResponse =
      await window.aleo.puzzleWalletClient.getRecords.query(query);
    return response;
  } catch (e) {
    console.error('getRecords error', e);
    const error = (e as Error).message;
    return { error };
  }
};
