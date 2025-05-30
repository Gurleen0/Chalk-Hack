import React from 'react';
import { ArrowLeft, Star } from 'lucide-react';

const CompletionScreen = ({ setCurrentScreen }) => (
  <div className="h-full bg-gradient-to-b from-gray-900 to-purple-900 text-white flex flex-col">
    <div className="p-4 flex-1">
      <button 
        onClick={() => setCurrentScreen('landing')}
        className="mb-4 p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      
      <div className="text-center h-full flex flex-col">
        <h2 className="text-sm font-semibold mb-4 text-gray-200 tracking-wider">PAINTING LEARNING PATH</h2>
        
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-lg font-bold mb-6 px-2">Congratulations, You completed the Learning Path</h1>
          
          {/* Certificate Badge */}
          <div className="relative mx-auto w-64 h-64 mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full transform rotate-12 opacity-90"></div>
            <div className="relative bg-gradient-to-br from-purple-200 to-pink-200 text-purple-900 rounded-full p-6 h-full flex flex-col items-center justify-center shadow-2xl">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mb-3">
                <Star className="w-4 h-4 text-white" />
              </div>
              <p className="text-xs font-medium mb-2">Certified by Portal</p>
              <h3 className="text-sm font-bold text-center leading-tight mb-3 px-2">
                How to Master Painting: Create Masterpieces using Acrylic Paint
              </h3>
              <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>

        <button 
          onClick={() => setCurrentScreen('plans')}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg mb-6 relative"
        >
          <Star className="w-4 h-4 inline mr-2" />
          Upgrade to Premium
          <div className="text-xl font-bold mt-1">₹600</div>
          <div className="text-sm line-through opacity-70">₹900</div>
        </button>

        {/* Bottom Navigation */}
        <div className="flex justify-center space-x-12 pb-4">
          <div className="text-center opacity-50">
            <div className="w-6 h-6 mx-auto mb-1">🏠</div>
          </div>
          <div className="text-center">
            <div className="w-6 h-6 mx-auto mb-1 text-purple-400">📚</div>
            <div className="text-xs text-purple-400">Course</div>
          </div>
          <div className="text-center opacity-50">
            <div className="w-6 h-6 mx-auto mb-1">⚙️</div>
          </div>
          <div className="text-center opacity-50">
            <div className="w-6 h-6 mx-auto mb-1">👤</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CompletionScreen;