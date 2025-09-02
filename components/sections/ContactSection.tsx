// components/ContactSection.tsx
"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="relative py-20 px-8 md:px-20 bg-white overflow-hidden"
        >
            {/* Heading */}
            <motion.h2
                className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900 relative inline-block"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Contact Me
                <span className="absolute left-1/2 -bottom-3 w-24 h-1 bg-[#00ADB5] rounded-full -translate-x-1/2 shadow-md"></span>
            </motion.h2>

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
                {/* Form */}
                <motion.form
                    className="flex-1 bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-gray-200"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div variants={itemVariants}>
                        <label className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                        />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                        />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label className="block text-gray-700 font-semibold mb-2">Message</label>
                        <textarea
                            rows={5}
                            placeholder="Your message..."
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                        />
                    </motion.div>

                    <motion.button
                        type="submit"
                        className="w-full bg-[#00ADB5] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#0097A0] hover:shadow-[#00ADB5]/40 transition-all duration-300"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Send Message
                    </motion.button>
                </motion.form>

                {/* Contact Info */}
                <motion.div
                    className="flex-1 flex flex-col justify-center space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {[
                        {
                            icon: <FaEnvelope className="w-7 h-7" />,
                            text: "idabaguspurnawa@example.com",
                            link: null,
                        },
                        {
                            icon: <FaPhone className="w-7 h-7" />,
                            text: "+62 812-3456-7890",
                            link: null,
                        },
                        {
                            icon: <FaLinkedin className="w-7 h-7" />,
                            text: "linkedin.com/in/idabaguspurnawa",
                            link: "https://linkedin.com/in/idabaguspurnawa",
                        },
                        {
                            icon: <FaGithub className="w-7 h-7" />,
                            text: "github.com/idabaguspurnawa",
                            link: "https://github.com/idabaguspurnawa",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
                            variants={itemVariants}
                            whileHover={{ scale: 1.03 }}
                        >
                            <span className="text-[#00ADB5] group-hover:rotate-6 transition-transform duration-300">
                                {item.icon}
                            </span>
                            {item.link ? (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    className="text-gray-800 font-medium hover:text-[#00ADB5] transition-colors"
                                >
                                    {item.text}
                                </a>
                            ) : (
                                <span className="text-gray-800 font-medium">{item.text}</span>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
