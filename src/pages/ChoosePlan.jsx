import React from 'react';
import { ArrowLeft, Users, Coffee } from 'lucide-react';

const PlansScreen = ({ setCurrentScreen, selectedPlan, setSelectedPlan }) => (
  <div className="h-full bg-gray-900 text-white flex flex-col">
    <div className="p-4 flex-1">
      <button 
        onClick={() => setCurrentScreen('completion')}
        className="mb-4 p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      
      <h1 className="text-xl font-bold mb-6">Choose your plan!</h1>
      
      <div className="space-y-4 mb-8 flex-1">
        {/* Happy Together Plan */}
        <div 
          className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
            selectedPlan === 'happy-together' 
              ? 'border-purple-500 bg-purple-900/30' 
              : 'border-gray-700 bg-gray-800/50'
          }`}
          onClick={() => setSelectedPlan('happy-together')}
        >
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold mb-2">Happy Together!</h3>
              <p className="text-gray-300 text-sm mb-2">Share the subscription with 2 other friends and save up to xyz rupees!</p>
              {selectedPlan === 'happy-together' && (
                <p className="text-purple-400 text-sm">You can invite them to join you after the purchase.</p>
              )}
            </div>
          </div>
        </div>

        {/* Solo Hustle Plan */}
        <div 
          className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
            selectedPlan === 'solo-hustle' 
              ? 'border-purple-500 bg-purple-900/30' 
              : 'border-gray-700 bg-gray-800/50'
          }`}
          onClick={() => setSelectedPlan('solo-hustle')}
        >
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Coffee className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold mb-2">Solo Hustle</h3>
              <p className="text-gray-300 text-sm">You don't need anyone keep at it. Go get it!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center space-x-2 mb-6">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
      </div>

      <button 
        onClick={() => setCurrentScreen('payment-frequency')}
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
      >
        Next
      </button>
    </div>
  </div>
);

export default ChoosePlan;