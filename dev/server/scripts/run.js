const { ethers } = require("hardhat");

async function main() {
  // Compile the contract and get a Contract Factory
  const Ballot = await ethers.getContractFactory("Ballot");

  // Define proposal names in bytes32 format
  const proposalNames = ["Proposal1", "Proposal2", "Proposal3"];

  // Deploy the contract and get the deployed instance
  const ballot = await Ballot.deploy(proposalNames);

  //   // Wait for the deployment to complete
  //   await ballot.deployTransaction.wait(); // This ensures the contract is deployed

  console.log("Ballot contract deployed to:", ballot.address);

  // Interact with the contract
  // Example: Cast a vote for the first proposal
  await ballot.vote(0);
  console.log("Voted for proposal 0.");

  // Check the winning proposal
  const winningProposal = await ballot.winningProposal();
  console.log("Winning proposal index:", winningProposal);

  const proposalName = await ballot.proposals(winningProposal);
  console.log("Winning proposal name:", proposalName.name);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
