import {
  connect as _connect,
  ConnectRequestParams,
  ConnectResponse,
} from '@puzzlehq/sdk-core';
import { useAsyncAction } from './utils/_useAsyncAction.js';
import { useWalletStore } from '../store.js';
import { shortenAddress } from './useAccount.js';
import { useIsConnected } from '../provider/connectionProvider.js';

export function useConnect(request: ConnectRequestParams) {
  const { isConnected, setIsConnected } = useIsConnected();

  const { data, error, loading, setData, setError, setLoading } =
    useAsyncAction<ConnectResponse>();
  const [setAccount] = useWalletStore(
    (state) => [state.setAccount],
  );

  async function connect() {
    try {
      setLoading(true);
      setError(undefined);
      console.log('connect request', request);
      const response = await _connect(request);
      setData(response);
      setAccount({
        address: response.connection.address,
        network: response.connection.network,
        shortenedAddress: shortenAddress(response.connection.address),
      });
      setIsConnected?.(true);
      return response;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return { data, error, loading, isConnected, connect };
}
