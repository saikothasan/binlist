import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function BinFeatures() {
  const features = [
    "Instant BIN lookup",
    "Detailed card information",
    "Bank and issuer details",
    "Country of origin with flag",
    "Card type and brand identification",
    "Regular database updates",
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>BIN Checker Features</CardTitle>
        <CardDescription>Discover what our BIN Checker can do for you</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-4 sm:grid-cols-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

