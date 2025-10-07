// File: src/components/Hero.jsx
import { useEffect, useState } from "react"
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence
} from "framer-motion"
import profilePic from "../assets/image copy.png" // <-- add your image here

// Rotating job titles
function DynamicTitles() {
  const titles = [
    "Frontend Developer",
    "Backend Developer",
    "UI Engineer",
    "Creative Designer",
  ]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % titles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={titles[index]}
        className="block italic text-yellow-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {titles[index]}
      </motion.span>
    </AnimatePresence>
  )
}

// Floating particle background
function Particles() {
  const dots = Array.from({ length: 30 })
  return (
    <div className="absolute inset-0 overflow-hidden">
      {dots.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -15, 15, 0],
            x: [0, 10, -10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Animated "Hire Me" modal
function HireMeModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white text-gray-800 rounded-2xl shadow-xl p-8 w-11/12 max-w-md relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-600">
              Hire Me
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-red-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const [isModalOpen, setModalOpen] = useState(false)
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
      className="relative overflow-hidden flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-gray-800 to-red-600 text-white"
      onMouseMove={handleMouseMove}
    >
      <Particles />

      {/* Animated blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"
        style={{ x: rotateY, y: rotateX }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-red-500/30 rounded-full blur-3xl top-10 right-10"
        style={{ x: rotateX, y: rotateY }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        {/* Profile picture */}
        <motion.img
          src={profilePic}
          alt="Roney Baraka"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white shadow-lg object-cover mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Typewriter heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-yellow-300">{displayedText}</span>
          <span className="animate-pulse">|</span>
        </motion.h1>

        {/* Rotating titles */}
        <motion.div
          className="mt-6 h-8 overflow-hidden text-lg md:text-xl text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <DynamicTitles />
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a
            href="#projects"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
          >
            View My Work
          </a>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-block bg-gradient-to-r from-red-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
          >
            Hire Me
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
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

      {/* Bottom overlay */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>

      {/* Hire Me modal */}
      <HireMeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
