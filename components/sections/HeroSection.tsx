"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import myPhoto from "../../public/images/my_photo.png";

export default function HeroSection() {
    const [displayedText, setDisplayedText] = useState("");
    const fullText = "I am a Full Stack Web Developer specializing in modern, responsive, and user-friendly web applications.";

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
        <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 bg-gradient-to-r from-[#00ADB5] to-[#393E46] text-white relative overflow-hidden">

            {/* Teks */}
            <div className="flex-1 mt-8 md:mt-0 z-10 space-y-4">
                <p className="text-lg mb-2 animate-fadeUp delay-100">Hi, my name is</p>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeUp delay-200">
                    Ida Bagus Dwi Putra Purnawa
                </h1>
                <p className="text-lg md:text-2xl max-w-xl mb-6 animate-fadeUp delay-300">
                    {displayedText}
                </p>
                <div className="flex gap-4 animate-fadeUp delay-400">
                    <a href="#portfolio" className="px-6 py-3 bg-white text-[#00ADB5] font-semibold rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-gray-100">
                        View Portfolio
                    </a>
                    <a href="#contact" className="px-6 py-3 border border-white font-semibold rounded-lg transform transition-all hover:scale-105 hover:bg-white hover:text-[#00ADB5]">
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Foto full body */}
            <div className="flex-1 flex justify-center md:justify-end relative h-screen w-full md:w-[75%] animate-zoomIn">
                <Image
                    src={myPhoto}
                    alt="Ida Bagus Dwi Putra Purnawa"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                />
            </div>
        </section>
    );
}
