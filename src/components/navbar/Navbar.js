import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-[#19191c]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-8 h-8 bg-gradient-to-tr from-[#f43f5e] via-[#fb923c] to-[#facc15] rounded-lg shadow-lg group-hover:rotate-12 transition-transform"></div>
                    <span className="text-white font-bold tracking-tight text-xl">DEV<span className="text-gray-400">PORTFOLIO</span></span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                    <a href="#home" className="hover:text-white transition-colors">Home</a>
                    <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
                    <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
                    <button className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
                        ES / EN
                    </button>
                </div>

                <div className="md:hidden text-white">
                    <Terminal size={24} />
                </div>
            </div>
        </nav>
    );
}