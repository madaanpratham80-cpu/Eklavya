import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { CS_TRACKS } from '../data/mockData';
import '../styles/Dashboard.css';

const JEE_MODULES = [
    { name: 'Physics Mechanics', icon: '⚙️' },
    { name: 'Organic Chem', icon: '🧪' },
    { name: 'Calculus', icon: '∫' },
    { name: 'Mock Test 1', icon: '📝' },
];

const NEET_MODULES = [
    { name: 'Human Anatomy', icon: '🦴' },
    { name: 'Botany', icon: '🌿' },
    { name: 'Genetics', icon: '🧬' },
    { name: 'Zoology', icon: '🦁' },
];

const Dashboard = () => {
    const { user, onboardingData } = useApp(); // onboardingData isn't used here but available
    const [isHovering, setIsHovering] = useState(false);
    const navigate = useNavigate();

    // Fallback if user is null (e.g. direct access)
    const userName = user?.name || 'Hunter';
    // Attempt to infer superpower or default
    const superpowerLabel = 'Optimization';

    const handleCardClick = (trackId) => {
        if (trackId === 'cs') {
            navigate('/track/cs');
        }
    };

    return (
        <div className="dashboard-container">


            {/* Hero Banner */}
            <div className="hero-banner">
                <div className="hero-content animate-fade-in">
                    <h1 className="welcome-text">Welcome, {userName}.</h1>
                    <p className="curriculum-text">Your {superpowerLabel} curriculum is ready.</p>
                    <button className="resume-btn" onClick={() => navigate('/track/cs')}>
                        RESUME LEARNING
                    </button>
                </div>
            </div>

            {/* Row 1: Computer Science */}
            <div className="row-container row-cs">
                <h3 className="row-title">Computer Science Track</h3>
                <div className="row-scroll">
                    {CS_TRACKS.map((track) => (
                        <div
                            key={track.id}
                            className="thumbnail-card"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                            onClick={() => handleCardClick('cs')}
                        >
                            <div className="thumbnail-content">
                                <span className="thumbnail-icon">{track.icon}</span>
                                <span className="thumbnail-title">{track.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2: JEE Mains */}
            <div className="row-container row-jee">
                <h3 className="row-title">JEE Mains Prep</h3>
                <div className="row-scroll">
                    {JEE_MODULES.map((mod, i) => (
                        <div
                            key={i}
                            className="thumbnail-card"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <div className="thumbnail-content">
                                <span className="thumbnail-icon">{mod.icon}</span>
                                <span className="thumbnail-title">{mod.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 3: NEET */}
            <div className="row-container row-neet">
                <h3 className="row-title">NEET Medical</h3>
                <div className="row-scroll">
                    {NEET_MODULES.map((mod, i) => (
                        <div
                            key={i}
                            className="thumbnail-card"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <div className="thumbnail-content">
                                <span className="thumbnail-icon">{mod.icon}</span>
                                <span className="thumbnail-title">{mod.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
