import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

interface FloodProps {
    color?: string;
    height?: string;
    sectionRef?: React.RefObject<HTMLElement>;
    reverse?: boolean;
}

const Flood: React.FC<FloodProps> = ({ color = "#ffffff", height = "100px", sectionRef, reverse = false }) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const targetRef = sectionRef || internalRef;

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const curveY = useTransform(scrollYProgress, [0, 0.1, 0.5, 0.7], [100, 100, 0, 0]);

    const pathDNormal = useMotionTemplate`M0 100 L1440 100 Q720 ${curveY} 0 100 Z`;
    const pathDReverse = useMotionTemplate`M0 100 L1440 100 L1440 ${curveY} Q720 100 0 ${curveY} Z`;

    const pathD = reverse ? pathDReverse : pathDNormal;

    return (
        <div
            ref={internalRef}
            className="absolute left-0 w-full z-20 pointer-events-none"
            style={{
                top: `-${height}`,
                height: height
            }}
        >
            <svg
                className="w-full h-full"
                viewBox="0 0 1440 100"
                preserveAspectRatio="none"
                style={{ fill: color }}
            >
                <motion.path d={pathD} />
            </svg>
        </div>
    );
};

export default Flood;
