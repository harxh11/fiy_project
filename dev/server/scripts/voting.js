const { ethers } = require("hardhat");

async function main() {
    // Get contract factory and deploy
    const Election = await ethers.getContractFactory("Election");
    const election = await Election.deploy();
    await election.deployed();
    console.log("Election contract deployed at:", election.address);

    // Election Commission address (assumed to be the deployer)
    const [electionCommission, voter1, voter2, voter3] = await ethers.getSigners();

    // Register candidates
    await election.connect(electionCommission).registerCandidate("Alice", "Party A");
    await election.connect(electionCommission).registerCandidate("Bob", "Party B");
    console.log("Candidates registered.");

    // Register voters
    await election.connect(electionCommission).registerVoter(voter1.address, 101);
    await election.connect(electionCommission).registerVoter(voter2.address, 102);
    await election.connect(electionCommission).registerVoter(voter3.address, 103);
    console.log("Voters registered.");

    // Cast votes
    await election.connect(voter1).vote(1);
    console.log("Voter 1 voted for candidate 1.");

    await election.connect(voter2).vote(2);
    console.log("Voter 2 voted for candidate 2.");

    await election.connect(voter3).vote(1);
    console.log("Voter 3 voted for candidate 1.");

    // Check results
    const [winnerName, party, voteCount] = await election.winningCandidate();
    console.log(`Winning Candidate: ${winnerName}, Party: ${party}, Vote Count: ${voteCount}`);
}

// Error handling
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
