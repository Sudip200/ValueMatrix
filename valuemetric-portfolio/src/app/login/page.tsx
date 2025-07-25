"use client"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import {signIn}  from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast, Toaster } from "sonner"

const Page = () => {
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const router = useRouter()
    const handleSubmit = async () =>{
        try{
         const response:any  = await signIn("credentials",{
             email,
             password,
             redirect:false
         });

            if(response?.error){
               throw new Error(response.error);
            }
            if(response?.ok){
                router.push("/dashboard");
            }
            
        }catch(err){

            toast.error(err instanceof Error ? err.message : "An error occurred while logging in")
        }
         
    }
    return (
        <div className="w-full  min-h-screen flex justify-center items-center ">
            <Toaster position="top-center" closeButton/>
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                    {/* <CardAction>
                        <Button variant="link">Sign Up</Button>
                    </CardAction> */}
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    onChange={(e)=>{
                                       setEmail(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input id="password" type="password" required 
                                onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full" onClick={handleSubmit}>
                        Login
                    </Button>
                    {/* <Button variant="outline" className="w-full">
                        Login with Google
                    </Button> */}
                </CardFooter>
            </Card>
        </div>

    )
}
export default Page;