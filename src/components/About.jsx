import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import profilePic from "../assets/image copy.png"

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  })
  const [showModal, setShowModal] = useState(false)

  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [100, 0])

  return (
    <motion.section
      ref={ref}
      id="about"
      style={{ opacity, y }}
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Soft background gradients */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-200/80 to-transparent"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content */}
      <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center gap-14 z-10">
        {/* === Left: Text === */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
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
            . I specialize in building scalable, high-performance applications
            with intuitive design and exceptional user experience.
          </p>
          <p className="text-gray-600 mb-8">
            My work combines creativity and logic — merging performance-driven
            engineering with clean, accessible design to craft digital products
            that inspire and deliver real-world impact.
          </p>

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

        {/* === Right: Profile & CV === */}
        <motion.div
          className="relative md:w-1/2 flex flex-col items-center justify-center space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Floating image with glow frame */}
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

          {/* Download CV button with arrow animation */}
          <motion.button
            onClick={() => setShowModal(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative flex items-center gap-2 bg-gradient-to-r from-red-600 to-gray-700 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition overflow-hidden group"
          >
            <span>Download My CV</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-white transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>

      {/* === Modal Preview === */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-gray-900/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/90 rounded-2xl shadow-2xl w-11/12 md:w-3/4 lg:w-1/2 p-6 relative backdrop-blur-xl border border-gray-200"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl font-bold"
              >
                ✕
              </button>

              <h3 className="text-xl font-semibold mb-4 text-gray-800">My CV Preview</h3>
              <iframe
                src="/Roney_Baraka_CV.pdf"
                title="Roney Baraka CV"
                className="w-full h-[70vh] rounded-lg border border-gray-300"
              ></iframe>

              <div className="mt-6 text-right">
                <a
                  href="/Roney_Baraka_CV.pdf"
                  download="Roney_Baraka_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-red-600 to-gray-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition"
                >
                  Download PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom soft fade */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-200/80 to-transparent"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.section>
  )
}
 