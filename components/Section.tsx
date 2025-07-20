
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface SectionProps {
    children: React.ReactNode;
    id: string;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, className = 'py-16 md:py-24' }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });

    return (
        <section
            ref={ref}
            id={id}
            className={`${className} transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            {children}
        </section>
    );
};

export const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
     const [ref, isVisible] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.5 });
    return (
        <h2 ref={ref} className={`text-3xl md:text-4xl font-bold mb-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {children}
        </h2>
    )
}

export const SectionSubtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {children}
        </p>
    )
}


export default Section;
