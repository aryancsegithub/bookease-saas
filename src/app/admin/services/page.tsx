import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { mockServices } from "@/lib/mock-data";
import Link from "next/link";
import { Calendar, Users, DollarSign, Clock, Settings, LayoutDashboard, Plus, Edit, Trash2 } from "lucide-react";

export default function AdminServicesPage() {
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
          <Link href="/admin/services" className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary text-primary-foreground font-medium text-sm">
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

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Services Management</h1>
            <p className="text-muted-foreground">Add, edit or remove bookable services and pricing.</p>
          </div>
          <Button className="flex items-center gap-2"><Plus size={16} /> Add Service</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mockServices.map((service) => (
            <Card key={service.id} className="flex flex-col justify-between">
              <CardContent className="pt-6">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full uppercase">
                  {service.category}
                </span>
                <h3 className="text-xl font-bold mt-3 mb-2">{service.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <div className="flex justify-between items-center font-semibold text-lg">
                  <span className="text-primary font-bold">₹{service.price}</span>
                  <span className="text-xs text-muted-foreground font-normal">{service.durationMinutes} mins</span>
                </div>
              </CardContent>
              <div className="p-6 pt-0 flex gap-2 border-t mt-4 pt-4">
                <Button variant="outline" size="sm" className="flex-1"><Edit size={14} className="mr-1" /> Edit</Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50"><Trash2 size={14} /></Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
