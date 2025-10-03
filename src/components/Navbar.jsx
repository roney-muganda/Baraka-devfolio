import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return(
        <header className="bg-white shadow">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <a href="/" className="text-2x1 font-bold">Roney Baraka</a>

                <nav className="hidden md:flex space-x-6 text-gray-700">
                    <a href="#about" className="hover:text-blue-600">About</a>
                    <a href="#projects" className="hover:text-blue-600">Projects</a>
                    <a href="#contact" className="hover:text-blue-600">Contact</a>
                </nav>

                <button className="md:hidden p-2 rounded hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                    {open ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18"/>
                        </svg>
                    )}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-white border-t">
                    <a href="#about" className="block px-6 py-3">About</a>
                    <a href="#projects" className="block px-6 py-3">Projects</a>
                    <a href="#contact" className="block px-6 py-3">Contact</a>
                </div>
            )}
        </header>
    )
}