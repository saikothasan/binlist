import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BinFAQ() {
  const faqs = [
    {
      question: "What is a BIN?",
      answer:
        "A Bank Identification Number (BIN) is the first 6 to 8 digits of a credit or debit card number. It identifies the financial institution that issued the card.",
    },
    {
      question: "How accurate is the BIN information?",
      answer:
        "We strive to maintain a highly accurate and up-to-date BIN database. However, as financial institutions can change their BIN ranges, there might be occasional discrepancies. We recommend verifying critical information with the issuing bank.",
    },
    {
      question: "Is it safe to enter my BIN?",
      answer:
        "Yes, it's safe to enter the first 6 to 8 digits of your card number. This information alone cannot be used to make transactions or access your account. We do not store or share any BIN numbers entered into our system.",
    },
    {
      question: "How often is the BIN database updated?",
      answer:
        "We update our BIN database regularly to ensure the most current information. Major updates typically occur monthly, with minor updates happening more frequently as new information becomes available.",
    },
    {
      question: "Can I use this service for my business?",
      answer:
        "Yes, our BIN Checker can be valuable for businesses in e-commerce, fraud prevention, and payment processing. For high-volume or API access, please contact us about our business solutions.",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Frequently Asked Questions</CardTitle>
        <CardDescription>Common questions about our BIN Checker service</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

