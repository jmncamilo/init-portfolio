export const businessProjects = [
    {
        title: "Huerto Digital Afood",
        desc: "Aplicación web para clientes afood que integra resumen de pedidos, estado de cuenta y métricas de impacto ambiental.",
        problem: "Clientes B2B recibían deudas fragmentadas sin trazabilidad y facturas dispersas en correos. Internamente, la reconciliación manual de saldos causaba redundancia e ineficiencia operativa.",
        learned: "Replicar diseños UX con CSS vanilla e integración de API externa (Airtable) mediante documentación técnica.",
        stack: ["Next.js", "CSS Vanilla", "Tailwind CSS", "Airtable Web API", "Cloud (Vercel)"],
        image: "/banners/gif-huerto-afood.gif",
        github: "https://github.com/jmncamilo/afood-dash",
        demo: "https://huerto-afood.vercel.app/",
        type: "business"
    },
    {
        title: "Gymember - The Member Connection",
        desc: "SaaS para gimnasios PYME en Colombia que automatiza membresías y centraliza métricas de negocio, eliminando la informalidad administrativa.",
        problem: "Falta de trazabilidad y registros manuales que generan fugas de dinero y riesgos contables.",
        learned: "Arquitectura MVC con clara separación de responsabilidades, API de lógica modular y UX diseñada para optimizar flujos operativos reales.",
        stack: ["React.js", "Express.js", "MySQL", "Jest"],
        image: "/banners/gymember-app-banner-v3.png",
        github: "https://github.com/jmncamilo/gymember-app",
        demo: "#",
        type: "business"
    },
    {
        title: "Apple Hub",
        desc: "Sistema basado en roles que optimiza stock, finanzas e integridad de datos para minoristas de productos Apple en ciudades intermedias de Colombia.",
        problem: "Manipulación de datos, fugas de capital y procesos manuales ineficientes que impiden un control financiero preciso y un manejo seguro del flujo de caja.",
        learned: "Arquitectura full-stack con Next.js (App Router), integración de PostgreSQL con Supabase y seguridad mediante Control de Acceso Basado en Roles (RBAC).",
        stack: ["Next.js", "PostgreSQL (Supabase)", "Tailwind CSS", "Cloud (Vercel)"],
        image: "/banners/gymember-app-banner-v7.png",
        github: "https://github.com/jmncamilo/apple-hub",
        demo: "https://apple-hub.vercel.app/",
        type: "business"
    }
];

export const techProjects = [
    {
        title: "Binary Relocation Tool",
        desc: "Herramienta CLI para relocalizar punteros en archivos binarios de consolas 16-bit.",
        problem: "Limitaciones de espacio en memorias ROM al insertar nuevas traducciones o assets.",
        learned: "Manipulación de buffers, ingeniería inversa y estructuras de datos de bajo nivel.",
        stack: ["C++", "Python", "Assembly"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        github: "#",
        type: "tech"
    },
    {
        title: "GBA Script Engine",
        desc: "Motor de scripting personalizado para inyección de eventos en juegos de GameBoy Advance.",
        problem: "Dificultad para crear misiones dinámicas en motores propietarios cerrados.",
        learned: "Arquitectura orientada a objetos y comprensión profunda del ciclo de ejecución de la CPU.",
        stack: ["C", "ARM Assembly", "Hex-Editing"],
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
        github: "#",
        type: "tech"
    }
];