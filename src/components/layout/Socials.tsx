import React from 'react';
import { motion } from 'framer-motion';

interface SocialsProps {
    introFinished: boolean;
}

const Socials: React.FC<SocialsProps> = ({ introFinished }) => {
    return (
        <>
            {/* Logo - Aligned with Navbar */}
            <motion.div
                className="absolute left-10 top-0 h-20 flex items-center z-50"
                initial={{ opacity: 0, y: -20 }}
                animate={introFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1],
                    delay: 0.35
                }}
            >
                <div className="font-cabinetGrotesk text-2xl font-bold border-2 border-current p-1 leading-none select-none cursor-pointer mix-blend-difference text-white">
                    R
                </div>
            </motion.div>

            {/* Socials Sidebar */}
            <motion.div
                className="absolute left-10 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center gap-80 z-50"
                initial={{ opacity: 0, x: -50 }}
                animate={introFinished ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1],
                    delay: 0.5
                }}
            >
                <div className="relative h-[40vh] w-[1px] bg-gray-400">
                    {/* Top Dot */}
                    <div className=" absolute  bottom-0 right-[50%] transform translate-x-[50%] h-[.3rem] bg-white rounded-[50%] w-[.3rem] "></div>
                    {/* Bottom Dot */}
                    <div className=" absolute top-0 right-[50%] transform translate-x-[50%] h-[.3rem] bg-white rounded-[50%] w-[.3rem] "></div>
                </div>

                {/* Icons Container */}
                <div className="flex flex-col gap-6">
                    {/* LinkedIn */}
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className="w-6 h-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                        </svg>
                    </a>

                    {/* WhatsApp */}
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="zalo" className="w-6 h-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                        </svg>
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/Nbao2407" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="w-6 h-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-5.9-.3-22.5-.5-44.1-67.9 14.8-82.2-32.3-82.2-32.3-11.7-29.7-28.6-37.6-28.6-37.6-22.1-15.1 1.7-14.8 1.7-14.8 24.4 1.7 37.2 25.1 37.2 25.1 21.7 37.2 57.1 26.6 70.9 20.3 2.2-15.7 8.5-26.5 15.4-32.6-54.2-6.1-111.1-27.1-111.1-120.5 0-26.6 9.5-48.3 25.2-65.5-2.5-6.1-10.9-31 2.4-64.8 0 0 20.5-6.5 67.2 25.1 19.5-5.4 40.5-8.2 61.2-8.2 20.6 0 41.7 2.8 61.2 8.2 46.6-31.6 67.1-25.1 67.1-25.1 13.3 33.8 4.9 58.7 2.4 64.8 15.7 17.2 25.2 38.9 25.2 65.5 0 93.6-57 114.2-111.4 120.3 8.7 7.5 16.5 21.7 16.5 43.7 0 31.6-.3 57-.3 64.7 0 6.5 4.6 14.5 17.4 12.1C426.3 457.8 496 363 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.8-5.2-1.6-1.6-3.9-2.3-5.4-1zm-3.2-6.3c-.5 1.1-.3 2.7 1.3 3.6 1.7.9 4.3.5 4.8-.6.6-1.1.4-2.7-1.2-3.6-1.7-.9-4.5-.4-5.1.6zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                        </svg>
                    </a>

                </div>
            </motion.div>
        </>
    );
};

export default Socials;
