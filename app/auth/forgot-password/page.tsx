"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { toast } from "sonner";


const ResetPasswordSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
});

const ForgotPassword = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    
    const form = useForm<z.infer<typeof ResetPasswordSchema>>({
        resolver: zodResolver(ResetPasswordSchema),
        defaultValues: {
            email:""
        }
    });

    return (
        <Card className="flex cursor-pointer items-center justify-center  min-h-[300px] max-h-[300px] min-w-[400px] max-w-[500px]">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold">Forgot Password</h1>
                <Input 
                    {...form.register("email")} 
                    placeholder="Enter your email"
                    className="w-full max-w-xs"
                />
                <Button 
                    onClick={async () => {
                        const values = form.getValues();
                        
                        if (!values.email) {
                            toast.error("Please enter your email address");
                            return;
                        }
                        
                        setLoading(true);
                        try {
                            const result = await authClient.requestPasswordReset({ 
                                email: values.email, 
                                redirectTo: `${window.location.origin}/auth/reset-password` 
                            });
                            
                            if (result.error) {
                                toast.error(result.error.message || "Failed to send reset email");
                            } else {
                                setSuccess(true);
                                toast.success("Password reset email sent! Please check your inbox.");
                            }
                        } catch (error) {
                            console.error("Password reset error:", error);
                            toast.error("Failed to send reset email. Please try again.");
                        } finally {
                            setLoading(false);
                        }
                    }}
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send Reset Email"}
                </Button>
            </div>
        </Card>
    )
}

export default ForgotPassword