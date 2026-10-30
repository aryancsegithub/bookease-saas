import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <Link href="/" className="text-3xl font-bold text-primary mb-2 inline-block">BookEase</Link>
          <CardTitle className="text-2xl">Create an Account</CardTitle>
          <CardDescription>Get started with your appointment booking platform</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 rounded-md border border-input bg-background"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="name@example.com"
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
          <Button className="w-full py-6">Create Account</Button>
        </CardContent>
        <CardFooter className="justify-center border-t py-4 text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold ml-1 hover:underline">Sign in</Link>
        </CardFooter>
      </Card>
    </div>
  );
}
