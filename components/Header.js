"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X, Bot } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-0">
            <img src="/images/logo2.png" alt="Scrapify Logo" className="h-10 w-10" />
            <Link href="/" className="text-2xl font-bold text-primary">
              Scrapify
            </Link>
          </div>

          <nav className="hidden md:flex space-x-4">
            <Link
              href="#features"
              className="text-foreground hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-foreground hover:text-primary"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-foreground hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              href="/summarize"
              className="text-foreground hover:text-primary flex items-center"
            >
              <Bot className="h-4 w-4 mr-1" />
              Summarize
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <ModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 p-2 rounded-md text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
            >
              Pricing
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-border/40">
            <div className="px-2 space-y-1">
              <Link href="/login">
                <Button variant="outline" className="w-full justify-center">
                  Log In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="w-full justify-center">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
