import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

interface FloodProps {
    color?: string;
    height?: string;
    sectionRef?: React.RefObject<HTMLElement>;
}

const Flood: React.FC<FloodProps> = ({ color = "#ffffff", height = "100px", sectionRef }) => {
    // Nếu không có sectionRef, fallback dùng div ref nội bộ
    const internalRef = useRef<HTMLDivElement>(null);
    const targetRef = sectionRef || internalRef;

    // Theo dõi scroll progress của SECTION CHA (hoặc chính nó nếu fallback)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        // offset: Khi Top section chạm Bottom Viewport (start end) -> Bắt đầu đếm
        // Đến khi nào? Tùy chỉnh ở dưới.
        offset: ["start end", "end start"]
    });

    // TWEAK CURVE LOGIC:
    // [0, 0.4]: Giữ PHẲNG (100) khi section mới xuất hiện và đi lên được 40% màn hình.
    // [0.4, 0.7]: Biến đổi từ phẳng (100) sang cong (0).
    // Điều này đảm bảo người dùng thấy đường thẳng rõ ràng trước khi nó cong.
    const curveY = useTransform(scrollYProgress, [0, 0.1, 0.2], [100, 100, 0]);

    // Path: M0 100 (Đáy trái) -> L1440 100 (Đáy phải) -> Q720 curveY (Đỉnh điều khiển động) -> 0 100
    const pathD = useMotionTemplate`M0 100 L1440 100 Q820 ${curveY} 0 100 Z`;

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
