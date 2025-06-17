"use client"

import { useState } from "react"
import { ShieldCheck, FileText, Info, Trophy, Users, BarChart3, Download, Eye } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import eciImage from "./images/eci.png"
import sampleimage from "./images/user_voter.png"
const partySymbol =
  "data:image/png;base64,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"

const userSymbol =
  "data:image/png;base64,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"

function compare(a : any, b :any) {
    return a.position - b.position;
}

// Election results data
const electionResults = {
  totalVotes: 6,
  validVotes: 6,
  invalidVotes: 0,
  voterTurnout: 100,
  totalElectors: 10,
  winner: {
    id: 1,
    name: "Rajesh Kumar Sharma",
    party: "Bharatiya Janata Party",
    partyAbbreviation: "BJP",
    votes: 3,
    percentage: 50,
  },
  candidates: [
    {
      id: 1,
      name: "Rajesh Kumar Sharma",
      party: "Bharatiya Janata Party",
      partyAbbreviation: "BJP",
      symbol: "/placeholder.svg?height=80&width=80",
      image: "/placeholder.svg?height=120&width=120",
      votes: 3,
      percentage: 50,
      position: 1,
    },
    {
      id: 2,
      name: "Priya Agarwal",
      party: "Indian National Congress",
      partyAbbreviation: "INC",
      symbol: "/placeholder.svg?height=80&width=80",
      image: "/placeholder.svg?height=120&width=120",
      votes: 0,
      percentage: 0,
      position: 4,
    },
    {
      id: 3,
      name: "Amit Patel",
      party: "Aam Aadmi Party",
      partyAbbreviation: "AAP",
      symbol: "/placeholder.svg?height=80&width=80",
      image: "/placeholder.svg?height=120&width=120",
      votes: 2,
      percentage: 33.33,
      position: 2,
    },
    {
      id: 4,
      name: "Sunita Devi",
      party: "Bahujan Samaj Party",
      partyAbbreviation: "BSP",
      symbol: "/placeholder.svg?height=80&width=80",
      image: "/placeholder.svg?height=120&width=120",
      votes: 1,
      percentage: 16.67,
      position: 3,
    },
    {
      id: 5,
      name: "Vikram Singh Rathore",
      party: "Samajwadi Party",
      partyAbbreviation: "SP",
      symbol: "/placeholder.svg?height=80&width=80",
      image: "/placeholder.svg?height=120&width=120",
      votes: 0,
      percentage: 0,
      position: 5,
    },
  ],
}

// Election details
const electionDetails = {
  constituencyName: "Corporate",
  constituencyNumber: "42",
  state: "ABC Organization",
  phase: "Phase 4",
  pollingDate: "May 13, 2024",
  countingDate: "June 4, 2024",
  resultDeclaredAt: "June 4, 2024 - 3:45 PM",
}

