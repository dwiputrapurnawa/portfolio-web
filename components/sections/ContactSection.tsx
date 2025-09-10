"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaUser, FaRegEnvelope, FaCommentDots } from "react-icons/fa";
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
        <section id="contact" className="relative py-20 px-6 md:px-20 overflow-hidden" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            {/* Heading */}
            <div className="flex justify-center">
                <motion.h2
                    className="relative text-4xl md:text-5xl font-extrabold mb-16 inline-block"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Contact Me
                    <span className="absolute left-1/2 -bottom-3 w-24 h-1 bg-[#00ADB5] rounded-full -translate-x-1/2 shadow-md"></span>
                </motion.h2>
            </div>



            <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Form */}
                <motion.form
                    className="rounded-2xl shadow-lg p-8 space-y-6 border"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    style={{ backgroundColor: "var(--card-color)", borderColor: "var(--border-card-color)" }}
                >
                    <input type="hidden" name="_captcha" value="false" />

                    <motion.div variants={itemVariants} className="relative">
                        <label className="block font-semibold mb-2">Name</label>
                        <div className="relative">
                            <FaUser className="absolute left-4 top-3 text-gray-400" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                                required
                            />
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label className="block font-semibold mb-2">Email</label>
                        <div className="relative">
                            <FaRegEnvelope className="absolute left-4 top-3 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                                required
                            />
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label className="block font-semibold mb-2">Message</label>
                        <div className="relative">
                            <FaCommentDots className="absolute left-4 top-4 text-gray-400" />
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Your message..."
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                                required
                            />
                        </div>
                    </motion.div>

                    <motion.button
                        type="submit"
                        className="w-full bg-[#00ADB5] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#0097A0] transition-all duration-300"
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
                    className="flex flex-col justify-center space-y-6"
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
                            className="flex items-center gap-4 p-5 rounded-xl border shadow hover:shadow-md transition-all cursor-pointer group"
                            variants={itemVariants}
                            whileHover={{ scale: 1.03 }}
                            style={{ backgroundColor: "var(--card-color)", borderColor: "var(--border-card-color)" }}
                        >
                            <span className="text-[#00ADB5] group-hover:rotate-6 transition-transform duration-300">
                                {item.icon}
                            </span>
                            {item.link ? (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    className="font-medium hover:text-[#00ADB5] transition-colors"
                                >
                                    {item.text}
                                </a>
                            ) : (
                                <span className="font-medium">{item.text}</span>
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
                            className="bg-white rounded-2xl p-12 text-center shadow-2xl max-w-md"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                        >
                            <h3 className="text-3xl font-extrabold mb-4 text-[#00ADB5]">✨ Terima Kasih!</h3>
                            <p className="text-gray-700">
                                Pesan Anda berhasil dikirim. Anda akan diarahkan ke halaman utama sebentar lagi 🚀
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
