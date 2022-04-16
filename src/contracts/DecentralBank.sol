// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import './Reward.sol';
import './Tether.sol';

contract DecentralBank{
    string public name;
    address public owner;
    Reward public rwd;
    Tether public tether;
    constructor(Reward _rwd, Tether _tether) {
        rwd = _rwd;
        tether = _tether;
    }
}