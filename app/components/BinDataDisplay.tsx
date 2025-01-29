"use client"

import ReactCountryFlag from "react-country-flag"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

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
  return (
    <Card className="mt-6 glassmorphism">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ReactCountryFlag countryCode={data.isoCode2} svg />
          BIN Information
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

