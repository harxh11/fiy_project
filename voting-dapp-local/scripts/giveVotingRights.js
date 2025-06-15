const hre = require("hardhat");

async function main() {
  // Replace with your deployed contract address
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  // Replace with your contract name
  const Ballot = await hre.ethers.getContractAt("Ballot", contractAddress);

  // List of voter addresses
  const voters = [
    "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
    "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"
    // Add more addresses here
  ];

  for (let addr of voters) {
    const tx = await Ballot.giveRightToVote(addr);
    await tx.wait(); // Wait for transaction to confirm
    console.log(`Voting right granted to: ${addr}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});