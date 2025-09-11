"use client";

import { motion } from 'framer-motion';
import { LayoutDashboard, BriefcaseBusiness, FileBadge, Menu, Mail, LogOutIcon, X, Code2 } from 'lucide-react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar() {

    const [isOpen, setIsOpen] = useState(true);

    const pathName = usePathname();

    const menus = [
        { label: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
        { label: "Projects", icon: BriefcaseBusiness, href: "/admin/projects" },
        { label: "Certificates", icon: FileBadge, href: "/admin/certificates" },
        { label: "Email", icon: Mail, href: "/admin/email" },
    ];



    return (
        <div className="flex min-h-screen justify-between">
            <div className="p-4 bg-[var(--accent)] flex flex-col justify-between">

                <div>
                    <div className="flex items-center justify-between mb-4 gap-2">

                        {isOpen ? (
                            <h1 className="font-bold text-xl text-white">Admin Panel</h1>) : ""}

                        <button
                            className="p-2 rounded-md hover:bg-white/10 transition-colors duration-300"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <X color="white" className="w-6 h-6 transition-all duration-300 ease-in-out" />
                            ) : (
                                <Menu color="white" className="w-6 h-6 transition-all duration-300 ease-in-out" />
                            )}
                        </button>
                    </div>


                    <div className="flex flex-col gap-y-5">
                        {menus.map((menu, index) => (
                            <div className={`hover:bg-[#33BDC4] rounded-2xl p-2 transition-all duration-300 ease-in-out hover:scale-105 ${pathName === menu.href ? "bg-[#33BDC4]" : ""}`} key={index}>

                                <Link className="flex gap-2 text-lg text-white" href={menu.href}>
                                    <menu.icon color="white" className="w-6 h-6" />
                                    {isOpen ? menu.label : null}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hover:bg-[#33BDC4] rounded-2xl p-2">
                    <button
                        className="text-white flex gap-2 p-2"
                        onClick={() => signOut({ callbackUrl: "/admin/login" })}
                    >
                        {isOpen ? (<span>Logout</span>) : null}
                        <LogOutIcon className='w-6 h-6 text-white' />
                    </button>
                </div>
            </div>
        </div>
    );
}
