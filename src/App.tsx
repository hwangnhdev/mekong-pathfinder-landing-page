import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './components/common/MainLayout';
import LandingPage from './pages/LandingPage';
import AchievementsPage from './pages/AchievementsPage';
import TeamPage from './pages/TeamPage';
import DownloadPage from './pages/DownloadPage';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <MainLayout>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/download" element={<DownloadPage />} />
              {/* <Route path="/feedback" element={<FeedbackPage />} /> */}
            </Routes>
          </MainLayout>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
