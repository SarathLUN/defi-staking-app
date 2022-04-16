// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract Reward {
    string public name = 'Reward';
    string public symbol = 'RWD';
    uint  public totalSupply = 1000000000000000000000000; // 1 mil tokens
    uint public decimals = 18;

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint _value
    );

    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint _value
    );

    mapping(address => uint) public balanceOf;
    mapping(address => mapping(address => uint)) public allowance;

    constructor() {
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address _to,uint _value) public returns (bool success){
        // require balance of the sender is greater or equal the value to be transferred.
        require(balanceOf[msg.sender] >= _value);
        // subtract the balance from sender
        balanceOf[msg.sender] -= _value;
        // increase balance for receiver
        balanceOf[_to] += _value;
        // emit the event
        emit Transfer(msg.sender, _to, _value);
        // return success
        return true;
    }

    function transferFrom(address _from,address _to,uint256 _value) public returns (bool success){
        require(balanceOf[_from] >= _value);
        require(allowance[msg.sender][_from] >= _value);
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(_from, _to, _value);
        allowance[msg.sender][_from] -= _value;
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }
}
