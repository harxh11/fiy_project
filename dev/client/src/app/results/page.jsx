"use client"

import ResultsPage from "./components/results-page"

export default function Page() {
  return <ResultsPage />
}


// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { BrowserProvider, Contract } from "ethers";
// import { ethers } from "ethers";
// // Import the correct contract info (adjust path as needed)
// import contractInfo from "/Users/sadiquenadaf/Desktop/FiY_final/fiy_project/dev/client/contract-info.json"; // Make sure this path is correct

// const CONTRACT_ADDRESS = contractInfo.address;
// const CONTRACT_ABI = contractInfo.abi;

// export default function ResultsPage() {
//   const router = useRouter();
//   const [candidates, setCandidates] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (typeof window !== "undefined" && localStorage.getItem("isAdmin") !== "true") {
//       router.push("/authentication/login");
//     }
//   }, [router]);

//   useEffect(() => {
//     async function fetchResults() {
//       if (typeof window === "undefined" || !window.ethereum) {
//         setError("MetaMask is not installed!");
//         setLoading(false);
//         return;
//       }
//       try {
//         await window.ethereum.request({ method: "eth_requestAccounts" });
//         const provider = new BrowserProvider(window.ethereum);
//         const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);

//         let proposalCount = await contract.getNumProposals();
//         proposalCount = Number(proposalCount);

//         if (proposalCount === 0) {
//           setCandidates([]);
//           setLoading(false);
//           setError("No proposals found on contract.");
//           return;
//         }
//         const results = [];
//         for (let i = 0; i < proposalCount; i++) {
//           const proposal = await contract.proposals(i);
//           let name = "";
//           try {
//             name = ethers.decodeBytes32String(proposal.name);
//           } catch {
//             name = proposal.name;
//           }
//           let voteCount = proposal.voteCount?.toString?.() ?? proposal.voteCount ?? "0";
//           results.push({ name, voteCount });
//         }
//         setCandidates(results);
//         setError("");
//       } catch (err) {
//         setError("Error fetching results: " + (err?.reason || err?.message || err));
//       }
//       setLoading(false);
//     }

//     fetchResults();
//   }, []);

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold mb-6">Election Results</h1>
//       {loading ? (
//         <div>Loading results...</div>
//       ) : error ? (
//         <div className="text-red-600">{error}</div>
//       ) : (
//         <table className="min-w-full bg-white text-black rounded shadow">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b">Candidate</th>
//               <th className="py-2 px-4 border-b">Votes</th>
//             </tr>
//           </thead>
//           <tbody>
//             {candidates.map((cand, idx) => (
//               <tr key={idx}>
//                 <td className="py-2 px-4 border-b">{cand.name}</td>
//                 <td className="py-2 px-4 border-b">{cand.voteCount}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }