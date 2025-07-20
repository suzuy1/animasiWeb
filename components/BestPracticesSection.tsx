
import React from 'react';
import Section, { SectionTitle, SectionSubtitle } from './Section';
import { BoltIcon, UniversalAccessIcon, HeartIcon, CheckIcon } from './icons';

interface PracticeCardProps {
    icon: React.ReactNode;
    title: string;
    items: string[];
}

const PracticeCard: React.FC<PracticeCardProps> = ({ icon, title, items }) => (
    <div className="bg-gray-800/50 p-6 rounded-lg shadow-md">
        <h3 className="font-bold text-xl mb-3 flex items-center text-gray-100">
            <span className="mr-3 text-2xl text-orange-500">{icon}</span>
            {title}
        </h3>
        <ul className="space-y-2 text-gray-400">
            {items.map(item => (
                <li key={item} className="flex items-start">
                    <CheckIcon className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

interface BestPracticesSectionProps {
    reduceMotion: boolean;
    setReduceMotion: (value: boolean) => void;
}

const BestPracticesSection: React.FC<BestPracticesSectionProps> = ({ reduceMotion, setReduceMotion }) => {
    return (
        <Section id="best-practices">
            <div className="text-center mb-12">
                <SectionTitle>Praktik Terbaik</SectionTitle>
                <SectionSubtitle>Animasi hebat tidak hanya terlihat bagus, tetapi juga berkinerja baik dan dapat diakses.</SectionSubtitle>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <PracticeCard
                    icon={<BoltIcon className="w-7 h-7" />}
                    title="Kinerja"
                    items={[
                        "Prioritaskan `transform` & `opacity`.",
                        "Gunakan `requestAnimationFrame()` untuk JS.",
                        "Hindari properti pemicu `reflow`.",
                        "Optimalkan aset (misal: Lottie).",
                    ]}
                />
                <PracticeCard
                    icon={<UniversalAccessIcon className="w-7 h-7" />}
                    title="Aksesibilitas"
                    items={[
                        "Hormati `prefers-reduced-motion`.",
                        "Hindari animasi berkedip cepat.",
                        "Pastikan animasi tidak menghalangi konten.",
                        "Sediakan kontrol (jeda/berhenti).",
                    ]}
                />
                <PracticeCard
                    icon={<HeartIcon className="w-7 h-7" />}
                    title="Desain Berpusat Pengguna"
                    items={[
                        "Berikan umpan balik instan.",
                        "Gunakan gerakan untuk memandu, bukan mengganggu.",
                        "Pastikan setiap animasi memiliki tujuan.",
                        "Tambahkan sentuhan kegembiraan (*delight*).",
                    ]}
                />
            </div>
            <div className="mt-8 p-6 bg-gray-800/50 rounded-lg shadow-md text-center">
                <h4 className="font-bold text-lg mb-2 text-gray-100">Demonstrasi Aksesibilitas</h4>
                <p className="text-gray-400 mb-4">Aktifkan sakelar ini untuk mensimulasikan `prefers-reduced-motion`.</p>
                <label htmlFor="reduce-motion-toggle" className="inline-flex items-center cursor-pointer">
                    <span className="mr-3 text-sm font-medium text-gray-300">Animasi Aktif</span>
                    <span className="relative">
                        <input
                            type="checkbox"
                            id="reduce-motion-toggle"
                            className="sr-only peer"
                            checked={reduceMotion}
                            onChange={(e) => setReduceMotion(e.target.checked)}
                        />
                        <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-focus:ring-4 peer-focus:ring-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-gray-800 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                    </span>
                    <span className="ml-3 text-sm font-medium text-gray-300">Kurangi Gerakan</span>
                </label>
            </div>
        </Section>
    );
};

export default BestPracticesSection;
