import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { mockAppointments } from "@/lib/mock-data";
import Link from "next/link";
import { Calendar, Users, DollarSign, Clock, Settings, LayoutDashboard, Mail, Phone } from "lucide-react";

export default function AdminCustomersPage() {
  // Extract unique customers from mock appointments
  const customers = Array.from(
    new Map(mockAppointments.map(item => [item.customerEmail, item])).values()
  );

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
          <Link href="/admin/customers" className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary text-primary-foreground font-medium text-sm">
            <Users size={18} /> Customers
          </Link>
          <Link href="/admin/availability" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm font-medium text-muted-foreground">
            <Clock size={18} /> Availability
          </Link>
          <Link href="/admin/payments" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm font-medium text-muted-foreground">
            <DollarSign size={18} /> Payments
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm font-medium text-muted-foreground">
            <Settings size={18} /> Settings
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Customers</h1>
            <p className="text-muted-foreground">View client profiles, contact history, and past bookings.</p>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b text-muted-foreground">
                    <th className="pb-3">Customer Name</th>
                    <th className="pb-3">Email Address</th>
                    <th className="pb-3">Phone Number</th>
                    <th className="pb-3 text-right">Total Bookings</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {customers.map((cust) => (
                    <tr key={cust.customerEmail} className="hover:bg-muted/50">
                      <td className="py-3 font-medium">{cust.customerName}</td>
                      <td className="py-3 text-muted-foreground flex items-center gap-1.5">
                        <Mail size={14} /> {cust.customerEmail}
                      </td>
                      <td className="py-3 text-muted-foreground">
                        <span className="flex items-center gap-1.5"><Phone size={14} /> {cust.customerPhone}</span>
                      </td>
                      <td className="py-3 text-right font-bold">1</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
