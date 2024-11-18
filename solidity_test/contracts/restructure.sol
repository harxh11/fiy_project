// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Election {
    struct Voter {
        uint voterId;
        bool voted;
        address delegate;
        uint vote;
        bool isVerified;
    }

    struct Candidate {
        uint candidateId;
        string name;
        string party;
        uint voteCount;
    }

    address public electionCommission;
    mapping(address => Voter) public voters;
    mapping(uint => Candidate) public candidates;
    uint public totalCandidates;
    uint public totalVotes;
    uint public totalVoters;

    constructor() {
        electionCommission = msg.sender;
        totalCandidates = 0;
        totalVoters = 0;
        totalVotes = 0;
    }

    // Register a new candidate
    function registerCandidate(string memory name, string memory party) public {
        require(msg.sender == electionCommission, "Only Election Commission can register candidates.");
        totalCandidates++;
        candidates[totalCandidates] = Candidate(totalCandidates, name, party, 0);
    }

    // Register a new voter
    function registerVoter(address voterAddress, uint voterId) public {
        require(msg.sender == electionCommission, "Only Election Commission can register voters.");
        require(!voters[voterAddress].isVerified, "Voter is already registered.");
        voters[voterAddress] = Voter(voterId, false, address(0), 0, true);
        totalVoters++;
    }

    // Vote function
    function vote(uint candidateId) public {
        Voter storage sender = voters[msg.sender];
        require(sender.isVerified, "Voter is not registered.");
        require(!sender.voted, "Voter has already voted.");
        require(candidateId > 0 && candidateId <= totalCandidates, "Invalid candidate.");

        sender.voted = true;
        sender.vote = candidateId;
        candidates[candidateId].voteCount += 1;
        totalVotes++;
    }

    // Get the winning candidate
    function winningCandidate() public view returns (string memory winnerName, string memory party, uint voteCount) {
        uint maxVotes = 0;
        uint winnerId = 0;

        for (uint i = 1; i <= totalCandidates; i++) {
            if (candidates[i].voteCount > maxVotes) {
                maxVotes = candidates[i].voteCount;
                winnerId = i;
            }
        }

        Candidate memory winner = candidates[winnerId];
        return (winner.name, winner.party, winner.voteCount);
    }
}
