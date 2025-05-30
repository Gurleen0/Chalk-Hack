
import { ChevronLeft, Users, User, Calendar, CreditCard } from "lucide-react";
import { Button } from "./ui/button";

interface PlanScreenProps {
  onBack: () => void;
  onNext: () => void;
  currentStep: number;
}

const PlanScreen = ({ onBack, onNext, currentStep }: PlanScreenProps) => {
  // Screen 1: Original Plan Selection
  if (currentStep === 1) {
    return (
      <div className="bg-slate-900 rounded-3xl shadow-2xl min-h-[640px] flex flex-col p-6">
        {/* Header */}
        <div className="flex items-center mb-8">
          <ChevronLeft 
            className="text-white w-6 h-6 cursor-pointer" 
            onClick={onBack}
          />
          <h1 className="text-white text-xl font-semibold ml-4">
            Choose your plan!
          </h1>
        </div>

        {/* Plans */}
        <div className="flex-1 space-y-4 mb-8">
          {/* Happy Together Plan */}
          <div className="bg-slate-800 rounded-2xl p-4 border-2 border-purple-500">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-1">
                  Happy Together!
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  Share the subscription with <span className="font-semibold text-white">2 other friends</span> and save up to xyz rupees!
                </p>
                <p className="text-gray-400 text-xs">
                  You can invite them to join you after the purchase.
                </p>
              </div>
            </div>
          </div>

          {/* Solo Hustle Plan */}
          <div className="bg-slate-800 rounded-2xl p-4 border border-slate-600">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-1">
                  Solo Hustle
                </h3>
                <p className="text-gray-300 text-sm">
                  You don't need anyone keep at it. Go get it!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Page Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          <div className="w-8 h-1 bg-white rounded-full"></div>
          <div className="w-2 h-1 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-1 bg-gray-600 rounded-full"></div>
        </div>

        {/* Next Button */}
        <Button 
          onClick={onNext}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-6 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 text-lg"
        >
          Next
        </Button>
      </div>
    );
  }

  // Screen 2: Choose Your Plan (with handshake and cup icons)
  if (currentStep === 2) {
    return (
      <div className="bg-slate-900 rounded-3xl shadow-2xl min-h-[640px] flex flex-col p-6">
        {/* Header */}
        <div className="flex items-center mb-8">
          <ChevronLeft 
            className="text-white w-6 h-6 cursor-pointer" 
            onClick={onBack}
          />
          <h1 className="text-white text-xl font-semibold ml-4">
            Choose your plan!
          </h1>
        </div>

        {/* Plans */}
        <div className="flex-1 space-y-4 mb-8">
          {/* Happy Together Plan - Selected */}
          <div className="bg-slate-800 rounded-2xl p-4 border-2 border-purple-500">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <div className="text-2xl">🤝</div>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-1">
                  Happy Together!
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  Share the subscription with <span className="font-semibold text-white">2 other friends</span> and save up to xyz rupees!
                </p>
                <p className="text-gray-400 text-xs">
                  You can invite them to join you after the purchase.
                </p>
              </div>
            </div>
          </div>

          {/* Solo Hustle Plan */}
          <div className="bg-slate-800 rounded-2xl p-4 border border-slate-600">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <div className="text-2xl">🏆</div>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-1">
                  Solo Hustle
                </h3>
                <p className="text-gray-300 text-sm">
                  You don't need anyone keep at it. Go get it!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Page Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          <div className="w-2 h-1 bg-gray-600 rounded-full"></div>
          <div className="w-8 h-1 bg-white rounded-full"></div>
          <div className="w-2 h-1 bg-gray-600 rounded-full"></div>
        </div>

        {/* Next Button */}
        <Button 
          onClick={onNext}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-6 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 text-lg"
        >
          Next
        </Button>
      </div>
    );
  }

  // Screen 3: Payment Frequency (First version)
  if (currentStep === 3) {
    return (
      <div className="bg-slate-900 rounded-3xl shadow-2xl min-h-[640px] flex flex-col p-6">
        {/* Header */}
        <div className="flex items-center mb-8">
          <ChevronLeft 
            className="text-white w-6 h-6 cursor-pointer" 
            onClick={onBack}
          />
          <h1 className="text-white text-xl font-semibold ml-4">
            Payment frequency
          </h1>
        </div>

        {/* Payment Options */}
        <div className="flex-1 space-y-4 mb-8">
          {/* Monthly Payments */}
          <div className="bg-slate-800 rounded-2xl p-4 border border-slate-600">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-1">
                  Monthly Payments
                </h3>
                <p className="text-gray-300 text-sm">
                  xyz per month billed monthly. Ideal if you're not sure about a long term commitment.
                </p>
              </div>
            </div>
          </div>

          {/* Yearly Payments */}
          <div className="bg-slate-800 rounded-2xl p-4 border border-slate-600">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-1">
                  Yearly Payments
                </h3>
                <p className="text-gray-300 text-sm">
                  xyz per month billed annually. Ideal if you're committed to the learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Page Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          <div className="w-2 h-1 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-1 bg-gray-600 rounded-full"></div>
          <div className="w-8 h-1 bg-white rounded-full"></div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Button 
            onClick={onBack}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-6 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 text-lg"
          >
            Back
          </Button>
          <Button 
            onClick={onNext}
            className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-6 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 text-lg"
          >
            Next
          </Button>
        </div>
      </div>
    );
  }

  // Screen 4: Payment Frequency (Second version with selection)
  if (currentStep === 4) {
    return (
      <div className="bg-slate-900 rounded-3xl shadow-2xl min-h-[640px] flex flex-col p-6">
        {/* Header */}
        <div className="flex items-center mb-8">
          <ChevronLeft 
            className="text-white w-6 h-6 cursor-pointer" 
            onClick={onBack}
          />
          <h1 className="text-white text-xl font-semibold ml-4">
            Payment frequency
          </h1>
        </div>

        {/* Payment Options */}
        <div className="flex-1 space-y-4 mb-8">
          {/* Monthly Payments - Selected */}
          <div className="bg-slate-800 rounded-2xl p-4 border-2 border-purple-500">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-1">
                  Monthly Payments
                </h3>
                <p className="text-gray-300 text-sm">
                  xyz per month billed monthly. Ideal if you're not sure about a long term commitment.
                </p>
              </div>
            </div>
          </div>

          {/* Yearly Payments */}
          <div className="bg-slate-800 rounded-2xl p-4 border border-slate-600">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-1">
                  Yearly Payments
                </h3>
                <p className="text-gray-300 text-sm">
                  xyz per month billed annually. Ideal if you're committed to the learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Page Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          <div className="w-2 h-1 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-1 bg-gray-600 rounded-full"></div>
          <div className="w-8 h-1 bg-white rounded-full"></div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Button 
            onClick={onNext}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-6 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 text-lg"
          >
            Next
          </Button>
          <Button 
            onClick={onNext}
            className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-6 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 text-lg"
          >
            Next
          </Button>
        </div>
      </div>
    );
  }

  return null;
};

export default PlanScreen;