import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { mockServices, mockRepairVendors } from "@/lib/mock-data";
import Link from "next/link";
import { Star, ShieldCheck, Clock, MapPin, ArrowRight, Wrench, Sparkles, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">
      {/* Header */}
      <nav className="border-b border-white/10 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between h-20 items-center">
          <Link href="/" className="text-2xl font-black text-white flex items-center gap-2">
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center font-bold">B</div>
            BookEase <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2.5 py-0.5 rounded-full border border-indigo-500/30">India Hub</span>
          </Link>
          <div className="flex gap-4">
            <Link href="/book"><Button className="bg-indigo-600 hover:bg-indigo-700 rounded-full px-6">Book Slot</Button></Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20 mb-4">
            <Sparkles size={14} /> Verified Service Providers & Fair Rates
          </span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            Services & Repair Centers
          </h1>
          <p className="text-slate-400 text-lg">
            Choose from top-rated phone repair hubs, medical specialists, salons, and private tutors with transparent, reasonable Indian Rupee pricing.
          </p>
        </div>

        {/* Featured Repair Hubs Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Wrench className="text-indigo-400" /> Recommended Express Repair Hubs
              </h2>
              <p className="text-xs text-slate-400">Doorstep pickups, certified technicians, and genuine spare parts guaranteed.</p>
            </div>
            <span className="text-xs text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 font-semibold">
              Top Rated in Delhi NCR, Blr & Mumbai
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockRepairVendors.map((vendor) => (
              <Card key={vendor.id} className="bg-slate-900/80 border-white/10 text-white overflow-hidden rounded-2xl hover:border-indigo-500/50 transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={vendor.imageUrl}
                    alt={vendor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 text-yellow-400 border border-white/10">
                    <Star size={12} fill="currentColor" /> {vendor.rating} ({vendor.reviewsCount})
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{vendor.name}</h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mb-3">
                    <MapPin size={12} className="text-indigo-400" /> {vendor.location}
                  </p>
                  <p className="text-sm text-slate-300 font-medium mb-4">{vendor.specialty}</p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {vendor.badges.map((b) => (
                      <span key={b} className="text-[10px] font-bold bg-white/5 border border-white/10 px-2 py-0.5 rounded text-indigo-300">
                        {b}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-semibold">Starting From</span>
                      <span className="text-xl font-extrabold text-indigo-400">₹{vendor.startingPrice}</span>
                    </div>
                    <Link href={`/book?vendor=${vendor.id}`}>
                      <Button size="sm" className="bg-white text-slate-950 hover:bg-slate-200 font-bold rounded-xl">
                        Book Repair <ArrowRight size={14} className="ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Catalog of Services with Detailed Cards */}
        <div>
          <h2 className="text-2xl font-bold mb-8">All Bookable Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mockServices.map((service) => (
              <Card key={service.id} className="bg-slate-900/60 border-white/10 text-white overflow-hidden rounded-2xl flex flex-col justify-between hover:border-indigo-500/40 transition-all">
                {service.imageUrl && (
                  <div className="h-44 overflow-hidden relative">
                    <img src={service.imageUrl} alt={service.name} className="w-full h-full object-cover" />
                    <span className="absolute bottom-3 left-3 bg-indigo-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">{service.description}</p>

                  <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5 mb-4">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Rate (Incl. Taxes)</span>
                      <span className="text-2xl font-black text-white">₹{service.price}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block">Duration</span>
                      <span className="text-sm font-semibold flex items-center gap-1 text-slate-300">
                        <Clock size={12} /> {service.durationMinutes} Mins
                      </span>
                    </div>
                  </div>
                </CardContent>
                <div className="p-6 pt-0">
                  <Link href={`/book?service=${service.id}`}>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 py-5 rounded-xl font-bold text-sm">
                      Book Now (₹{service.price})
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
