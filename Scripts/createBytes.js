import { ethers } from "ethers";


async function createBytes(project) {
    const bytes = ethers.utils.formatBytes32String(project);
    console.log(bytes);
}
createBytes("carbon File")
