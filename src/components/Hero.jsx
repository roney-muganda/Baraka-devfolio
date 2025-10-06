import { useEffect, useState } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Hi, I’m Roney Baraka"

  // Typewriter effect
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1))
      i++
      if (i === fullText.length) clearInterval(interval)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  // Parallax motion
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [0, window.innerHeight], [10, -10])
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-10, 10])

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }

  return (
    <section
      className="relative overflow-hidden flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background blobs with parallax */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"
        style={{ x: rotateY, y: rotateX }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-purple-500/30 rounded-full blur-3xl top-10 right-10"
        style={{ x: rotateX, y: rotateY }}
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-yellow-300">{displayedText}</span>
          <span className="animate-pulse">|</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          I'm a fullstack developer with React, Tailwind, Java and Python. I focus on perfomance, accessibilty, clean design.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a
            href="#projects"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
          >
            View My Work
          </a>
        </motion.div>
      </div>

      {/* Scroll-down indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white opacity-70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <a href="#about" aria-label="Scroll down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-auto mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          <span className="text-sm tracking-wide">Scroll Down</span>
        </a>
      </motion.div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-indigo-700 to-transparent"></div>
    </section>
  )
}
