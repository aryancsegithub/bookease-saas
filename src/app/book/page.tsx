"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { mockServices, mockTimeSlots, mockUpiOptions } from "@/lib/mock-data";
import Link from "next/link";
import { CheckCircle2, Calendar, Clock, ArrowLeft, ArrowRight, ShieldCheck, Wallet, Smartphone } from "lucide-react";

export default function BookingPage() {
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState(mockServices[0]);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState<string>(mockTimeSlots[0]);
  const [selectedUpi, setSelectedUpi] = useState(mockUpiOptions[0].id);
  const [confirmed, setConfirmed] = useState(false);

  const handleCompleteBooking = () => {
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white">
        <Card className="max-w-md w-full bg-slate-900 border-white/10 text-center p-8 rounded-3xl">
          <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-black mb-2">Booking Confirmed!</h1>
          <p className="text-slate-400 mb-8">
            Your appointment for <strong>{selectedService.name}</strong> is scheduled for {selectedDate} at {selectedTime}.
          </p>
          <div className="bg-white/5 p-4 rounded-xl text-xs text-left mb-8 space-y-2 border border-white/10">
            <p><strong>Booking ID:</strong> BKEASE-{Math.floor(Math.random()*1000000)}</p>
            <p><strong>Amount Paid:</strong> ₹{selectedService.price} via UPI</p>
          </div>
          <Link href="/"><Button className="w-full bg-indigo-600 rounded-xl py-6 font-bold">Return to Home</Button></Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500">
      <nav className="border-b border-white/10 p-6 flex justify-between items-center max-w-4xl mx-auto">
        <Link href="/" className="text-xl font-black">BOOK.EASE</Link>
        <span className="text-sm font-bold bg-indigo-600 px-4 py-1.5 rounded-full">Step {step}/5</span>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <Card className="bg-slate-900 border-white/10 rounded-3xl p-8">
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-black mb-6">Select a Service</h2>
                {mockServices.map((service) => (
                  <div key={service.id} onClick={() => setSelectedService(service)} className={`p-5 rounded-2xl border cursor-pointer transition-all flex justify-between items-center ${selectedService.id === service.id ? "border-indigo-500 bg-indigo-500/10" : "border-white/10 bg-white/5 hover:border-white/30"}`}>
                    <div><h3 className="font-bold">{service.name}</h3><p className="text-xs text-slate-400">{service.category}</p></div>
                    <div className="font-extrabold text-lg text-indigo-400">₹{service.price}</div>
                  </div>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-black">Date & Time</h2>
                <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="w-full p-4 rounded-xl bg-slate-950 border border-white/10" />
                <div className="grid grid-cols-4 gap-3">
                  {mockTimeSlots.map((slot) => (
                    <button key={slot} onClick={() => setSelectedTime(slot)} className={`p-3 rounded-lg border font-bold text-xs ${selectedTime === slot ? "bg-indigo-600 border-indigo-600" : "border-white/10 hover:border-white/30"}`}>
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-black">Payment via UPI</h2>
                <p className="text-sm text-slate-400 flex items-center gap-2"><ShieldCheck className="text-green-500" /> Secure 128-bit Encrypted Transaction</p>
                <div className="space-y-3">
                  {mockUpiOptions.map((upi) => (
                    <div key={upi.id} onClick={() => setSelectedUpi(upi.id)} className={`flex items-center gap-4 p-4 rounded-xl border ${selectedUpi === upi.id ? "border-indigo-500 bg-indigo-500/10" : "border-white/10 bg-white/5"}`}>
                      <span className="text-2xl">{upi.icon}</span>
                      <div className="flex-1">
                        <p className="font-bold text-sm">{upi.name}</p>
                        <p className="text-[10px] text-indigo-300">{upi.cashback}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-black">Confirm & Finalize</h2>
                <div className="bg-slate-950 p-6 rounded-2xl border border-white/10 space-y-4">
                  <div className="flex justify-between border-b border-white/10 pb-4"><span>Service</span><span className="font-bold">{selectedService.name}</span></div>
                  <div className="flex justify-between border-b border-white/10 pb-4"><span>Date/Time</span><span className="font-bold">{selectedDate} @ {selectedTime}</span></div>
                  <div className="flex justify-between pt-2"><span>Total</span><span className="font-black text-2xl text-indigo-400">₹{selectedService.price}</span></div>
                </div>
              </div>
            )}

            {/* Nav */}
            <div className="flex justify-between mt-10">
              <Button variant="ghost" onClick={() => setStep(s => Math.max(s-1, 1))} disabled={step === 1} className="rounded-xl"><ArrowLeft className="mr-2" /> Back</Button>
              {step < 4 ? (
                <Button onClick={() => setStep(s => Math.min(s+1, 4))} className="bg-indigo-600 rounded-xl py-6 font-bold px-8">Next Step <ArrowRight className="ml-2" /></Button>
              ) : (
                <Button onClick={handleCompleteBooking} className="bg-green-600 rounded-xl py-6 font-bold px-8 animate-pulse hover:bg-green-700">Confirm Payment</Button>
              )}
            </div>
        </Card>
      </div>
    </div>
  );
}
