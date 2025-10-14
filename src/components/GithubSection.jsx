import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function GithubSection() {
  const username = "roney-muganda";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [contributions, setContributions] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const target = 1200;
      const increment = Math.ceil(target / 60);
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setContributions(start);
      }, 30);
    }
  }, [isInView]);

  return (
    <section
      id="github"
      ref={ref}
      className="relative py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 border-b-4 border-red-500 inline-block pb-2">
            04 - GitHub Contributions
          </h2>
          <p className="text-gray-600 mt-3 md:mt-4 max-w-2xl mx-auto text-base md:text-lg">
            A snapshot of my open-source activity, coding focus, and projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 justify-items-center">
          {[
            `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=graywhite&title_color=ef4444&icon_color=ef4444&text_color=1f2937`,
            `https://streak-stats.demolab.com?user=${username}&theme=graywhite&ring=ef4444&fire=ef4444&currStreakLabel=ef4444`,
          ].map((src, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md p-3 border border-gray-200 w-full max-w-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                rotateX: 4,
                rotateY: -4,
                scale: 1.02,
                transition: { type: "spring", stiffness: 200 },
              }}
            >
              <img
                src={src}
                alt="GitHub Stats"
                className="rounded-xl w-full"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-12 bg-white rounded-2xl shadow-md border border-gray-200 p-3 md:p-4 max-w-2xl mx-auto"
        >
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=graywhite&title_color=ef4444&text_color=1f2937`}
            alt="Top Languages"
            className="w-full rounded-xl"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-12 bg-white rounded-2xl shadow-md border border-gray-200 p-3 md:p-4 max-w-3xl mx-auto hover:shadow-lg transition transform"
        >
          <motion.img
            src={`https://ghchart.rshah.org/ef4444/${username}`}
            alt={`${username}'s GitHub Contribution Chart`}
            className="w-full rounded-xl"
            loading="lazy"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-12"
        >
          <h3 className="text-4xl md:text-5xl font-extrabold text-red-600 drop-shadow-sm">
            {contributions.toLocaleString()}+
          </h3>
          <p className="text-gray-700 mt-1 md:mt-2 font-medium text-base md:text-lg">
            Total Contributions and Commits
          </p>
        </motion.div>

        <motion.div
          className="mt-8 md:mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
        >
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-red-600 to-gray-600 text-white px-7 py-3 rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition"
          >
            Visit My GitHub →
          </a>
        </motion.div>
      </div>
 
      <motion.div
        className="absolute top-10 left-10 w-60 h-60 bg-red-500/20 rounded-full blur-3xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-64 h-64 bg-gray-500/20 rounded-full blur-3xl"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
