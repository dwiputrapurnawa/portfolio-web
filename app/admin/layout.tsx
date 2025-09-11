import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import Providers from '@/app/admin/providers';
import AdminClientLayout from "@/components/layout/AdminClientLayout";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

export const metadata: Metadata = {
    title: "Ida Bagus Dwi Putra Purnawa Portfolio Web | Admin Panel",
    description: "Admin Panel",
    icons: {
        icon: "/favicon.svg",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className={`${montserrat.variable}`}
            suppressHydrationWarning
        >
            <body className="antialiased">

                <Providers>
                    <AdminClientLayout children={children} />
                </Providers>
            </body>
        </html>
    );
}
