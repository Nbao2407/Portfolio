import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuToggleIcon } from '../ui/menu-toggle-icon';

interface NavbarProps {
    introFinished: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ introFinished }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Initial Navbar - Absolute (Scrolls with page) */}
            <AnimatePresence>
                {!scrolled && (
                    <motion.nav
                        className="w-full h-20 flex justify-between items-center px-10 absolute top-0 z-[150]"
                        initial={{ opacity: 0, y: -150 }}
                        animate={introFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
                        exit={{ opacity: 0, y: -150, transition: { duration: 0.5 } }}
                        transition={{
                            duration: 0.8,
                            ease: [0.76, 0, 0.24, 1],
                            delay: 0.35
                        }}
                    >
                        {/* Empty Logo div to maintain spacing logic (Logo is in Socials) */}
                        <div className="font-cabinetGrotesk text-2xl font-bold border-current p-1 leading-none select-none cursor-pointer z-[160] mix-blend-difference text-white opacity-0">
                            R
                        </div>

                        {/* Desktop Links */}
                        <ul className="flex space-x-8 font-medium text-sm text-gray-200">
                            <li className="cursor-pointer hover:text-gray-400 transition-colors"><a href="#home">Home</a></li>
                            <li className="cursor-pointer hover:text-gray-400 transition-colors"><a href="#about">About</a></li>
                            <li className="cursor-pointer hover:text-gray-400 transition-colors"><a href="#projects">Works</a></li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Scrolled Menu Button - Fixed (Appears when scrolled) */}
            <AnimatePresence>
                {scrolled && (
                    <motion.div
                        className="fixed top-0 right-0 p-10 z-[160] h-20 flex items-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="mix-blend-difference text-white   rounded-full  bg-[#cdcdcd] p-2"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <MenuToggleIcon open={menuOpen} className="w-10 h-10" />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black z-[140] flex flex-col items-center justify-center"
                    >
                        <ul className="flex flex-col items-center space-y-8 font-cabinetGrotesk text-4xl font-bold text-white">
                            <motion.li
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                            </motion.li>
                            <motion.li
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                            </motion.li>
                            <motion.li
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <a href="#projects" onClick={() => setMenuOpen(false)}>Works</a>
                            </motion.li>
                            <motion.li
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
