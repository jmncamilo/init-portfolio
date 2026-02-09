import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

export function Navbar() {
    // Handles opening CV in the browser
    const handleViewCV = () => {
        window.open('/cv/CVCAMILOJIMENEZ.pdf', '_blank', 'noopener,noreferrer');
    };

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
            isScrolled
                ? 'bg-[#0f0f0f]/5 backdrop-blur-md backdrop-saturate-200 border-b border-white/15 shadow-lg shadow-black/5'
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-8 h-8 bg-gradient-to-tr from-[#f43f5e] via-[#fb923c] to-[#facc15] rounded-lg shadow-lg group-hover:rotate-12 transition-transform"></div>
                    <span className="text-white font-black tracking-tight text-xl">CAMILO<span className="text-gray-400"> JIMÉNEZ</span></span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-base font-bold text-gray-400">
                    <a href="#home" className="hover:text-white transition-colors">Inicio</a>
                    <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
                    <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
                    <button
                        className="px-5 py-2 rounded-full font-sans bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
                        onClick={handleViewCV}
                    >
                        VER CV
                    </button>
                </div>

                <div className="md:hidden text-white">
                    <Terminal size={24} />
                </div>
            </div>
        </nav>
    );
}