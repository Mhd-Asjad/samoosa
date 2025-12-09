'use client'; // Needed for interactivity (useState)

import { useState } from 'react';
import Link from 'next/link';
import { Triangle, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl">
        <div className="flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">
          
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 z-50 relative">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-yellow-500 flex items-center justify-center">
              <Triangle className="text-white w-4 h-4 fill-white/20" />
            </div>
            <span className="text-xl font-semibold text-white tracking-tight translate-y-1 font-geist">malabar leaves</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-sm font-medium text-white transition-colors hover:text-orange-400 font-geist">Home</Link>
            <Link href="#craft" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors font-geist">Our Craft</Link>
            <Link href="#products" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors font-geist">Products</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 text-zinc-400 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-zinc-950/80 backdrop-blur-2xl transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        {/* Background Decorative Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <nav className="flex flex-col items-center gap-8 text-2xl font-light font-albertus-style relative z-10">
          <Link href="#home" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-orange-400 hover:scale-110 transition-all">Home</Link>
          <Link href="#craft" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-orange-400 hover:scale-110 transition-all">Our Craft</Link>
          <Link href="#products" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-orange-400 hover:scale-110 transition-all">Products</Link>
        </nav>

      </div>
    </>
  );
}