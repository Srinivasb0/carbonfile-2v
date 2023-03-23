
// import { ethers } from "ethers";
// address : 0x9d54098F6d00eAa53B3AdE46603D3A8E2B6c600F


// New NFT
var getToken = document.getElementById('projectName').value;
console.log(getToken);
// getToken.addEventListener('click', callTest);

const provider = new ethers.providers.Web3Provider(window.ethereum)
provider.send("eth_requestAccounts", []);
const signer = provider.getSigner();

const tokAddress = "0xC52ECed404E39fdCCda7eD9FA84B8333ff06CeAC";
console.log(tokAddress);
const tokABI = [
	"function name() view returns (string)",
    "function symbol() view returns (string)",

    // Get the account balance
    "function balanceOf(address) view returns (uint)",

    // Send some of your tokens to someone else
    "function transfer(address to, uint amount)",

    // An event triggered whenever anyone transfers to someone else
    "event Transfer(address indexed from, address indexed to, uint amount)"
]

const tokcontract = new ethers.Contract(tokAddress, tokABI, provider);
console.log(tokcontract);
const Cname = await tokcontract.name();
console.log(Cname);

async function callTest() {
    const name = await tokcontract.name();
    console.log(name);
    console.log("hello");
}

// export default callTest();
