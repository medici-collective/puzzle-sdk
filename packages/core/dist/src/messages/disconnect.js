import { hasInjectedConnection } from '../utils/clientInfo.js';
import { SdkError } from '../data/errors.js';
export const disconnect = async () => {
    if (!hasInjectedConnection())
        throw new Error(SdkError.PuzzleWalletNotDetected);
    if (!window.aleo.puzzleWalletClient.disconnect?.mutate)
        throw new Error('disconnect.mutate not found!');
    const req = {
        method: 'disconnect'
    };
    try {
        await window.aleo.puzzleWalletClient.disconnect.mutate(req);
        return {};
    }
    catch (e) {
        console.error('error disconnecting', e);
        const error = e.message;
        return { error };
    }
};
