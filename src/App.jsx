import React, { useState } from 'react';
import {
    Github, Twitter, Linkedin, Terminal,
    Database, Copy, Check, ExternalLink,
    Layers, Zap, Globe, Code
} from 'lucide-react';

// --- Data Configuration ---
const USER_DATA = {
    name: "Piczadev",
    role: "Dev & Researcher",
    bio: "Escepticismo pragmático. Deconstruyendo sistemas blockchain y automatizando el caos.",
    location: "Puebla, MX",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Piczadev&backgroundColor=1f1f1f",
    ethAddress: "0xOf73d...Ef725",
    solAddress: "pizzalabs.sol",
    socials: {
        twitter: "https://twitter.com/piczadev",
        github: "https://github.com/piczadev",
        linkedin: "https://linkedin.com/in/piczadev",
        farcaster: "https://warpcast.com/piczadev"
    }
};

const HARDWARE_STATS = [
    { label: "Main Station", value: "Mac Mini M4 (16GB)", icon: "apple" },
    { label: "Secondary", value: "Acer Nitro RTX 3050", icon: "windows" },
    { label: "Network", value: "500 Mbps (Ethernet)", icon: "wifi" },
    { label: "Ping", value: "8 ms", icon: "activity" },
    { label: "Printer", value: "Creality V3 SE + Klipper", icon: "printer" },
];

// --- Components ---

const CopyButton = ({ textToCopy, label }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-all border border-white/5 text-xs font-mono text-gray-400 hover:text-white"
        >
            {copied ? <Check size={12} className="text-green-400"/> : <Copy size={12} />}
            <span>{label || textToCopy}</span>
        </button>
    );
};

const BentoCard = ({ children, className = "", colSpan = "col-span-1", href }) => {
    const Wrapper = href ? 'a' : 'div';
    const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

    return (
        <Wrapper
            {...props}
            className={`glass-card rounded-3xl p-6 relative overflow-hidden group hover:border-white/20 transition-all duration-300 ${colSpan} ${className}`}
        >
            {children}
        </Wrapper>
    );
};

const StatRow = ({ label, value }) => (
    <div className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
        <span className="text-xs text-gray-500 font-mono">{label}</span>
        <span className="text-xs text-gray-300 font-mono">{value}</span>
    </div>
);

