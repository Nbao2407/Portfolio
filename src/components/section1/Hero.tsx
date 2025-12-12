import React from 'react';
import { motion } from 'framer-motion';
import { ShiningText, Aurora } from '../ui';
import heroAvatar from '../../assets/hero_avatar.png';
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

    const imageVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.5,
                ease: [0.76, 0, 0.24, 1] as const,
                delay: 0.2
            }
        }
    };

    const containerVariant = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5
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
                className="relative z-10 flex flex-col items-center justify-center gap-6"
                initial="hidden"
                animate={introFinished ? "visible" : "hidden"}
                variants={containerVariant}
            >
                {/* Avatar Image */}
                <motion.div
                    variants={imageVariant}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/10 shadow-lg mb-4"
                >
                    <img
                        src={heroAvatar}
                        alt="Rudy"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Text Content */}
                <div className="flex flex-col items-center justify-center text-center">
                    {/* Masked Line 1*/}
                    <div className="overflow-hidden mb-2 flex justify-center items-center gap-3">
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
                </div>

            </motion.div>
            {/* Scroll Down Text với animation */}
            <div className="item letter-spacing-[1em] font-cabinetGrotesk lg:text-2xl text-xl cursor-default absolute bottom-[6%] left-1/2 transform -translate-x-1/2 z-20">
                <ShiningText text="scroll down" />
            </div>
        </section >
    );
};

export default Hero;
