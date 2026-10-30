import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { mockServices } from "@/lib/mock-data";
import Link from "next/link";
import { ArrowLeft, Clock, DollarSign, Calendar, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

interface ServiceDetailPageProps {
  params: {
    id: string;
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = mockServices.find((s) => s.id === params.id);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
          <Link href="/" className="text-2xl font-bold text-primary">BookEase</Link>
          <div className="flex gap-4">
            <Link href="/services"><Button variant="ghost">Services</Button></Link>
            <Link href="/book"><Button>Book Now</Button></Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/services" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
        </Link>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase">
                {service.category}
              </span>
              <h1 className="text-4xl font-extrabold mt-3 mb-4">{service.name}</h1>
              <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>What to Expect</CardTitle>
                <CardDescription>Professional and dedicated service tailored to your needs.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Experienced Professional</h4>
                    <p className="text-sm text-muted-foreground">Delivered by certified experts with years of experience.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Flexible Rescheduling</h4>
                    <p className="text-sm text-muted-foreground">Easily reschedule or cancel up to 24 hours before your appointment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Satisfaction Guarantee</h4>
                    <p className="text-sm text-muted-foreground">We ensure top quality service delivery every single time.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Service Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center border-b pb-4">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Clock size={18} /> Duration
                  </span>
                  <span className="font-semibold">{service.durationMinutes} minutes</span>
                </div>
                <div className="flex justify-between items-center border-b pb-4">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <DollarSign size={18} /> Price
                  </span>
                  <span className="font-bold text-2xl text-primary">₹{service.price}</span>
                </div>

                <Link href={`/book?service=${service.id}`} className="block">
                  <Button className="w-full py-6 text-lg">
                    <Calendar className="mr-2 h-5 w-5" /> Book This Service
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
