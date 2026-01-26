"use client";

import Link from "next/link";
import { Home, Search, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#111113] text-gray-200 selection:bg-orange-500/30 flex items-center justify-center px-6 py-16 overflow-hidden relative">
            {/* Blurs decorativos */}
            <div className="absolute top-20 -left-20 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>

            <div className="max-w-2xl w-full text-center relative z-10">
                {/* Código 404 animado */}
                <div className="mb-8">
                    <div className="inline-flex items-center justify-center gap-4">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-purple-600/20 rounded-3xl rotate-6 blur-xl"></div>
                            <div className="relative bg-[#1e1e22] border border-white/10 rounded-3xl px-8 py-6">
                                <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#fb923c] to-[#f43f5e] tracking-tighter">
                                    404
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Badge de estado */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                    Página no encontrada
                </div>

                {/* Mensaje principal */}
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                    ¡Oops! Parece que te perdiste 🧭
                </h2>

                <p className="text-lg text-gray-400 mb-12 max-w-lg mx-auto leading-relaxed">
                    La página a la que intentas acceder no se encuentra disponible.
                    <span className="text-orange-500 font-semibold"> ¡Exploremos juntos otras opciones!</span>
                </p>

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-orange-500 hover:text-white transition-all transform hover:-translate-y-1"
                    >
                        <Home size={20} />
                        Volver al inicio
                    </Link>
                    <button
                        onClick={() => router.back()}
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
                    >
                        <ArrowLeft size={20} />
                        Página anterior
                    </button>
                </div>

                {/* Mensaje adicional */}
                <div className="mt-16 p-6 rounded-2xl bg-[#1e1e22] border border-white/5">
                    <div className="flex items-start gap-4 text-left">
                        <Search className="text-orange-500 shrink-0 mt-1" size={24} />
                        <div>
                            <h3 className="text-white font-bold mb-2">¿Buscabas algo específico?</h3>
                            <p className="text-base text-gray-400 leading-relaxed">
                                Si llegaste aquí buscando información sobre mis proyectos o formas de contacto,
                                visita la <Link href="/#proyectos" className="text-orange-500 hover:text-orange-400 underline">sección de proyectos</Link> o
                                escríbeme directamente a <a href="mailto:jmncamilo@gmail.com" className="text-orange-500 hover:text-orange-400 underline">jmncamilo@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer del 404 */}
                <div className="mt-12 text-sm text-gray-500 uppercase tracking-widest font-medium">
                    {`${new Date().getFullYear()} • Camilo Jiménez`}
                </div>
            </div>
        </div>
    );
}