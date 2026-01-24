import { Layers, Database, Settings2, Cpu, Briefcase } from "lucide-react";
import { Terminal } from "lucide-react";
import { TechBadge } from "@/components/tech-badge/TechBadge";
import { logoDictionary } from "@/utils/dictionaries/logoDictionary";

export function StackSection() {
    // Constantes para las categorías del tech stack mostradas en la landing
    const categories = [
        {
            title: "Frontend",
            icon: <Layers size={18} className="text-blue-400"/>,
            techs: ['Next.js', 'React.js', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'CSS', 'HTML5']
        },
        {
            title: "Backend",
            icon: <Terminal size={18} className="text-green-400"/>,
            techs: ['Node.js', 'Express.js', 'Jest']
        },
        {
            title: "Data",
            icon: <Database size={18} className="text-orange-400"/>,
            techs: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase']
        },
        {
            title: "Tooling",
            icon: <Settings2 size={18} className="text-purple-400"/>,
            techs: ['Git', 'GitHub', 'Docker', 'Railway', 'Render', 'Vercel', 'Vite']
        }
    ];

    return (
        <section className="py-24 px-6 bg-[#111113]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-4">Tech Stack</h2>
                    <p className="text-3xl font-bold text-white">Habilidades y Tecnologías</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {categories.map((cat, idx) => (<div key={idx} className="space-y-4">
                        <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                            {cat.icon}
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">{cat.title}</h3>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            {cat.techs.map((tech) => (<TechBadge key={tech} name={tech} iconUrl={logoDictionary[tech]}/>))}
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
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Low Level</h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-xs font-bold text-gray-500 uppercase mb-4 tracking-tighter">
                                        Lenguajes
                                    </h4>
                                    <div className="space-y-2">
                                        <TechBadge name="Java" iconUrl={logoDictionary['Java']} />
                                        <TechBadge name="Python" iconUrl={logoDictionary['Python']} />
                                        <TechBadge name="C++" iconUrl={logoDictionary['C++']} />
                                        <TechBadge name="Assembly" iconUrl={logoDictionary['Assembly']} />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-gray-500 uppercase mb-4 tracking-tighter">
                                        Fundamentos Técnicos
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Debugging', 'Memory Offsets', 'Hex-Editing', 'Pointer Relocation', 'Reverse Engineering'].map((concept, idx) => (
                                            <span
                                                key={idx}
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
                                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Beyond Code</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"/>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        <strong>Pensamiento de producto:</strong> diseño centrado en el usuario y resolución efectiva de requerimientos.
                                    </p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"/>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        <strong>Visión de negocio:</strong> análisis de datos y de KPIs para optimizar el desarrollo.
                                    </p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"/>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        <strong>Perspectiva comercial:</strong> optimización técnica orientada a mejorar el funnel de adquisición.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/5">
                            <p className="text-[11px] text-gray-500 font-medium uppercase tracking-widest italic">
                                Desarrollador Fullstack que entiende el negocio detrás del código
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}