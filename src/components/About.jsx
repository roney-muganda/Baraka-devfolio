// File: src/components/About.jsx
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import profilePic from "../assets/image copy.png" 

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [100, 0])

  return (
    <motion.section
      ref={ref}
      id="about"
      style={{ opacity, y }}
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated top divider */}
      <motion.div
        className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-200/80 to-transparent"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center gap-14 z-10">
        <motion.div
          className="relative md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative group"
          >
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-red-500 via-gray-500 to-red-600 opacity-30 blur-xl group-hover:opacity-50 transition duration-700"></div>
            <div className="relative p-1 bg-gradient-to-r from-red-500 to-gray-500 rounded-3xl shadow-xl">
              <img
                src={profilePic}
                alt="Roney Baraka"
                className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-2xl shadow-lg border-4 border-white"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Text content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold mb-4 text-gray-800 border-b-4 border-red-500 inline-block pb-2">
            About Me
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            I’m a{" "}
            <span className="font-semibold text-red-600">Full-Stack Developer</span>{" "}
            skilled in{" "}
            <span className="text-gray-900 font-medium">
              React, Tailwind CSS, Java, and Python
            </span>
            . I specialize in crafting scalable, high-performance applications
            with intuitive design and exceptional user experience.
          </p>

          <p className="text-gray-600 mb-8">
            My work blends creativity with logic — combining performance-driven
            engineering with clean, accessible design to build digital products
            that both inspire and deliver results.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {["React", "Tailwind", "Java", "Python", "Node.js", "REST APIs"].map(
              (skill, i) => (
                <motion.span
                  key={i}
                  className="px-4 py-2 rounded-full border border-red-500 text-red-600 font-medium text-sm hover:bg-red-500 hover:text-white transition"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>

      {/* Animated bottom divider */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-200/80 to-transparent"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.section>
  )
}
