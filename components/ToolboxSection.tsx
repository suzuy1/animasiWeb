
import React, { useState } from 'react';
import Section, { SectionTitle, SectionSubtitle } from './Section';
import { TOOLBOX_DATA } from '../constants';
import ToolboxChart from './charts/ToolboxChart';
import { CheckIcon } from './icons';

type TabId = 'css' | 'js' | 'webgl';

const TabButton: React.FC<{ tabId: TabId, activeTab: TabId, onClick: (tabId: TabId) => void, children: React.ReactNode }> =
({ tabId, activeTab, onClick, children }) => {
    const isActive = activeTab === tabId;
    return (
        <button
            onClick={() => onClick(tabId)}
            className={`py-2 px-6 text-lg font-semibold border-b-2 transition-colors duration-300 cursor-interactive ${isActive ? 'border-orange-500 text-orange-400' : 'border-transparent text-gray-400 hover:text-orange-400'}`}
        >
            {children}
        </button>
    );
};

const ToolboxSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabId>('css');
    const content = TOOLBOX_DATA[activeTab];

    const parsePoint = (point: string) => {
        const parts = point.split('**:');
        if (parts.length > 1) {
            return <><strong>{parts[0].replace('**', '')}</strong>:{parts[1]}</>
        }
        return point;
    }

    return (
        <Section id="toolbox">
            <div className="text-center mb-12">
                <SectionTitle>Peralatan Animator</SectionTitle>
                <SectionSubtitle>Pilih teknologi yang tepat, dari transisi sederhana hingga pengalaman 3D yang kompleks.</SectionSubtitle>
            </div>
            <div>
                <div className="flex justify-center border-b border-gray-700 mb-8">
                    <TabButton tabId="css" activeTab={activeTab} onClick={setActiveTab}>CSS</TabButton>
                    <TabButton tabId="js" activeTab={activeTab} onClick={setActiveTab}>JavaScript</TabButton>
                    <TabButton tabId="webgl" activeTab={activeTab} onClick={setActiveTab}>WebGL/3D</TabButton>
                </div>
                <div className="bg-gray-800/50 p-8 rounded-lg shadow-md min-h-[400px]">
                    <h3 className="text-2xl font-bold mb-3 text-gray-100">{content.title}</h3>
                    <p className="text-gray-400 mb-6">{content.description}</p>
                    <ul className="space-y-2">
                        {content.points.map((point, index) => (
                            <li key={index} className="flex items-start">
                                <CheckIcon className="w-5 h-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">{parsePoint(point)}</span>
                            </li>
                        ))}
                    </ul>
                    {activeTab === 'js' && (
                        <div className="mt-8">
                            <h4 className="text-xl font-bold text-center mb-4 text-gray-100">Perbandingan Pustaka JS</h4>
                            <div className="h-80 w-full bg-gray-900/50 p-4 rounded-xl">
                                <ToolboxChart data={TOOLBOX_DATA.js.chartData} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Section>
    );
};

export default ToolboxSection;
