import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BinChecker from "../components/BinChecker"
import BinFeatures from "../components/BinFeatures"
import BinAbout from "../components/BinAbout"
import BinFAQ from "../components/BinFAQ"

export const metadata: Metadata = {
  title: "BIN Checker",
  description: "Check Bank Identification Numbers (BIN) and get detailed card information",
}

export default function BinCheckerPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">BIN Checker</h1>
          <p className="text-xl text-muted-foreground">
            Enter a Bank Identification Number (BIN) to get detailed information.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <Tabs defaultValue="checker" className="space-y-4">
        <TabsList>
          <TabsTrigger value="checker">Checker</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>
        <TabsContent value="checker">
          <BinChecker />
        </TabsContent>
        <TabsContent value="features">
          <BinFeatures />
        </TabsContent>
        <TabsContent value="about">
          <BinAbout />
        </TabsContent>
        <TabsContent value="faq">
          <BinFAQ />
        </TabsContent>
      </Tabs>
    </div>
  )
}

