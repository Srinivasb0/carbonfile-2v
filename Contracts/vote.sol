// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;


contract Voting {

    mapping (bytes32 => uint256) public votesReceived;

    bytes32[] public projectList;

    function totalVotesFor(bytes32 project) view public returns (uint256) {
        return votesReceived[project];
    }

    function voteForProject(bytes32 project) public {
        votesReceived[project] += 1;
        projectList.push(project);
    }

}