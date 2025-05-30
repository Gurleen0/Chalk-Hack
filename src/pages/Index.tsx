
import { useState } from "react";
import CertificateScreen from "../components/CertificateScreen";
import UpgradeScreen from "../components/UpgradeScreen";
import PlanScreen from "../components/PlanScreen";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState(1);

  const nextScreen = () => {
    if (currentScreen < 6) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const goBack = () => {
    if (currentScreen > 1) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto">
        {currentScreen === 1 && (
          <CertificateScreen onNext={nextScreen} />
        )}
        {currentScreen === 2 && (
          <UpgradeScreen onNext={nextScreen} onBack={goBack} />
        )}
        {(currentScreen === 3 || currentScreen === 4 || currentScreen === 5 || currentScreen === 6) && (
          <PlanScreen 
            onNext={nextScreen} 
            onBack={goBack} 
            currentStep={currentScreen - 2}
          />
        )}
      </div>
    </div>
  );
};

export default Index;