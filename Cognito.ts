import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";

const cogClient = new CognitoIdentityProviderClient({
    region: "us-east-2",
    credentials: {
        accessKeyId: 'AKIAUUTGJLWFC35CCMGQ',
        secretAccessKey: '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'
    }
});

export default cogClient;