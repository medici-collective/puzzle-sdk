import { decrypt as _decrypt, SdkError, } from '@puzzlehq/sdk-core';
import { useInjectedRequest } from './utils/useRequest.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
export const useDecrypt = ({ ciphertexts, address, network, }) => {
    const { isConnected } = useIsConnected();
    const req = {
        method: 'decrypt',
        params: {
            ciphertexts: ciphertexts,
            address,
            network,
        },
    };
    const { request, data, error: _error, loading, } = useInjectedRequest(req, async (req) => {
        if (!isConnected)
            throw new Error(SdkError.NotConnected);
        const response = await _decrypt(req.params);
        return response;
    });
    const error = _error?.message ?? undefined;
    const response = data;
    const decrypt = async (requestOverride) => {
        return await request({
            method: 'decrypt',
            params: requestOverride ?? req,
        });
    };
    return { decrypt, plaintexts: response?.plaintexts, loading, error };
};
