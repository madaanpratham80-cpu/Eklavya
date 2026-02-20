import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import '../styles/Onboarding.css';

const STEPS = [
    {
        id: 'objective',
        question: "Target Objective?",
        type: 'select',
        options: ['JEE Mains', 'NEET', 'Computer Science / Skill Up']
    },
    {
        id: 'currentClass',
        question: "Current Status?",
        type: 'select',
        options: (data) => ['JEE Mains', 'NEET'].includes(data?.objective)
            ? ['Class 11', 'Class 12', 'Dropper / Gap Year']
            : ['Class 11', 'Class 12', 'Dropper / Gap Year', 'College Student']
    },
    {
        id: 'powerSubject',
        question: "Which is your favourite subject?",
        type: 'input',
        placeholder: 'e.g. Physics'
    },
    {
        id: 'powerReason',
        question: "Why is this your Power Subject?",
        type: 'textarea',
        placeholder: 'e.g., I love solving logical puzzles... (Max 150 chars)'
    },
    {
        id: 'kryptoniteSubject',
        question: "What's Boring According to you?",
        type: 'input',
        placeholder: 'e.g. Chemistry'
    },
    {
        id: 'kryptoniteReason',
        question: "Why does that subject bore you?",
        type: 'textarea',
        placeholder: 'e.g., Too much memorization... (Max 150 chars)'
    },
    {
        id: 'studyHours',
        question: "How much do you study on a daily basis?",
        type: 'select',
        options: ['2-4 Hours', '4-8 Hours', '8+ Hours (Insane Mode)']
    },
    {
        id: 'learningStyle',
        question: "Learning Style?",
        type: 'select',
        options: ['Visual (Video)', 'Text (Reading)', 'Practical (Coding)']
    }
];

const Onboarding = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const { onboardingData, updateOnboarding } = useApp();
    const navigate = useNavigate();

    const handleNext = () => {
        if (currentStep < STEPS.length - 1) {
            setCurrentStep(curr => curr + 1);
        } else {
            navigate('/calibration');
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(curr => curr - 1);
        }
    };

    const handleChange = (val) => {
        updateOnboarding(STEPS[currentStep].id, val);
    };

    const stepData = STEPS[currentStep];
    const currentValue = onboardingData[stepData.id];
    const progress = ((currentStep + 1) / STEPS.length) * 100;

    return (
        <div className="onboarding-container">
            <div className="vignette-overlay"></div>

            <div className="glass-panel onboarding-card animate-fade-in">
                <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>

                <div key={stepData.id} className="question-content" style={{ width: '100%' }}>
                    <h2 className="question-title">{stepData.question}</h2>

                    {stepData.type === 'select' && (
                        <div className="options-grid">
                            {(typeof stepData.options === 'function' ? stepData.options(onboardingData) : stepData.options).map(opt => (
                                <button
                                    key={opt}
                                    className={`option-btn ${currentValue === opt ? 'selected' : ''}`}
                                    onClick={() => handleChange(opt)}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    )}

                    {stepData.type === 'input' && (
                        <input
                            type="text"
                            className="input-large"
                            placeholder={stepData.placeholder}
                            value={currentValue || ''}
                            onChange={(e) => handleChange(e.target.value)}
                            autoFocus
                        />
                    )}

                    {stepData.type === 'textarea' && (
                        <>
                            <textarea
                                className="textarea-large"
                                placeholder={stepData.placeholder}
                                value={currentValue || ''}
                                onChange={(e) => handleChange(e.target.value)}
                                maxLength={150}
                                autoFocus
                            />
                            <div className="char-counter">{(currentValue || '').length}/150</div>
                        </>
                    )}
                </div>

                <div className="nav-buttons">
                    <button
                        className="nav-btn"
                        onClick={handleBack}
                        style={{ visibility: currentStep === 0 ? 'hidden' : 'visible' }}
                    >
                        ← BACK
                    </button>

                    <button
                        className="action-btn"
                        onClick={handleNext}
                        disabled={!currentValue}
                    >
                        {currentStep === STEPS.length - 1 ? "LET'S BEGIN" : 'NEXT →'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Onboarding;
