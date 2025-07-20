
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

interface ToolboxChartProps {
    data: {
        name: string;
        power: number;
        easeOfUse: number;
    }[];
}

const ToolboxChart: React.FC<ToolboxChartProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                layout="vertical"
                data={data}
                margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                <XAxis type="number" domain={[0, 10]} tick={{ fill: '#A0A0A0' }} />
                <YAxis dataKey="name" type="category" tick={{ fill: '#E0E0E0' }} width={80} />
                <Tooltip
                    cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
                    contentStyle={{
                        backgroundColor: 'rgba(30, 30, 46, 0.8)',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '0.5rem',
                    }}
                />
                <Legend wrapperStyle={{ color: '#E0E0E0' }} />
                <Bar dataKey="power" name="Kekuatan" fill="#ff8c42" />
                <Bar dataKey="easeOfUse" name="Kemudahan" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ToolboxChart;
