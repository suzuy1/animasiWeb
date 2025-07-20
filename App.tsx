
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import DemoSection from './components/DemoSection';
import SvgAnimationSection from './components/SvgAnimationSection';
import ParallaxSection from './components/ParallaxSection';
import TrendsSection from './components/TrendsSection';
import ToolboxSection from './components/ToolboxSection';
import InspirationSection from './components/InspirationSection';
import BestPracticesSection from './components/BestPracticesSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackToTopButton from './components/BackToTopButton';
import AICompanion from './components/AICompanion';

const App: React.FC = () => {
    const [reduceMotion, setReduceMotion] = useState(false);

    useEffect(() => {
        if (reduceMotion) {
            document.body.classList.add('reduce-motion');
        } else {
            document.body.classList.remove('reduce-motion');
        }
    }, [reduceMotion]);

    return (
        <div className="bg-gradient-animated">
            <CustomCursor />
            <Header />
            <main className="container mx-auto px-4 py-8 md:py-16">
                <Hero />
                <ParallaxSection />
                <WhySection />
                <DemoSection />
                <SvgAnimationSection />
                <TrendsSection />
                <ToolboxSection />
                <InspirationSection />
                <BestPracticesSection reduceMotion={reduceMotion} setReduceMotion={setReduceMotion} />
            </main>
            <Footer />
            <BackToTopButton />
            <AICompanion />
        </div>
    );
};

export default App;