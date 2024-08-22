import { useEffect } from 'react';
import { hasInjectedConnection, } from '@puzzlehq/sdk-core';
import { useInjectedRequestQuery, useRequestQuery } from './wc/useRequest.js';
import { useWalletStore } from '../store.js';
import { useOnSessionEvent } from './wc/useOnSessionEvent.js';
import { useDebounce } from 'use-debounce';
import useInjectedSubscriptions from './utils/useInjectedSubscription.js';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';
export const useEvents = ({ filter, page }) => {
    const session = useWalletSession();
    const [account] = useWalletStore((state) => [state.account]);
    if (filter?.programId === '') {
        filter.programId = undefined;
    }
    const useQueryFunction = hasInjectedConnection()
        ? useInjectedRequestQuery
        : useRequestQuery;
    const query = {
        topic: session?.topic ?? '',
        chainId: account ? `${account.network}:${account.chainId}` : 'aleo:1',
        request: {
            jsonrpc: '2.0',
            method: 'getEvents',
            params: {
                filter,
                page,
            },
        },
    };
    const [debouncedFilter] = useDebounce(filter, 500);
    const { refetch, data: wc_data, error: wc_error, isLoading: loading, } = useQueryFunction({
        queryKey: [
            'useEvents',
            account?.address,
            JSON.stringify(debouncedFilter),
            page,
            session?.topic,
        ],
        enabled: !!session && !!account,
        fetchFunction: async () => {
            const response = await window.aleo.puzzleWalletClient.getEvents.query(query);
            return response;
        },
        wcParams: query,
    });
    // listen for injected wallet-originating account updates
    useInjectedSubscriptions({
        session,
        configs: [
            {
                subscriptionName: 'onSelectedAccountSynced',
                condition: () => true,
                onData: () => refetch(),
                dependencies: [],
            },
        ],
    });
    // listen for mobile wallet-originating account updates
    useOnSessionEvent(({ params }) => {
        const eventName = params.event.name;
        if (!hasInjectedConnection() && eventName === 'selectedAccountSynced') {
            refetch();
        }
    });
    // send initial events request
    const readyToRequest = !!session && !!account;
    useEffect(() => {
        if (readyToRequest && !loading) {
            refetch();
        }
    }, [readyToRequest]);
    const fetchPage = () => {
        if (readyToRequest && !loading) {
            refetch();
        }
    };
    const error = wc_error
        ? wc_error.message
        : wc_data && wc_data.error;
    const response = wc_data;
    const events = response?.events;
    const pageCount = response?.pageCount ?? 0;
    return { fetchPage, events, error, loading, page, pageCount };
};
