import { motion } from "framer-motion"
import { projectsData } from "../data/projects"

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 border-b-4 border-red-500 inline-block pb-2">
            05 - My Projects
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A collection of my featured works — blending functionality, design, and performance.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
            >
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-70 group-hover:opacity-80 transition duration-500"></div>
              </div>

              {/* Content Section */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <h3 className="text-2xl font-bold mb-1">{p.title}</h3>
                <p className="text-sm text-gray-200 mb-3">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t, index) => (
                    <span
                      key={index}
                      className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-gray-200 font-semibold hover:text-red-400 transition"
                  >
                    Code →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
