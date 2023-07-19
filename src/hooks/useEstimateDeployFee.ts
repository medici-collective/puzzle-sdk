import useClientWalletStore from "./clientWalletStore.js";
import { useRequest } from "@walletconnect/modal-sign-react";

export interface EstimateDeployFeeRequestData {
    program: String; // Leo code
}

export const useEstimateDeployFee = (
    estimateDeployFeeRequestData?: EstimateDeployFeeRequestData
) => {
    const [session, chainId] = useClientWalletStore((state) => [
        state.session,
        state.chainId,
    ]);

    // TODO: (darvish) Make this real
    const { request, data, error, loading } = useRequest({
        topic: session?.topic ?? "",
        chainId: chainId ?? "aleo:1337",
        request: {
            id: 1,
            jsonrpc: "2.0",
            method: "aleo_estimateDeployFee",
            params: estimateDeployFeeRequestData,
        },
    });
};
