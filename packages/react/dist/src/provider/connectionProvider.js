import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from 'react';
import { useInjectedRequestQuery } from '../hooks/utils/useRequest.js';
import { useWalletStore } from '../store.js';
import useInjectedSubscriptions from '../hooks/utils/useInjectedSubscription.js';
import { shortenAddress } from '../hooks/useAccount.js';
export const ConnectionContext = createContext(undefined);
export const useIsConnected = () => {
    const context = useContext(ConnectionContext);
    if (!context) {
        throw new Error('useIsConnected must be used within a ConnectionProvider');
    }
    return { isConnected: context?.isConnected, setIsConnected: context?.setIsConnected };
};
export const ConnectionProvider = ({ children }) => {
    const [isConnected, setIsConnected] = useState(false);
    const [account, onDisconnect, setAccount] = useWalletStore((state) => [state.account, state.onDisconnect, state.setAccount]);
    useInjectedRequestQuery({
        queryKey: [
            'isConnected',
        ],
        enabled: true,
        fetchFunction: async () => {
            const response = await window.aleo.puzzleWalletClient.isConnected.query();
            if (response === false && account) {
                onDisconnect();
            }
            setIsConnected(response);
            return response;
        },
    });
    useInjectedSubscriptions({
        configs: [
            {
                subscriptionName: 'onAccountSelected',
                condition: () => {
                    return true;
                },
                onData: (data) => {
                    setAccount({
                        network: data.network,
                        address: data.address,
                        shortenedAddress: shortenAddress(data.address),
                    });
                },
                onError: (e) => {
                    console.error(e);
                },
                dependencies: [],
            },
            {
                subscriptionName: 'onSelectedAccountSynced',
                condition: () => {
                    return true;
                },
                onData: (data) => {
                    setAccount({
                        network: data.network,
                        address: data.address,
                        shortenedAddress: shortenAddress(data.address),
                    });
                },
                onError: (e) => {
                    console.error(e);
                },
                dependencies: [],
            },
            {
                subscriptionName: 'onDisconnect',
                condition: () => true,
                onData: () => {
                    console.log('onDisconnect called!!');
                    onDisconnect();
                    setIsConnected(false);
                },
                onError: (e) => {
                    console.error(e);
                },
                dependencies: [],
            },
        ],
    });
    useEffect(() => {
        console.log('ConnectionProvider isConnected', isConnected);
    }, [isConnected]);
    return (_jsx(ConnectionContext.Provider, { value: { isConnected, setIsConnected }, children: children }));
};
