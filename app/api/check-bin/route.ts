import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import { parse } from "csv-parse/sync"

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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const bin = searchParams.get("bin")

  if (!bin) {
    return NextResponse.json({ error: "BIN is required" }, { status: 400 })
  }

  if (!/^\d{6,8}$/.test(bin)) {
    return NextResponse.json({ error: "Invalid BIN format" }, { status: 400 })
  }

  try {
    const filePath = path.join(process.cwd(), "public", "bin-list-data.csv")
    const fileContent = fs.readFileSync(filePath, "utf-8")

    const records: BinData[] = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    })

    const result = records.find((record) => record.BIN === bin)

    if (result) {
      return NextResponse.json(result)
    } else {
      return NextResponse.json({ error: "BIN not found" }, { status: 404 })
    }
  } catch (error) {
    console.error("Error processing BIN:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

