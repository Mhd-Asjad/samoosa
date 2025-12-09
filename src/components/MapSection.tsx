import { Crosshair, MapPin, Clock } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="mb-24 relative max-w-7xl mx-auto px-6">
        <div className="glass-card rounded-[2rem] overflow-hidden border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                
                <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center relative z-10">
                    <div className="mb-8">
                        <span className="text-orange-400 text-sm tracking-widest uppercase mb-2 block">Locate Us</span>
                        <h2 className="text-3xl md:text-4xl text-white font-albertus-style tracking-wide mb-4">
                            The Production Unit
                        </h2>
                        <p className="text-zinc-400 leading-relaxed">
                            Pickup orders available directly from our facility.
                        </p>
                    </div>

                    <div className="space-y-6">
    

                        <ul className="space-y-4 text-zinc-300">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-zinc-500 mt-1" />
                                <span>Malabar Leaves Unit,<br/>Cheekode, Malappuram, Kerala 673645</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-zinc-500" />
                                <span>Mon - son: 09:00 AM - 06:00</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="lg:col-span-7 h-[400px] lg:h-auto bg-zinc-900 relative overflow-hidden">
                    <iframe 
                        src="https://maps.google.com/maps?q=11.235172327661044,75.98826136012053&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy" 
                        className="map-filter w-full h-full absolute inset-0">
                    </iframe>
                    
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <span className="relative flex h-6 w-6">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-6 w-6 bg-orange-500 border-2 border-white shadow-lg"></span>
                        </span>
                    </div>
                </div>

            </div>
        </div>
        <div className="absolute -bottom-10 right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none"></div>
    </section>
  );
}