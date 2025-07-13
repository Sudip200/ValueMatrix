import { prisma } from "../lib/prisma";

async function createUser(){
    try {
     let user = await prisma.user.create({
        data:{
            name:"demo",
            email:"demo@12",
            password:"demo123"
        }
     })
       console.log("User created:", user);
    } catch (error) {
        console.error("Error creating user:", error);
    }

}