
import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, Legend } from 'recharts';

const data = [
    { trend: 'Mikro-interaksi', impact: 7, complexity: 4 },
    { trend: 'Scrollytelling', impact: 8, complexity: 6 },
    { trend: '3D/Parallax', impact: 9, complexity: 9 },
    { trend: 'Ilustrasi Animasi', impact: 7, complexity: 5 },
    { trend: 'Minimalisme', impact: 6, complexity: 3 },
    { trend: 'Eksperimental', impact: 8, complexity: 10 },
];

const TrendsChart: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <defs>
                    <linearGradient id="colorImpact" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FF8C42" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#FF8C42" stopOpacity={0.1}/>
                    </linearGradient>
                     <linearGradient id="colorComplexity" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.7}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                    </linearGradient>
                </defs>
                <PolarGrid stroke="rgba(255, 255, 255, 0.2)" />
                <PolarAngleAxis dataKey="trend" tick={{ fill: '#E0E0E0', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 10]} tick={{ fill: '#A0A0A0' }} />
                <Tooltip
                    contentStyle={{
                        backgroundColor: 'rgba(30, 30, 46, 0.8)',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '0.5rem',
                    }}
                />
                <Legend wrapperStyle={{ color: '#E0E0E0' }} />
                <Radar name="Dampak Pengguna" dataKey="impact" stroke="#FF8C42" fill="url(#colorImpact)" fillOpacity={0.6} />
                <Radar name="Kompleksitas Implementasi" dataKey="complexity" stroke="#8884d8" fill="url(#colorComplexity)" fillOpacity={0.5} />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default TrendsChart;
