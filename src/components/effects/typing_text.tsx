import { useEffect, useRef, useState } from "react";

type TypingTextProps = {
    text: string;
    speed?: number;
    className?: string;
};

export default function TypingTextOnScroll({ text, speed = 40, className = "" }: TypingTextProps) {
    const containerRef = useRef<HTMLSpanElement>(null);
    const [visibleText, setVisibleText] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;

        let i = 0;
        const interval = setInterval(() => {
            if (i >= text.length) {
                clearInterval(interval);
                return;
            }

            // 🔒 защищаем setVisibleText от undefined
            const nextChar = text[i];
            if (nextChar !== undefined) {
                setVisibleText((prev) => prev + nextChar);
            }

            i++;
        }, speed);

        return () => clearInterval(interval);
    }, [started, text, speed]);

    return (
        <span
            ref={containerRef}
            className={`font-mono border-r-2 border-white pr-1 animate-blink-cursor ${className}`}
        >
      {visibleText}
    </span>
    );
}