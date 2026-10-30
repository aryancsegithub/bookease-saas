import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { mockAppointments, mockServices } from "@/lib/mock-data";
import Link from "next/link";
import { Calendar, Users, DollarSign, Clock, Settings, LayoutDashboard } from "lucide-react";

export default function AdminDashboardPage() {
  const totalRevenue = mockAppointments.reduce((acc, apt) => acc + apt.price, 0);

  return (
    <div className="min-h-screen bg-muted/20 flex">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:flex flex-col">
        <div className="p-6 border-b">
          <Link href="/" className="text-2xl font-bold text-primary">BookEase</Link>
          <span className="text-xs text-muted-foreground block">Admin Portal</span>
        </div>
        <nav className="p-4 space-y-1 flex-1">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary text-primary-foreground font-medium text-sm">
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
          <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm font-medium text-muted-foreground">
            <Settings size={18} /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground mb-8">Overview of your appointments, revenue, and client activity.</p>

        {/* Stats Row */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <span className="text-sm text-muted-foreground">Total Bookings</span>
              <div className="text-3xl font-bold mt-1">{mockAppointments.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <span className="text-sm text-muted-foreground">Total Revenue</span>
              <div className="text-3xl font-bold mt-1 text-green-600">₹{totalRevenue}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <span className="text-sm text-muted-foreground">Active Services</span>
              <div className="text-3xl font-bold mt-1">{mockServices.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <span className="text-sm text-muted-foreground">Today's Appointments</span>
              <div className="text-3xl font-bold mt-1">2</div>
            </CardContent>
          </Card>
        </div>

        {/* Appointments Table */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-4">Recent Appointments</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b text-muted-foreground">
                    <th className="pb-3">Customer</th>
                    <th className="pb-3">Service</th>
                    <th className="pb-3">Date & Time</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {mockAppointments.map((apt) => (
                    <tr key={apt.id} className="hover:bg-muted/50">
                      <td className="py-3 font-medium">{apt.customerName}</td>
                      <td className="py-3">{apt.serviceName}</td>
                      <td className="py-3 text-muted-foreground">{apt.date} at {apt.timeSlot}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded text-xs uppercase font-semibold ${
                          apt.status === "confirmed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                        }`}>
                          {apt.status}
                        </span>
                      </td>
                      <td className="py-3 text-right font-bold">₹{apt.price}</td>
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
