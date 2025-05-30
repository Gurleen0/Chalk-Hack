import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpgradeScreen from './pages/UpgradeScreen';
import ChoosePlan from './pages/ChoosePlan';
import LearningPath from './pages/LearningPath';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UpgradeScreen />} />
        <Route path="/choose-plan" element={<ChoosePlan />} />
        <Route path="/learning-path" element={<LearningPath />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
