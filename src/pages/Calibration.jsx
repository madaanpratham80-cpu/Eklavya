import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SUPERPOWERS } from '../data/mockData';
import '../styles/Calibration.css';

const LOGS = [
    "Initializing Neural Link...",
    "Accessing Memory Blocks...",
    "Analyzing Click Latency...",
    "Scanning Cognitive Patterns...",
    "Optimizing Neural Network...",
    "Decrypting Genetic Code...",
    "Pattern Match Found...",
    "Calibrating Results...",
    "System Lock Engaged."
];

const Calibration = () => {
    const [logs, setLogs] = useState([]);
    const [progress, setProgress] = useState(0);
    const [complete, setComplete] = useState(false);
    const [superpower, setSuperpower] = useState(null);

    const { onboardingData } = useApp();
    const navigate = useNavigate();

    // Determine superpower based on inputs
    useEffect(() => {
        let type = 'ENHANCER'; // Default
        const style = onboardingData.learningStyle;

        if (style && style.includes('Visual')) type = 'CONJURER';
        if (style && style.includes('Text')) type = 'SPECIALIST';
        if (style && style.includes('Practical')) type = 'TRANSMUTER';

        const matched = SUPERPOWERS.find(s => s.id === type) || SUPERPOWERS[0];
        setSuperpower(matched);
    }, [onboardingData]);

    // Simulation Timer
    useEffect(() => {
        if (complete) {
            const timeout = setTimeout(() => {
                navigate('/dashboard');
            }, 4000); // 4s to read the result
            return () => clearTimeout(timeout);
        }

        if (progress >= 100) {
            setComplete(true);
            return;
        }

        const timer = setTimeout(() => {
            setProgress(p => p + 1);

            // Add log roughly every 10%
            if (progress % 12 === 0) {
                const logIndex = Math.floor(progress / 12);
                if (logIndex < LOGS.length) {
                    setLogs(prev => [...prev, LOGS[logIndex]]);
                }
            }
        }, 50); // 50ms * 100 = 5s total duration

        return () => clearTimeout(timer);
    }, [progress, complete, navigate]);

    const handleFastForward = () => {
        setProgress(100);
        setLogs(LOGS);
    };

    return (
        <div className="calibration-container">
            {!complete ? (
                <>
                    <div className="radar-container">
                        <div className="radar-circle c1"></div>
                        <div className="radar-circle c2"></div>
                        <div className="radar-circle c3"></div>
                        <div className="radar-sweep"></div>
                    </div>

                    <div className="terminal-logs">
                        {logs.map((log, i) => (
                            <div key={i} className="log-line">&gt; {log}</div>
                        ))}
                        <div className="log-line" style={{ animation: 'none', opacity: 1 }}>
                            &gt; {progress}%...
                        </div>
                    </div>

                    <button className="fast-forward-btn" onClick={handleFastForward}>
                        ⚡ FAST FORWARD
                    </button>
                </>
            ) : (
                <div className="success-reveal">
                    <div className="superpower-title">SUPERPOWER UNLOCKED</div>
                    <div className="superpower-name">{superpower?.label}</div>
                    <div className="superpower-desc">{superpower?.trait} - {superpower?.desc}</div>
                </div>
            )}
        </div>
    );
};

export default Calibration;
