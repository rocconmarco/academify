import { create } from "@web3-storage/w3up-client";

let client;

export async function getClient() {
    if(!client) {
        client = await create();
        await client.login(process.env.NEXT_PUBLIC_W3UP_EMAIL);
        const spaceDID = process.env.NEXT_PUBLIC_W3UP_SPACE_DID;
        const space = await client.addSpace(spaceDID);
        await client.setCurrentSpace(spaceDID);
    }
    return client
}