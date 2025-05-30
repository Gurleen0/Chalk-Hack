import React from 'react';
import { ArrowLeft, Calendar, CreditCard } from 'lucide-react';

const PaymentFrequencyScreen = ({ setCurrentScreen, selectedFrequency, setSelectedFrequency }) => (
  <div className="min-h-screen bg-gray-900 text-white">
    <div className="p-6">
      <button 
        onClick={() => setCurrentScreen('plans')}
        className="mb-6 p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      
      <h1 className="text-2xl font-bold mb-8">Payment frequency</h1>
      
      <div className="space-y-4 mb-12">
        {/* Monthly Payments */}
        <div 
          className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
            selectedFrequency === 'monthly' 
              ? 'border-purple-500 bg-purple-900/30' 
              : 'border-gray-700 bg-gray-800/50'
          }`}
          onClick={() => setSelectedFrequency('monthly')}
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">Monthly Payments</h3>
              <p className="text-gray-300 text-sm">xyz per month billed monthly. Ideal if you're not sure about a long term commitment.</p>
            </div>
          </div>
        </div>

        {/* Yearly Payments */}
        <div 
          className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
            selectedFrequency === 'yearly' 
              ? 'border-purple-500 bg-purple-900/30' 
              : 'border-gray-700 bg-gray-800/50'
          }`}
          onClick={() => setSelectedFrequency('yearly')}
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">Yearly Payments</h3>
              <p className="text-gray-300 text-sm">xyz per year billed annually. Ideal if you're committed to the learning experience.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center space-x-2 mb-8">
        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
      </div>

      <div className="flex space-x-4">
        <button 
          onClick={() => setCurrentScreen('plans')}
          className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-full transition-colors"
        >
          Back
        </button>
        <button 
          onClick={() => alert('Payment integration would go here!')}
          className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Next
        </button>
      </div>
    </div>
  </div>
);

export default PaymentScreen;