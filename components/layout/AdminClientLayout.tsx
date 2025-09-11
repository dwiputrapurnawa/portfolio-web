"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";

export default function AdminClientLayout({ children }: { children: React.ReactNode }) {

    const pathname = usePathname();

    const isLoginPage = pathname === "/admin/login";

    if (isLoginPage) return children;

    return (
        <div className="flex">
            <Sidebar />
            {children}
        </div>
    );


}