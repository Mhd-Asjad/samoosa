"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MapSection from "../components/MapSection";
import { Asterisk, Sparkle, ArrowRight, Volume2, VolumeX, CheckCircle2, Star } from "lucide-react";
import {useState, useRef, useEffect} from "react";

export default function Home() {

const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    // Toggle Mute Function
    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    // Ensure autoplay works reliably on mount
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay prevented:", error);
            });
        }
    }, []);

  return (
    <main className="min-h-screen overflow-x-hidden selection:bg-orange-500/30 selection:text-orange-200 relative">
      <Navbar />

      {/* Background Gradients */}
      <div className="fixed z-0 pointer-events-none top-0 right-0 bottom-0 left-0">
        <div className="blur-[120px] bg-orange-600/20 w-[500px] h-[500px] rounded-full absolute top-[-10%] left-[-10%]"></div>
        <div className="blur-[120px] bg-yellow-600/10 w-[600px] h-[600px] rounded-full absolute right-[-5%] bottom-[10%]"></div>
        <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-red-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="z-10 max-w-7xl mx-auto pt-32 px-6 pb-20 relative">
        
        {/* Component: Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-20 mb-24 gap-x-12 gap-y-12 items-center" id="home">
            <div className="lg:col-span-7 flex flex-col items-start">
                <div className="relative">
                    <h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-semibold text-white tracking-tight mb-6">
                        The Art of the
                        <span className="inline-flex items-center align-middle justify-center mx-2 h-[0.7em] w-[1.8em] relative rounded-full overflow-hidden border border-white/20">
                            {/* Use next/image or standard img for external url */}
                            <img src="https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=300" alt="Dough" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" />
                        </span>
                        <br />
                        <span className="flex items-center gap-4 font-semibold">
                            Perfect Crunch
                        </span>
                    </h1>
                </div>

                <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed mt-4 mb-12">
                    Handcrafted gourmet samosas and restaurant-grade Patti sheets. Experience the authentic taste of crispy perfection delivered fresh.
                </p>

                <div className="flex flex-wrap gap-10 gap-x-10 gap-y-10 items-center">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                         <Asterisk className="w-full h-full text-zinc-800 animate-spin-slow" />
                        <div className="overflow-hidden border-white/10 border-2 rounded-full relative top-2 right-2 bottom-2 left-2 scale-150"></div>
                    </div>

                    <div className="hidden sm:block text-orange-500">
                        <Sparkle className="w-8 h-8" />
                    </div>

                    <div className="relative group cursor-pointer">

                        <a href="https://wa.me/919876543210">

                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
                        <div className="relative w-28 h-28 rounded-full glass-card flex flex-col items-center justify-center border border-white/20 group-hover:scale-105 transition-transform duration-300">
                            <span className="uppercase text-xs font-semibold tracking-wider mb-1">Order</span>
                            <span className="text-xs font-semibold uppercase tracking-wider mb-2">Samosas</span>
                            <ArrowRight className="w-5 h-5 text-orange-400" />
                        </div>

                        </a>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-5 flex lg:justify-end lg:mt-0 mt-12 relative justify-center">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[110%] h-[110%] rounded-full border border-dashed border-white/10 animate-[spin_60s_linear_infinite]"></div>
                    <div className="absolute w-[105%] h-[105%] rounded-full border-t border-r rotate-45 border-orange-500/30"></div>
                    <div className="absolute w-[95%] h-[95%] rounded-full border-b border-l border-yellow-500/30 -rotate-12"></div>
                </div>

                <div className="relative w-full max-w-md aspect-square rounded-full p-2 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm">
                    <div className="overflow-hidden shadow-orange-900/20 w-full h-full rounded-full relative shadow-2xl">
                        {/* Assuming images are in public/assets */}
                        <img src="/samoosa1.jpeg" alt="Golden Samosas" className="transform hover:scale-110 transition-transform duration-700 w-full h-full object-cover -translate-x-2 translate-y-4 scale-110" />
                    </div>
                </div>
            </div>
        </div  >


        <section className="w-full py-24 px-6 relative" id="crafts">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    <div className="order-2 lg:order-1">
                        <span className="text-orange-400 font-geist text-sm tracking-widest uppercase mb-3 block">
                        </span>
                        <h2 className="text-4xl md:text-5xl text-white font-albertus-style tracking-wide mb-6 leading-tight">
                            The Work Culture behind, <br/>
                            <span className="text-zinc-500">every crispy bite.</span>
                        </h2>
                        <p className="text-zinc-400 font-geist leading-relaxed mb-8 text-lg">
                            Our kitchen isn't just a production unit; it's a family where tradition meets precision. 
                            We believe that the energy put into making food is tasted in the final bite. 
                            That's why every sheet is handled with care, respect, and a smile.
                        </p>

                        <div className="space-y-4 font-geist">
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                                </div>
                                <span className="text-zinc-300">Hygiene-first sterile environment</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                                </div>
                                <span className="text-zinc-300">Fair trade & locally sourced ingredients</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                                </div>
                                <span className="text-zinc-300">Master chefs with 20+ years experience</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Video Section (Matches your CSS requirements) */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        
                        {/* Container .about-video */}
                        <div className="relative w-[90%] lg:w-full max-w-md">
                            
                            {/* Wrapper .video-wrapper (Aspect Ratio 4/5) */}
                            <div className="relative rounded-[20px] overflow-hidden aspect-[4/5] shadow-2xl border border-white/10 group">
                                
                                <video 
                                    ref={videoRef}
                                    id="aboutVideo"
                                    className="w-full h-full object-cover block"
                                    autoPlay 
                                    muted 
                                    loop 
                                    playsInline
                                    src="/video/flower_sweets.mp4" 
                                />

                                {/* Mute Button .mute-btn */}
                                <button 
                                    onClick={toggleMute}
                                    className="absolute top-5 right-5 w-[45px] h-[45px] bg-orange-500 text-white border-none rounded-full flex justify-center items-center z-10 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:scale-110 hover:bg-white hover:text-orange-500 cursor-pointer"
                                >
                                    {isMuted ? (
                                        <VolumeX className="w-5 h-5" /> // Muted Icon
                                    ) : (
                                        <Volume2 className="w-5 h-5" /> // Sound On Icon
                                    )}
                                </button>
                                
                                {/* Optional: Dark gradient at bottom to make video blend better */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                            </div>

                            {/* Decorative element behind video */}
                            <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-dashed border-white/10 rounded-[20px] translate-x-4 translate-y-4"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>        {/* Component: Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24" id="products">
            <div className="glass-card rounded-[2rem] p-8 flex flex-col justify-center space-y-8 hover:bg-white/5 transition-colors group">
                <div>
                    <h3 className="text-4xl tracking-tight text-white mb-1 font-semibold group-hover:text-orange-400 transition-colors">50k+</h3>
                    <p className="text-lg text-zinc-400">Patti Sheets Sold</p>
                </div>
                <div>
                    <h3 className="text-4xl font-semibold text-white tracking-tight mb-1">6+</h3>
                    <p className="text-lg text-zinc-400">Filling Flavors</p>
                </div>
                <div>
                    <h3 className="text-4xl tracking-tight text-white mb-1 font-semibold">100%</h3>
                    <p className="text-lg text-zinc-400">Crispiness</p>
                </div>
            </div>

            <div className="relative group rounded-[2rem] overflow-hidden h-[400px] lg:h-auto border border-white/5">
                <img src="/samoosa3.jpeg" alt="Samosa Chutney" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
                <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass-card p-4 rounded-2xl border-white/10 backdrop-blur-md">
                        <p className="text-lg font-medium text-white mb-1">Perfect Pairings</p>
                        <p className="text-sm text-zinc-300">Served with mint &amp; tamarind chutney.</p>
                    </div>
                </div>
            </div>

             <div className="glass-card rounded-[2rem] p-8 flex flex-col justify-between hover:bg-white/5 transition-colors border border-white/10">
                <div className="flex gap-1 mb-6">
                   {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                   ))}
                </div>
                <p className="text-lg text-zinc-200 leading-relaxed">
                    "The patti sheets are incredibly thin yet strong. They fry up perfectly golden every single time."
                </p>
                <div className="flex items-center gap-3 mt-6">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-semibold">S</div>
                    <div>
                        <p className="text-sm font-medium text-white">Sarah Jenkins</p>
                        <p className="text-xs text-zinc-500">Verified Buyer</p>
                    </div>
                </div>
            </div>

            <div className="relative rounded-[2rem] overflow-hidden glass-card p-0 flex flex-col h-[400px] lg:h-auto border border-white/10">
              <div className="h-1/2 overflow-hidden relative group">
                    <img src="/samoosa4.jpeg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Samosa Patti" />
                </div>
                <div className="h-1/2 p-6 flex flex-col justify-center bg-gradient-to-b from-white/5 to-transparent">
                    <h3 className="text-xl font-semibold text-white mb-3">Premium Patti</h3>
                    <p className="text-base text-zinc-400 mb-6 leading-relaxed">
                        Thin, elastic, and ready-to-fill pastry sheets for the ultimate crunch.
                    </p>
                    <a href="#" className="inline-flex items-center font-medium transition-colors text-orange-400 hover:text-orange-300 group">
                        Buy Sheets <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </div>

        {/* Component: Map Section */}
        <MapSection />

      </div>
      
      <Footer />
    </main>
  );
}