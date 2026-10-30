import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Calendar, Users, DollarSign, Clock, Settings, LayoutDashboard, CreditCard, ShieldCheck } from "lucide-react";

export default function AdminPaymentsPage() {
  return (
    <div className="min-h-screen bg-muted/20 flex">
      <aside className="w-64 bg-white border-r hidden md:flex flex-col">
        <div className="p-6 border-b">
          <Link href="/" className="text-2xl font-bold text-primary">BookEase</Link>
          <span className="text-xs text-muted-foreground block">Admin Portal</span>
        </div>
        <nav className="p-4 space-y-1 flex-1">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm font-medium text-muted-foreground">
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link href="/admin/appointments" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm font-medium text-muted-foreground">
            <Clock size={18} /> Appointments
          </Link>
          <Link href="/admin/services" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm font-medium text-muted-foreground">
            <Calendar size={18} /> Services
          </Link>
          <Link href="/admin/customers" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm font-medium text-muted-foreground">
            <Users size={18} /> Customers
          </Link>
          <Link href="/admin/availability" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm font-medium text-muted-foreground">
            <Clock size={18} /> Availability
          </Link>
          <Link href="/admin/payments" className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary text-primary-foreground font-medium text-sm">
            <DollarSign size={18} /> Payments
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm font-medium text-muted-foreground">
            <Settings size={18} /> Settings
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Payments & Gateway Setup</h1>
          <p className="text-muted-foreground">Manage online payment integrations (Razorpay) and transaction logs.</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center gap-2"><CreditCard /> Razorpay Payment Gateway</CardTitle>
                <CardDescription>Accept UPI, Netbanking, Debit & Credit Cards from Indian customers.</CardDescription>
              </div>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2.5 py-1 rounded font-semibold uppercase">Integration Ready</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Razorpay Key ID</label>
                <input type="text" placeholder="rzp_live_xxxxxxxxxxxxxx" className="w-full p-2.5 border rounded-md text-sm bg-background" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Razorpay Key Secret</label>
                <input type="password" placeholder="••••••••••••••••••••••••" className="w-full p-2.5 border rounded-md text-sm bg-background" />
              </div>
            </div>
            <div className="p-4 bg-muted/50 rounded-md text-xs text-muted-foreground flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>Keys are stored securely. Never expose API secrets in frontend code.</span>
            </div>
            <Button>Save Razorpay Credentials</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
