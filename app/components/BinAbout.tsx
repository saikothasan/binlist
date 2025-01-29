import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BinAbout() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About BIN Checker</CardTitle>
        <CardDescription>Learn more about our BIN Checker tool</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          Our BIN Checker is a powerful tool designed to provide detailed information about Bank Identification Numbers
          (BINs). BINs are the first 6 to 8 digits of a credit or debit card number, which identify the card issuer.
        </p>
        <p>With our BIN Checker, you can quickly retrieve information such as:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Card brand (e.g., Visa, Mastercard, American Express)</li>
          <li>Card type (e.g., Credit, Debit, Prepaid)</li>
          <li>Issuing bank name and contact information</li>
          <li>Country of issuance (including country flag)</li>
        </ul>
        <p>
          Whether you're a merchant verifying transactions, a developer integrating payment systems, or simply curious
          about your card details, our BIN Checker provides accurate and up-to-date information to meet your needs.
        </p>
      </CardContent>
    </Card>
  )
}