export default function App() {
    const [showStats, setShowStats] = useState(false);
    // Generamos el ID una sola vez para evitar cambios al re-renderizar
    const [sessionId] = useState(() => Math.random().toString(36).substring(7).toUpperCase());

    return (
        <div className="min-h-screen relative flex flex-col items-center justify-center p-4 sm:p-8 overflow-x-hidden selection:bg-purple-500/30">

            {/* Background Noise/Effect */}
            <div className="fixed inset-0 bg-dots z-0 pointer-events-none"></div>
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>

            {/* Main Container */}
            <main className="w-full max-w-5xl animate-fade-in z-10">
                
                {/* Header Section */}
                <header className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 px-2">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 relative z-10 bg-[#111]">
                            <img src={USER_DATA.avatar} alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-4 border-[#050505] z-20" title="Online"></div>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-white tracking-tight mb-1">{USER_DATA.name}</h1>
                        <p className="text-gray-400 text-lg flex items-center gap-2">
                            {USER_DATA.role}
                            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                            <span className="text-sm text-gray-500">Solana & EVM</span>
                        </p>
                        <p className="text-gray-500 text-sm mt-2 max-w-md leading-relaxed">
                            {USER_DATA.bio}
                        </p>
                    </div>
                </header>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">

                    {/* 1. Large Main Card (ENS Style Identity) */}
                    <BentoCard colSpan="col-span-1 sm:col-span-2 md:col-span-2" className="flex flex-col justify-between bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border-blue-500/20">
                        <div className="flex justify-between items-start">
                            <div className="p-2 bg-blue-500/20 rounded-lg">
                                <Layers className="text-blue-400" size={24} />
                            </div>
                            <span className="px-2 py-1 rounded-full bg-black/30 text-[10px] font-mono text-blue-200 border border-blue-500/30">ENS</span>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-1">piczadev.eth</h3>
                            <div className="flex items-center gap-2">
                                <span className="text-blue-200/60 text-sm font-mono">{USER_DATA.ethAddress}</span>
                                <CopyButton textToCopy="0xOf73d...Ef725" label="Copy" />
                            </div>
                        </div>
                    </BentoCard>

                    {/* 2. Base/Solana Card */}
                    <BentoCard colSpan="col-span-1 sm:col-span-2 md:col-span-2" className="flex flex-col justify-between bg-white/5">
                        <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none"></div>
                        <div className="relative z-10 flex justify-between items-start">
                            <div className="p-2 bg-purple-500/20 rounded-lg">
                                <Zap className="text-purple-400" size={24} />
                            </div>
                            <span className="px-2 py-1 rounded-full bg-black/30 text-[10px] font-mono text-purple-200 border border-purple-500/30">SOL / BASE</span>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                                {USER_DATA.solAddress}
                            </h3>
                            <div className="flex gap-2">
                                <span className="text-xs text-gray-500 font-mono bg-black/40 px-2 py-1 rounded">piczadev.base.eth</span>
                            </div>
                        </div>
                    </BentoCard>

                    {/* 3. Obsidian / Brain */}
                    <BentoCard href="#" className="group flex flex-col items-center justify-center text-center gap-4 hover:bg-purple-900/10 cursor-pointer">
                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Database className="text-purple-400" size={24} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-white">Second Brain</h4>
                            <p className="text-xs text-gray-500 mt-1">Obsidian Vault</p>
                        </div>
                        <ExternalLink size={14} className="absolute top-4 right-4 text-gray-600 group-hover:text-white transition-colors" />
                    </BentoCard>

                    {/* 4. Twitter / X */}
                    <BentoCard href={USER_DATA.socials.twitter} className="flex flex-col items-center justify-center bg-black hover:bg-neutral-900 border-neutral-800">
                        <Twitter size={32} className="text-white mb-2" />
                        <span className="text-xs text-gray-500">@piczadev</span>
                    </BentoCard>

                    {/* 5. GitHub (Large Vertical or Square) */}
                    <BentoCard href={USER_DATA.socials.github} colSpan="col-span-1 sm:col-span-2" className="flex flex-row items-center gap-6 hover:bg-white/5">
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                            <Github size={32} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">GitHub</h3>
                            <p className="text-sm text-gray-400 mt-1">Code, Automation scripts & Research.</p>
                            <div className="flex gap-2 mt-3">
                                <span className="text-[10px] bg-yellow-500/10 text-yellow-500 px-2 py-0.5 rounded border border-yellow-500/20">JS</span>
                                <span className="text-[10px] bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded border border-blue-500/20">Python</span>
                                <span className="text-[10px] bg-green-500/10 text-green-500 px-2 py-0.5 rounded border border-green-500/20">Solidity</span>
                            </div>
                        </div>
                    </BentoCard>

                    {/* 6. LinkedIn */}
                    <BentoCard href={USER_DATA.socials.linkedin} className="hover:bg-[#0077b5]/10 hover:border-[#0077b5]/30">
                        <Linkedin size={28} className="text-[#0077b5] mb-4" />
                        <h4 className="font-semibold">LinkedIn</h4>
                        <p className="text-xs text-gray-500">Professional</p>
                    </BentoCard>

                    {/* 7. Farcaster */}
                    <BentoCard href={USER_DATA.socials.farcaster} className="bg-[#855DCD]/5 hover:bg-[#855DCD]/10 hover:border-[#855DCD]/30">
                        <Globe size={28} className="text-[#855DCD] mb-4" />
                        <h4 className="font-semibold">Farcaster</h4>
                        <p className="text-xs text-gray-500">Warpcast</p>
                    </BentoCard>

                    {/* 8. Automation / Raycast */}
                    <BentoCard className="col-span-1 sm:col-span-2 flex flex-col justify-center bg-gradient-to-r from-red-900/20 to-orange-900/20 border-orange-500/10">
                        <div className="flex items-center gap-3 mb-2">
                            <Terminal size={20} className="text-orange-400" />
                            <h4 className="font-bold text-orange-100">Automation Workflow</h4>
                        </div>
                        <p className="text-xs text-gray-400 mb-3">Powered by Raycast, Warp & custom Python scripts.</p>
                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 w-[85%]"></div>
                            </div>
                            <span className="text-[10px] font-mono text-orange-400">85% Eff.</span>
                        </div>
                    </BentoCard>

                </div>

                {/* Stats Dropdown */}
                <div className="mt-8 border-t border-white/10 pt-4">
                    <button
                        onClick={() => setShowStats(!showStats)}
                        className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors cursor-pointer select-none"
                    >
                        <Code size={14} />
                        <span>Stats for nerds</span>
                        <span className={`transition-transform duration-300 ${showStats ? 'rotate-180' : ''}`}>▼</span>
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showStats ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 max-w-2xl">
                            <div className="col-span-1 md:col-span-2 mb-2 pb-2 border-b border-white/5 flex items-center justify-between">
                                <span className="text-xs text-green-500 font-mono flex items-center gap-2">● Systems Operational</span>
                                <span className="text-[10px] text-gray-600 font-mono border border-white/10 px-2 py-0.5 rounded">Built with React & Tailwind</span>
                            </div>

                            {HARDWARE_STATS.map((stat) => (
                                <StatRow key={stat.label} label={stat.label} value={stat.value} />
                            ))}

                            <div className="col-span-1 md:col-span-2 mt-2 pt-2 border-t border-white/5 text-[10px] text-gray-600 font-mono">
                                Session ID: {sessionId}
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="mt-12 mb-6 text-center text-gray-600 text-xs">
                    <p>© 2025 Piczadev. All rights reserved.</p>
                </footer>

            </main>
        </div>
    );
}
