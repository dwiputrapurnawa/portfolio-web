// components/PortfolioSection.tsx
"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Sistem Operasional Rumah Potong Ayam",
        client: "Puri Pangan",
        description: "Web App for operational management, built with Laravel & CodeIgniter.",
        image: "/images/rpa.png",
        link: "#",
    },
    {
        title: "ERP System",
        client: "Kopi Banyuatis",
        description: "Enterprise Resource Planning platform for business management.",
        image: "/images/erp-system.png",
        link: "#",
    },
    {
        title: "Landing Page",
        client: "D'land Property",
        description: "Marketing landing page with responsive design and modern UI.",
        image: "/images/dland-property.png",
        link: "#",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="py-20 px-8 md:px-20 bg-white">
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
                        className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
                        variants={itemVariants}
                        whileHover={{ scale: 1.03 }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#00ADB5] bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4">
                            <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                            <p className="text-white text-sm mb-2">{project.client}</p>
                            <p className="text-white text-sm">{project.description}</p>
                        </div>
                    </motion.a>
                ))}
            </motion.div>
        </section>
    );
}
