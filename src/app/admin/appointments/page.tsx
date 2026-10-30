import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { mockAppointments } from "@/lib/mock-data";
import Link from "next/link";
import { Calendar, Users, DollarSign, Clock, Settings, LayoutDashboard, CheckCircle, XCircle } from "lucide-react";

export default function AdminAppointmentsPage() {
  return (
    <div className="min-h-screen bg-muted/20 flex">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:flex flex-col">
        <div className="p-6 border-b">
          <Link href="/" className="text-2xl font-bold text-primary">BookEase</Link>
          <span className="text-xs text-muted-foreground block">Admin Portal</span>
        </div>
        <nav className="p-4 space-y-1 flex-1">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm font-medium text-muted-foreground">
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link href="/admin/appointments" className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary text-primary-foreground font-medium text-sm">
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
          <Link href="/admin/payments" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm font-medium text-muted-foreground">
            <DollarSign size={18} /> Payments
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm font-medium text-muted-foreground">
            <Settings size={18} /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Appointments</h1>
            <p className="text-muted-foreground">Manage and track all client bookings and schedules.</p>
          </div>
          <Button>+ New Appointment</Button>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b text-muted-foreground">
                    <th className="pb-3">Appointment ID</th>
                    <th className="pb-3">Customer</th>
                    <th className="pb-3">Service</th>
                    <th className="pb-3">Date & Time</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Amount</th>
                    <th className="pb-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {mockAppointments.map((apt) => (
                    <tr key={apt.id} className="hover:bg-muted/50">
                      <td className="py-3 font-mono text-xs text-muted-foreground">{apt.id}</td>
                      <td className="py-3">
                        <div className="font-medium">{apt.customerName}</div>
                        <div className="text-xs text-muted-foreground">{apt.customerPhone}</div>
                      </td>
                      <td className="py-3">{apt.serviceName}</td>
                      <td className="py-3 text-muted-foreground">{apt.date} at {apt.timeSlot}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded text-xs uppercase font-semibold ${
                          apt.status === "confirmed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                        }`}>
                          {apt.status}
                        </span>
                      </td>
                      <td className="py-3 font-bold">₹{apt.price}</td>
                      <td className="py-3 text-right space-x-2">
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-green-600"><CheckCircle size={16} /></Button>
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-red-600"><XCircle size={16} /></Button>
                      </td>
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
