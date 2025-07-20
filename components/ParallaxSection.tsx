
import React from 'react';
import Section, { SectionTitle } from './Section';

const ParallaxSection: React.FC = () => {
    return (
        <div id="parallax-section" className="relative h-[50vh] flex items-center justify-center text-white my-16 rounded-xl shadow-2xl overflow-hidden">
            <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
            ></div>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 text-center p-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Pengalaman Mendalam</h2>
                <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">Rasakan kedalaman visual dengan efek parallax scrolling.</p>
            </div>
        </div>
    );
};

export default ParallaxSection;
