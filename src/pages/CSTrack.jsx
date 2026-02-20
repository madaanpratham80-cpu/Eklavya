import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CS_TRACKS } from '../data/mockData';
import '../styles/CSTrack.css';

const CSTrack = () => {
    const navigate = useNavigate();

    return (
        <div className="cs-track-container">
            <header className="track-header animate-fade-in">
                <h1 className="track-title">Computer Science Track</h1>
                <p style={{ color: '#666', marginTop: '10px' }}>SELECT YOUR SPECIALIZATION PROTOCOL</p>
            </header>

            <div className="track-grid">
                {CS_TRACKS.map((track, i) => (
                    <div
                        key={track.id}
                        className={`track-card card-${track.id}`}
                        style={{ animation: `fadeInUp 0.5s ease-out ${i * 0.1}s forwards`, opacity: 0, transform: 'translateY(20px)' }}
                    >
                        <div className="card-header">
                            <h2 className="card-title">{track.title}</h2>
                            <span className="card-theme">Theme: {track.theme}</span>
                        </div>

                        <div className="module-list">
                            {track.modules.map((mod, j) => (
                                <div key={j} className="module-item">
                                    <span style={{ fontSize: '1.2rem' }}>{mod.icon}</span>
                                    <div>
                                        <div style={{ fontWeight: 'bold' }}>{mod.name}</div>
                                        <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{mod.metaphor}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className="action-btn"
                            style={{ marginTop: '20px', width: '100%', fontSize: '0.9rem' }}
                        >
                            LOCATE RESOURCES
                        </button>
                    </div>
                ))}
            </div>

            <button
                className="nav-btn"
                style={{ position: 'fixed', top: '20px', left: '20px' }}
                onClick={() => navigate('/dashboard')}
            >
                ← DASHBOARD
            </button>
        </div>
    );
};

export default CSTrack;
