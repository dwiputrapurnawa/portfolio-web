"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <motion.div
                className="w-16 h-16 border-4 border-[#00ADB5] border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
            <motion.span
                className="absolute mt-28 text-[#00ADB5] font-semibold text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Loading...
            </motion.span>
        </div>
    );
}
