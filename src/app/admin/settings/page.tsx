import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Calendar, Users, DollarSign, Clock, Settings, LayoutDashboard, Save } from "lucide-react";

export default function AdminSettingsPage() {
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
          <Link href="/admin/payments" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm font-medium text-muted-foreground">
            <DollarSign size={18} /> Payments
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary text-primary-foreground font-medium text-sm">
            <Settings size={18} /> Settings
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-8 space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Business Settings</h1>
            <p className="text-muted-foreground">Configure profile details, business name, and branding.</p>
          </div>
          <Button className="flex items-center gap-2"><Save size={16} /> Save Changes</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Business Details</CardTitle>
            <CardDescription>This information will appear on booking receipts and public pages.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Business Name</label>
                <input type="text" defaultValue="BookEase India Demo Salon & Spa" className="w-full p-2.5 border rounded-md text-sm bg-background" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Industry Type</label>
                <select className="w-full p-2.5 border rounded-md text-sm bg-background">
                  <option value="salon">Salon & Spa</option>
                  <option value="doctor">Medical / Doctor</option>
                  <option value="tutor">Education / Tutor</option>
                  <option value="fitness">Fitness / Gym</option>
                  <option value="repair">Repair Services</option>
                  <option value="consultant">Consulting</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contact Email</label>
                <input type="email" defaultValue="support@bookease.in" className="w-full p-2.5 border rounded-md text-sm bg-background" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contact Phone</label>
                <input type="tel" defaultValue="+91 98765 43210" className="w-full p-2.5 border rounded-md text-sm bg-background" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Business Address</label>
                <input type="text" defaultValue="Connaught Place, New Delhi, India" className="w-full p-2.5 border rounded-md text-sm bg-background" />
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
