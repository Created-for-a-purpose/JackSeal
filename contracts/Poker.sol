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
    }

    mapping(string => Table) public tables;
    mapping(address => mapping(string => euint32)) public chips;
    mapping(address => mapping(string => euint8[])) public cards;
    euint8 private mask;

    function createTable(
        inEuint32 calldata _buyInAmount,
        inEuint32 calldata _smallBlind,
        string calldata _tableName
    ) external {
        address[] memory emptyArray;
        tables[_tableName] = Table({
            isGameEnded: false,
            buyInAmount: FHE.asEuint32(_buyInAmount.data),
            smallBlind: FHE.asEuint32(_smallBlind.data),
            roundNo: FHE.asEuint8(0),
            potValue: FHE.asEuint32(0),
            players: emptyArray
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

    function generateCard(string calldata _tableName) public {
        euint8[] memory playerCards = cards[msg.sender][_tableName];
        require(playerCards.length == 0, "already generated");
        (euint8 card1, euint8 card2) = getFakeRandomness();
        euint8 _mask = mask;
        euint8 _shiftedCard = FHE.asEuint8(1).shl(card1);
        euint8 cardMasked = FHE.and(_shiftedCard, _mask);
        ebool same = FHE.eq(cardMasked, _shiftedCard);
        euint8 output = FHE.select(same, FHE.asEuint8(0), FHE.asEuint8(1));
        FHE.req(FHE.eq(output, FHE.asEuint8(1)));
        cards[msg.sender][_tableName].push(card1);
        _mask = _mask.or(_shiftedCard);
        _shiftedCard = FHE.asEuint8(1).shl(card2);
        cardMasked = FHE.and(_shiftedCard, _mask);
        same = FHE.eq(cardMasked, _shiftedCard);
        output = FHE.select(same, FHE.asEuint8(0), FHE.asEuint8(1));
        FHE.req(FHE.eq(output, FHE.asEuint8(1)));
        cards[msg.sender][_tableName].push(card2);
        mask = _mask;
    }

    function getFakeRandomness() internal view returns(euint8, euint8) {
        uint8 random1 = uint8(uint256(blockhash(block.number)));
        uint8 random2 = uint8(uint256(blockhash(block.number - 1)));
        return (FHE.asEuint8(random1), FHE.asEuint8(random2));
    }
}