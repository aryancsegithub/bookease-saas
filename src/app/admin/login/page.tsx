import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <Card className="max-w-md w-full border-primary/20">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
            <ShieldAlert size={24} />
          </div>
          <Link href="/" className="text-3xl font-bold text-primary mb-1 inline-block">BookEase</Link>
          <CardTitle className="text-2xl">Admin Portal</CardTitle>
          <CardDescription>Secure login for administrators and business owners</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Admin Email</label>
            <input
              type="email"
              placeholder="admin@bookease.com"
              className="w-full p-3 rounded-md border border-input bg-background"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 rounded-md border border-input bg-background"
            />
          </div>
          <Link href="/admin/dashboard" className="block">
            <Button className="w-full py-6">Access Dashboard</Button>
          </Link>
        </CardContent>
        <CardFooter className="justify-center border-t py-4 text-sm text-muted-foreground">
          <Link href="/" className="text-primary hover:underline">← Back to public site</Link>
        </CardFooter>
      </Card>
    </div>
  );
}
