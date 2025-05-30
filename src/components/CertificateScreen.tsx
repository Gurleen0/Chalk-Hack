
import { ChevronLeft, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CertificateScreenProps {
  onNext: () => void;
}

const CertificateScreen = ({ onNext }: CertificateScreenProps) => {
  return (
    <div className="bg-slate-900 rounded-3xl shadow-2xl min-h-[640px] flex flex-col p-6">
      {/* Header */}
      <div className="flex items-center mb-8">
        <ChevronLeft className="text-white w-6 h-6" />
        <div className="flex-1 text-center">
          <p className="text-white font-semibold text-sm tracking-wider">
            PAINTING LEARNING PATH
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8">
        <h1 className="text-white text-xl font-medium">
          Congratulations, You completed the Learning Path
        </h1>

        {/* Certificate Badge - Matching exact design */}
        <div className="relative">
          <div className="w-72 h-80 bg-gradient-to-br from-purple-400 via-pink-300 to-purple-500 rounded-[4rem] p-6 shadow-xl">
            <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-100 rounded-[3rem] flex flex-col items-center justify-center text-center p-6">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <Star className="w-4 h-4 text-white fill-white" />
              </div>
              <p className="text-gray-700 text-xs mb-3">Certified by Portal</p>
              <h2 className="text-purple-800 font-bold text-xl leading-tight mb-6">
                How to Master Painting: Create Masterpieces using Acrylic Paint
              </h2>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Upgrade Button - Matching exact design */}
        <Button
          onClick={onNext}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-6 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
        >
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          <span>Upgrade to Premium</span>
          <div className="ml-4 flex items-baseline space-x-2">
            <span className="text-2xl font-bold">₹600</span>
            <span className="text-sm line-through opacity-75">₹900</span>
          </div>
        </Button>
      </div>

      {/* Bottom Navigation - Matching exact design */}
      <div className="flex justify-center items-center mt-8 space-x-8">
        <div className="text-gray-400 text-lg">🏠</div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <span className="text-purple-400 text-sm font-medium">Course</span>
        </div>
        <div className="text-gray-400 text-lg">⚙️</div>
        <div className="text-gray-400 text-lg">👤</div>
      </div>
    </div>
  );
};

export default CertificateScreen;