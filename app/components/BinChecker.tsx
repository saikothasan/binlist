"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"
import BinDataDisplay from "./BinDataDisplay"

type BinData = {
  BIN: string
  Brand: string
  Type: string
  Category: string
  Issuer: string
  IssuerPhone: string
  IssuerUrl: string
  isoCode2: string
  isoCode3: string
  CountryName: string
}

export default function BinChecker() {
  const [bin, setBin] = useState("")
  const [binData, setBinData] = useState<BinData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setBinData(null)

    try {
      const response = await fetch(`/api/check-bin?bin=${bin}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "An error occurred")
      }

      setBinData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  const handleClear = () => {
    setBin("")
    setBinData(null)
    setError(null)
  }

  return (
    <Card className="glassmorphism">
      <CardHeader>
        <CardTitle>Enter BIN</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-2">
            <Input
              type="text"
              value={bin}
              onChange={(e) => setBin(e.target.value)}
              placeholder="Enter BIN (6-8 digits)"
              required
              pattern="\d{6,8}"
              title="BIN must be 6 to 8 digits"
              className="flex-grow"
            />
            <Button type="submit" disabled={loading}>
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Check"}
            </Button>
            <Button type="button" variant="outline" onClick={handleClear}>
              Clear
            </Button>
          </div>
        </form>

        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {binData && <BinDataDisplay data={binData} />}
      </CardContent>
    </Card>
  )
}

