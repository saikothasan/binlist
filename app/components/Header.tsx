"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CreditCard, Home, Info, Search } from "lucide-react"
import { ModeToggle } from "./ModeToggle"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "BIN Checker", href: "/bin-checker", icon: CreditCard },
  { name: "BIN Database", href: "/bin-database", icon: Search },
  { name: "About", href: "/about", icon: Info },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <CreditCard className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">BIN Checker</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-foreground/80 ${
                  pathname === item.href ? "text-foreground" : "text-foreground/60"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

