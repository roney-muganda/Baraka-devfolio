import netbazeImg from "../assets/NetBaze.png" 
import sheriaImg from "../assets/Sheria1.png"
import friskingImg from "../assets/whiskey.jpg"

export const projectsData = [
  {
    title: "Netbaze",
    description: "NetBaze is a full-stack automated platform that bridges the gap between digital payments and restricted USSD-only mobile services. It enables users to purchase exclusive, low-cost data bundles that are typically inaccessible via standard APIs",
    tech: ["React", "Python"], 
    link: "https://netbaze-web.vercel.app/", 
    code: "#",
    image: netbazeImg,
  },
  {
    title: "Sheria Flow",
    description: "A comprehensive payroll system that handles end-to-end payroll processing for companies and businesses.",
    tech: ["React(TypeScript)", "Python(Django)", "MySQL", "Express"],
    link: "https://sheriaflow-web.vercel.app/",
    code: "#",
    image: sheriaImg,
  },
  {
    title: "Frisking Website",
    description: "A dedicated digital distribution platform built for a wines and spirits distributor.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://frisking.onrender.com",
    code: "#",
    image: friskingImg,
  },
]