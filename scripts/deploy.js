async function main() {
   const CrowdFund = await ethers.getContractFactory("CrowdFund");

   // Start deployment, returning a promise that resolves to a contract object
   const crowd_funding = await CrowdFund.deploy();
   console.log("Contract deployed to address:", crowd_funding.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });