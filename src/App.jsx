import React, { useState } from 'react';
import LandingScreen from './components/LandingScreen.jsx';
import CompletionScreen from './components/CompletionScreen.jsx';
import PlansScreen from './components/PlansScreen.jsx';
import PaymentFrequencyScreen from './components/PaymentFrequencyScreen.jsx';

const PortalPlusApp = () => {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [selectedPlan, setSelectedPlan] = useState('happy-together');
  const [selectedFrequency, setSelectedFrequency] = useState('monthly');

  // Main App Render
  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <LandingScreen setCurrentScreen={setCurrentScreen} />;
      case 'completion':
        return <CompletionScreen setCurrentScreen={setCurrentScreen} />;
      case 'plans':
        return <PlansScreen 
          setCurrentScreen={setCurrentScreen}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
        />;
      case 'payment-frequency':
        return <PaymentFrequencyScreen 
          setCurrentScreen={setCurrentScreen}
          selectedFrequency={selectedFrequency}
          setSelectedFrequency={setSelectedFrequency}
        />;
      default:
        return <LandingScreen setCurrentScreen={setCurrentScreen} />;
    }
  };

  return (
    <div className="font-sans max-w-sm mx-auto bg-gray-900 overflow-hidden" style={{height: '100vh', minHeight: '800px'}}>
      <div className="h-full">
        {renderCurrentScreen()}
      </div>
      
      {/* Debug Navigation - Remove in production */}
      <div className="fixed bottom-4 left-4 bg-black/80 text-white p-2 rounded-lg text-xs space-x-2 flex z-50">
        <button onClick={() => setCurrentScreen('landing')} className="hover:text-purple-400 p-1">1</button>
        <button onClick={() => setCurrentScreen('completion')} className="hover:text-purple-400 p-1">2</button>
        <button onClick={() => setCurrentScreen('plans')} className="hover:text-purple-400 p-1">3</button>
        <button onClick={() => setCurrentScreen('payment-frequency')} className="hover:text-purple-400 p-1">4</button>
      </div>
    </div>
  );
};

export default PortalPlusApp;