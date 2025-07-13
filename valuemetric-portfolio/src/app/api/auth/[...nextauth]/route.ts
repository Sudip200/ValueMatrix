import { prisma } from "@/lib/prisma";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
let authOptions:NextAuthOptions = {
     session:{
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    pages:{
        signIn: "/login",
        error: "/login"
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
               email:{},
                password:{}
            },
            async authorize(credentials,req){
                console.log(req);
                console.log("credentials",credentials);
                const {email,password} = credentials as {email:string,password:string};
                if(!email || !password){
                    throw new Error("Email and password are required");
                }
                let user = await prisma.user.findFirst({where:{
                    email: email,
                    password: password
                }});
                console.log("user",user);
                if(!user){
                    throw new Error("Invalid email or password");
                }
                return user;
            }
        })
    ],
}

 const  handler = NextAuth({
    session:{
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    pages:{
        signIn: "/login",
        error: "/login"
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
               email:{},
                password:{}
            },
            async authorize(credentials,req){
                console.log(req);
                console.log("credentials",credentials);
                const {email,password} = credentials as {email:string,password:string};
                if(!email || !password){
                    throw new Error("Email and password are required");
                }
                let user = await prisma.user.findFirst({where:{
                    email: email,
                    password: password
                }});
                console.log("user",user);
                if(!user){
                    throw new Error("Invalid email or password");
                }
                return user;
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
})
export { authOptions };
export { handler as GET, handler as POST };