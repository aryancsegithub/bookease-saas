import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <Link href="/" className="text-3xl font-bold text-primary mb-2 inline-block">BookEase</Link>
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <CardDescription>Enter your email to sign in to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full p-3 rounded-md border border-input bg-background"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Password</label>
              <Link href="#" className="text-xs text-primary hover:underline">Forgot password?</Link>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 rounded-md border border-input bg-background"
            />
          </div>
          <Button className="w-full py-6">Sign In</Button>
        </CardContent>
        <CardFooter className="justify-center border-t py-4 text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link href="/register" className="text-primary font-semibold ml-1 hover:underline">Sign up</Link>
        </CardFooter>
      </Card>
    </div>
  );
}
