import { ArrowUpRight, SunIcon, MoonIcon, Code2 } from 'lucide-react'

export default function Navbar() {
    return (
        <nav className="p-4 bg-white flex justify-between">
            <a
                href="/"
                className="flex items-center gap-3 group"
            >
                {/* ICON dengan glow + bounce + rotate */}
                <Code2
                    className="w-8 h-8 text-[#00ADB5] transition-all duration-500
        group-hover:-translate-y-1 group-hover:scale-125
        group-hover:rotate-12
        group-hover:drop-shadow-[0_0_15px_#00ADB5]"
                />

                {/* TEXT dengan gradient animasi + slide in */}
                <span
                    className="font-bold tracking-tight text-lg leading-tight
        bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800
        bg-clip-text text-transparent 
        transition-all duration-700 ease-in-out
        group-hover:translate-x-1 group-hover:tracking-wide
        animate-gradient-x"
                >
                    Ida Bagus Dwi{" "}
                    <span
                        className="relative text-[#00ADB5]
            after:content-[''] after:absolute after:left-1/2 after:bottom-[-3px]
            after:h-[2px] after:w-0 after:bg-[#00ADB5]
            after:transition-all after:duration-500 after:ease-out
            group-hover:after:left-0 group-hover:after:w-full"
                    >
                        Putra Purnawa
                    </span>
                </span>
            </a>






            <ul className="flex gap-4 bg-white p-4 font-bold text-[#00ADB5] rounded-4xl">
                {[
                    { href: "/", label: "Home" },
                    { href: "/projects", label: "Projects" },
                    { href: "/services", label: "Services" },
                    { href: "/contact", label: "Contact" },
                ].map((item) => (
                    <li key={item.href}>
                        <a
                            href={item.href}
                            className="relative inline-block transition-all duration-300 
                   hover:text-[#0097A0] hover:-translate-y-0.5 hover:scale-105
                   after:content-[''] after:absolute after:left-0 after:bottom-[-6px] 
                   after:h-[2px] after:w-full after:scale-x-0 after:bg-[#0097A0] 
                   after:origin-left after:transition-transform after:duration-300 
                   hover:after:scale-x-100"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>



            <div className="flex gap-4">
                <button
                    className="p-4 rounded-2xl transition-transform duration-300 hover:scale-110"
                >
                    <SunIcon
                        className="w-6 h-6 text-[#00ADB5] 
               transition-all duration-500 
               hover:text-[#0097A0] 
               hover:rotate-180 
               hover:drop-shadow-[0_0_8px_#00ADB5]"
                    />
                </button>


                <button className="p-4 text-white rounded-2xl flex gap-2 bg-[#00ADB5] 
                   hover:bg-[#0097A0] transition-all duration-300 group">
                    <span>Contact Me</span>
                    <ArrowUpRight className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>




            </div>
        </nav>
    );
}