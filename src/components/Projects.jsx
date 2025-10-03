const projects = [
    { title: "Portfolio website", description: "React + Tailwind, deployed on Render", link:"#" },
    { title: "E-commerce App", description: "MERN stack with Stripe integration", link:"#"},
    { title: "Real-time Chat", description: "Socket.io + Node.js", link:"#"}
]

export default function Projects() {
    return(
        <section id="projects" className="container mx-auto px-6 py-14 bg-gray-50">
            <h2 className= "text-3xl font-semibold mb-6">Projects</h2>
            <div className="gird gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((p, i) => (
                  <article key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                     <h3 className="text-xl font-bold">{p.title}</h3>
                     <p className="mt-2 text-gray-600">{p.description}</p>
                     <a href={p.link} className="mt-4 inline-block text-blue-600">View</a>
                  </article>
                ))}
            </div>
        </section>
    )
}