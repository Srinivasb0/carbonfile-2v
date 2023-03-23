// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CFileToken is ERC20, Ownable 
{
    constructor() ERC20("Carbon File token", "CFTK") {}
    uint256 public tokenCount = 0;
    uint256 public maxSupply = 1000000000000000000000000000;

    address[] public tokenHolders;
    bytes32[] public cidList;
    mapping (bytes32 => uint256) public tokensReceived;

    function mint(address to, bytes32 cid, uint256 amount ) public onlyOwner {
        require(tokenCount <= maxSupply, "token limit reached");
        _mint(to, amount);
        tokenCount += 1;
        tokenHolders.push(to);
        cidList.push(cid);
        tokensReceived[cid] = amount;
    }

    function tokensForCid(bytes32 cid) view public returns (uint256) {
        return tokensReceived[cid];
    }
}