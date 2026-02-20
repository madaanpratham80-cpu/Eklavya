export const SUPERPOWERS = [
    { id: 'ENHANCER', label: 'The Grinder', trait: 'High Endurance', desc: 'Can focus for 12+ hours.' },
    { id: 'EMITTER', label: 'The Sprinter', trait: 'High Speed', desc: 'Solves problems in seconds.' },
    { id: 'TRANSMUTER', label: 'The Adapter', trait: 'High Adaptability', desc: 'Masters new tech quickly.' },
    { id: 'CONJURER', label: 'The Architect', trait: 'Visual/Spatial', desc: 'Sees systems in 3D.' },
    { id: 'MANIPULATOR', label: 'The Strategist', trait: 'Game Theory', desc: 'Optimizes for best outcome.' },
    { id: 'SPECIALIST', label: 'The Prodigy', trait: 'Deep Focus', desc: 'Dominates one niche.' },
];

export const CS_TRACKS = [
    {
        id: 'web',
        title: 'Web Development',
        icon: '🌐',
        theme: 'Evolution',
        modules: [
            { name: 'HTML', metaphor: 'The Skeleton', icon: '🦴' },
            { name: 'CSS', metaphor: 'The Skin', icon: '💄' },
            { name: 'JS', metaphor: 'The Brain', icon: '🧠' },
            { name: 'React', metaphor: 'The Reality', icon: '🪞' }
        ]
    },
    {
        id: 'game',
        title: 'Game Development',
        icon: '🎮',
        theme: 'Retro Arcade',
        modules: [
            { name: 'Unity', metaphor: 'The Engine', icon: '👾' },
            { name: 'C#', metaphor: 'The Script', icon: '📜' },
            { name: 'Unreal', metaphor: 'The Power', icon: '🧨' },
            { name: 'Math', metaphor: 'The Physics', icon: '📐' }
        ]
    },
    {
        id: 'sec',
        title: 'Cyber Security',
        icon: '🛡️',
        theme: 'The Matrix',
        modules: [
            { name: 'Network', metaphor: 'The Grid', icon: '🌐' },
            { name: 'Linux', metaphor: 'The Core', icon: '🐧' },
            { name: 'Python', metaphor: 'The Snake', icon: '🐍' },
            { name: 'Ethical Hacking', metaphor: 'The Key', icon: '🗝️' }
        ]
    },
    {
        id: 'backend',
        title: 'Backend Engineering',
        icon: '⚙️',
        theme: 'Mission Impossible',
        modules: [
            { name: 'Node.js', metaphor: 'The Server', icon: '🟢' },
            { name: 'SQL', metaphor: 'The Vault', icon: '🗄️' },
            { name: 'API', metaphor: 'The Wire', icon: '🔌' },
            { name: 'Docker', metaphor: 'The Ship', icon: '🐳' }
        ]
    }
];

export const SUBJECTS_GRID = [
    'Python 🐍', 'Calculus ∫', 'History 🏛', 'Physics ⚛️',
    'Java ☕', 'Biology 🧬', 'Chemistry 🧪', 'React ⚛️',
    'Node 🟢', 'SQL 🗄️', 'Design 🎨', 'Algo 🔢',
    'Git 🐙', 'AI 🤖', 'Cloud ☁️', 'Security 🔒'
];
