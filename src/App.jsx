import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Achievements from "./components/Achievements"
import GithubSection from "./components/GithubSection"
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
                <Experience />
                <Achievements />
                <GithubSection />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}