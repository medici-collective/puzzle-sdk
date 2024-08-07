export type DecryptRequest = {
    ciphertexts: string[];
};
export type DecryptResponse = {
    plaintexts?: string[];
    error?: string;
};
export declare const decrypt: (ciphertexts?: string[], network?: string) => Promise<DecryptResponse>;
