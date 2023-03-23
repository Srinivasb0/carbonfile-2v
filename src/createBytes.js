import { ethers } from "ethers";


async function createBytes(args) {
    const project = args[0];
    const bytes = ethers.constants.formatBytes32String(project);
    console.log("Bytes ", bytes);
}

createBytes(process.argv.slice(2));