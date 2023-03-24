// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Voting {

    mapping (bytes32 => uint256) public votesReceived;

    bytes32[] public projectList;

    constructor(bytes32[] memory projectNames) {
        projectList = projectNames;
    }
 
    function totalVotesFor(bytes32 project) view public returns (uint256) {
        require(validProject(project));
        return votesReceived[project];
    }

    function voteForProject(bytes32 project) public {
        require(validProject(project));
        votesReceived[project] += 1;
    }

    function validProject(bytes32 project) view public returns (bool) {
        for(uint i=0; i < projectList.length; i++) {
            if (projectList[i] == project) {
                return true;
            }
        }
        return false;
    }
}