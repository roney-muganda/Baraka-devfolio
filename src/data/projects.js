import portfolioImg from "../assets/portfolioimg.jpeg"
import chatImg from "../assets/chat.jpeg"
import netbazeImg from "../assets/NetBaze.png" 

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
    title: "Portfolio Website",
    description: "Modern personal portfolio built with React + Tailwind.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#",
    code: "#",
    image: portfolioImg,
  },
  {
    title: "Real-time Chat App",
    description: "Realtime messaging app using Socket.io, Node.js, and Express backend.",
    tech: ["Socket.io", "Node.js", "Express", "React"],
    link: "#",
    code: "#",
    image: chatImg,
  },
]