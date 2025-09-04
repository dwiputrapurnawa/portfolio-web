"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import myPhoto from "../../public/images/my_photo.png";

export default function HeroSection() {
    const [displayedText, setDisplayedText] = useState("");
    const fullText =
        "I am a Full Stack Web Developer specializing in modern, responsive, and user-friendly web applications.";

    const handleScroll = (id: string) => {
        const section = document.querySelector(id);
        section?.scrollIntoView({ behavior: "smooth" });
    };

    // Typewriter effect
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, i + 1));
            i++;
            if (i === fullText.length) clearInterval(interval);
        }, 25);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 bg-gradient-to-r from-[#00ADB5] to-[#393E46] text-white relative overflow-hidden"
        >
            {/* Teks */}
            <div className="flex-1 mt-8 md:mt-0 z-10 space-y-4">
                <p className="text-lg mb-2 animate-fadeUp delay-100">Hi, my name is</p>

                <h1 className="text-4xl md:text-6xl font-bold mb-2 animate-fadeUp delay-200">
                    Ida Bagus Dwi Putra Purnawa
                </h1>

                <h2 className="text-xl md:text-2xl text-gray-200 font-medium animate-fadeUp delay-250">
                    Full Stack Web Developer
                </h2>

                <p className="text-lg md:text-2xl max-w-xl mb-6 animate-fadeUp delay-300">
                    {displayedText}
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-4 animate-fadeUp delay-400">
                    <a
                        href="#portfolio"
                        className="px-6 py-3 bg-white text-[#00ADB5] font-semibold rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-gray-100"
                        onClick={(e) => {
                            e.preventDefault();
                            handleScroll("#portfolio");
                        }}
                    >
                        View Portfolio
                    </a>

                    <a
                        href="#contact"
                        className="px-6 py-3 border border-white font-semibold rounded-lg transform transition-all hover:scale-105 hover:bg-white hover:text-[#00ADB5]"
                        onClick={(e) => {
                            e.preventDefault();
                            handleScroll("#contact");
                        }}
                    >
                        Contact Me
                    </a>

                    <a
                        href="/CV.pdf"
                        download
                        className="px-6 py-3 bg-[#222831] font-semibold rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-[#393E46]"
                    >
                        Download CV
                    </a>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6 mt-6 animate-fadeUp delay-500">
                    <a
                        href="https://github.com/dwiputrapurnawa"
                        target="_blank"
                        className="hover:scale-110 transition"
                    >
                        <Github className="w-6 h-6 text-white hover:text-gray-300" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ida-bagus-dwi-putra-purnawa-5a929b174/"
                        target="_blank"
                        className="hover:scale-110 transition"
                    >
                        <Linkedin className="w-6 h-6 text-white hover:text-gray-300" />
                    </a>
                    <a
                        href="mailto:putrapurnawa@gmail.com"
                        className="hover:scale-110 transition"
                    >
                        <Mail className="w-6 h-6 text-white hover:text-gray-300" />
                    </a>
                </div>
            </div>

            {/* Foto */}
            <div className="flex-1 flex justify-center md:justify-end relative w-full h-[500px] md:h-[700px] animate-zoomIn">
                <Image
                    src={myPhoto}
                    alt="Ida Bagus Dwi Putra Purnawa"
                    fill
                    className="object-cover rounded-lg"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#393E46]/40 to-transparent rounded-lg"></div>
            </div>
        </section>
    );
}
