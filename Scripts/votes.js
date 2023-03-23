
const voteAddress = "0xD5f2a720e0f337aac7CD710b8818aaecE53F8db7"
const voteABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    // vote for project
    "function voteForProject(bytes32 project)",
    // token holders
    "function totalVotesFor(bytes32 project) view returns(uint)",
    // token count
    "function projectList(uint) view returns(uint)"
]

const provider = new ethers.providers.Web3Provider(window.ethereum)
provider.send("eth_requestAccounts", []);
const signer = provider.getSigner()

// reading contract data
const pContract = new ethers.Contract(voteAddress, voteABI, provider);
// writing to contract data
const sContract = new ethers.Contract(voteAddress, voteABI, signer);