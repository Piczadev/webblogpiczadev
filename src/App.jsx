import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import {
    Github, Twitter, Linkedin, Terminal,
    Database, Copy, Check, ExternalLink,
    Layers, Zap, Globe, Code, Youtube, Instagram, Send, Box,
    Briefcase, Cpu, Sparkles
} from 'lucide-react';

// --- Data Configuration ---
const USER_DATA = {
    name: "Yahir Rivera",
    role: "Founder & CEO @PizzaLabs | Web3 Developer",
    bio: "Building on Solana & EVM. Automating the chaos.",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Piczadev&backgroundColor=1f1f1f",
    links: [
        {
            title: "piczadev.eth",
            subtitle: "0xOf73d...Ef725",
            url: "https://app.ens.domains/piczadev.eth",
            type: "ens",
            icon: "layers",
            colSpan: "col-span-1 md:col-span-6",
            bg: "bg-gradient-to-br from-blue-600 to-blue-800",
            textColor: "text-white"
        },
        {
            title: "piczadev.base.eth",
            subtitle: "Basenames",
            url: "https://www.base.org/name/piczadev",
            type: "base",
            icon: "zap",
            colSpan: "col-span-1 md:col-span-6",
            bg: "bg-gradient-to-br from-blue-500 to-white",
            textColor: "text-blue-900",
            isLight: true
        },
        {
            title: "pizzalabs.sol",
            subtitle: "SNS Domain",
            url: "https://www.sns.id/domain/pizzalabs",
            type: "sns",
            icon: "box",
            colSpan: "col-span-1 md:col-span-3",
            bg: "bg-[#141414]", // Dark minimalist
            textColor: "text-white",
            border: "border-white/10"
        },
        {
            title: "YouTube",
            subtitle: "@piczadev0s",
            url: "https://www.youtube.com/@piczadev0s",
            type: "youtube",
            icon: "youtube",
            colSpan: "col-span-1 md:col-span-3",
            bg: "bg-[#FF0000]",
            textColor: "text-white"
        },
        {
            title: "Instagram",
            subtitle: "@yha.piczadev",
            url: "https://www.instagram.com/yha.piczadev/",
            type: "instagram",
            icon: "instagram",
            colSpan: "col-span-1 md:col-span-2",
            bg: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500",
            textColor: "text-white"
        },
        {
            title: "Farcaster",
            subtitle: "@piczadev.eth",
            url: "https://farcaster.xyz/piczadev.eth",
            type: "farcaster",
            icon: "globe",
            colSpan: "col-span-1 md:col-span-2",
            bg: "bg-gradient-to-br from-[#8a63d2] to-[#4b2a99]",
            textColor: "text-white"
        },
        {
            title: "Telegram",
            subtitle: "@PiczaDev",
            url: "https://t.me/PiczaDev",
            type: "telegram",
            icon: "send",
            colSpan: "col-span-1 md:col-span-2",
            bg: "bg-[#229ED9]",
            textColor: "text-white"
        },
        {
            title: "GitHub",
            subtitle: "@piczadev",
            url: "https://github.com/piczadev",
            type: "github",
            icon: "github",
            colSpan: "col-span-1 md:col-span-2",
            bg: "bg-[#181717]",
            textColor: "text-white"
        }
    ],
    experience: [
        {
            company: "PizzaLabs",
            role: "Chief Executive Officer",
            period: "Nov 2024 - Present",
            description: "Leading development of Web3 solutions, building scalable crypto communities, and empowering users through blockchain tech.",
            type: "Founder"
        },
        {
            company: "PiczaDev",
            role: "Chief Technology Officer",
            period: "Nov 2023 - Present",
            description: "Innovation in Blockchain & Digital Safety. Web3 Solutions & Crypto Communities.",
            type: "Founder"
        },
        {
            company: "TON Startup (Telegram)",
            role: "Blockchain Developer",
            period: "Aug 2024 - Present",
            description: "Developing decentralized applications (dApps) on the TON Blockchain using smart contracts.",
            type: "Contract"
        },
        {
            company: "YouTube",
            role: "Content Creator (Tech & Crypto)",
            period: "Jan 2019 - Present",
            description: "Educational content creator with 50k+ subscribers. Expert in video editing, streaming tech (OBS, NDI Tools), and tech tutorials.",
            type: "Creator"
        },
        {
            company: "Solana Labs",
            role: "Blockchain Developer Intern",
            period: "2024",
            description: "Developed and tested magical smart contracts. Crafted dApps that elevate user experience.",
            type: "Internship"
        }
    ],
    skills: {
        "Programming Sorcery": ["JavaScript (ES6+)", "HTML5", "CSS3", "TypeScript", "Python"],
        "Frameworks & Libraries": ["React.js", "Vue.js", "Next.js", "Sass"],
        "AI & LLM Alchemist": ["LLMs", "MCP", "Prompt Engineering", "Generative AI"],
        "Blockchain Enchanter": ["Smart Contracts", "Solidity", "TON Blockchain", "Web3"],
        "Systems & IoT Artificer": ["Linux Servers", "Raspberry Pi", "IoT"],
        "OS Trinity": ["macOS", "Linux", "Windows"],
        "Video Production": ["Adobe Premiere", "OBS Studio", "NDI Tools", "DaVinci Resolve"],
        "Toolbox of Wonders": ["Git", "Docker", "Node.js", "Figma", "Webpack"],
        "Security Sage": ["OSINT", "Nmap", "FOCA", "Kali Linux"]
    },
    workflow: [
        {
            title: "Second Brain (Obsidian)",
            icon: "database",
            description: "Automated knowledge base using PARA method (Projects, Areas, Resources, Archive).",
            features: [
                "Dataview Dashboards & YAML Metadata",
                "Git Version Control & Obsidian Sync",
                "Terminal Integration via URIs",
                "Templater Automation"
            ]
        },
        {
            title: "Command Center (Raycast)",
            icon: "terminal",
            description: "Centralized control hub with 43+ extensions.",
            features: [
                "AI: Gemini, ChatGPT, Ollama, Warp Agent",
                "Dev: GitHub, Linear, Vercel, JetBrains",
                "System: Clean Keyboard, Menu Bar Toggle",
                "Local Model Integration"
            ]
        }
    ]
};

