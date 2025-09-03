"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function ContactSection() {
    const [status, setStatus] = useState("");
    const [showThankYou, setShowThankYou] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch("https://formsubmit.co/ajax/putrapurnawa@gmail.com", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            const data = await res.json();
            if (res.ok) {
                form.reset();
                setShowThankYou(true);
                setStatus("Email berhasil dikirim!");

                // redirect ke homepage setelah 2 detik
                setTimeout(() => {
                    window.location.href = "/";
                }, 2000);
            } else {
                setStatus(data.message || "Gagal mengirim email.");
            }
        } catch (err) {
            setStatus("Terjadi error.");
            console.error(err);
        }
    };

    return (
        <section id="contact" className="relative py-20 px-8 md:px-20 bg-white overflow-hidden">
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
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="_captcha" value="false" />

                    <motion.div variants={itemVariants}>
                        <label className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                            required
                        />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                            required
                        />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label className="block text-gray-700 font-semibold mb-2">Message</label>
                        <textarea
                            name="message"
                            rows={5}
                            placeholder="Your message..."
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                            required
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

                    {status && <p className="mt-2 text-center text-gray-700">{status}</p>}
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
                            text: "putrapurnawa@gmail.com",
                            link: null,
                        },
                        {
                            icon: <FaPhone className="w-7 h-7" />,
                            text: "+62 857-3830-2554",
                            link: null,
                        },
                        {
                            icon: <FaLinkedin className="w-7 h-7" />,
                            text: "Ida Bagus Dwi Putra Purnawa",
                            link: "https://www.linkedin.com/in/ida-bagus-dwi-putra-purnawa-5a929b174/",
                        },
                        {
                            icon: <FaGithub className="w-7 h-7" />,
                            text: "github.com/dwiputrapurnawa",
                            link: "https://github.com/dwiputrapurnawa",
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

            {/* Thank You Overlay */}
            <AnimatePresence>
                {showThankYou && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-xl p-12 text-center shadow-lg"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                        >
                            <h3 className="text-2xl font-bold mb-4 text-[#00ADB5]">Terima Kasih!</h3>
                            <p className="text-gray-700">Pesan Anda telah dikirim. Anda akan diarahkan ke halaman utama sebentar lagi.</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
