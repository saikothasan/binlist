import Link from "next/link"
import { CreditCard, Shield, Search, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const features = [
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: "BIN Lookup",
      description: "Instantly check and verify Bank Identification Numbers.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Fraud Prevention",
      description: "Enhance your security measures with accurate BIN data.",
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Comprehensive Database",
      description: "Access our extensive, regularly updated BIN database.",
    },
    {
      icon: <Info className="h-8 w-8 text-primary" />,
      title: "Detailed Information",
      description: "Get card type, brand, issuer details, and more.",
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] p-6">
      <div className="w-full max-w-5xl text-center space-y-8">
        <div className="space-y-6 glassmorphism p-8 rounded-lg">
          <CreditCard className="w-16 h-16 mx-auto text-primary" />
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Professional BIN Checker
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Check Bank Identification Numbers (BIN) and get detailed card information instantly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/bin-checker">Check BIN</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {feature.icon}
                  <span>{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

