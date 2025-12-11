import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Flood, LogoLoop, ScrollVelocity, WordPullUp } from '../ui';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiSupabase, SiGithub, SiVuedotjs, SiDotnet } from "react-icons/si";
const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
    { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
    { node: <SiVuedotjs />, title: "Vue.js", href: "https://vuejs.org" },
    { node: <SiDotnet />, title: "ASP.NET", href: "https://dotnet.microsoft.com/apps/aspnet" },
];
const AboutMe = () => {
    const ref = useRef<HTMLElement>(null!);
    const isInView = useInView(ref, { once: false, margin: "-10%" });



    const textVariants = {
        initial: { opacity: 0, y: 30 },
        enter: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const }
        }
    };

    return (
        <section id="about" ref={ref} className="w-full relative overflow-visible bg-[#111111] px-6 md:px-12 py-25 flex flex-col justify-between">
            <Flood color="#111111" height="120px" sectionRef={ref} />
            {/* Content Container - Use standard margin instead of forced spacing */}
            <div className="w-full h-[calc(70vh-200px)] flex flex-col justify-center items-center ">
                <div className="max-w-5xl text-center z-10 flex flex-col gap-8">
                    <WordPullUp
                        className="text-white text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] tracking-tight font-cabinetGrotesk drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                        words="I'm Rudy – a Fresher Software & Web Developer passionate about crafting dynamic web experiences. I'm currently learning and growing as a developer."
                    />

                    <WordPullUp
                        className="text-neutral-400 text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                        words="I specialize in developing SaaS platforms, and ecommerce websites, using technologies like React.js, Node.js and .NET"
                    />
                </div>
            </div>

            {/*Bar*/}
            <motion.div
                variants={textVariants}
                initial="initial"
                animate={isInView ? "enter" : "initial"}
                className="w-full z-10 grid grid-cols-1 md:grid-cols-3 items-end text-neutral-500 text-sm font-medium border-t border-white/10 pt-6 mt-8"
            >

            </motion.div>
            <div className="w-full mb-2 mt-2">
                <LogoLoop
                    logos={techLogos}
                    speed={80}
                    direction="left"
                    logoHeight={48}
                    gap={40}
                    hoverSpeed={20}
                    fadeOut
                    fadeOutColor="#111111"
                    className="text-neutral-200"
                />
            </div>
            {/*Bar*/}
            <motion.div
                variants={textVariants}
                initial="initial"
                animate={isInView ? "enter" : "initial"}
                className="w-full z-10 grid grid-cols-1 md:grid-cols-3 items-end text-neutral-500 text-sm font-medium border-t border-white/10 pt-6 mt-8"
            >
            </motion.div>
            <div className="w-full mb-2 mt-2">
                <ScrollVelocity
                    texts={[' Fresher Software Developer ', ' Fresher Web Developer ']}
                    velocity={100}
                    className="text-white"
                />
            </div>
            {/*Bar*/}
            <motion.div
                variants={textVariants}
                initial="initial"
                animate={isInView ? "enter" : "initial"}
                className="w-full z-10 grid grid-cols-1 md:grid-cols-3 items-end text-neutral-500 text-sm font-medium border-t border-white/10 pt-6 mt-8"
            >
            </motion.div>
            {/* Center: Scroll Indicator */}
            <div className="flex flex-col items-center justify-center gap-3 px-2 mx-20 mt-12">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce text-neutral-400">
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                </svg>
                <span className="uppercase tracking-[0.2em] text-[10px] text-neutral-500">Scroll to Explore</span>
            </div>
        </section >
    );
};

export default AboutMe;
