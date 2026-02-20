import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('eklavya_user');
        return saved ? JSON.parse(saved) : null;
    });

    const [onboardingData, setOnboardingData] = useState({
        objective: '',
        currentClass: '',
        powerSubject: '',
        powerReason: '',
        kryptoniteSubject: '',
        kryptoniteReason: '',
        studyHours: '',
        learningStyle: ''
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem('eklavya_user', JSON.stringify(user));
        }
    }, [user]);

    const login = (name, email) => {
        setUser({ name, email });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('eklavya_user');
    };

    const updateOnboarding = (key, value) => {
        setOnboardingData(prev => ({ ...prev, [key]: value }));
    };

    return (
        <AppContext.Provider value={{
            user,
            login,
            logout,
            onboardingData,
            updateOnboarding
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);
