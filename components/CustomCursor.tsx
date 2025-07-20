
import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        document.body.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        const interactiveElements = document.querySelectorAll('.cursor-interactive');
        const onEnter = () => setIsHovering(true);
        const onLeave = () => setIsHovering(false);

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', onEnter);
            el.addEventListener('mouseleave', onLeave);
        });

        return () => {
            document.body.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', onEnter);
                el.removeEventListener('mouseleave', onLeave);
            });
        };
    }, []);

    const cursorClasses = [
        "fixed w-5 h-5 bg-orange-500 rounded-full pointer-events-none z-[100]",
        "mix-blend-difference",
        "transition-transform duration-200 ease-out",
        isVisible ? "opacity-100" : "opacity-0",
        isHovering ? "scale-150 bg-white" : "scale-100"
    ].join(" ");

    return (
        <div
            className={cursorClasses}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: `translate(-50%, -50%) ${isHovering ? 'scale(2.0)' : 'scale(1.0)'}`
            }}
        />
    );
};

export default CustomCursor;
