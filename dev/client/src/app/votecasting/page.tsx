"use client";

import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  ShieldCheck,
  FileText,
  Info,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const partySymbol =
  "data:image/png;base64,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";
const userSymbol =
  "data:image/png;base64,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";
// Sample candidate data - in a real app, this would come from an API or blockchain
const candidates = [
  {
    id: 1,
    name: "Rajesh Kumar Sharma",
    party: "Bharatiya Janata Party",
    partyAbbreviation: "BJP",
    symbol: "/placeholder.svg?height=80&width=80",
    image: "/placeholder.svg?height=120&width=120",
    age: 52,
    education: "Ph.D. in Public Administration",
    assets: "₹3.5 Crore",
    cases: "No criminal cases",
    description:
      "Former State Minister focusing on infrastructure development and rural employment schemes.",
    manifesto:
      "Promises to improve agricultural subsidies, enhance water management systems, and create new employment opportunities through industrial corridors.",
  },
  {
    id: 2,
    name: "Priya Agarwal",
    party: "Indian National Congress",
    partyAbbreviation: "INC",
    symbol: "/placeholder.svg?height=80&width=80", // Would be hand symbol
    image: "/placeholder.svg?height=120&width=120",
    age: 48,
    education: "Master's in Economics",
    assets: "₹2.8 Crore",
    cases: "No criminal cases",
    description:
      "Social activist and economist with focus on inclusive growth and minority rights.",
    manifesto:
      "Plans to implement universal healthcare, education reforms, and strengthen social welfare programs for marginalized communities.",
  },
  {
    id: 3,
    name: "Amit Patel",
    party: "Aam Aadmi Party",
    partyAbbreviation: "AAP",
    symbol: "/placeholder.svg?height=80&width=80", // Would be broom symbol
    image: "/placeholder.svg?height=120&width=120",
    age: 45,
    education: "B.Tech from IIT Delhi",
    assets: "₹1.2 Crore",
    cases: "No criminal cases",
    description:
      "Anti-corruption activist and former civil servant with focus on governance reforms.",
    manifesto:
      "Advocates for transparency in governance, free education and healthcare, and sustainable urban development.",
  },
  {
    id: 4,
    name: "Sunita Devi",
    party: "Bahujan Samaj Party",
    partyAbbreviation: "BSP",
    symbol: "/placeholder.svg?height=80&width=80", // Would be elephant symbol
    image: "/placeholder.svg?height=120&width=120",
    age: 50,
    education: "Master's in Political Science",
    assets: "₹4.1 Crore",
    cases: "No criminal cases",
    description:
      "Advocate for Dalit rights and social justice with extensive grassroots experience.",
    manifesto:
      "Focuses on social justice, reservation policies, land reforms, and educational opportunities for underprivileged communities.",
  },
  {
    id: 5,
    name: "Vikram Singh Rathore",
    party: "Samajwadi Party",
    partyAbbreviation: "SP",
    symbol: "/placeholder.svg?height=80&width=80", // Would be bicycle symbol
    image: "/placeholder.svg?height=120&width=120",
    age: 55,
    education: "LLB from Delhi University",
    assets: "₹5.3 Crore",
    cases: "1 pending case (non-criminal)",
    description:
      "Former district magistrate with focus on rural development and farmer welfare.",
    manifesto:
      "Promises agricultural loan waivers, irrigation projects, youth employment schemes, and pension benefits for farmers.",
  },
];

// Election details
const electionDetails = {
  constituencyName: "Corporate",
  constituencyNumber: "42",
  state: "ABC Organization",
  phase: "Phase 4",
  pollingDate: "May 13, 2024",
  pollingTime: "7:00 AM to 6:00 PM",
};

