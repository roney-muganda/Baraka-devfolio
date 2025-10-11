import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Achievements() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const achievements = [
    {
      period: "2023",
      title: "Certified Scrum Master",
      subtitle: "",
      description:
        "Achieved Scrum Master certification to enhance project management and agile development skills.",
    },
    {
      period: "2022",
      title: "Modcom Software Development Certificate",
      subtitle: "",
      description:
        "Earned a Software Development certificate from Modcom Technical Institute.",
    },
  ];

  return (
    <section id="achievements" className="relative py-24 bg-gray-50">
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
            03 - My Achievements
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Recognition, certification, and milestones I've achieved along my
            professional journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative" ref={ref}>
          {/* Static gray line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full"></div>

          {/* Scroll-fill red/gray gradient line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 rounded-full bg-gradient-to-b from-gray-500 to-red-500 origin-top"
            style={{ height: lineHeight }}
          />

          {/* Timeline Items */}
          <div className="space-y-16">
            {achievements.map((a, index) => (
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
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-600 border-4 border-white rounded-full shadow-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Card */}
                <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-2xl hover:scale-105 transition transform">
                  <div className="text-sm font-semibold text-white bg-red-600 inline-block px-3 py-1 rounded">
                    {a.period}
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-gray-800">
                    {a.title}
                  </h3>
                  <p className="text-gray-700 mt-2">{a.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
