"use client"

import { useState } from "react"
import ReactCountryFlag from "react-country-flag"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

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

export default function BinDataDisplay({ data }: { data: BinData }) {
  const { toast } = useToast()
  const [isCopied, setIsCopied] = useState(false)

  const handleShare = () => {
    const url = `${window.location.origin}/bin/${data.BIN}`
    navigator.clipboard.writeText(url)
    setIsCopied(true)
    toast({
      title: "Link copied!",
      description: "The link to this BIN page has been copied to your clipboard.",
    })
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <Card className="mt-6 glassmorphism">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ReactCountryFlag countryCode={data.isoCode2} svg />
            BIN Information
          </div>
          <Button onClick={handleShare} variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            {isCopied ? "Copied!" : "Share"}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Field</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(data).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell className="font-medium">{key}</TableCell>
                <TableCell>
                  {key === "isoCode2" ? (
                    <div className="flex items-center gap-2">
                      <ReactCountryFlag countryCode={value} svg />
                      {value}
                    </div>
                  ) : (
                    value
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

