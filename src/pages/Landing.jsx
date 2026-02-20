import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SUBJECTS_GRID } from '../data/mockData';
import '../styles/Landing.css';

const Landing = () => {
    const [isAnimating, setIsAnimating] = useState(true);
    const [activeTab, setActiveTab] = useState('signin');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const { login } = useApp();
    const navigate = useNavigate();

    useEffect(() => {
        // Total animation time is approx 3.2s (2s delay + 1.2s zoom)
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 3500);
        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && name) {
            login(name, email);
            navigate('/onboarding');
        }
    };

    return (
        <div className="landing-container">
            {/* Background Grid - Always present but covered initially */}
            <div className="background-grid-container">
                <div className="grid-animation-wrapper">
                    {/* Create a large enough grid to cover and loop */}
                    <div className="landing-grid">
                        {/* Repeat the subjects to fill space. 400 items for demo coverage */}
                        {[...Array(400)].map((_, i) => (
                            <div key={i} className="grid-item">
                                {SUBJECTS_GRID[i % SUBJECTS_GRID.length]}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="vignette-overlay"></div>
            </div>

            {/* Intro Animation Overlay */}
            {isAnimating && (
                <div className="intro-overlay">
                    <div className="e-container zoom-out-effect">
                        <div className="ribbon ribbon-vertical"></div>
                        <div className="ribbon ribbon-top"></div>
                        <div className="ribbon ribbon-middle"></div>
                        <div className="ribbon ribbon-bottom"></div>
                    </div>
                </div>
            )}

            {/* Login Card - Revealed after animation */}
            {!isAnimating && (
                <div className="glass-panel login-card animate-fade-in">
                    <h2 className="login-title">EKLAVYA</h2>

                    <div className="tab-group">
                        <div
                            className={`tab ${activeTab === 'signin' ? 'active' : ''}`}
                            onClick={() => setActiveTab('signin')}
                        >
                            SIGN IN
                        </div>
                        <div
                            className={`tab ${activeTab === 'new' ? 'active' : ''}`}
                            onClick={() => setActiveTab('new')}
                        >
                            SIGN UP
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label className="input-label">NAME</label>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Enter Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label className="input-label">SIGNAL ID</label>
                            <input
                                type="email"
                                className="input-field"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn neon-glow">
                            {activeTab === 'signin' ? 'LOG IN' : 'SIGN UP'}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Landing;
