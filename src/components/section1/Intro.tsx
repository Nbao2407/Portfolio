import React from 'react';
import { motion } from 'framer-motion';
import { BlurText } from '../ui';
interface IntroProps {
    onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
    const handleAnimationComplete = () => {
        onComplete();
    };

    return (
        <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black text-white"
            initial={{ y: 0 }}
            exit={{
                y: '-150%',
                transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] }
            }}
        >
            <BlurText
                text="Hello!"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="font-cabinetGrotesk text-[2vw] xs:text-[1vw] font-bold leading-none tracking-tighter text-center drop-shadow-glow"
            />

            <svg className="absolute top-full w-full h-[15vh] fill-black" viewBox="0 0 1440 100" preserveAspectRatio="none">
                <path d="M0 0 L1440 0 Q720 100 0 0 Z" />
                <path d="M0 0 Q720 100 1440 0" fill="none" stroke="rgba(216, 215, 215, 1)" strokeWidth="0.75" opacity={0.1} />
            </svg>
        </motion.div>
    );
};

export default Intro;
