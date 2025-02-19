import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="container mx-auto px-4 pt-24 pb-16 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl leading-tight pb-1">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">life</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500">kit</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">.sg</span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-xl mx-auto leading-relaxed">
          Essential toolkit for Singapore residents, designed to simplify your life
        </p>
      </section>

      {/* Tools Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Rent Map Dashboard */}
          <Card className="group hover:shadow-lg transition-transform will-change-transform hover:-translate-y-1 bg-white/80">
            <CardHeader>
              <CardTitle className="text-xl">Rent Map Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/rent-map-thumbnail.png"
                    alt="Rent Map Dashboard"
                    fill
                    className="object-cover object-top will-change-transform transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm text-gray-600">
                    Visualize rental prices across Singapore neighborhoods
                  </p>
                  <Button className="bg-gray-900 hover:bg-gray-800 shrink-0" asChild>
                    <Link href="/rent-map">Try Now</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PR Calculator */}
          <Card className="group hover:shadow-lg transition-transform will-change-transform hover:-translate-y-1 bg-white/80">
            <CardHeader>
              <CardTitle className="text-xl">PR Eligibility Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/pr-calc-thumbnail.png"
                    alt="PR Calculator"
                    fill
                    className="object-cover object-top will-change-transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm text-gray-600">
                    Check your PR application eligibility instantly
                  </p>
                  <Button className="bg-gray-900 hover:bg-gray-800 shrink-0" asChild>
                    <Link href="/pr-calculator">Try Now</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tax Calculator */}
          <Card className="group hover:shadow-lg transition-transform will-change-transform hover:-translate-y-1 bg-white/80">
            <CardHeader>
              <CardTitle className="text-xl">Tax Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/tax-calc-thumbnail.png"
                    alt="Tax Calculator"
                    fill
                    className="object-cover object-top will-change-transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm text-gray-600">
                    Estimate your annual tax obligations easily
                  </p>
                  <Button className="bg-gray-900 hover:bg-gray-800 shrink-0" asChild>
                    <Link href="/tax-calculator">Try Now</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Simplified Coming Soon badge */}
      <section className="container mx-auto px-4 py-16 text-center">
        <span className="inline-flex items-center rounded-full px-4 py-1 text-sm bg-gray-100 text-gray-800">
          ✨ More toolkits in development
        </span>
      </section>

      {/* Simplified Footer */}
      <footer className="container mx-auto px-4 py-8 mt-8 border-t border-gray-200">
        <div className="text-center space-y-6">
          <div className="flex justify-center space-x-8">
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
              Terms of Service
            </Link>
          </div>
          <div className="flex justify-center space-x-8">
            <Link 
              href="https://rizkinovianto.co" 
              className="text-sm text-gray-600 hover:text-gray-900"
              target="_blank"
            >
              Website
            </Link>
            <Link 
              href="https://github.com/rizkinov" 
              className="text-sm text-gray-600 hover:text-gray-900"
              target="_blank"
            >
              GitHub
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 lifekit.sg. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
