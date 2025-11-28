import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import hashThumb from "../assets/hashgraph-thumb.png"; 
export default function Achievements() {
  const ref = useRef(null);
  const [openCert, setOpenCert] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const achievements = [
    {
      period: "2023",
      title: "Certified Scrum Master",
      description:
        "Achieved Scrum Master certification to enhance project management and agile development skills.",
      link: null,
      thumbnail: null
    },
    {
      period: "2022",
      title: "Modcom Software Development Certificate",
      description:
        "Earned a Software Development certificate from Modcom Technical Institute.",
      link: null,
      thumbnail: null
    },
    {
      period: "2025",
      title: "Hedera HashGraph Certification",
      description:
        "Completed Hedera Hashgraph developer certification.",
      link: "/HashGraph_Certification.pdf",   
      thumbnail: hashThumb                     
    }
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
            Recognition, certification, and milestones I've achieved along my professional journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative" ref={ref}>
          
          {/* Static Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full"></div>

          {/* Animated Scroll Fill */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 rounded-full bg-gradient-to-b from-gray-500 to-red-500 origin-top"
            style={{ height: lineHeight }}
          />

          {/* Achievement Items */}
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

                  <h3 className="mt-3 text-2xl font-bold text-gray-800">{a.title}</h3>
                  <p className="text-gray-700 mt-2">{a.description}</p>

                  {/* Thumbnail Preview */}
                  {a.thumbnail && (
                    <img
                      src={a.thumbnail}
                      alt="Certificate Thumbnail"
                      onClick={() => setOpenCert(true)}
                      className="mt-4 w-40 rounded-lg shadow cursor-pointer hover:opacity-80 transition"
                    />
                  )}

                  {/* View Button */}
                  {a.link && (
                    <button
                      onClick={() => setOpenCert(true)}
                      className="mt-3 text-red-600 font-semibold hover:text-red-800 underline"
                    >
                      View Certificate →
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {openCert && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl max-w-4xl w-full p-4 shadow-xl relative"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-xl"
                onClick={() => setOpenCert(false)}
              >
                ✕
              </button>

              <iframe
                src="/HashGraph_Certification.pdf"   // 👈 Correct PDF path
                className="w-full h-[75vh] rounded-lg"
                title="Certificate Viewer"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
