"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar/Navbar";
import { ProjectCard } from "@/components/project-card/ProjectCard";
import { StackSection } from "@/components/stack-section/StackSection";
import { businessProjects, techProjects } from "@/data/projects/projectsData";
import {
    Github,
    Linkedin,
    Mail,
    Code2,
    Download,
    Briefcase,
    Cpu,
} from 'lucide-react';

export default function Landing() {

    return (
        <div className="min-h-screen bg-[#111113] text-gray-200 font-sans selection:bg-orange-500/30">
            <Navbar/>

            <main className="pt-20">
                <section id="home" className="relative py-24 px-6 overflow-hidden">
                    <div className="absolute top-40 -left-20 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-10 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>

                    <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
                        <div className="md:col-span-8 relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                </span>
                                Desarrollador de Software & Negociador Internacional
                            </div>

                            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                                Transformando desafíos de negocio en
                                <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb923c] to-[#f43f5e]">
                                    software que escala
                                </span>
                            </h1>

                            <p className="text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
                                Con background en <strong>Negocios Internacionales</strong> e ingeniería técnica profunda.
                                No solo escribo código, entiendo por qué el código debe existir para generar valor.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a href="#proyectos"
                                   className="flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-orange-500 hover:text-white transition-all transform hover:-translate-y-1">
                                    Ver Proyectos
                                </a>
                                <button
                                    className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                                    <Download size={20}/>
                                    Descargar CV
                                </button>
                            </div>
                        </div>

                        <div className="md:col-span-4 flex justify-center">
                            <div className="relative w-64 h-64 md:w-80 md:h-80">
                                <div
                                    className="absolute inset-0 bg-gradient-to-tr from-orange-500/40 to-purple-600/40 rounded-3xl rotate-6 animate-pulse"></div>
                                <div
                                    className="absolute inset-0 bg-[#1e1e22] border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden">
                                    <Code2 size={120} className="text-white/20"/>
                                    <div
                                        className="absolute bottom-4 left-4 right-4 p-4 bg-black/40 backdrop-blur-md rounded-xl border border-white/5">
                                        <div
                                            className="text-xs font-bold text-white mb-1 uppercase tracking-tighter">Stack
                                            Principal
                                        </div>
                                        <div className="text-[10px] text-gray-400">Next.js • React • Node • C++</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <StackSection/>

                <section id="proyectos" className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-20">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="h-px flex-grow bg-gradient-to-r from-transparent to-blue-500/50"></div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3 italic">
                                    <Briefcase className="text-blue-500"/> Soluciones de Negocio
                                </h2>
                                <div className="h-px flex-grow bg-gradient-to-l from-transparent to-blue-500/50"></div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                {businessProjects.map((p, i) => <ProjectCard key={i} {...p} />)}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-4 mb-10">
                                <div
                                    className="h-px flex-grow bg-gradient-to-r from-transparent to-purple-500/50"></div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3 italic">
                                    <Cpu className="text-purple-500"/> Ingeniería Técnica (ROM Hacking)
                                </h2>
                                <div
                                    className="h-px flex-grow bg-gradient-to-l from-transparent to-purple-500/50"></div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                {techProjects.map((p, i) => <ProjectCard key={i} {...p} />)}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contacto" className="py-24 px-6 relative overflow-hidden">
                    <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 italic tracking-tight">¿Hablamos
                            de negocios o de código?</h2>
                        <p className="text-gray-400 mb-12 text-lg">
                            Estoy buscando mi primera oportunidad profesional donde pueda aportar mi criterio técnico y
                            visión comercial.
                            Si buscas un Junior con pensamiento crítico, envíame un mensaje.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4 mb-12">
                            <a href="mailto:jmncamilo@gmail.com"
                               className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#1e1e22] border border-white/5 hover:bg-white/10 transition-all">
                                <Mail className="text-orange-500"/>
                                <span className="text-sm font-medium">Email</span>
                            </a>
                            <a href="#"
                               className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#1e1e22] border border-white/5 hover:bg-white/10 transition-all">
                                <Linkedin className="text-blue-500"/>
                                <span className="text-sm font-medium">LinkedIn</span>
                            </a>
                            <a href="#"
                               className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#1e1e22] border border-white/5 hover:bg-white/10 transition-all">
                                <Github className="text-white"/>
                                <span className="text-sm font-medium">GitHub</span>
                            </a>
                        </div>

                        <button
                            className="w-full p-8 rounded-3xl bg-gradient-to-tr from-orange-600 to-rose-600 text-white font-bold text-xl cursor-pointer hover:shadow-2xl hover:shadow-orange-500/20 transition-all">
                            Impulsemos tu proyecto juntos
                        </button>
                    </div>
                </section>

                <section className="py-24 px-6 bg-[#0d0d0f] border-t border-white/5">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                        <div className="relative group shrink-0">
                            <div
                                className="absolute inset-0 bg-orange-500/20 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform"></div>
                            <div
                                className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border border-white/10 bg-[#1e1e22]">
                                <Image
                                    src="/misc/profile-pic-cj.png"
                                    alt="Foto profesional"
                                    quality={100}
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 contrast-[1]"
                                />
                            </div>
                        </div>

                        <div className="flex-grow space-y-4 text-center md:text-left">
                            <div
                                className="inline-block px-3 py-1 rounded-md bg-white/5 text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
                                Sobre mí
                            </div>
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
                                Creo que el código es una herramienta de precisión, pero el propósito de cualquier
                                sistema debe ser siempre humano.
                                Busco integrar la elegancia del software con la eficacia del negocio.
                            </p>
                            <div className="pt-2 flex flex-col gap-1">
                                <span className="text-white font-bold tracking-tight">Camilo Jiménez</span>
                                <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">Desarrollador de Software & Negociador Internacional</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-12 border-t border-white/5 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} — Si funciona, no se toca...
                    </div>
                    <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
                        <a
                            href="https://github.com/jmncamilo"
                            className="hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/camilojimenz/"
                            className="hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="mailto:jmncamilo@gmail.com"
                            className="hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Contáctame
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
