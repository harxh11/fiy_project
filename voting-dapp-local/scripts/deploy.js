// scripts/deploy.js - Deploy your Ballot contract
const { ethers } = require("hardhat");

async function main() {
  console.log("Starting deployment...");

  // Get the contract factory
  const Ballot = await ethers.getContractFactory("Ballot");

  // Define proposal names for your election
  const proposalNames = [
    "Candidate A - BJP",
    "Candidate B - Congress", 
    "Candidate C - AAP",
    "NOTA"
  ];

  console.log("Deploying Ballot contract with proposals:", proposalNames);

  // Deploy the contract
  const ballot = await Ballot.deploy(proposalNames);
  await ballot.waitForDeployment();

  const contractAddress = await ballot.getAddress();
  console.log("Ballot contract deployed to:", contractAddress);

  // Save contract info for frontend
  const fs = require('fs');
  const contractInfo = {
    address: contractAddress,
    abi: ballot.interface.fragments.map(f => f.format('json')),
    proposals: proposalNames
  };

  // Save to client folder for easy access
  fs.writeFileSync(
    './contract-info.json', 
    JSON.stringify(contractInfo, null, 2)
  );

  console.log("Contract info saved to client/contract-info.json");

  // Verify deployment by checking proposals
  console.log("\nVerifying deployment...");
  for (let i = 0; i < proposalNames.length; i++) {
    const proposal = await ballot.proposals(i);
    console.log(`Proposal ${i}: ${ethers.decodeBytes32String(proposal.name)} - Votes: ${proposal.voteCount}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });