// lib/web3.js - Web3 integration utility
import { ethers } from 'ethers';

import contractInfo from './contract-info.json';
const BALLOT_ABI = contractInfo.abi;
const CONTRACT_ADDRESS = contractInfo.address;
// Contract ABI (you'll need to get this from your compiled contract)
// const BALLOT_ABI = [
//   "function giveRightToVote(address voter) external",
//   "function vote(uint proposal) external",
//   "function winningProposal() public view returns (uint)",
//   "function winnerName() external view returns (bytes32)",
//   "function voters(address) public view returns (uint weight, bool voted, address delegate, uint vote)",
//   "function proposals(uint) public view returns (bytes32 name, uint voteCount)"
// ];

// Contract address (you'll get this after deployment)
//const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS";


class Web3Service {
  constructor() {
    this.provider = null;
    this.signer = null;
    this.contract = null;
    this.account = null;
  }

  // Initialize Web3 connection
  async initialize() {
    try {
      if (typeof window !== 'undefined' && window.ethereum) {
        this.provider = new ethers.BrowserProvider(window.ethereum);
        await this.provider.send("eth_requestAccounts", []);
        this.signer = await this.provider.getSigner();
        this.account = await this.signer.getAddress();
        this.contract = new ethers.Contract(CONTRACT_ADDRESS, BALLOT_ABI, this.signer);
        return true;
      } else {
        throw new Error("MetaMask not installed");
      }
    } catch (error) {
      console.error("Web3 initialization failed:", error);
      return false;
    }
  }

  // Register voter (give right to vote)
  async registerVoter(voterAddress) {
    try {
      const tx = await this.contract.giveRightToVote(voterAddress);
      await tx.wait();
      return { success: true, txHash: tx.hash };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Cast vote
  async castVote(proposalIndex) {
    try {
      const tx = await this.contract.vote(proposalIndex);
      await tx.wait();
      return { success: true, txHash: tx.hash };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Check if user has voted
  async hasVoted(address) {
    try {
      const voter = await this.contract.voters(address);
      return voter.voted;
    } catch (error) {
      console.error("Error checking vote status:", error);
      return false;
    }
  }

  // Get election results
  async getResults() {
    try {
      const winningProposalIndex = await this.contract.winningProposal();
      const winnerName = await this.contract.winnerName();
      // Convert bytes32 to string
      const winnerNameString = ethers.decodeBytes32String(winnerName);
      return { 
        winningIndex: winningProposalIndex.toString(),
        winnerName: winnerNameString 
      };
    } catch (error) {
      console.error("Error getting results:", error);
      return null;
    }
  }

  // Get current account
  getCurrentAccount() {
    return this.account;
  }

  // Check if wallet is connected
  isConnected() {
    return this.account !== null;
  }
}

export default new Web3Service();