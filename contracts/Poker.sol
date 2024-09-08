// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {FHE, euint32, inEuint32, ebool, euint8} from "@fhenixprotocol/contracts/FHE.sol";

contract Poker {
    enum PlayerAction {
        Call,
        Raise,
        Check,
        Fold
    }

    struct Table {
        bool isGameEnded;
        euint32 buyInAmount;
        euint32 smallBlind;
        euint8 roundNo;
        euint32 potValue;
        address[] players;
        euint32[] playerCards;
    }

    mapping(string => Table) public tables;
    mapping(address => mapping(string => euint32)) public chips;

    function createTable(
        inEuint32 calldata _buyInAmount,
        address[] calldata _players,
        inEuint32 calldata _smallBlind,
        string calldata _tableName
    ) external {
        euint32[] memory emptyArray;
        tables[_tableName] = Table({
            isGameEnded: false,
            buyInAmount: FHE.asEuint32(_buyInAmount.data),
            smallBlind: FHE.asEuint32(_smallBlind.data),
            roundNo: FHE.asEuint8(0),
            potValue: FHE.asEuint32(0),
            players: _players,
            playerCards: emptyArray
        });
    }

    function buyIn(string calldata _tableName, inEuint32 calldata _encryptedAmount) public {
        Table storage table = tables[_tableName];
        euint32 encryptedAmount = FHE.asEuint32(_encryptedAmount.data);

        chips[msg.sender][_tableName] = FHE.add(
            chips[msg.sender][_tableName],
            encryptedAmount
        );
        table.players.push(msg.sender);
    }

}