"use client";
import ProtectedRoute from "@/components/protected/protectroute";
import { Session } from "inspector/promises";
import { SessionProvider } from "next-auth/react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
    <SessionProvider>
        <ProtectedRoute>
        <div className="flex flex-col lg:flex-row lg:space-x-4 p-4">
           <div className="w-full lg:w-1/4 shadow-md  p-4 mb-4 lg:mb-0 border-r lg:min-h-screen ">
                <h2 className=" hidden lg:block text-lg font-semibold mb-4 text-center">Dashboard Menu</h2>
                <ul className="space-y-5 text-center flex lg:flex-col lg:space-y-2">
                    <li className="hover:bg-sidebar-accent p-2 rounded">
                        <a href="/dashboard" >Overview</a>
                    </li>
                    <li className="hover:bg-sidebar-accent p-2 rounded">
                        <a href="/dashboard/portfolios" >Portfolios</a>
                    </li>
                </ul>
           </div>
            {children}
        </div>
        </ProtectedRoute>
    </SessionProvider>
    )
}