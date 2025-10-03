import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <main className="flex-grow">
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}