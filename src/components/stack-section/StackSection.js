import { Layers, Database, Settings2, Cpu, Briefcase } from "lucide-react";
import { Terminal } from "lucide-react";
import { TechBadge } from "@/components/tech-badge/TechBadge";

export function StackSection() {
    // Constantes para las categorías del tech stack mostradas en la lading
    const categories = [
        {
        title: "Frontend",
        icon: <Layers size={18} className="text-blue-400"/>,
        techs: ["React", "Next.js", "Tailwind CSS", "JavaScript"]
        },
        {
        title: "Backend",
        icon: <Terminal size={18} className="text-green-400"/>,
        techs: ["Node.js", "Express", "Python"]
        },
        {
        title: "Data",
        icon: <Database size={18} className="text-orange-400"/>,
        techs: ["PostgreSQL", "MongoDB", "Firebase"]
        },
        {
        title: "Tooling",
        icon: <Settings2 size={18} className="text-purple-400"/>,
        techs: ["Git", "GitHub", "Docker", "Vercel"]
        }
    ];

    return (
        <section className="py-24 px-6 bg-[#111113]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-4">Tech Stack</h2>
                    <p className="text-3xl font-bold text-white">Herramientas y Competencias</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {categories.map((cat, idx) => (<div key={idx} className="space-y-4">
                        <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                            {cat.icon}
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">{cat.title}</h3>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            {cat.techs.map((tech) => (<TechBadge key={tech} name={tech}/>))}
                        </div>
                    </div>))}
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    <div
                        className="lg:col-span-8 bg-[#19191c] rounded-3xl border border-white/5 p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Cpu size={120}/>
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-6">
                                <Cpu size={20} className="text-rose-500"/>
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Low Level /
                                    Ingeniería Inversa</h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-xs font-bold text-gray-500 uppercase mb-4 tracking-tighter">Lenguajes
                                        & Bases</h4>
                                    <div className="space-y-2">
                                        <TechBadge name="C++"/>
                                        <TechBadge name="C"/>
                                        <TechBadge name="Assembly"/>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-gray-500 uppercase mb-4 tracking-tighter">
                                        Conceptos Técnicos
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["Debugging", "Binary Analysis", "Memory Offsets", "Hex-Editing", "Pointer Relocation", "CPU Architectures"].map(concept => (
                                            <span
                                                key={concept}
                                                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 font-medium hover:bg-white/10 transition-colors">
                                                {concept}
                                            </span>)
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="lg:col-span-4 bg-[#19191c] rounded-3xl border border-white/5 p-8 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <Briefcase size={20} className="text-gray-400"/>
                                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Business
                                    Context</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"/>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        <strong>Pensamiento de producto:</strong> Enfoque en resolver problemas reales
                                        del usuario.
                                    </p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"/>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        <strong>Visión de negocio:</strong> Optimización de procesos para maximizar el
                                        ROI técnico.
                                    </p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"/>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        <strong>Comunicación efectiva:</strong> Capacidad de explicar tecnicismos a
                                        stakeholders no técnicos.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/5">
                            <p className="text-[11px] text-gray-500 font-medium uppercase tracking-widest italic">
                                Junior, pero con criterio empresarial.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}