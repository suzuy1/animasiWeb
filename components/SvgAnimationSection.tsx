
import React from 'react';
import Section, { SectionTitle, SectionSubtitle } from './Section';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const SvgAnimationSection: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });
    
    return (
        <Section id="svg-scroll-animation">
            <div className="text-center mb-12">
                <SectionTitle>Animasi SVG yang Dipicu Gulir</SectionTitle>
                <SectionSubtitle>Gulir ke bawah untuk melihat elemen SVG muncul dengan animasi.</SectionSubtitle>
            </div>
            <div 
                ref={ref}
                className="flex justify-center items-center bg-gray-800/50 p-8 rounded-xl shadow-lg h-64"
            >
                <div className="w-48 h-48 flex items-center justify-center">
                    <svg width="100%" height="100%" viewBox="0 0 100 100">
                        <circle 
                            cx="50" 
                            cy="50" 
                            r="40" 
                            fill="#FF8C42" 
                            stroke="#E0E0E0" 
                            strokeWidth="2"
                            className={`transform-origin-center transition-transform duration-1000 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] ${isVisible ? 'scale-100' : 'scale-0'}`}
                        />
                    </svg>
                </div>
            </div>
        </Section>
    );
};

export default SvgAnimationSection;
