import { title } from "framer-motion/client";
import TimelineSection  from "./TimelineSection";

export default function Experience() {
    const experiences = [
        {
            period: "September 2021 - Present",
            title: "Self Employed",
            subtitle: "Fortline Technologies",
            description:
               "Worked on 30+ projects as a Full Stack Developer. Over 2000 hours developing scalable systems using React, Node.js, Python, and Java "
        },
        {
            period: "September 2022 - Present",
            title: "Freelancer",
            subtitle: "Remote",
            description: 
                "Helped NGOs and startup improve their technological perfomance through full-stack and AI-driven solutions using React, and REST APIs."
        }
    ]

    return <TimelineSection title="My Experience" items={experiences}/>
}