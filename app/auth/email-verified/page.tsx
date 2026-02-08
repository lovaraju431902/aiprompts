"use client";

import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function EmailVerifiedPage() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Automatically redirect after countdown
      window.location.href = '/auth/login';
    }
  }, [countdown]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-100 to-purple-200 p-4">
      <Card className="w-full max-w-md p-6">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">Email Verified Successfully!</CardTitle>
          <CardDescription className="text-gray-600">
            Your email has been successfully verified. You can now access your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-gray-600">
            Redirecting to login page in {countdown} seconds...
          </p>
          <Button asChild className="w-full">
            <Link href="/auth/login">Go to Login Now</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}