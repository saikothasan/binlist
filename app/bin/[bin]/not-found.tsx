import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
      <h1 className="text-4xl font-bold mb-4">BIN Not Found</h1>
      <p className="text-xl mb-8">Sorry, we couldn't find any information for the requested BIN.</p>
      <Button asChild>
        <Link href="/bin-checker">Try Another BIN</Link>
      </Button>
    </div>
  )
}