export default function ResultsPage() {
  const [showDetailedResults, setShowDetailedResults] = useState(false)

  return (
    <div className="container max-w-6xl mx-auto py-10 px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Election Results 2024</h1>
          <p className="text-muted-foreground">
            {electionDetails.constituencyName} ({electionDetails.constituencyNumber}), {electionDetails.state} |{" "}
            {electionDetails.phase}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Dialog open={showDetailedResults} onOpenChange={setShowDetailedResults}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1">
                <BarChart3 className="h-4 w-4" />
                Detailed Analysis
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>Detailed Election Analysis</DialogTitle>
                <DialogDescription>Comprehensive breakdown of voting patterns and statistics</DialogDescription>
              </DialogHeader>
              <div className="space-y-6 my-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{electionResults.voterTurnout}%</div>
                    <div className="text-sm text-muted-foreground">Voter Turnout</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {electionResults.validVotes.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Valid Votes</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-red-600">
                      {electionResults.invalidVotes.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Invalid Votes</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      {((electionResults.winner.votes / electionResults.validVotes) * 100).toFixed(1)}%
                    </div>
                    <div className="text-sm text-muted-foreground">Victory Margin</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Vote Share Analysis</h3>
                  {electionResults.candidates.sort(compare).map((candidate) => (
                    <div key={candidate.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{candidate.partyAbbreviation}</Badge>
                          <span className="font-medium">{candidate.name}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{candidate.votes.toLocaleString()} votes</div>
                          <div className="text-sm text-muted-foreground">{candidate.percentage}%</div>
                        </div>
                      </div>
                      <Progress value={candidate.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
              <Button onClick={() => setShowDetailedResults(false)}>Close Analysis</Button>
            </DialogContent>
          </Dialog>

          <Badge variant="outline" className="text-green-700 border-green-200 bg-green-50">
            Result Declared: {electionDetails.resultDeclaredAt}
          </Badge>
        </div>
      </div>

      {/* Winner Announcement */}
      <Card className="border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-900 mb-6">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <Image
                src={eciImage}
                alt="Election Commission of India"
                width={60}
                height={60}
              />
              <div>
                <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                  <Trophy className="h-6 w-6" />
                  Winner Declared
                </CardTitle>
                <CardDescription>Official results from Election Commission</CardDescription>
              </div>
            </div>
            <Badge variant="outline" className="text-green-700 border-green-200 bg-green-100">
              WINNER
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex items-center gap-4">
              <div className="relative h-24 w-24 rounded-full overflow-hidden bg-muted">
                <Image
                  src={sampleimage}
                  alt={electionResults.winner.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{electionResults.winner.name}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    {electionResults.winner.partyAbbreviation}
                  </Badge>
                  <span className="text-muted-foreground">{electionResults.winner.party}</span>
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">
                    {electionResults.winner.votes.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Votes Received</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{electionResults.winner.percentage}%</div>
                  <div className="text-sm text-muted-foreground">Vote Share</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">
                    {(electionResults.winner.votes - electionResults.candidates[1].votes).toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Victory Margin</div>
                </div>
              </div>
              <Progress value={electionResults.winner.percentage} className="h-3" />
            </div>

            <div className="border rounded-md p-2 bg-white dark:bg-slate-900">
              <div className="text-xs text-center text-muted-foreground mb-1">Party Symbol</div>
              <Image
                src={partySymbol || "/placeholder.svg"}
                alt={`${electionResults.winner.party} symbol`}
                width={80}
                height={80}
                className="mx-auto"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Election Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Votes Cast</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{electionResults.totalVotes.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">
              Out of {electionResults.totalElectors.toLocaleString()} electors
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Voter Turnout</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{electionResults.voterTurnout}%</div>
            <div className="text-xs text-muted-foreground">Higher than previous election</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Valid Votes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{electionResults.validVotes.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">
              {((electionResults.validVotes / electionResults.totalVotes) * 100).toFixed(1)}% of total
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Invalid Votes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{electionResults.invalidVotes.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">
              {((electionResults.invalidVotes / electionResults.totalVotes) * 100).toFixed(1)}% of total
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Results Table */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Complete Results
              </CardTitle>
              <CardDescription>Final vote count for all candidates</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <Eye className="h-4 w-4" />
                View Certificate
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="results" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="results">Results Summary</TabsTrigger>
              <TabsTrigger value="detailed">Detailed Breakdown</TabsTrigger>
            </TabsList>

            <TabsContent value="results" className="pt-4">
              <div className="space-y-4">
                {electionResults.candidates.map((candidate, index) => (
                  <Card
                    key={candidate.id}
                    className={
                      candidate.position === 1 ? "border-2 border-green-200 bg-green-50/50 dark:bg-green-950/10" : ""
                    }
                  >
                    <CardContent className="pt-4">
                      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 font-bold">
                            {candidate.position}
                          </div>
                          <div className="relative h-16 w-16 rounded-full overflow-hidden bg-muted">
                            <Image
                              src={sampleimage}
                              alt={candidate.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{candidate.name}</h3>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary">{candidate.partyAbbreviation}</Badge>
                              <span className="text-sm text-muted-foreground">{candidate.party}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex-1 space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Vote Share</span>
                            <div className="text-right">
                              <div className="font-bold text-lg">{candidate.votes.toLocaleString()}</div>
                              <div className="text-sm text-muted-foreground">{candidate.percentage}%</div>
                            </div>
                          </div>
                          <Progress value={candidate.percentage} className="h-2" />
                        </div>

                        <div className="border rounded-md p-2 bg-slate-50 dark:bg-slate-900">
                          <div className="text-xs text-center text-muted-foreground mb-1">Symbol</div>
                          <Image
                            src={partySymbol || "/placeholder.svg"}
                            alt={`${candidate.party} symbol`}
                            width={60}
                            height={60}
                            className="mx-auto"
                          />
                        </div>

                        {candidate.position === 1 && (
                          <div className="flex items-center gap-1 text-green-600">
                            <Trophy className="h-5 w-5" />
                            <span className="font-semibold">WINNER</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="detailed" className="pt-4">
              <div className="space-y-6">
                <Alert>
                  <ShieldCheck className="h-4 w-4" />
                  <AlertTitle>Blockchain Verification</AlertTitle>
                  <AlertDescription>
                    All votes have been verified on the blockchain. The results are tamper-proof and publicly auditable.
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Voting Statistics</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Total Registered Electors:</span>
                        <span className="font-semibold">{electionResults.totalElectors.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Votes Polled:</span>
                        <span className="font-semibold">{electionResults.totalVotes.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Valid Votes:</span>
                        <span className="font-semibold text-green-600">
                          {electionResults.validVotes.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Rejected Votes:</span>
                        <span className="font-semibold text-red-600">
                          {electionResults.invalidVotes.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Voter Turnout:</span>
                        <span className="font-semibold text-blue-600">{electionResults.voterTurnout}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Key Information</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Polling Date:</span>
                        <span className="font-semibold">{electionDetails.pollingDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Counting Date:</span>
                        <span className="font-semibold">{electionDetails.countingDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Result Declared:</span>
                        <span className="font-semibold">{electionDetails.resultDeclaredAt}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Candidates:</span>
                        <span className="font-semibold">{electionResults.candidates.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Victory Margin:</span>
                        <span className="font-semibold">
                          {(electionResults.candidates[0].votes - electionResults.candidates[1].votes).toLocaleString()}{" "}
                          votes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Footer Information */}
      <div className="mt-8 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
              <ShieldCheck className="h-5 w-5 text-blue-700 dark:text-blue-300" />
            </div>
            <div>
              <h3 className="font-semibold">Certified Results</h3>
              <p className="text-sm text-muted-foreground">Results verified and certified by Election Commission</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <FileText className="h-4 w-4 mr-1" />
              Download Certificate
            </Button>
            <Button variant="outline" size="sm">
              <Users className="h-4 w-4 mr-1" />
              View All Constituencies
            </Button>
          </div>
        </div>

        <Alert className="mt-4">
          <Info className="h-4 w-4" />
          <AlertTitle>Important Notice</AlertTitle>
          <AlertDescription>
            These results are final and have been published in accordance with the Representation of the People Act,
            1951. Any disputes regarding the results must be filed within the prescribed time limit as per electoral
            laws.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
