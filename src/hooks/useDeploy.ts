import useClientWalletStore from './clientWalletStore.js';
import { useRequest } from '@walletconnect/modal-sign-react';
import { DeployMessage, DeployMessageInputData, DeployRejMessage, DeployResMessage } from '../messaging/deploy.js';
import { useCallback, useEffect, useState } from 'react';

export const useDeployProgram = (
  deployProgramRequestData?: DeployMessageInputData
) => {
  const [ loading, setLoading ] = useState(false); 
  const [session, chainId] = useClientWalletStore((state) => [
    state.session,
    state.chainId,
  ]);

  const { request: sendRequest, data, error } = useRequest({
    topic: session?.topic ?? '',
    chainId: 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'aleo_deploy',
      params: {
        type: 'DEPLOY', 
        data: deployProgramRequestData,
      } as DeployMessage,
    },
  });

  const deploy = () => { 
    if (deployProgramRequestData !== null) {
      sendRequest(); 
    }
  }

  return { deploy };
  
};