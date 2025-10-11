import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      period: "September 2021 - Present",
      title: "Self Employed",
      subtitle: "Fortline Technologies",
      description:
        "Worked on 30+ projects as a Full Stack Developer. Over 2000 hours developing scalable systems using React, Node.js, Python, and Java.",
    },
    {
      period: "September 2022 - Present",
      title: "Freelancer",
      subtitle: "Remote",
      description:
        "Helped NGOs and startups improve their technological performance through full-stack and AI-driven solutions using React and REST APIs.",
    },
  ];

  return (
    <section id="experience" className="relative py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 border-b-4 border-red-500 inline-block pb-2">
            01 - My Experience
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A quick look at my professional journey, roles, and the milestones
            that shaped my skills.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative" ref={ref}>
          {/* Static gray line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full"></div>

          {/* Scroll-fill red/gray gradient line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 rounded-full bg-gradient-to-b from-red-500 to-gray-500 origin-top"
            style={{ height: lineHeight }}
          />

          {/* Timeline Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:pl-[55%]" : "md:pr-[55%]"
                }`}
              >
                {/* Dot */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 border-4 border-white rounded-full shadow-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Card */}
                <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-2xl hover:scale-105 transition transform">
                  <div className="text-sm font-semibold text-white bg-gray-800 inline-block px-3 py-1 rounded">
                    {exp.period}
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-gray-800">
                    {exp.title}
                  </h3>
                  <p className="text-red-600 font-medium">{exp.subtitle}</p>
                  <p className="text-gray-700 mt-2">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
