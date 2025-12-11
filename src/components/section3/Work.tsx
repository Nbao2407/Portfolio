import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Flood, WordPullUp } from '../ui';

import project1 from '../../assets/Group 3.png';
import project2 from '../../assets/Group 2.png';
import project3 from '../../assets/Portfolio.png';
import project4 from '../../assets/BTN.png';

const Work = () => {
    const ref = useRef<HTMLElement>(null!);
    const isInView = useInView(ref, { once: false, margin: "-20%" });

    const projects = [
        {
            id: 1,
            title: "ShutDB",
            category: "Application Design / Development",
            image: project1,
            link: "#"
        },
        {
            id: 2,
            title: "SnapBite",
            category: "Ecommerce",
            image: project2,
            link: "#"
        },
        {
            id: 3,
            title: "Portfolio",
            category: "Web Design / Development",
            image: project3,
            link: "#"
        },
        {
            id: 4,
            title: "BTN's Shop",
            category: "Ecommerce",
            image: project4,
            link: "#"
        }
    ];

    return (
        <section id="projects" ref={ref} className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-visible bg-neutral-100 pt-48 pb-24  px-4 md:px-12">
            <Flood color="#f5f5f5" height="200px" sectionRef={ref} />
            {/* Header Section */}
            <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
                <div className="flex flex-col gap-4">
                    <WordPullUp
                        className="text-black text-4xl md:text-5xl font-cabinetGrotesk leading-tight"
                        words="Discover my latest work and creative solutions that bring ideas to life"
                    />
                </div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="w-4 h-4 rounded-full border border-black/30"
                />
            </div>

            {/* Projects Grid */}
            <div className="w-full max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.3, ease: [0.76, 0, 0.24, 1] }}
                        className="flex flex-col gap-4 group cursor-pointer"
                    >
                        {/* Category Label*/}
                        <div className="mb-4">
                            <WordPullUp
                                className="text-sm text-neutral-400 font-medium tracking-wide uppercase"
                                words={project.category}
                            />
                        </div>

                        {/* Image Container */}
                        <div className="w-full aspect-[4/3] overflow-hidden bg-neutral-200 relative mb-4">
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                            />

                            {/* Project Overlay (Title on Hover) */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <WordPullUp
                                    className="text-3xl font-medium text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                    words={project.title}
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
export default Work;