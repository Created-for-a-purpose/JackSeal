const { createTx, sendTx } = require('../fhenix-utils/transaction');
const client = require('../fhenix-utils/provider');

async function join({ buyInAmount, tableName }) {
    console.log("Joining table...")
    const localClient = await client()
    const encryptedBuyIn = await localClient.encrypt_uint32(Number(buyInAmount))
    const args = [tableName, encryptedBuyIn]
    const tx = createTx("buyIn", args)
    const hash = await sendTx(tx)
    if (hash) {
        console.log("Table joined successfully")
    } else {
        console.log("Table joining failed")
    }
}

module.exports = join;