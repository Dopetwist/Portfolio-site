
const projects = [
    {
        id: 1,
        title: "TenTraq | Tenant Management & Tracking System",
        description: "Built a full-stack tenant and property management web application with secure authentication that helps landlords and property managers organize properties, tenant records, and tenancy information from one intuitive dashboard.",
        img: "/images/projects/tentraq.png",
        github: "https://github.com/Dopetwist/TenTraq.git",
        tech: [ "Node.js | ", "Express.js | ", "React + Vite | ", "JavaScript | ", "PostgreSQL | ", "CSS" ],
        live: "https://tentraq.top"
    },
    {
        id: 2,
        title: "Kraft Konceptz LTD | Corporate Fabrication Website",
        description: "Designed and built a premium website for Kraft Konceptz LTD, a leading fabrication company, to showcase their services and portfolio. The website features a clean, responsive design with smooth animations and an intuitive user interface.",
        img: "/images/projects/kraft-konceptz.png",
        github: "https://github.com/Dopetwist/KKZ-site.git",
        tech: [ "React + Vite | ", "Node.js | ", "Express.js | ", "JavaScript | ", "HTML | ", "CSS" ],
        live: "https://kkz-company.vercel.app"
    },
    {
        id: 3,
        title: "MyLux Gold Collection | Premium Gold Jewelry eCommerce Website",
        description: "Developed a modern eCommerce platform to showcase and sell luxury gold jewelry through a modern, elegant, and conversion-focused shopping experience.",
        img: "/images/projects/mylux.png",
        github: "https://github.com/Dopetwist/MGC.git",
        tech: [ "React + Vite | ", "JavaScript | ", "HTML | ", "CSS" ],
        live: "https://mylux-gold-collection.vercel.app"
    },
    {
        id: 4,
        title: "VIP Beauty Studio | Luxury Beauty Booking Website",
        description: "Designed and built a responsive beauty service booking system that allows customers to browse services and schedule appointments online. A multi-step appointment booking platform for selecting specific services, preferred dates, and available time slots.",
        img: "/images/projects/vip.png",
        github: "https://github.com/Dopetwist/VIP.git",
        tech: [ "React + Vite | ", "Context API | ","JavaScript | ", "HTML | ", "CSS" ],
        live: "https://vip-beauty-studio.vercel.app"
    },
    {
        id: 5,
        title: "Foreign Recipes Project",
        description: "Many restaurants struggle to access international recipes. I built a solution that allows users to explore and search varieties of foreign dishes worldwide with preparation instructions and video guides.",
        img: "/images/projects/recipe.png",
        github: "https://github.com/Dopetwist/Foreign-recipes-project.git",
        tech: [ "REST API | ", "Node.js | ", "JavaScript | ", "EJS | ", "Express.js | ", "HTML | ", "CSS" ],
        live: "https://foreign-recipes.onrender.com"
    },
    {
        id: 6,
        title: "KwikScan",
        description: "Developed a web app that generates and scans QR Codes efficiently according to users preferences. It converts URLs and mobile numbers to QR codes for easy access.",
        img: "/images/projects/kwikscan.png",
        github: "https://github.com/Dopetwist/KwikScan.git",
        tech: [ "React + Vite | ", "JavaScript | ", "HTML | ", "CSS" ],
        live: "https://kwik-scan.vercel.app"
    },
    {
        id: 7,
        title: "BookHive",
        description: "Built a full-stack centralized system with secured authentication and profile dashboards designed to help readers capture, organize and revisit their thoughts and key insights on books, all in one place.",
        img: "/images/projects/bookhive.png",
        github: "https://github.com/Dopetwist/BookHive.git",
        tech: [ "Node.js | ", "Express.js | ", "JavaScript | ", "PostgreSQL | ", "HTML | ", "CSS | ", "EJS" ],
        /* live: "https://bookhive-lq65.onrender.com" */
    }
]


const frontend = [
    {
        id: 1,
        name: "HTML",
        img: "/images/tech/HTML.png"
    },
    {
        id: 2,
        name: "CSS",
        img: "/images/tech/CSS.png"
    },
    {
        id: 3,
        name: "JavaScript",
        img: "/images/tech/javascript.png"
    },
    {
        id: 4,
        name: "React.js",
        img: "/images/tech/react.png"
    },
    {
        id: 5,
        name: "Bootstrap",
        img: "/images/tech/bootstrap.png"
    },
    {
        id: 6,
        name: "EJS",
        img: "/images/svgs/ejs.svg"
    }
]

const backend = [
    {
        id: 1,
        name: "Node.js",
        img: "/images/svgs/node-js.svg"
    },
    {
        id: 2,
        name: "PostgreSQL",
        img: "/images/tech/postgresql.png"
    },
    {
        id: 3,
        name: "Express.js",
        img: "/images/tech/express.png"
    },
    {
        id: 4,
        name: "Dfinity (Motoko)",
        img: "/images/svgs/dfinity_logo.svg"
    }
]

const tools = [
    {
        id: 1,
        name: "Git",
        img: "/images/svgs/Git.svg"
    },
    {
        id: 2,
        name: "VS Code",
        img: "/images/svgs/vs-code.svg"
    },
    {
        id: 3,
        name: "Postman",
        img: "/images/svgs/postman.svg"
    },
    {
        id: 4,
        name: "GitHub",
        img: "/images/svgs/github-icon.svg"
    }
]
    

export { projects, frontend, backend, tools } ;