"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

const RegisterSchema = z.object({
  first_name: z.string().min(1, "Enter a valid first name"),
  last_name: z.string().min(1, "Enter a valid last name"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type RegisterSchematype = z.infer<typeof RegisterSchema>;

const Register = () => {
  const router=useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const [loading,setLoading]=useState<boolean>(false)
  const form = useForm<RegisterSchematype>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: RegisterSchematype) => {
    console.log(values);
    
   const name=values.first_name + values.last_name
    try {
      const result = await authClient.signUp.email({
        email: values.email,
        password: values.password,
        name: name
      });

      if (result.error) {
        toast.error(result.error.message || "Registration failed. Please try again.");
        setLoading(false);
        return;
      }

      setLoading(false);
      toast.success("Check your email for confirmation");
      router.push('/auth/login');
    } catch (error: unknown) {
      setLoading(false);
      console.error("Registration error:", error);
      const errorMessage = error instanceof Error ? error.message : "Registration failed. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-slate-100 to-purple-200 min-h-screen flex"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      {/* Left Side - Images Section */}
      <div className="hidden lg:block lg:w-1/2 bg-transparent relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative h-full w-full"
        >
          {/* Image 1 - Mobile Design (Top Left) */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [-5, -3, -5],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm bg-white/10 transform -rotate-6 hover:scale-110 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src="/images/mobiledesign1.png"
              alt="Mobile App Design"
              className="w-full h-full object-cover select-none"
              draggable={false}
            />
          </motion.div>

          {/* Image 2 - Dashboard Design (Top Right) */}
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [8, 10, 8],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-32 right-16 w-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm bg-white/10 transform rotate-6 hover:scale-110 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src="/images/webdesign2.png"
              alt="HR Dashboard Design"
              className="w-full h-full object-cover select-none"
              draggable={false}
            />
          </motion.div>

          {/* Image 3 - Payment Design (Bottom Left) */}
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [-3, -5, -3],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-32 left-8 w-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm bg-white/10 transform -rotate-3 hover:scale-110 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src="/images/webdesign3.png"
              alt="Payment Platform Design"
              className="w-full h-full object-cover select-none"
              draggable={false}
            />
          </motion.div>

          {/* Image 4 - Product Design (Bottom Right) */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [5, 3, 5],
            }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-20 w-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm bg-white/10 transform rotate-5 hover:scale-110 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src="/images/webdesign1.png"
              alt="E-commerce Product Design"
              className="w-full h-full object-cover select-none"
              draggable={false}
            />
          </motion.div>

          {/* Central Glow Effect */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-3xl opacity-40"
          />

          {/* Floating Logo 1 */}
          <motion.div
            animate={{
              y: [-80, 120, -80],
              rotate: [0, -360, -720],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-1/3 left-1/4 w-14 h-14"
          >
            <Image
              src="/images/next.dpmarket.wowtheme7.com logo67.png"
              alt="Floating Logo"
              width={100}
              height={100}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Floating Logo 2 */}
          <motion.div
            animate={{
              y: [-120, 80, -120],
              rotate: [0, 360, 720],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-1/3 right-1/3 w-16 h-16"
          >
            <Image
              src="/images/next.dpmarket.wowtheme7.com logo48.png"
              alt="Floating Logo"
              width={100}
              height={100}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Floating Logo 3 */}
          <motion.div
            animate={{
              y: [-90, 110, -90],
              rotate: [0, -360, -720],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
            className="absolute top-1/2 left-1/3 w-12 h-12"
          >
            <Image
              src="/images/next.dpmarket.wowtheme7.com logo30.png"
              alt="Floating Logo"
              width={300}
              height={300}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side - Form Section */}
      <div className="w-full lg:w-1/2 bg-gradient-to-r from-slate-100 to-purple-200 flex items-center justify-center">
        <div className="w-full max-w-md border-2 border-gray-500 p-7 rounded-xl">
          <div className="flex mb-10 items-center justify-between w-full">
            <Link href="/">
              <div className="flex">
                <Image
                  src="https://i.imgur.com/BJ2aUae.png"
                  alt="logo"
                  width={36}
                  height={36}
                />
                <span className="ml-2 text-2xl text-slate-900 font-bold">
                  CodeMarket
                </span>
              </div>
            </Link>
          </div>

          <h1 className="text-black text-4xl font-bold mb-2">
            Create an account
          </h1>
          <p className="text-gray-600 mb-8">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-black hover:underline">
              Log in
            </Link>
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <input
                          type="text"
                          placeholder="First name"
                          className="bg-white text-black rounded-2xl p-3 pl-5 focus:outline-none w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-600"/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <input
                          type="text"
                          placeholder="Last name"
                          className="bg-white text-black rounded-2xl p-3 pl-5 focus:outline-none w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-600"/>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        type="email"
                        placeholder="Enter Valid Email"
                        className="w-full bg-white text-black rounded-2xl p-3 pl-5 focus:outline-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-600"/>
                  </FormItem>
                )}
              />

              <div className="relative">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter Password"
                          className="w-full bg-white text-black rounded-2xl p-3 pl-5 focus:outline-none pr-10"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-600"/>
                    </FormItem>
                  )}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
              </div>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded mt-1 bg-[#1c1c24] border-gray-600 text-purple-600 focus:ring-purple-600"
                />
                <span className="text-black">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms & Conditions
                  </a>
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-600 text-white rounded-lg p-3 hover:bg-purple-700 transition-colors"
              >
                {loading ? <div className="flex justify-center items-center"><Spinner className="w-5 h-5 "/></div> : "Register"}
              </button>

              <div className="flex items-center">
                <hr className="text-gray-400 w-1/3"></hr>
                <div className="w-1/3 pl-4">Register With</div>
                <hr className="text-gray-400 w-1/3"></hr>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={async()=>{
                    await authClient.signIn.social({
                      provider: "google",
                      callbackURL: "/"
                    })
                  }}
                  className="w-1/2 flex items-center justify-center gap-2 bg-white text-black rounded-lg p-3 hover:bg-[#25252e] transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                    />
                  </svg>
                  {loading ? <Spinner /> : "Google"}
                </button>
                <button
                  type="button"
                  onClick={async()=>{
                    await authClient.signIn.social({
                      provider: "github",
                      callbackURL: "/"
                    })
                  }}
                  className="w-1/2 flex items-center justify-center gap-2 bg-[#1c1c24] text-white rounded-lg p-3 hover:bg-[#25252e] transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    />
                  </svg>
                  {loading ? <Spinner /> : "GitHub"}
                </button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </motion.div>
  );
};

export default Register;