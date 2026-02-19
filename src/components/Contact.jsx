import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -z-10 opacity-60 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-gray-800 border-b-4 border-red-500 inline-block pb-2">
              Let's Connect
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Details</h3>
              
              <div className="space-y-6">
                {/* Email Item */}
                <a 
                  href="mailto:barakaroney001@gmail.com" 
                  className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-red-50 hover:shadow-md transition duration-300 group"
                >
                  <div className="bg-white p-3 rounded-full shadow-sm text-red-500 group-hover:scale-110 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">Email Me</p>
                    <p className="text-gray-800 font-medium">barakaroney001@gmail.com</p>
                  </div>
                </a>

                {/* LinkedIn Item */}
                <a 
                  href="https://linkedin.com/in/yourprofile" // Update this with your actual LinkedIn URL
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-md transition duration-300 group"
                >
                  <div className="bg-white p-3 rounded-full shadow-sm text-blue-600 group-hover:scale-110 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">Connect</p>
                    <p className="text-gray-800 font-medium">LinkedIn Profile</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Right Side: Simple Form (Visual Only) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <form action="mailto:barakaroney001@gmail.com" method="post" encType="text/plain">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:bg-white focus:outline-none transition" placeholder="John Doe" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:bg-white focus:outline-none transition" placeholder="How can I help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition duration-300 shadow-lg hover:shadow-xl">
                  Send Message
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}