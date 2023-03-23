
// 0x54cf9F316Bd8402d58A7d9a525Dc01A51c830244
const tokAddress = "0xC52ECed404E39fdCCda7eD9FA84B8333ff06CeAC";
const tokABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    // mint tokens
    "function mint(address to)",
    // token holders
    "function tokenHolders(uint256) view returns(uint)",
    // token count
    "function tokenCount() view returns(uint)",
    // total supply
    "function totalSupply() view returns(uint)"
]

const provider = new ethers.providers.Web3Provider(window.ethereum)
provider.send("eth_requestAccounts", []);
const signer = provider.getSigner()

// reading contract data
const pContract = new ethers.Contract(tokAddress, tokABI, provider);
// writing to contract data
const sContract = new ethers.Contract(tokAddress, tokABI, signer);
sContract.mint('0x5727a4C88Ad00a17bAD5d6DB71527393adb2f317')



// async function mintToken() {
//     // MetaMask requires requesting permission to connect users accounts 
//     console.log("Working")  
//     const supply = await pContract.totalSupply();
//     console.log("Working")
//     console.log(supply)
// }