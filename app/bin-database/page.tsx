import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "BIN Database",
  description: "Search and explore our comprehensive BIN database.",
}

export default function BinDatabasePage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">BIN Database</h1>
          <p className="text-xl text-muted-foreground">Search and explore our comprehensive BIN database.</p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="glassmorphism p-6 rounded-lg">
        <p className="mb-4">
          Our BIN database contains information on thousands of Bank Identification Numbers. Use this page to search for
          specific BINs or browse through our collection.
        </p>
        <Button asChild>
          <Link href="/bin-checker">Check a BIN</Link>
        </Button>
      </div>
      {/* Add a search component or table for BIN database here */}
    </div>
  )
}

