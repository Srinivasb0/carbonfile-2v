
import  Web3 from 'web3';
import votes from "../abi/votes.json" assert {type: "json"};


if (typeof window.ethereum == "undefined") {
    rej("You should install Metamask to use it!");
}

// Web3 Instance 
let web3 = new Web3(window.ethereum);
let contract = new web3.eth.Contract(votes, "0xE40e4c3aE88675d70E876E57485A25A84f7E6017");


// total votes for project
web3.eth.getAccounts().then((accounts) => {
    contract.methods.totalVotesFor(project).send({ from: accounts[0] }).then((data) => {
        console.log("");
    });
});

// vote for project
web3.eth.getAccounts().then((accounts) => {
    contract.methods.voteForProject(project).send({ from: accounts[0] }).then((data) => {
        console.log("");
    });
});
