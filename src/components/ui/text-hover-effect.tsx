import React, { useRef, useState, useEffect, useCallback } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export const TextHoverEffect = ({
    text,
    duration,
}: {
    text: string
    duration?: number
    fontSize?: number
}) => {
    const svgRef = useRef<SVGSVGElement>(null)
    const maskGradientRef = useRef(null)
    const animatedTextRef = useRef(null)
    const [cursor, setCursor] = useState({ x: 0, y: 0 })
    const [hovered, setHovered] = useState(false)
    const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" })

    useGSAP(
        () => {
            gsap.fromTo(
                animatedTextRef.current,
                { strokeDashoffset: 1000, strokeDasharray: 1000 },
                {
                    strokeDashoffset: 0,
                    strokeDasharray: 1000,
                    duration: 4,
                    ease: "power2.inOut",
                }
            )
        },
        { scope: svgRef }
    )

    const updateCursorPosition = useCallback((x: number, y: number) => {
        if (svgRef.current && x !== null && y !== null) {
            const svgRect = svgRef.current.getBoundingClientRect()
            const cxPercentage = ((x - svgRect.left) / svgRect.width) * 100
            const cyPercentage = ((y - svgRect.top) / svgRect.height) * 100

            const newPosition = {
                cx: `${cxPercentage}%`,
                cy: `${cyPercentage}%`,
            }

            setMaskPosition(newPosition)

            gsap.to(maskGradientRef.current, {
                attr: newPosition,
                duration: duration ?? 0,
                ease: "power2.out",
            })
        }
    }, [duration])

    useEffect(() => {
        updateCursorPosition(cursor.x, cursor.y)
    }, [cursor, duration, updateCursorPosition])

    const handleMouseEnter = () => setHovered(true)
    const handleMouseLeave = () => setHovered(false)
    const handleMouseMove = (e: React.MouseEvent) => {
        setCursor({ x: e.clientX, y: e.clientY })
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        e.preventDefault()
        setHovered(true)
        if (e.touches.length > 0) {
            const touch = e.touches[0]
            setCursor({ x: touch.clientX, y: touch.clientY })
        }
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        e.preventDefault()
        if (e.touches.length > 0) {
            const touch = e.touches[0]
            setCursor({ x: touch.clientX, y: touch.clientY })
        }
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        e.preventDefault()
        setHovered(false)
    }

    return (
        <svg
            ref={svgRef}
            width="100%"
            height="100%"
            viewBox="0 0 300 100"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            className="select-none"
        >
            <defs>
                <linearGradient
                    id="textGradient"
                    gradientUnits="userSpaceOnUse"
                    cx="50%"
                    cy="50%"
                    r="20%"
                >
                    {hovered && (
                        <>
                            <stop offset="0%" stopColor="#888888" />
                            <stop offset="25%" stopColor="#ffffff" />
                            <stop offset="50%" stopColor="#888888" />
                            <stop offset="75%" stopColor="#ffffff" />
                            <stop offset="100%" stopColor="#888888" />
                        </>
                    )}
                </linearGradient>
                <radialGradient
                    id="revealMask"
                    ref={maskGradientRef}
                    gradientUnits="userSpaceOnUse"
                    r="25%"
                    cx={maskPosition.cx}
                    cy={maskPosition.cy}
                >
                    <stop offset="0%" stopColor="white" />
                    <stop offset="100%" stopColor="black" />
                </radialGradient>
                <mask id="textMask">
                    <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="url(#revealMask)"
                    />
                </mask>
            </defs>

            {[0, 1, 2].map((_, idx) => (
                <text
                    key={idx}
                    ref={idx === 1 ? animatedTextRef : undefined}
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    strokeWidth="0.5"
                    className={`font-[helvetica] font-bold ${idx === 2 ? "" : "fill-transparent"} ${idx === 0
                        ? "stroke-[#262626]"
                        : idx === 1
                            ? "stroke-[#262626]"
                            : ""
                        }`}
                    textLength="100%"
                    lengthAdjust="spacingAndGlyphs"
                    fontSize="100px"
                    fill={idx === 2 ? "url(#textGradient)" : "transparent"}
                    stroke={idx === 2 ? "none" : undefined}
                    mask={idx === 2 ? "url(#textMask)" : undefined}
                    style={{
                        opacity: idx === 0 && !hovered ? 0 : idx === 0 ? 0.7 : 1,
                    }}
                >
                    {text}
                </text>
            ))}
        </svg>
    )
}
