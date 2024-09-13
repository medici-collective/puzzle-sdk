import { Balance, Network } from '@puzzlehq/types';
export type GetBalancesRequest = {
    address?: string;
};
export type GetBalancesResponse = {
    balances?: Balance[];
    error?: string;
};
export declare const getBalance: ({ address, network, }: {
    address?: string | undefined;
    network?: Network | undefined;
}) => Promise<GetBalancesResponse>;
