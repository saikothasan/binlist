import "./globals.css"
import "./styles/custom.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "./components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Professional BIN Checker",
    template: "%s | Professional BIN Checker",
  },
  description: "Check Bank Identification Numbers (BIN) and get detailed card information",
  keywords: ["BIN", "Bank Identification Number", "Credit Card", "Debit Card", "Payment Processing"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Professional BIN Checker",
    description: "Check Bank Identification Numbers (BIN) and get detailed card information",
    siteName: "Professional BIN Checker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional BIN Checker",
    description: "Check Bank Identification Numbers (BIN) and get detailed card information",
    creator: "@yourtwitterhandle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

