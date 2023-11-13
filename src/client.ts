import { WalletConnectModalSign } from '@walletconnect/modal-sign-html';
import { projectId, web3modal_puzzle_props } from './data/walletconnect.js';
import mitt from 'mitt';

export const emitter = (mitt as any)();

let connection: WalletConnectModalSign | undefined = undefined;

export type WalletConnectModalSignInstance = InstanceType<
  typeof WalletConnectModalSign
>;

export function configureConnection(
  dAppName: string,
  dAppDescription: string,
  dAppUrl: string,
  dAppIconURL: string
) {
  connection = new WalletConnectModalSign({
    projectId,
    metadata: {
      name: dAppName,
      description: dAppDescription,
      url: dAppUrl,
      icons: [dAppIconURL],
    },
    modalOptions: { ...web3modal_puzzle_props },
  });

  // remove to prevent walletconnect from redirecting to the wallet page
  window.localStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE');
}

export async function getWalletConnectModalSignClient(): Promise<WalletConnectModalSign> {
  return new Promise((resolve) => {
    if (connection) {
      resolve(connection);
    } else {
      const interval = setInterval(() => {
        if (connection) {
          clearInterval(interval);
          resolve(connection);
        }
      }, 200);
    }

    // remove to prevent walletconnect from redirecting to the wallet page
    window.localStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE');
  });
}
