"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutDashboard,
    BriefcaseBusiness,
    FileBadge,
    Menu,
    Mail,
    LogOutIcon,
    X,
} from "lucide-react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
        <motion.div
            className="flex min-h-screen"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
            <motion.div
                animate={{ width: isOpen ? 240 : 80 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="p-4 bg-[var(--accent)] flex flex-col justify-between"
            >
                <div>
                    <div className="flex items-center justify-between mb-4 gap-2">
                        <AnimatePresence>
                            {isOpen && (
                                <motion.h1
                                    className="font-bold text-xl text-white"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Admin Panel
                                </motion.h1>
                            )}
                        </AnimatePresence>

                        <button
                            className="p-2 rounded-md hover:bg-white/10 transition-colors duration-300"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <X
                                    color="white"
                                    className="w-6 h-6 transition-transform duration-300 ease-in-out rotate-0"
                                />
                            ) : (
                                <Menu
                                    color="white"
                                    className="w-6 h-6 transition-transform duration-300 ease-in-out rotate-180"
                                />
                            )}
                        </button>
                    </div>

                    <div className="flex flex-col gap-y-3">
                        {menus.map((menu, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className={`hover:bg-[#33BDC4] rounded-2xl p-2 transition-colors duration-300 ${pathName === menu.href ? "bg-[#33BDC4]" : ""
                                    }`}
                            >
                                <Link className="flex gap-2 text-lg text-white" href={menu.href}>
                                    <menu.icon color="white" className="w-6 h-6" />
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.span
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -10 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {menu.label}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="hover:bg-[#33BDC4] rounded-2xl p-2"
                >
                    <button
                        className="text-white flex gap-2 p-2"
                        onClick={() => signOut({ callbackUrl: "/admin/login" })}
                    >
                        <AnimatePresence>
                            {isOpen && (
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Logout
                                </motion.span>
                            )}
                        </AnimatePresence>
                        <LogOutIcon className="w-6 h-6 text-white" />
                    </button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
