import { title } from "framer-motion/client";
import TimelineSection from "./TimelineSection";

export default function Achievements() {
    const achievements = [
        {
            period: "2023",
            title: "Certified Scrum Master",
            subtitle: "",
            description: 
                "Achieved Scrum Master certification to enhance project management and agile development skills."
        },
        {
            period: "2022",
            title: "Modcom Software Development Certificate",
            subtitle: "",
            description: 
                "Earned a Software Development certificate from Modcom Technical Institute."
        }
    ]

    return <TimelineSection title="My Achievements" items={achievements}/>
}