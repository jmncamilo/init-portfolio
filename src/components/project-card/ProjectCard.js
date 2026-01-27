import { useState } from "react";
import Image from "next/image";
import { Briefcase, Cpu, Eye, Github, ExternalLink } from "lucide-react";

// Este componente incluye funcionalidad de 'vista instantánea' con un efecto de revelado de enfoque (similar a iOS)
export function ProjectCard({ title, desc, problem, learned, stack, github, demo, image, type }) {
    const [showPreview, setShowPreview] = useState(false);

    // TODO: ícono de GitHub está deprecado en lucide react, razón por la que se debe importar como svg en este componente para evitar problema futuros

    return (
        <div
            className="group relative bg-[#1e1e22] border border-white/5 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-500 overflow-hidden shadow-2xl h-full flex flex-col">
            {/* Background glow */}
            <div className={`absolute -top-24 -right-24 w-48 h-48 blur-[80px] opacity-20 transition-opacity group-hover:opacity-40
                ${type === 'business' ? 'bg-blue-500' : 'bg-purple-500'}`}>
            </div>

            {/* Capa de vista instantánea de imagen (efecto de revelado de enfoque) */}
            {image && (
                <div
                    className={`absolute inset-0 z-30 transition-all duration-500 ease-out pointer-events-none overflow-hidden ${
                        showPreview ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <Image
                        src={image}
                        alt={title}
                        unoptimized={image?.endsWith('.gif')}
                        quality={100}
                        fill
                        className={`object-cover transition-all duration-700 ease-in-out ${showPreview ? 'scale-100 blur-0' : 'scale-110 blur-2xl'}`}
                    />

                    {/* Overlay gradient inferior para legibilidad */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

                    {/* Label de vista rápida */}
                    <div
                        className={`absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 transition-transform duration-500 ${
                            showPreview ? 'translate-y-0' : 'translate-y-10'
                        }`}
                    >
                        <p className="text-[10px] text-orange-400 font-bold uppercase tracking-[0.2em]">Vista rápida</p>
                    </div>
                </div>
            )}

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10
                    ${type === 'business' ? 'text-blue-400' : 'text-purple-400'}`}
                    >
                        {type === 'business' ? <Briefcase size={20}/> : <Cpu size={20}/>}
                    </div>

                    <div className="flex gap-2 items-center">
                        {/* Disparador de vista instantánea */}
                        {image && (
                            <button
                                onMouseEnter={() => setShowPreview(true)}
                                onMouseLeave={() => setShowPreview(false)}
                                className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
                                aria-label="Vista previa"
                            >
                                <Eye size={18}/>
                            </button>
                        )}
                        <a href={github} className="p-2 text-gray-400 hover:text-white transition-colors" target="_blank" rel="noreferrer">
                            <Github size={20}/>
                        </a>
                        {demo &&
                            <a
                                href={demo}
                                className="p-2 text-gray-400 hover:text-white transition-colors"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ExternalLink size={20} />
                            </a>
                        }
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{title}</h3>
                <p className="text-gray-400 text-base mb-4 leading-relaxed line-clamp-2">{desc}</p>

                <div className="space-y-3 mb-6 flex-grow">
                    <div>
                        <span className="text-[0.75rem] uppercase tracking-widest text-gray-500 font-bold block mb-1">Problema Resuelto</span>
                        <p className="text-[0.9rem] text-gray-300 italic">&quot;{problem}&quot;</p>
                    </div>
                    <div>
                        <span className="text-[0.75rem] uppercase tracking-widest text-gray-500 font-bold block mb-1">Aprendizaje Clave</span>
                        <p className="text-[0.9rem] text-gray-300">{learned}</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {stack.map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5 uppercase">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}