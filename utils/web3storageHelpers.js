import { getClient } from "../web3storageConfig";

export async function uploadItem(item) {
    const client = await getClient()
    const blob = new Blob([JSON.stringify(item)], {type: 'application/json'})
    const cid = await client.uploadBlob(blob)
    return cid
}

export async function retrieveItem(cid) {
    const client = await getClient()
    const res = await client.getBlob(cid)
    return JSON.parse(await res.text())
}

export async function uploadItemsList(items) {
    const client = await getClient()
    const blob = new Blob([JSON.stringify(items)], {type: 'application/json'})
    const cid = await client.uploadBlob(blob)
    return cid
}

export async function retrieveItemsList(cid) {
    const client = await getClient()
    const res = await client.getBlob(cid)
    return JSON.parse(await res.text())
}