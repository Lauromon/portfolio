import NavButton from "./NavButton"
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 items-center bg-transparent p-4 w-full z-100 backdrop-blur-sm">
            {/* <div className="flex items-center flex-shrink-0 text-white mr-6">
            
                <span className="font-semibold text-xl tracking-tight">Lauromon</span>
            </div> */}
            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
                >
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto transition-all duration-300 ${isOpen ? 'block' : 'hidden'} lg:block`}>
                <ul className="text-sm justify-center lg:flex-grow flex flex-col lg:flex-row lg:items-center">
                    <li>
                        <NavButton target="#home" onClick={() => setIsOpen(false)}>Home</NavButton>
                    </li>
                    <li>
                        <NavButton target="#experience" onClick={() => setIsOpen(false)}>Experience</NavButton>
                    </li>
                    <li>
                        <NavButton target="#proyects" onClick={() => setIsOpen(false)}>Proyects</NavButton>
                    </li>
                    <li>
                        <NavButton target="#about" onClick={() => setIsOpen(false)}>About Me</NavButton>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar