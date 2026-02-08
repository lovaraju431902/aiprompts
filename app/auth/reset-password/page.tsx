"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
import { authClient } from "@/lib/auth-client"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"


const NewPasswordSchema = z.object({
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

const ResetNewPassword = () => {

type PasswordSchemaType = z.infer<typeof NewPasswordSchema>


    const router = useRouter()
    const searchParams=useSearchParams()
    const [passwordsMatch, setPasswordsMatch] = useState(true)
    const [loading, setLoading] = useState(false)
    
    const token: string | null = searchParams.get("token")
    const error :string | null = searchParams.get("error")
    
    const form = useForm<PasswordSchemaType>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: "",
            confirmPassword: ""
        }
    })

    const passwordValue = form.watch("password")
    const confirmPasswordValue = form.watch("confirmPassword")

    useEffect(() => {
        if (passwordValue && confirmPasswordValue) {
            setPasswordsMatch(passwordValue === confirmPasswordValue)
        } else {
            setPasswordsMatch(true)
        }
    }, [passwordValue, confirmPasswordValue])

    const onSubmit = async (values: PasswordSchemaType) => {
        if (!passwordsMatch) {
            toast.error("Passwords do not match")
            return
        }
        
        if (values.password.length < 8) {
            toast.error("Password must be at least 8 characters long")
            return
        }
        
        setLoading(true);
        
        try {
            const result = await authClient.resetPassword({ 
                newPassword: values.password,
                token: token || undefined 
            })
            
            if (result.data) {
                toast.success("Password reset successful! Please login with your new password.")
                router.push('/auth/login')
            } else {
                toast.error("Failed to reset password. Please try again.")
            }
        } catch (error) {
            console.error("Password reset error:", error)
            toast.error("Failed to reset password. Please try again.")
        } finally {
            setLoading(false);
        }
    }

    if(token==null  || error!=null){
        return(
            
            <motion.div 
                className="flex justify-center items-center bg-gradient-to-r from-slate-100 to-purple-200 min-h-screen min-w-screen"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
            
            
            
            
            
           
                <Card className="flex cursor-pointer items-center justify-center min-h-75 max-h-75 min-w-100 max-w-125 bg-linear-to-r from-slate-100 to-purple-200">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h1 className="text-2xl font-bold">Invalid Reset Link</h1>
                        <p className="text-sm">The password link is invalid or expired</p>
                        <Button  size="sm"  onClick={() => {
                            router.push('/auth/forgot-password')
                           
                        }}>
                            Back to login
                        </Button> 
                    </div>
                </Card>
            </motion.div>
        )
    }

    return (
                <motion.div 
                    className="flex justify-center items-center bg-gradient-to-r from-slate-100 to-purple-200 min-h-screen min-w-screen"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    
                    <Card className="flex  cursor-pointer min-h-75 max-h-75 min-w-100 max-w-125 items-center justify-center ">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h1 className="text-2xl font-bold">Reset Password</h1>
                    <label>New Password</label>
                    <Input 
                        {...form.register("password")} 
                        placeholder="New Password" 
                        type="password"
                        className="w-full max-w-xs"
                    />
                    <label>Confirm Password</label>
                    <Input 
                        {...form.register("confirmPassword")} 
                        placeholder="Confirm New Password"
                        type="password"
                        className={`w-full max-w-xs ${!passwordsMatch ? "border-red-500" : ""}`}
                    />
                    {!passwordsMatch && (
                        <p className="text-red-500 text-sm">Passwords do not match</p>
                    )}
                    
                    <Button 
                        className="cursor-pointer w-full max-w-xs" 
                        onClick={() => {
                            form.handleSubmit(onSubmit)();
                        }}
                        disabled={!passwordsMatch || loading}
                    >
                        {loading ? "Resetting Password..." : "Reset Password"}
                    </Button>
                </div>
            </Card>
        </motion.div>
    )
}

export default ResetNewPassword