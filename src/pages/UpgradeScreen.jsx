import React from 'react';
import { Star, Crown, MessageCircle, Shield } from 'lucide-react';

const LandingScreen = ({ setCurrentScreen }) => (
  <div className="h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-6 w-20 h-20 bg-purple-400 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-6 w-24 h-24 bg-blue-400 rounded-full blur-xl animate-pulse delay-1000"></div>
    </div>
    
    <div className="relative z-10 flex flex-col h-full p-4 pt-8">
      {/* Character illustration placeholder */}
      <div className="mb-6 relative flex justify-center">
        <div className="w-32 h-40 bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg shadow-2xl flex items-center justify-center">
          <div className="text-gray-700 text-center">
            <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2"></div>
            <div className="text-xs">Character</div>
          </div>
        </div>
        <div className="absolute -top-2 -right-2 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
          Voxel Worlds
        </div>
      </div>

      {/* Portal Plus Branding */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-3">
          <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-2"></div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Portal Plus
          </h1>
        </div>
        <p className="text-sm text-gray-300 mb-1">Access over 3000 quality courses for</p>
        <p className="text-sm text-gray-300 mb-1">creative skills starting at just</p>
        <p className="text-xl font-bold text-purple-400">₹600 per year!</p>
      </div>

      {/* Features */}
      <div className="space-y-3 mb-6 flex-1">
        <div className="flex items-start space-x-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg">
          <Star className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-purple-300 text-sm">Ad-Free learning!</h3>
            <p className="text-xs text-gray-300">No more disturbances. Just you, your dream and the instructors!</p>
          </div>
        </div>

        <div className="flex items-start space-x-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg">
          <Crown className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-yellow-300 text-sm">Only the best for you!</h3>
            <p className="text-xs text-gray-300">Gain access to high quality premium courses</p>
          </div>
        </div>

        <div className="flex items-start space-x-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg">
          <MessageCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-blue-300 text-sm">Didn't get a concept? Talk it out!</h3>
            <p className="text-xs text-gray-300">Access to discussion forums moderated by instructors!</p>
          </div>
        </div>

        <div className="flex items-start space-x-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg">
          <Shield className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-green-300 text-sm">Your wallet is in safe hands</h3>
            <p className="text-xs text-gray-300">High quality content starting at just ₹600 per year!</p>
          </div>
        </div>
      </div>

      <button 
        onClick={() => setCurrentScreen('completion')}
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Get Portal Plus!
      </button>
    </div>
  </div>
);

export default LandingScreen;