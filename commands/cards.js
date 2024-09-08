const { createTx, sendTx } = require('../fhenix-utils/transaction');

async function cards({ tableName }) {
    console.log("Receiving cards...")
    const args = [tableName]
    const tx = createTx("generateCard", args)
    const hash = await sendTx(tx)
    if (hash) {
        console.log("Cards generated successfully")
    } else {
        console.log("Cards generation failed")
    }
}

module.exports = cards;