// --- Components ---

const BentoCard = ({ item }) => {
    const Icon = {
        layers: Layers,
        zap: Zap,
        box: Box,
        youtube: Youtube,
        instagram: Instagram,
        send: Send,
        github: Github
    }[item.icon] || ExternalLink;

    return (
        <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                ${item.colSpan}
                ${item.bg}
                ${item.border ? `border ${item.border}` : 'border-0'}
            `}
        >
            {/* Background Pattern for some cards */}
            {item.type === 'base' && (
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:16px_16px]"></div>
            )}

            <div className={`relative z-10 flex flex-col h-full justify-between ${item.textColor}`}>
                <div className="flex justify-between items-start">
                    <div className={`p-2 rounded-full ${item.isLight ? 'bg-black/10' : 'bg-white/20'} backdrop-blur-sm`}>
                        <Icon size={24} />
                    </div>
                    <ExternalLink size={16} className={`opacity-50 group-hover:opacity-100 transition-opacity ${item.textColor}`} />
                </div>

                <div className="mt-8">
                    <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                    <p className={`text-sm font-medium opacity-80 mt-1 font-mono`}>{item.subtitle}</p>
                </div>
            </div>
        </a>
    );
};

const ExperienceCard = ({ exp }) => (
    <div className="relative pl-8 pb-8 border-l border-white/10 last:pb-0">
        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-purple-500 ring-4 ring-[#050505]"></div>
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
            <h4 className="text-lg font-bold text-white">{exp.role}</h4>
            <span className="text-xs font-mono text-gray-500">{exp.period}</span>
        </div>
        <div className="text-sm text-purple-400 mb-2 font-medium">{exp.company}</div>
        <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
            {exp.description}
        </p>
    </div>
);

const WorkflowCard = ({ item }) => {
    const Icon = item.icon === 'database' ? Database : Terminal;
    return (
        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-6 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10">
                    <Icon size={20} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {item.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></div>
                        {feature}
                    </div>
                ))}
            </div>
        </div>
    );
};

const SkillGroup = ({ title, skills }) => (
    <div className="mb-6 break-inside-avoid">
        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Sparkles size={12} className="text-yellow-500" />
            {title}
        </h4>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

export default function App() {
    return (
        <div className="min-h-screen bg-[#050505] text-white p-4 sm:p-8 flex justify-center">
            <main className="w-full max-w-4xl animate-fade-in">

                {/* Header */}
                <header className="flex flex-col items-center text-center mb-12 mt-8">
                    <div className="relative mb-6 group">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#1a1a1a] relative z-10 bg-[#111] transition-transform duration-500 group-hover:scale-105">
                            <img src={USER_DATA.avatar} alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight mb-2">{USER_DATA.name}</h1>
                    <p className="text-gray-400 text-lg">{USER_DATA.role}</p>

                    {/* Mini Social Row */}
                    <div className="flex gap-4 mt-6">
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </header>

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-20">
                    {USER_DATA.links.map((link, index) => (
                        <BentoCard key={index} item={link} />
                    ))}
                </div>

                {/* Experience & Skills Split */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    {/* Experience Column */}
                    <div className="md:col-span-7">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 rounded-lg bg-purple-500/10">
                                <Briefcase size={20} className="text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Professional Journey</h3>
                        </div>
                        <div className="pl-2 mb-12">
                            {USER_DATA.experience.map((exp, index) => (
                                <ExperienceCard key={index} exp={exp} />
                            ))}
                        </div>

                        {/* Workflow Section */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 rounded-lg bg-green-500/10">
                                <Terminal size={20} className="text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Workflow & Systems</h3>
                        </div>
                        <div>
                            {USER_DATA.workflow.map((flow, index) => (
                                <WorkflowCard key={index} item={flow} />
                            ))}
                        </div>
                    </div>

                    {/* Skills Column */}
                    <div className="md:col-span-5">
                        <div className="sticky top-8">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 rounded-lg bg-yellow-500/10">
                                    <Cpu size={20} className="text-yellow-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Skills & Proficiency</h3>
                            </div>

                            <div className="glass-card rounded-3xl p-6">
                                {Object.entries(USER_DATA.skills).map(([category, skills]) => (
                                    <SkillGroup key={category} title={category} skills={skills} />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                <footer className="text-center text-gray-600 text-xs py-12 mt-12 border-t border-white/5">
                    <p>© 2025 Piczadev. All rights reserved.</p>
                </footer>

            </main>
            <Analytics />
        </div>
    );
}
