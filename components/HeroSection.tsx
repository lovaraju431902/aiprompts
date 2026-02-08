

'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, CreditCard, Package, Sparkles, FileText, Image, BookOpen, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
   

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-green-50/50 min-h-screen pt-8 pb-24 md:pt-16 md:pb-32">
      {/* Infinite Scrolling Product Images */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 10s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            
        
         className="overflow-hidden py-6">
          <div className="flex gap-6 animate-scroll">
            {/* {[...productImages, ...productImages].map((img, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-72 h-44 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 border-4 border-white"
              >
                <img
                  src={img}
                  alt={`Bundle ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))} */}
          </div>
        
        </motion.div>
      </div>

      {/* Floating Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 text-[#7B2CBF]/10"
        >
          <Laptop className="w-24 h-24" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-32 right-20 text-[#9D4EDD]/10"
        >
          <FileText className="w-20 h-20" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-20 left-1/4 text-[#C77DFF]/10"
        >
          <Image className="w-16 h-16" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
          className="absolute bottom-32 right-1/4 text-[#7B2CBF]/10"
        >
          <BookOpen className="w-20 h-20" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7B2CBF]/10 to-[#9D4EDD]/10 border border-[#7B2CBF]/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#C77DFF]" />
            <span className="text-sm font-medium text-gray-700">India&apos;s #1 Budget Digital Store</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            Super Value Digital Produts
            <br />
            <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#C77DFF]">
                Just ₹299
              </span>
              <span className="text-gray-900"> Each!</span>
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-8"
              >
                <span className="text-2xl">🔥</span>
              </motion.div>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            <span className="font-semibold text-[#7B2CBF]">Instant Download</span> • 
            <span className="font-semibold text-[#9D4EDD]"> No Subscription</span> • 
            <span className="font-semibold text-[#C77DFF]">Secure Payments</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className=" flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/shop">
              <Button 
                size="lg" 
                className="w-full mt-10 sm:w-auto bg-gradient-to-r from-[#9D4EDD] to-[#C77DFF] hover:from-[#C77DFF] hover:to-[#9D4EDD] text-white font-bold text-lg px-8 py-6 shadow-xl shadow-purple-200 hover:shadow-purple-300 transition-all hover:scale-105"
              >
                Shop All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {[
              { icon: Download, text: 'Instant Download' },
              { icon: CreditCard, text: 'UPI Accepted' },
              { icon: Package, text: '100+ Files/Bundle' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-600">
                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#7B2CBF]" />
                </div>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Price Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
          className="absolute top-10 right-4 md:top-20 md:right-10 hidden sm:block"
        >
          <div className="relative">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#9D4EDD] to-[#C77DFF] rounded-full flex flex-col items-center justify-center text-white shadow-2xl shadow-purple-300">
              <span className="text-xs md:text-sm font-medium">ONLY</span>
              <span className="text-2xl md:text-4xl font-black">₹299</span>
              <span className="text-xs md:text-sm font-medium">each</span>
            </div>
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-[#E0AAFF] rounded-full flex items-center justify-center"
            >
              <Sparkles className="w-4 h-4 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}