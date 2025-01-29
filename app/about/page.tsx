import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About BIN Checker",
  description: "Learn more about our BIN Checker tool and how it works.",
}

export default function AboutPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">About BIN Checker</h1>
          <p className="text-xl text-muted-foreground">Learn more about our BIN Checker tool and how it works.</p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What is a BIN?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              A Bank Identification Number (BIN) is the first 6 to 8 digits of a credit or debit card number. It
              identifies the institution that issued the card to the cardholder. BINs play a crucial role in the payment
              processing system, helping to route transactions and identify the origin of the card.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How Our BIN Checker Works</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our BIN Checker tool allows you to enter a BIN and retrieve detailed information about the card, including
              the issuing bank, card type, and country of origin. This information is sourced from our comprehensive
              database of BINs, which is regularly updated to ensure accuracy.
            </p>
            <p className="mt-4">
              When you enter a BIN, our system quickly searches our database and returns relevant information,
              including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Card brand (e.g., Visa, Mastercard, American Express)</li>
              <li>Card type (Credit, Debit, Prepaid)</li>
              <li>Issuing bank name and contact information</li>
              <li>Country of issuance (with flag)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Uses of BIN Checking</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Verify the legitimacy of a card</li>
              <li>Identify the issuing bank for customer service purposes</li>
              <li>Determine the type of card (credit, debit, prepaid)</li>
              <li>Fraud detection and prevention</li>
              <li>Payment system integration and testing</li>
              <li>Geographic analysis of card usage</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Privacy and Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We take data privacy and security seriously. Our BIN Checker only requires the first 6 to 8 digits of a
              card number, which cannot be used to identify individual cardholders or make transactions. We do not store
              any personal information or full card numbers in our system.
            </p>
            <p className="mt-4">
              All queries to our BIN Checker are encrypted and processed securely. We adhere to strict data protection
              guidelines and regularly audit our systems to ensure the highest level of security for our users.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

