import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BinDataDisplay from "@/app/components/BinDataDisplay"

export const metadata: Metadata = {
  title: "BIN Details",
  description: "Detailed information about a specific Bank Identification Number (BIN)",
}

async function getBinData(bin: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/check-bin?bin=${bin}`, { cache: "no-store" })
  if (!res.ok) return null
  return res.json()
}

export default async function BinPage({ params }: { params: { bin: string } }) {
  const binData = await getBinData(params.bin)

  if (!binData) {
    notFound()
  }

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <h1 className="text-3xl font-bold mb-6">BIN Details: {params.bin}</h1>
      <BinDataDisplay data={binData} />
    </div>
  )
}

