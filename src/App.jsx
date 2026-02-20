import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import Onboarding from './pages/Onboarding';
import Calibration from './pages/Calibration';
import Dashboard from './pages/Dashboard';
import CSTrack from './pages/CSTrack';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/calibration" element={<Calibration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/track/cs" element={<CSTrack />} />
      </Routes>
    </Router>
  );
};

export default App;
