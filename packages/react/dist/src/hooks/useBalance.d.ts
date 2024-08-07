import { Balance } from '@puzzlehq/types';
type UseBalanceParams = {
    address?: string;
    multisig?: boolean;
};
export declare const useBalance: ({ address, multisig }?: UseBalanceParams) => {
    balances: Balance[] | undefined;
    error: string | undefined;
    loading: boolean;
};
export {};
