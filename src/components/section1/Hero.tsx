import React from 'react';
import { motion } from 'framer-motion';
import { ShiningText, Aurora } from '../ui';
interface HeroProps {
    introFinished: boolean;
}

const Hero: React.FC<HeroProps> = ({ introFinished }) => {
    const revealVariant = {
        hidden: { y: '100%' },
        visible: {
            y: '0%',
            transition: {
                duration: 1.5,
                ease: [0.76, 0, 0.24, 1] as const
            }
        }
    };

    const containerVariant = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0
            }
        }
    };

    return (
        <section id="home" className="w-full h-screen flex flex-col justify-center items-center relative overflow-hidden bg-[#050505]">

            <div className="absolute inset-0 z-0">
                <Aurora
                    colorStops={["#00d8ff", "#7cff67", "#00d8ff"]}
                    speed={0.5}
                />
            </div>
            {/* Content */}
            <motion.div
                className="relative z-11 text-center flex flex-col items-center justify-center h-full"
                initial="hidden"
                animate={introFinished ? "visible" : "hidden"}
                variants={containerVariant}
            >

                {/* Masked Line 1*/}
                <div className="overflow-hidden mb-2 flex justify-center items-center gap-3">
                    <div className=""></div>
                    <motion.p variants={revealVariant} className="font-cabinetGrotesk text-[1.2rem] xs:text-[1.5rem] sm:text-[1.6rem] md:text-[1.65rem] lg:text-[1.6rem] text-center word text-white">
                        Hi! I'm Rudy
                    </motion.p>
                </div>

                {/* Masked Line 2*/}
                <div className="overflow-hidden">
                    <motion.h1 variants={revealVariant} className="font-cabinetGrotesk text-[2.3rem] xs:text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5.4rem] 2xl:text-[6rem] pb-2 text-center word leading-none text-white drop-shadow-glow">
                        Fresher
                    </motion.h1>
                </div>

                {/* Masked Line 3*/}
                <div className="overflow-hidden -mt-1 md:-mt-2 lg:-mt-3 pb-3">
                    <motion.h1 variants={revealVariant} className="font-cabinetGrotesk text-[2.3rem] xs:text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5.4rem] 2xl:text-[6rem] text-center word leading-none text-white drop-shadow-glow">
                        Software Developer
                    </motion.h1>
                </div>

            </motion.div>
            {/* Scroll Down Text với animation */}
            <div className="item letter-spacing-[1em] font-cabinetGrotesk lg:text-2xl text-xl cursor-default absolute bottom-[6%] right-[50%] transform translate-x-[50%]">
                <ShiningText text="scroll down" />
            </div>
        </section >
    );
};

export default Hero;
