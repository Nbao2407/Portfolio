import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { SiGithub, SiGmail } from "react-icons/si";
import { TextHoverEffect } from './text-hover-effect';
import Flood from '../effects/Flood';
const Footer = () => {
    const ref = useRef<HTMLElement>(null!);
    const isInView = useInView(ref, { once: false, margin: "-10%" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
    };

    const links = {
        resources: [
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Works", href: "#projects" },
            { name: "Contact", href: "#contact" },
        ],
        social: [
            { name: "GitHub", href: "https://github.com/Nbao2407", icon: SiGithub },
            { name: "Email", href: "mailto:ngobao.work@protonmail.com", icon: SiGmail },
        ],
        company: [
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
            { name: "Cookie Policy", href: "#" },
        ]
    };

    return (
        <motion.footer
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="w-full relative bg-[#050505] text-white overflow-visible py-20 min-h-screen flex flex-col justify-end"
        >
            <Flood color="#050505" height="120px" sectionRef={ref} reverse={true} />
            {/* Massive Background Text - "Rudy" */}
            {/* Massive Header Text - "RUDY" */}
            <div className="w-full h-[50vh] md:h-[40vh] flex items-center justify-center opacity-80 pt-20">
                <TextHoverEffect text="RUDY" />
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-12 pb-10">
                {/* Main Grid Content */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-8 mb-20">

                    {/* Column 1: Brand / Description */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-6">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            {/* Simple Logo Placeholder */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 17L12 22L22 17" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 12L12 17L22 12" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold font-cabinetGrotesk">Rudy's Portfolio</h3>
                            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                                Crafting digital experiences with passion and precision. Based in Vietnam.
                            </p>
                        </div>
                    </motion.div>

                    {/* Column 2: Resources / Navigation */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-6">
                        <h4 className="text-white font-medium text-lg">Detailed</h4>
                        <ul className="space-y-4">
                            {links.resources.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-neutral-500 hover:text-white transition-colors duration-300 text-sm">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 3: Socials */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-6">
                        <h4 className="text-white font-medium text-lg">Social</h4>
                        <ul className="space-y-4">
                            {links.social.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>


                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
