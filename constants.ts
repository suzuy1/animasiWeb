
import type { Trend, ToolboxData, Inspiration, SectionData } from './types';
import {
    HandPointingIcon, ScrollIcon, CubeIcon, PaintBrushIcon, RocketLaunchIcon, SparklesIcon
} from './components/icons';

export const NAV_SECTIONS: SectionData[] = [
    { id: 'why', title: 'Mengapa' },
    { id: 'simple-animation-demo', title: 'Demo' },
    { id: 'svg-scroll-animation', title: 'SVG Animasi' },
    { id: 'trends', title: 'Tren' },
    { id: 'toolbox', title: 'Peralatan' },
    { id: 'inspiration', title: 'Inspirasi' },
    { id: 'best-practices', title: 'Praktik Terbaik' },
];

export const TRENDS_DATA: Trend[] = [
    { title: "Mikro-interaksi", description: "Animasi kecil dan halus yang memberikan umpan balik instan pada tindakan pengguna, membuat UI terasa hidup dan intuitif.", icon: HandPointingIcon },
    { title: "Scrollytelling", description: "Elemen beranimasi saat pengguna menggulir, menciptakan pengalaman naratif yang dinamis dan menarik.", icon: ScrollIcon },
    { title: "3D & Parallax", description: "Menggunakan WebGL dan efek parallax untuk menciptakan kedalaman, imersi, dan pengalaman 3D yang realistis di browser.", icon: CubeIcon },
    { title: "Ilustrasi Animasi", description: "Menghidupkan ilustrasi dan ikon untuk mengekspresikan kepribadian merek dan menyederhanakan konsep yang kompleks.", icon: PaintBrushIcon },
    { title: "Animasi Minimalis", description: "Animasi yang halus dan nyaris tak terlihat yang meningkatkan UX tanpa mengganggu, selaras dengan desain minimalis.", icon: SparklesIcon },
    { title: "Tren Eksperimental", description: "Jelajahi masa depan dengan AI, AR, animasi yang dapat dibeli (*shoppable*), dan branding berbasis gerak.", icon: RocketLaunchIcon }
];

export const TOOLBOX_DATA: ToolboxData = {
    css: {
        title: "CSS: Tulang Punggung Animasi Modern",
        description: "Sederhana, ringan, dan seringkali diakselerasi perangkat keras. Ideal untuk transisi, transformasi, dan animasi keyframe dasar. CSS adalah titik awal yang bagus untuk menambahkan gerakan ke situs Anda dengan kinerja yang optimal.",
        points: [
            "**@keyframes**: Untuk urutan animasi yang kompleks dan terperinci.",
            "**Transisi**: Untuk perubahan status yang mulus dan efek hover.",
            "**Transformasi 3D**: Untuk menambahkan kedalaman dan perspektif.",
            "**Diakselerasi GPU**: Properti `transform` dan `opacity` ditangani oleh GPU, meningkatkan kinerja.",
            "**Media Query `prefers-reduced-motion`**: Memungkinkan penyesuaian animasi berdasarkan preferensi pengguna untuk mengurangi gerakan."
        ]
    },
    js: {
        title: "JavaScript: Kontrol & Interaktivitas Tingkat Lanjut",
        description: "Digunakan untuk orkestrasi animasi yang kompleks, sinkronisasi, dan interaksi yang dinamis. Pustaka seperti GSAP dan Lottie memberikan kekuatan dan fleksibilitas yang luar biasa.",
        points: [
            "**GSAP (GreenSock Animation Platform)**: Standar industri untuk kinerja, kontrol, dan fleksibilitas. Mampu menganimasikan apa pun, dari UI hingga SVG dan WebGL.",
            "**Lottie**: Merender animasi yang dibuat di Adobe After Effects secara *native* di web menggunakan format JSON, menghasilkan animasi vektor yang ringan dan skalabel.",
            "**Theatre.js**: Peralatan desain gerak profesional dengan editor urutan dan grafik, menjembatani kode dan manipulasi langsung di browser.",
            "**requestAnimationFrame()**: API browser untuk animasi yang lebih efisien dan lancar, menyinkronkan dengan *refresh rate* monitor.",
            "**Integrasi Data**: Menganimasikan visualisasi data secara dinamis berdasarkan input atau perubahan data *real-time*."
        ],
        chartData: [
            { name: 'GSAP', power: 9, easeOfUse: 7 },
            { name: 'Lottie', power: 7, easeOfUse: 9 },
            { name: 'Theatre.js', power: 8, easeOfUse: 6 },
            { name: 'CSS (Vanilla)', power: 5, easeOfUse: 8 }
        ]
    },
    webgl: {
        title: "WebGL/Three.js: Membawa 3D ke Browser",
        description: "API JavaScript untuk merender grafik 2D dan 3D interaktif tanpa plugin. Three.js adalah pustaka yang menyederhanakan WebGL, memungkinkan pengalaman 3D yang menakjubkan dan kompleks langsung di browser.",
        points: [
            "**Lingkungan 3D Imersif**: Menciptakan dunia virtual yang dapat dijelajahi.",
            "**Konfigurator Produk Interaktif**: Memungkinkan pengguna memutar dan menyesuaikan produk 3D.",
            "**Visualisasi Data 3D**: Menyajikan data kompleks dalam dimensi baru.",
            "**Efek Visual Sinematik**: Menambahkan efek pasca-pemrosesan seperti kedalaman bidang, kabut, dan pencahayaan realistis.",
            "**Interaksi Lanjutan**: Mendukung interaksi mouse, sentuhan, dan bahkan *gamepad* untuk kontrol 3D yang intuitif."
        ]
    }
};

export const INSPIRATION_DATA: Inspiration[] = [
    { name: "Deed Delivery", features: "Animasi entri dinamis dan jalur animasi yang menelusuri rute pengiriman saat menggulir.", impact: "Menetapkan nada modern dan memperkuat metafora merek secara real-time." },
    { name: "Wimpy Kid", features: "Animasi karakter yang menyenangkan, status hover interaktif, transisi bagian yang dinamis (mirip halaman komik).", impact: "Menyeimbangkan branding dengan kesenangan; menjaga pengguna tetap terlibat dan memperkuat humor serta nada khas waralaba." },
    { name: "Poppr", features: "Parallax scrolling yang mulus, transisi warna dinamis pada kanvas gelap, WebGL interaktif, dan efek hover yang halus.", impact: "Menciptakan rasa kedalaman dan imersi; memandu mata pengguna dan menciptakan suasana yang berbeda." },
    { name: "Roger Junior", features: "Ilustrasi interaktif dan menyenangkan (elemen dapat diseret dan dipindahkan), animasi gulir dinamis (tipografi, garis yang digambar).", impact: "Memberikan pengalaman taktil yang mencerminkan semangat kreatif desainer; memandu perhatian ke elemen kunci." },
    { name: "Wildcatter LA", features: "Animasi layar pemuatan yang eksplosif (hitungan mundur dinamit), efek hover menu interaktif yang kacau, animasi tipografi yang dipicu oleh gulir.", impact: "Menciptakan nada dramatis dan berdampak tinggi; memperkuat nuansa interaktif dan kepribadian merek yang berenergi tinggi." },
    { name: "The Quake", features: "Animasi pergeseran lempeng tektonik yang dipicu gulir, visualisasi data seismik interaktif.", impact: "Menjelaskan konsep geologis kompleks secara visual dan menarik, meningkatkan pemahaman pengguna." }
];
