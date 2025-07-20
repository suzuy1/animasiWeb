
import React, { useState, useEffect } from 'react';
import { NAV_SECTIONS } from '../constants';
import { Bars3Icon, XMarkIcon } from './icons';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            let current = '';
            for (const section of NAV_SECTIONS) {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = section.id;
                    }
                }
            }
            setActiveSection(current);
            setIsOpen(false); // Close menu on scroll
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const NavLink: React.FC<{ sectionId: string; title: string; isMobile?: boolean }> = ({ sectionId, title, isMobile = false }) => {
        const isActive = activeSection === sectionId;
        const baseClasses = "cursor-interactive relative font-semibold transition-colors duration-300";
        const desktopClasses = `nav-link text-gray-300 hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`;
        const mobileClasses = `block py-3 px-4 text-gray-300 hover:bg-gray-800 rounded-md ${isActive ? 'bg-orange-500/20 text-orange-400' : ''}`;
        
        const afterClass = `after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 ${isActive ? 'after:w-full' : 'after:w-0'}`;

        return (
            <a href={`#${sectionId}`} className={isMobile ? mobileClasses : `${baseClasses} ${desktopClasses}`}>
                {title}
                {!isMobile && <span className={afterClass}></span>}
            </a>
        );
    };

    return (
        <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg shadow-lg">
            <div className="container mx-auto px-4">
                <nav className="flex justify-between items-center py-4">
                    <a href="#hero" className="text-2xl font-bold text-gray-100 cursor-interactive">
                        Animasi<span className="text-orange-500">Web</span>
                    </a>
                    <div className="hidden md:flex items-center space-x-8">
                        {NAV_SECTIONS.map(section => (
                            <NavLink key={section.id} sectionId={section.id} title={section.title} />
                        ))}
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-100 cursor-interactive z-50"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
                    </button>
                </nav>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-lg transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col space-y-2 p-4">
                     {NAV_SECTIONS.map(section => (
                        <NavLink key={`mobile-${section.id}`} sectionId={section.id} title={section.title} isMobile />
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
