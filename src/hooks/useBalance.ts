import useClientWalletStore from './clientWalletStore.js';
import { useOnSessionEvent, useRequest, useSession } from '@walletconnect/modal-sign-react';
import { useEffect, useState } from 'react';
import { Balances, GetBalanceMessage, GetBalanceResMessage } from '../messaging/balance.js';
import { SessionTypes } from '@walletconnect/types';

export const useBalance = () => {
  const session: SessionTypes.Struct | undefined = useSession();
  const [chainId, account] = useClientWalletStore((state) => [
    state.chainId, state.account
  ]);

  const { request, data: wc_data, error: wc_error, loading } = useRequest({
    topic: session?.topic,
    chainId: chainId ?? 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'aleo_getBalance',
      params: {
        type: 'GET_BALANCE',
        data: {
          assetId: undefined
        }
      } as GetBalanceMessage
    },
  });

  // listen for wallet-originated balance updates
  useOnSessionEvent(({ _, params, topic }) => {
    const eventName = params.event.name;
    if (eventName === 'accountSynced' && session && session.topic === topic) {
      console.log('balance requested 1!')
      request();
    }
  });

  // send initial balance request...
  const readyToRequest = !!session && !!account;
  useEffect(() => { 
    if (readyToRequest) {
      console.log('balance requested 2!');
      request();
    }
  }, [readyToRequest]);

  const error: string | undefined = wc_error ? wc_error.message : (wc_data && wc_data.type === 'GET_BALANCE_REJ' ? wc_data.data.error : undefined);
  const puzzleData: GetBalanceResMessage | undefined =  wc_data && wc_data.type === 'GET_BALANCE_RES' ? wc_data : undefined;
  const balances: Balances | undefined = puzzleData?.data.balances;

  console.log('wc_data', wc_data);

  return { loading, balances, error };
};