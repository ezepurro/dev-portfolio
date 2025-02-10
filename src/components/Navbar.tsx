import { useState } from 'react';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu: () => void = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className=" p-4 fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    {'<Eze />'}
                </div>

                {/* Desktop */}
                <div className="hidden md:flex space-x-4">
                    <a href="#home" className="text-white px-4 py-2 rounded">Home</a>
                    <a href="#about" className="text-white px-4 py-2 rounded">About</a>
                    <a href="#skills" className="block px-4 py-2">Skills</a>
                    <a href="#projects" className="block px-4 py-2">Projects</a>
                    <a href="#contact" className="text-white px-4 py-2 rounded">Contact</a>
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-white"
                    onClick={toggleMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-600 text-white absolute top-15 left-0 right-0 bottom-0 z-50">
                    <a href="#" className="block px-4 py-2">Home</a>
                    <a href="#about" className="block px-4 py-2">About</a>
                    <a href="#skills" className="block px-4 py-2">Skills</a>
                    <a href="#projects" className="block px-4 py-2">Projects</a>
                    <a href="#contact" className="block px-4 py-2">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