export default function VotePage() {
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(
    null
  );
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [voterVerified, setVoterVerified] = useState(true); // In a real app, this would be false until verification
  const [voterId, setVoterId] = useState("ABC1234567"); // In a real app, this would come from authentication
  const [receiptId, setReceiptId] = useState("");
  const [showInstructions, setShowInstructions] = useState(false);

  const handleVoteClick = (candidateId: number) => {
    setSelectedCandidate(candidateId);
    setShowConfirmDialog(true);
  };

  const handleConfirmVote = async () => {
    // In a real application, this would call a blockchain transaction or API
    // to record the vote securely
    console.log(`Vote confirmed for candidate ID: ${selectedCandidate}`);

    // Simulate API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Generate a receipt ID (in a real app, this would come from the blockchain)
    const generatedReceiptId =
      "ECI" + Math.random().toString(36).substring(2, 10).toUpperCase();
    setReceiptId(generatedReceiptId);

    setShowConfirmDialog(false);
    setHasVoted(true);
  };

  if (hasVoted) {
    return (
      <div className="container max-w-4xl mx-auto py-10 px-4 pt-[50px]">
        <Card className="border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-900">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Election Commission of India"
                  width={60}
                  height={60}
                />
                <div>
                  <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                    <CheckCircle2 className="h-6 w-6" />
                    Vote Successfully Cast
                  </CardTitle>
                  <CardDescription>
                    Thank you for fulfilling your democratic duty
                  </CardDescription>
                </div>
              </div>
              <Badge
                variant="outline"
                className="text-green-700 border-green-200 bg-green-100"
              >
                {new Date().toLocaleDateString("en-IN")}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border p-4 bg-white dark:bg-slate-900">
              <h3 className="font-semibold text-lg mb-2">Vote Receipt</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-muted-foreground">Receipt ID:</div>
                <div className="font-mono">{receiptId}</div>
                <div className="text-muted-foreground">Constituency:</div>
                <div>
                  {electionDetails.constituencyName}, {electionDetails.state}
                </div>
                <div className="text-muted-foreground">Date & Time:</div>
                <div>{new Date().toLocaleString("en-IN")}</div>
                <div className="text-muted-foreground">Voter ID (masked):</div>
                <div>XXXX{voterId.substring(voterId.length - 4)}</div>
              </div>
            </div>

            <Alert>
              <ShieldCheck className="h-4 w-4" />
              <AlertTitle>Your vote is secure and confidential</AlertTitle>
              <AlertDescription>
                Your vote has been securely recorded on the blockchain. The
                specific candidate you voted for is encrypted and cannot be
                linked back to your identity.
              </AlertDescription>
            </Alert>

            <div className="text-sm text-muted-foreground">
              <p>
                You can verify your vote was counted by using the Receipt ID
                above on the Election Commission Blockchain Portal after the
                counting day.
              </p>
              <p className="mt-2">
                The receipt does not reveal who you voted for, maintaining the
                secrecy of the ballot.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => window.print()}
            >
              Print Receipt
            </Button>
            <Button
              className="w-full sm:w-auto"
              onClick={() => (window.location.href = "/")}
            >
              Exit Voting System
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-5xl mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Electronic Voting System</h1>
          <p className="text-muted-foreground">
            {electionDetails.constituencyName} (
            {electionDetails.constituencyNumber}), {electionDetails.state} |{" "}
            {electionDetails.phase}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Dialog open={showInstructions} onOpenChange={setShowInstructions}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1">
                <Info className="h-4 w-4" />
                Voting Instructions
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>How to Cast Your Vote</DialogTitle>
                <DialogDescription>
                  Follow these steps to ensure your vote is cast correctly
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 my-4">
                <div className="flex gap-3">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      Review Candidate Information
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Carefully review all candidate information including their
                      party, symbol, and background.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold">Select ONE Candidate</h3>
                    <p className="text-sm text-muted-foreground">
                      Click the "Vote" button for your chosen candidate. You can
                      only vote for one candidate.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold">Confirm Your Selection</h3>
                    <p className="text-sm text-muted-foreground">
                      Review your selection in the confirmation dialog and click
                      "Confirm Vote" to cast your vote.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold">Save Your Receipt</h3>
                    <p className="text-sm text-muted-foreground">
                      After voting, you'll receive a receipt. Print or save this
                      for your records.
                    </p>
                  </div>
                </div>

                <Alert variant="default" className="mt-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Important</AlertTitle>
                  <AlertDescription>
                    Once your vote is confirmed, it cannot be changed. Make sure
                    you are selecting your intended candidate.
                  </AlertDescription>
                </Alert>
              </div>
              <Button onClick={() => setShowInstructions(false)}>
                Close Instructions
              </Button>
            </DialogContent>
          </Dialog>

          <Badge
            variant="outline"
            className="text-blue-700 border-blue-200 bg-blue-50"
          >
            Polling Date: {electionDetails.pollingDate}
          </Badge>
        </div>
      </div>

      <div className="mb-6 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
              <ShieldCheck className="h-5 w-5 text-blue-700 dark:text-blue-300" />
            </div>
            <div>
              <h2 className="font-semibold">Voter Verification</h2>
              <p className="text-sm text-muted-foreground">
                Voter ID: {voterId}
              </p>
            </div>
          </div>
          <Badge
            variant="outline"
            className={
              voterVerified
                ? "bg-green-50 text-green-700 border-green-200"
                : "bg-amber-50 text-amber-700 border-amber-200"
            }
          >
            {voterVerified ? "Verified" : "Verification Required"}
          </Badge>
        </div>

        <Alert variant="default" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Important Notice</AlertTitle>
          <AlertDescription>
            <p>
              You may only vote for ONE candidate. Your vote is final and cannot
              be changed once submitted.
            </p>
            <p className="mt-1">
              Attempting to vote multiple times is an electoral offense under
              Section 171D of the Indian Penal Code.
            </p>
          </AlertDescription>
        </Alert>
      </div>

      <div className="grid gap-6">
        {candidates.map((candidate) => (
          <Card
            key={candidate.id}
            className={
              selectedCandidate === candidate.id
                ? "border-2 border-primary"
                : ""
            }
          >
            <CardHeader className="pb-2">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 rounded-full overflow-hidden bg-muted">
                    <Image
                      src={userSymbol}
                      alt={candidate.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle>{candidate.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary">
                        {candidate.partyAbbreviation}
                      </Badge>
                      <CardDescription>{candidate.party}</CardDescription>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 border rounded-md p-2 bg-slate-50 dark:bg-slate-900 ml-auto">
                  <div className="text-xs text-center text-muted-foreground mb-1">
                    Party Symbol
                  </div>
                  <Image
                    src={partySymbol}
                    alt={`${candidate.party} symbol`}
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="manifesto">Manifesto</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                </TabsList>
                <TabsContent value="profile" className="pt-4">
                  <p>{candidate.description}</p>
                </TabsContent>
                <TabsContent value="manifesto" className="pt-4">
                  <p>{candidate.manifesto}</p>
                </TabsContent>
                <TabsContent value="details" className="pt-4">
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    <div className="text-muted-foreground">Age:</div>
                    <div>{candidate.age} years</div>
                    <div className="text-muted-foreground">Education:</div>
                    <div>{candidate.education}</div>
                    <div className="text-muted-foreground">
                      Declared Assets:
                    </div>
                    <div>{candidate.assets}</div>
                    <div className="text-muted-foreground">Criminal Cases:</div>
                    <div>{candidate.cases}</div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2">
              <Button
                className="w-full sm:w-auto"
                onClick={() => handleVoteClick(candidate.id)}
                variant={
                  selectedCandidate === candidate.id ? "default" : "outline"
                }
                disabled={
                  selectedCandidate !== null &&
                  selectedCandidate !== candidate.id
                }
              >
                {selectedCandidate === candidate.id
                  ? "Selected"
                  : "Vote for this candidate"}
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <FileText className="h-4 w-4" />
                    Affidavit
                  </Button>
                </DialogTrigger>
                <DialogContent className="text-black">
                  <DialogHeader>
                    <DialogTitle>Candidate Affidavit</DialogTitle>
                    <DialogDescription>
                      Legal declaration submitted by {candidate.name}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 my-4">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>
                          Personal Information
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            <div className="grid grid-cols-2 gap-1">
                              <div className="text-sm font-medium">
                                Full Name:
                              </div>
                              <div className="text-sm">{candidate.name}</div>
                              <div className="text-sm font-medium">Age:</div>
                              <div className="text-sm">
                                {candidate.age} years
                              </div>
                              <div className="text-sm font-medium">
                                Education:
                              </div>
                              <div className="text-sm">
                                {candidate.education}
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>
                          Assets & Liabilities
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            <div className="grid grid-cols-2 gap-1">
                              <div className="text-sm font-medium">
                                Total Assets:
                              </div>
                              <div className="text-sm">{candidate.assets}</div>
                              <div className="text-sm font-medium">
                                Movable Assets:
                              </div>
                              <div className="text-sm">₹1.2 Crore</div>
                              <div className="text-sm font-medium">
                                Immovable Assets:
                              </div>
                              <div className="text-sm">₹2.3 Crore</div>
                              <div className="text-sm font-medium">
                                Liabilities:
                              </div>
                              <div className="text-sm">₹45 Lakh</div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Criminal Records</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            <div className="text-sm">{candidate.cases}</div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>

      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Your Vote</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="space-y-4">
                <p>You are about to cast your vote for:</p>

                <div className="border rounded-lg p-4 bg-slate-50 dark:bg-slate-900 flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden bg-muted">
                    <Image
                      src={
                        candidates.find((c) => c.id === selectedCandidate)
                          ?.image || "/placeholder.svg"
                      }
                      alt={
                        candidates.find((c) => c.id === selectedCandidate)
                          ?.name || ""
                      }
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold">
                      {candidates.find((c) => c.id === selectedCandidate)?.name}
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">
                        {
                          candidates.find((c) => c.id === selectedCandidate)
                            ?.partyAbbreviation
                        }
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {
                          candidates.find((c) => c.id === selectedCandidate)
                            ?.party
                        }
                      </span>
                    </div>
                  </div>
                </div>

                <Alert variant="default">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Important</AlertTitle>
                  <AlertDescription>
                    This action cannot be undone. Your vote will be securely
                    recorded on the blockchain and cannot be changed.
                  </AlertDescription>
                </Alert>

                <div className="text-sm">
                  <p>By clicking "Confirm Vote", you certify that:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                      You are the registered voter with Voter ID: {voterId}
                    </li>
                    <li>You have not already voted in this election</li>
                    <li>You are making this selection of your own free will</li>
                  </ul>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setSelectedCandidate(null)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmVote}>
              Confirm Vote
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
