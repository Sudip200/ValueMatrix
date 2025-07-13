"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useSession } from "next-auth/react";

export default function Page() {
    const { data: session } = useSession();
    console.log("Session Data:", session);
    const portfolios = [
        {
            id: "1",
            name: "Alpha Growth",
            totalValue: "$10,000",
            visibilty: "Public",
        },
        {
            id: "2",
            name: "Beta Income",
            totalValue: "$15,000",
            visibilty: "Private",
        },
        {
            id: "3",
            name: "Gamma Balanced",
            totalValue: "$20,000",
            visibilty: "Public",
        },
        {
            id: "4",
            name: "Delta Aggressive",
            totalValue: "$25,000",
            visibilty: "Private",
        }
    ]
    return (
        <div className="container mx-auto p-4">
            <div className="mb-4">
                <h1 className="text-2xl font-bold">{session?.user?.name} Your Portfolios</h1>
                <p className="text-gray-600">Manage your investment portfolios</p>
            </div>
            
            <Table className="mt-4 text-md">
                <TableCaption>A list of your recent portfolios</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Visibility</TableHead>
                        <TableHead>Total Value</TableHead>
                        
                        {/* <TableHead className="text-right">Amount</TableHead> */}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {portfolios.map((p) => (
                        <TableRow key={p.id}>
                            <TableCell className="font-medium">{p.name}</TableCell>

                            <TableCell>{p.visibilty}</TableCell>
                            {/* <TableCell className="text-right">{invoice.totalAmount}</TableCell> */}
                            <TableCell>{p.totalValue}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell>$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>

        </div>)
}