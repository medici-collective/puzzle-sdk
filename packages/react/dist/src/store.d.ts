import { PuzzleAccount } from '@puzzlehq/sdk-core';
type WalletState = {
    account?: PuzzleAccount;
    chainId?: string;
    setAccount: (account: PuzzleAccount | undefined) => void;
    setChainId: (chainId: string) => void;
    onDisconnect: () => void;
};
export declare const useWalletStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<WalletState>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<WalletState, WalletState>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: WalletState) => void) => () => void;
        onFinishHydration: (fn: (state: WalletState) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<WalletState, WalletState>>;
    };
}>;
export {};
