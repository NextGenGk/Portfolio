import React from "react";

function Navbar () {
    return (
        <nav className="relative blur-none shadow-2xs py-4 w-full z-10">
            <div className="container mx-auto flex justify-between items-center px-10">
                <div className="text-black text-2xl font-bold">Mr React</div>
                <ul className="flex space-x-4 mx-10">
                    <li><a href="#home" className="text-black hover:text-gray-700 px-4">Home</a></li>
                    <li><a href="#about" className="text-black hover:text-gray-700 px-4">About</a></li>
                    <li><a href="#services" className="text-black hover:text-gray-700 px-4">Services</a></li>
                    <li><a href="#contact" className="text-black hover:text-gray-700 px-4">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;