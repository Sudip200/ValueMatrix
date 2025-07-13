"use client";
import React from "react";
import { useSession } from "next-auth/react";
export default function ProtectedRoute({
    children
}:{
    children: React.ReactNode;
}) {

    const { data: session, status } = useSession();
    if (status === "loading") {
        return <div>Loading...</div>;
    }
    if (status === "unauthenticated") {
        return <div>You must be logged in to view this page.</div>;
    }
    if (!session){
        return <div>You must be logged in to view this page.</div>;
    }
    return (
       <div>{children}</div>
    );
}