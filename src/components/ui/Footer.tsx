import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Tiles, Flood } from '.';
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

const Footer = () => {
    const ref = useRef<HTMLElement>(null!);
    const isInView = useInView(ref, { once: false, margin: "-10%" });

    return (
        <footer ref={ref} className="w-full h-screen relative bg-[#111111] text-white py-20 overflow-visible">
            {/* Background Tiles */}
            <div className="absolute inset-0 z-0 opacity-20">
                <Tiles
                    rows={50} // Increased for better coverage
                    cols={100} // Increased for full width coverage
                    className="w-full h-screen max-h-70vh"
                    tileSize="lg"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center gap-12 pt-20">

                {/* Headline */}
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-bold font-cabinetGrotesk tracking-tight">
                        Let's work together.
                    </h2>
                    <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Have a project in mind? Let's create something amazing together.
                    </p>
                </div>

                {/* Contact Button */}
                <a
                    href="mailto:rudy@example.com" // Replace with real email if known, staying generic for now
                    className="px-8 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform duration-300"
                >
                    Get in touch
                </a>

                {/* Socials */}
                <div className="flex items-center gap-8 mt-4">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors transform hover:scale-110">
                        <SiLinkedin className="w-6 h-6" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors transform hover:scale-110">
                        <SiWhatsapp className="w-6 h-6" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors transform hover:scale-110">
                        <SiGithub className="w-6 h-6" />
                    </a>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-neutral-800" />

                {/* Bottom Footer */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
                    <p>&copy; {new Date().getFullYear()} Rudy. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* CSS Variable for Tile Hover color (if needed globally or scoped) */}
            <style>{`
                :root {
                    --tile: #333333;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
