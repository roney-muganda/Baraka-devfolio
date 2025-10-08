import { motion, useScroll, useTransform } from "framer-motion"
import { i } from "framer-motion/client"
import { useRef } from "react"

export default function TimelineSection({ title, items }) {
    const ref = useRef(null)
    const { scrollYProgress }  = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"]
    })

    const lineHeight =  useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <section
          ref={ref}
          className="relative container mx-auto px-6 py-20 md:py-28"
        >
            <h2 className="text-4xl font-extrabold mb-16 text-gray-800 border-b-4 border-red-500 inline-block pb-2">
                {title}
            </h2>

            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-28 bottom-0 w-[2px] bg-gray-300">
                <motion.div 
                  style={{ height: lineHeight }}
                  className="absolute top-0 left-0 w-[2px] bg-gradient-to-b from-red-500 to-gray-600"
                />
            </div>   

            <div className="flex flex-col gap-20">
                 {items.map ((item, i) => (
                    <motion.div
                       key={i}
                       className={`relative md:w-1/2 ${
                       i % 2 === 0 ? "md:self-start" : "md:self-end"
                       }`}
                       initial={{ opacity: 0, y: 40 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.6, delay: i * 0.1 }}
                       viewport={{ once: true}}
                    >
                        <div
                            className={`absolute w-4 h-4 rounded-full bg-red-600 border-4 border-white shadow-md ${
                              i % 2 === 0
                                ? "left-[-2.35rem] md:left-auto md:right-[-0.5rem]"
                                : "left-[-2.35rem] md:left-[-0.5rem]"
                            }`}
                        />
                        <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                            <div className="text-sm font-semibold bg-gray-800 text-white inline-block px-3 py-1 rounded mb-2">
                                {item.period}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                            <p className="text-red-600 font-semibold mb-2 ">{item.subtitle}</p>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                    </motion.div>
                 ))}
            </div>
        </section>
    )
}