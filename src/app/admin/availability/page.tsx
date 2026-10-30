import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { mockWorkingDays } from "@/lib/mock-data";
import Link from "next/link";
import { Calendar, Users, DollarSign, Clock, Settings, LayoutDashboard, Save } from "lucide-react";

export default function AdminAvailabilityPage() {
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
          <Link href="/admin/availability" className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary text-primary-foreground font-medium text-sm">
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
            <h1 className="text-3xl font-bold">Business Availability</h1>
            <p className="text-muted-foreground">Set your weekly operating hours and online booking availability.</p>
          </div>
          <Button className="flex items-center gap-2"><Save size={16} /> Save Hours</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Working Hours</CardTitle>
            <CardDescription>Appointments can only be booked during open hours.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockWorkingDays.map((day) => (
              <div key={day.day} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-4 w-40">
                  <input type="checkbox" defaultChecked={day.isOpen} className="w-4 h-4 text-primary rounded" />
                  <span className="font-semibold text-sm">{day.day}</span>
                </div>
                {day.isOpen ? (
                  <div className="flex items-center gap-3">
                    <input type="time" defaultValue={day.openTime} className="p-2 border rounded text-sm bg-background" />
                    <span className="text-muted-foreground text-xs">to</span>
                    <input type="time" defaultValue={day.closeTime} className="p-2 border rounded text-sm bg-background" />
                  </div>
                ) : (
                  <span className="text-sm text-muted-foreground italic">Closed</span>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
