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
        demo: "https://gymember-demo.vercel.app",
        type: "business"
    },
    {
        title: "Apple Hub",
        desc: "Sistema basado en roles que optimiza stock, finanzas e integridad de datos para minoristas de productos Apple en ciudades intermedias de Colombia.",
        problem: "Manipulación de datos, fugas de capital y procesos manuales ineficientes que impiden un control financiero preciso y un manejo seguro del flujo de caja.",
        learned: "Arquitectura full-stack con Next.js (App Router), integración de PostgreSQL con Supabase y seguridad mediante Control de Acceso Basado en Roles (RBAC).",
        stack: ["Next.js", "PostgreSQL (Supabase)", "Tailwind CSS", "Cloud (Vercel)"],
        image: "/banners/apple-hub-banner-v1.png",
        github: "https://github.com/jmncamilo/apple-hub",
        demo: "https://apple-hub.vercel.app/",
        type: "business"
    }
];

export const techProjects = [
    {
        title: "RE3 - Mercenaries Item Editor",
        desc: "Herramienta para editar los objetos iniciales de los personajes en el modo Mercenarios de RE3: Nemesis (1999) [PC] versión SourceNext.",
        problem: "Limitación del juego original para personalizar el equipo inicial de los personajes en modo Mercenarios.",
        learned: "Identificación de offsets mediante ingeniería inversa, mapeo de memoria del ejecutable y manipulación de bytes.",
        stack: ["Java", "JavaFX", "Assembly"],
        image: "/banners/re3-mercenaries-editor-banner-v2.png",
        github: "https://github.com/jmncamilo/re3-merc-item-editor",
        type: "tech"
    },
    {
        title: "YFM - Field Editor",
        desc: "Editor de bonificaciones de cartas campo en Yu-Gi-Oh! Forbidden Memories [PSX]",
        problem: "Los valores de aumento de las cartas campo están predefinidos internamente y no pueden modificarse dentro del juego.",
        learned: "Ingeniería inversa del procesador MIPS de PSX mediante análisis en ensamblador para localizar offsets y modificar punteros en archivos ISO.",
        stack: ["Java", "JavaFX", "Assembly", "NO$PSX"],
        image: "/banners/field-editor-banner-v1.png",
        github: "https://github.com/jmncamilo/yfm-field-editor",
        type: "tech"
    }
];