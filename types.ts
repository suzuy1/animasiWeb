
import type React from 'react';

export interface Trend {
    title: string;
    description: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface ToolboxContent {
    title: string;
    description: string;
    points: string[];
}

export interface ToolboxJSContent extends ToolboxContent {
    chartData: {
        name: string;
        power: number;
        easeOfUse: number;
    }[];
}

export interface ToolboxData {
    css: ToolboxContent;
    js: ToolboxJSContent;
    webgl: ToolboxContent;
}

export interface Inspiration {
    name: string;
    features: string;
    impact: string;
}

export interface SectionData {
    id: string;
    title: string;
}
