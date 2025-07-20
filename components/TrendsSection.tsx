
import React from 'react';
import Section, { SectionTitle, SectionSubtitle } from './Section';
import { TRENDS_DATA } from '../constants';
import type { Trend } from '../types';
import TrendsChart from './charts/TrendsChart';
import { RobotIcon, ShoppingBagIcon, ChartLineIcon, DevicePhoneMobileIcon } from './icons';

const TrendCard: React.FC<{ trend: Trend }> = ({ trend }) => (
    <div className="bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4">
        <div className="text-3xl text-orange-500 mt-1">
            <trend.icon className="w-8 h-8 transition-transform duration-200 hover:scale-110" />
        </div>
        <div>
            <h3 className="font-bold text-lg mb-1 text-gray-100">{trend.title}</h3>
            <p className="text-gray-400 text-sm">{trend.description}</p>
        </div>
    </div>
);

const FutureTrendCard: React.FC<{ icon: React.ReactNode, title: string, children: React.ReactNode }> = ({ icon, title, children}) => (
    <div className="bg-gray-800/50 p-6 rounded-lg shadow-md text-left">
        <h4 className="font-bold text-xl mb-2 text-gray-100 flex items-center">
            <span className="mr-3 text-2xl text-orange-500">{icon}</span>
            {title}
        </h4>
        <p className="text-gray-400">{children}</p>
    </div>
);


const TrendsSection: React.FC = () => {
    return (
        <Section id="trends">
            <div className="text-center mb-12">
                <SectionTitle>Jelajahi Tren Animasi</SectionTitle>
                <SectionSubtitle>Dari sentuhan halus hingga dunia 3D, temukan tren yang membentuk masa depan web.</SectionSubtitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TRENDS_DATA.map(trend => <TrendCard key={trend.title} trend={trend} />)}
            </div>
            
            <div className="mt-16 md:mt-24">
                <h3 className="text-2xl font-bold text-center mb-4">Perbandingan Tren: Dampak vs. Kompleksitas</h3>
                 <div className="h-96 w-full max-w-2xl mx-auto bg-gray-800/50 p-4 rounded-xl shadow-lg">
                    <TrendsChart />
                </div>
            </div>

            <div className="mt-16 md:mt-24 text-center">
                <h3 className="text-2xl font-bold mb-4">Tren Eksperimental & Masa Depan</h3>
                <SectionSubtitle>Masa depan animasi web dipenuhi inovasi. Berikut beberapa tren eksperimental yang patut diperhatikan:</SectionSubtitle>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <FutureTrendCard icon={<RobotIcon className="w-7 h-7" />} title="Alur Kerja Animasi Berbasis AI">
                        AI mengotomatiskan tugas-tugas berulang seperti in-betweening, mempercepat alur kerja dan memberikan kebebasan kreatif lebih besar kepada seniman.
                    </FutureTrendCard>
                    <FutureTrendCard icon={<ShoppingBagIcon className="w-7 h-7" />} title="Animasi Interaktif & Dapat Dibeli">
                        Animasi dengan hotspot yang dapat diklik atau alur cerita bercabang untuk e-commerce. Ini mengubah penonton pasif menjadi partisipan aktif.
                    </FutureTrendCard>
                     <FutureTrendCard icon={<ChartLineIcon className="w-7 h-7" />} title="Animasi Data Langsung">
                        Memvisualisasikan data real-time secara dinamis, seperti grafik saham atau ketersediaan produk, memberikan informasi yang selalu relevan secara visual.
                    </FutureTrendCard>
                     <FutureTrendCard icon={<DevicePhoneMobileIcon className="w-7 h-7" />} title="Format Video Vertikal">
                        Merancang animasi khusus untuk rasio aspek 9:16, dioptimalkan untuk konsumsi mobile-first, mengakomodasi kebiasaan pengguna modern.
                    </FutureTrendCard>
                </div>
            </div>
        </Section>
    );
};

export default TrendsSection;
