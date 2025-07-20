
import React, { useState } from 'react';
import Section, { SectionTitle, SectionSubtitle } from './Section';
import { StarIcon, ScrollIcon, PaintBrushIcon } from './icons';

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; footer: React.ReactNode }> = ({ icon, title, children, footer }) => (
    <div className="bg-gray-800/50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2 transform-disabled">
        <div className="text-5xl mb-4 text-orange-500 flex justify-center">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-gray-100">{title}</h3>
        <p className="text-gray-400 min-h-[70px]">{children}</p>
        <div className="mt-6">{footer}</div>
    </div>
);

const WhySection: React.FC = () => {
    const [engagementText, setEngagementText] = useState('Coba Interaksi!');
    const [isNarrativeExpanded, setIsNarrativeExpanded] = useState(false);

    const handleEngagementClick = () => {
        setEngagementText('Berhasil!');
        setTimeout(() => setEngagementText('Coba Interaksi!'), 1500);
    };

    return (
        <Section id="why">
            <div className="text-center mb-12">
                <SectionTitle>Mengapa Animasi Penting?</SectionTitle>
                <SectionSubtitle>Animasi bukan lagi sekadar hiasan; ini adalah komponen inti dari pengalaman pengguna yang efektif.</SectionSubtitle>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <InfoCard
                    icon={<StarIcon className="w-12 h-12" />}
                    title="Meningkatkan Keterlibatan"
                    footer={
                        <button
                            onClick={handleEngagementClick}
                            className={`bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 cursor-interactive ${engagementText === 'Berhasil!' ? 'bg-green-500' : ''}`}
                        >
                            {engagementText}
                        </button>
                    }
                >
                    Gerakan menarik perhatian, memandu pengguna, dan mendorong interaksi yang lebih dalam.
                </InfoCard>

                <InfoCard
                    icon={<ScrollIcon className="w-12 h-12" />}
                    title="Membangun Narasi"
                    footer={
                        <>
                            <button
                                onClick={() => setIsNarrativeExpanded(!isNarrativeExpanded)}
                                className="bg-gray-700 text-gray-200 px-6 py-2 rounded-full font-semibold hover:bg-gray-600 transition-colors cursor-interactive"
                            >
                                {isNarrativeExpanded ? 'Sembunyikan' : 'Baca Lebih Lanjut'}
                            </button>
                            <div className={`transition-all duration-500 ease-out overflow-hidden ${isNarrativeExpanded ? 'max-h-40' : 'max-h-0'}`}>
                                <p className="text-gray-400 text-sm mt-3">
                                    Animasi mengubah data kompleks menjadi narasi visual yang mudah dicerna, seperti grafik yang berkembang.
                                </p>
                            </div>
                        </>
                    }
                >
                    Gunakan animasi berbasis gulir (*scrollytelling*) untuk memandu pengguna melalui sebuah cerita.
                </InfoCard>

                <InfoCard
                    icon={<PaintBrushIcon className="w-12 h-12 animate-spin-on-hover cursor-interactive" />}
                    title="Memperkuat Merek"
                    footer={<div className="text-gray-500 text-sm">*Arahkan kursor ke ikon di atas!*</div>}
                >
                    Animasi yang khas dan konsisten menciptakan identitas merek yang mudah diingat.
                </InfoCard>
            </div>
        </Section>
    );
};

export default WhySection;
