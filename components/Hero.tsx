
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
    const [typedText, setTypedText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [isHeroVisible, setIsHeroVisible] = useState(false);

    const staticText = "Membuka Kekuatan ";
    const fullText = staticText + "Gerakan";

    useEffect(() => {
        // Trigger fade-in for the whole section
        const visibilityTimer = setTimeout(() => setIsHeroVisible(true), 100);
        
        // Start typing after fade-in
        const typingTimer = setTimeout(() => {
            let i = 0;
            const intervalId = setInterval(() => {
                if (i < staticText.length) {
                    setTypedText(prev => prev + staticText.charAt(i));
                    i++;
                } else {
                    clearInterval(intervalId);
                    setIsTypingComplete(true);
                }
            }, 80);
            return () => clearInterval(intervalId);
        }, 800); // Wait for fade-in transition to be noticeable

        return () => {
            clearTimeout(visibilityTimer);
            clearTimeout(typingTimer);
        };
    }, []);

    const cursorClass = isTypingComplete ? '' : 'border-r-2 border-orange-500 animate-[blink-caret_0.75s_step-end_infinite]';

    return (
        <section id="hero" className={`text-center min-h-[60vh] flex flex-col justify-center items-center transition-opacity duration-1000 ${isHeroVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-white">
                <span className={cursorClass}>
                    {typedText}
                    {isTypingComplete && (
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Gerakan</span>
                    )}
                </span>
            </h1>
            <p className={`text-lg md:text-xl max-w-3xl text-gray-400 transition-all duration-1000 delay-500 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                Jelajahi bagaimana animasi web modern mengubah situs statis menjadi pengalaman digital yang hidup, menarik, dan tak terlupakan.
            </p>
        </section>
    );
};

export default Hero;
