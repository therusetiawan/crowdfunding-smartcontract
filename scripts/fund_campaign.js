const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/crowdfund.sol/CrowdFund.json");

// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance
const crowdFundingContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    console.log("Funding a campaign . . .");

    const tx = await crowdFundingContract.fundCampaign(1, {value: ethers.utils.parseEther("0.01")});
    await tx.wait();

    console.log("Sucess.......!");
}

main();