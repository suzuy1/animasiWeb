
import React, { useState } from 'react';
import Section, { SectionTitle, SectionSubtitle } from './Section';
import Modal from './Modal';
import { INSPIRATION_DATA } from '../constants';
import type { Inspiration } from '../types';

const InspirationCard: React.FC<{ item: Inspiration, onClick: () => void }> = ({ item, onClick }) => (
    <div
        onClick={onClick}
        className="bg-gray-800/50 p-6 rounded-lg shadow-md cursor-pointer hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 text-gray-100 transform-disabled cursor-interactive"
    >
        <h3 className="font-bold text-xl">{item.name}</h3>
    </div>
);

const InspirationSection: React.FC = () => {
    const [selectedInspiration, setSelectedInspiration] = useState<Inspiration | null>(null);

    const closeModal = () => setSelectedInspiration(null);

    return (
        <>
            <Section id="inspiration">
                <div className="text-center mb-12">
                    <SectionTitle>Galeri Inspirasi</SectionTitle>
                    <SectionSubtitle>Lihat bagaimana situs-situs pemenang penghargaan menggunakan animasi. Klik untuk detail.</SectionSubtitle>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {INSPIRATION_DATA.map(item => (
                        <InspirationCard key={item.name} item={item} onClick={() => setSelectedInspiration(item)} />
                    ))}
                </div>
            </Section>
            
            <Modal isVisible={!!selectedInspiration} onClose={closeModal}>
                {selectedInspiration && (
                    <>
                        <h2 className="text-3xl font-bold mb-4 text-gray-100">{selectedInspiration.name}</h2>
                        <h4 className="font-semibold text-lg mb-2 text-orange-400">Fitur Animasi Unggulan:</h4>
                        <p className="text-gray-300 mb-4">{selectedInspiration.features}</p>
                        <h4 className="font-semibold text-lg mb-2 text-orange-400">Dampak pada Pengalaman Pengguna:</h4>
                        <p className="text-gray-300">{selectedInspiration.impact}</p>
                    </>
                )}
            </Modal>
        </>
    );
};

export default InspirationSection;
