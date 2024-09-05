const { ethers } = require('ethers');
const { privateKey } = require("../config.json");
const { pokerAddress, pokerAbi } = require("../constants");

const provider = new ethers.JsonRpcProvider("https://api.helium.fhenix.zone");
const wallet = new ethers.Wallet(privateKey, provider);

const createTx = (method, args) => {
    const tx = {
        to: pokerAddress,
        data: new ethers.Interface(pokerAbi).encodeFunctionData(method, args),
        value: 0
    }
    return tx;
}

const sendTx = async (tx) => {
    if (!privateKey || !wallet || !tx) return;
    const response = wallet.sendTransaction(tx);
    await response.wait();
}

module.exports = {
    createTx,
    sendTx
}