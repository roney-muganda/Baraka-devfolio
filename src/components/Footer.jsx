import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand / Name */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">Roney Baraka</h3>
            <p className="text-sm text-gray-400 mt-1">Full-Stack Developer • Building the Future</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href="https://github.com/roney-muganda" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors">LinkedIn</a>
            <a href="mailto:barakaroney001@gmail.com" className="hover:text-red-500 transition-colors">Email</a>
          </div>
        </div>

        {/* Copyright & Dynamic Year */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          <p>© {currentYear} Roney Baraka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}