const pokerAddress = "0x30b76898D6A7DE876e8b77327A434FbB4856a37d"
const pokerAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_tableName",
				"type": "string"
			},
			{
				"components": [
					{
						"internalType": "bytes",
						"name": "data",
						"type": "bytes"
					}
				],
				"internalType": "struct inEuint32",
				"name": "_encryptedAmount",
				"type": "tuple"
			}
		],
		"name": "buyIn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "cards",
		"outputs": [
			{
				"internalType": "euint8",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "chips",
		"outputs": [
			{
				"internalType": "euint32",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "bytes",
						"name": "data",
						"type": "bytes"
					}
				],
				"internalType": "struct inEuint32",
				"name": "_buyInAmount",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "bytes",
						"name": "data",
						"type": "bytes"
					}
				],
				"internalType": "struct inEuint32",
				"name": "_smallBlind",
				"type": "tuple"
			},
			{
				"internalType": "string",
				"name": "_tableName",
				"type": "string"
			}
		],
		"name": "createTable",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_tableName",
				"type": "string"
			}
		],
		"name": "generateCard",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "tables",
		"outputs": [
			{
				"internalType": "bool",
				"name": "isGameEnded",
				"type": "bool"
			},
			{
				"internalType": "euint32",
				"name": "buyInAmount",
				"type": "uint256"
			},
			{
				"internalType": "euint32",
				"name": "smallBlind",
				"type": "uint256"
			},
			{
				"internalType": "euint8",
				"name": "roundNo",
				"type": "uint256"
			},
			{
				"internalType": "euint32",
				"name": "potValue",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

module.exports = {
    pokerAddress,
    pokerAbi
}