const { FhenixClient } = require('fhenixjs');
const { JsonRpcProvider } = require('ethers');

const client = async () => {
    const provider = new JsonRpcProvider('https://api.helium.fhenix.zone');
    const client = new FhenixClient({ provider });
    return client;
}

module.exports = client;