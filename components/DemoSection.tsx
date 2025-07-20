
import React, { useState } from 'react';
import Section, { SectionTitle, SectionSubtitle } from './Section';

const DemoSection: React.FC = () => {
    const [isMoved, setIsMoved] = useState(false);
    const [isFaded, setIsFaded] = useState(false);
    const [isScaled, setIsScaled] = useState(false);

    const resetAnimations = () => {
        setIsMoved(false);
        setIsFaded(false);
        setIsScaled(false);
    };

    const boxClasses = [
        'w-24 h-24 bg-orange-500 rounded-lg mb-8 flex items-center justify-center text-white font-bold text-lg',
        'transition-all duration-500 ease-in-out',
        isMoved ? 'translate-x-24' : 'translate-x-0',
        isFaded ? 'opacity-20' : 'opacity-100',
        isScaled ? 'scale-150' : 'scale-100',
    ].join(' ');
    
    const DemoButton: React.FC<{ onClick: () => void, color: string, children: React.ReactNode }> = ({ onClick, color, children }) => {
        return (
            <button
                onClick={onClick}
                className={`text-white px-6 py-2 rounded-full font-semibold transition-transform active:scale-95 cursor-interactive ${color}`}
            >
                {children}
            </button>
        )
    }

    return (
        <Section id="simple-animation-demo">
            <div className="text-center mb-12">
                <SectionTitle>Coba Animasi Sederhana!</SectionTitle>
                <SectionSubtitle>Interaksikan dengan kotak di bawah ini untuk melihat animasi dasar beraksi.</SectionSubtitle>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-800/50 p-8 rounded-xl shadow-lg">
                <div className={boxClasses}>Kotak</div>
                <div className="flex flex-wrap justify-center gap-4">
                    <DemoButton onClick={() => setIsMoved(!isMoved)} color="bg-blue-600 hover:bg-blue-700">Pindah</DemoButton>
                    <DemoButton onClick={() => setIsFaded(!isFaded)} color="bg-purple-600 hover:bg-purple-700">Pudar</DemoButton>
                    <DemoButton onClick={() => setIsScaled(!isScaled)} color="bg-green-600 hover:bg-green-700">Perbesar</DemoButton>
                    <DemoButton onClick={resetAnimations} color="bg-gray-600 hover:bg-gray-700">Reset</DemoButton>
                </div>
            </div>
        </Section>
    );
};

export default DemoSection;
