// components/PortfolioSectionReadable.tsx
"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Sistem Operasional Rumah Potong Ayam",
        client: "Puri Pangan",
        description: "Web App for operational management, built with Laravel & CodeIgniter. Features: inventory, order tracking, reporting dashboards.",
        image: "/images/rpa.png",
        link: "#",
    },
    {
        title: "ERP System",
        client: "Kopi Banyuatis",
        description: "Enterprise Resource Planning platform for business management. Modules: finance, inventory, sales tracking.",
        image: "/images/erp-system.png",
        link: "#",
    },
    {
        title: "Landing Page",
        client: "D'land Property",
        description: "Marketing landing page with responsive design and modern UI, optimized for lead generation.",
        image: "/images/dland-property.png",
        link: "#",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export default function PortfolioSectionReadable() {
    return (
        <section id="portfolio" className="py-20 px-8 md:px-20 bg-white relative">
            {/* Optional subtle background shapes */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#00ADB5]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#00ADB5]/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Heading */}
            <motion.h2
                className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 relative inline-block"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                My Portfolio
                <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-[#00ADB5] rounded-full -translate-x-1/2"></span>
            </motion.h2>

            {/* Projects Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {projects.map((project, index) => (
                    <motion.a
                        key={index}
                        href={project.link}
                        className="relative group overflow-hidden rounded-xl shadow-xl cursor-pointer"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, rotate: -1 }}
                    >
                        {/* Project Image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        {/* Info Slide Overlay with dark gradient */}
                        <motion.div
                            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white transition-transform duration-300 translate-y-full group-hover:translate-y-0"
                        >
                            <h3 className="text-lg font-semibold drop-shadow-md">{project.title}</h3>
                            <p className="text-sm font-medium opacity-80 drop-shadow-md">{project.client}</p>
                            <p className="text-sm mt-1 line-clamp-3 drop-shadow-md">{project.description}</p>
                        </motion.div>

                        {/* Border Accent */}
                        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#00ADB5] transition-all duration-300"></div>
                    </motion.a>
                ))}
            </motion.div>
        </section>
    );
}
