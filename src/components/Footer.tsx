import { Triangle, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                <div className="text-center md:text-left">
                    
                    <Link href="#home" className="flex items-center justify-center md:justify-start gap-2 mb-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-orange-500 to-yellow-500 flex items-center justify-center">
                            <Triangle className="text-white w-3 h-3 fill-white/20" />
                        </div>
                        <span className="text-lg font-semibold text-white tracking-tight">malabar leaves</span>
                    </Link>

                    <p className="text-sm text-zinc-500">Preserving the crunch of tradition.</p>
                </div>
              
                <div className="flex gap-4">
                    <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-zinc-400">
                        <Instagram size={16} />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-zinc-400">
                        <Facebook size={16} />
                    </a>
                </div>
            </div>
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
                <p>© 2018 Malabar Leaves. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  );
}