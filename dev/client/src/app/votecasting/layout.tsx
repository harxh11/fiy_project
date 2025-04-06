import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electronic Voting System - Transparent Elections",
  description:
    "Cast your vote securely using blockchain technology in the Indian General Elections",
};

export default function VoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen text-black">
      <main>{children}</main>
      <footer className=" dark:bg-slate-900 border-t py-4 mt-10">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 DecentraVote. All rights reserved.</p>
          <p className="mt-1">
            For assistance, <span className="underline">Policy & Terms</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
