'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu,Sparkles} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';


export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop Bundles', href: '/shop' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#7B2CBF] to-[#9D4EDD] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">₹</span>
              </div>
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-[#ff9500]" />
            </div>
            <div className="hidden sm:block">
              <span className="font-extrabold text-xl md:text-2xl text-gray-900">MAS</span>
              <span className="font-extrabold text-xl md:text-2xl text-[#7B2CBF]">SEE</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-[#7B2CBF] font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Shop Now Button & Mobile Menu */}
          <div className="flex items-center gap-3">
         
            <Link href="/shop" className="hidden sm:block">
              <Button className="bg-gradient-to-r from-[#9D4EDD] to-[#C77DFF] hover:from-[#C77DFF] hover:to-[#9D4EDD] text-white font-semibold shadow-lg shadow-purple-200">
                Shop Now
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pl-10 w-80">
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-gray-700 hover:text-[#7B2CBF] transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link href="/shop" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-[#9D4EDD] to-[#C77DFF] text-white font-semibold mt-4">
                      Shop All Bundles
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}