import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
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
                const user = { id: "1", name: "John smith", email: "dd" };
                if(user){
                    return user;
                }
                return null;
            }
        })
    ],
})
export { handler as GET, handler as POST };