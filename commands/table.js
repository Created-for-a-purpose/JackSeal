const { createTx, sendTx } = require('../fhenix-utils/transaction');
const client = require('../fhenix-utils/provider');

async function table({ buyInAmount, players, smallBlind, tableName }) {
    console.log("Creating table...")
    const localClient = await client()
    const encryptedBuyIn = await localClient.encrypt_uint32(Number(buyInAmount))
    const encryptedSmallBlind = await localClient.encrypt_uint32(Number(smallBlind))
    const args = [encryptedBuyIn, players, encryptedSmallBlind, tableName]
    const tx = createTx("createTable", args)
    const hash = await sendTx(tx)
    if (hash) {
        console.log("Table created successfully")
    } else {
        console.log("Table creation failed")
    }
}

module.exports = table;