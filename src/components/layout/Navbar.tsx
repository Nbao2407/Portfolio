import React from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
    introFinished: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ introFinished }) => {
    return (
        <motion.nav
            className="w-full h-20 flex justify-between items-center px-10 absolute top-0 z-150"
            initial={{ opacity: 0, y: -150 }}
            animate={introFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
            transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.35
            }}
        >
            {/* Logo */}
            <div className="font-cabinetGrotesk text-2xl font-bold border-2 border-white p-1 leading-none select-none cursor-pointer text-white">
                R
            </div>

            {/* Links */}
            <ul className="flex space-x-8 font-medium text-sm text-gray-200">
                <li className="cursor-pointer hover:text-gray-400 transition-colors">Home</li>
                <li className="cursor-pointer hover:text-gray-400 transition-colors">About</li>
                <li className="cursor-pointer hover:text-gray-400 transition-colors">Works</li>
            </ul>
        </motion.nav>
    );
};

export default Navbar;
