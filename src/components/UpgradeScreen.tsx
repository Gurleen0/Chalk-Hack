
import { ChevronLeft, Play, Crown, MessageCircle, Shield } from "lucide-react";
import { Button } from "./ui/button";

interface UpgradeScreenProps {
  onNext: () => void;
  onBack: () => void;
}

const UpgradeScreen = ({ onNext, onBack }: UpgradeScreenProps) => {
  return (
    <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl min-h-[640px] flex flex-col">
      {/* Hero Image Section with anime character */}
      <div className="relative h-80 bg-gradient-to-b from-gray-700 to-gray-900 flex items-center justify-center overflow-hidden">
        <ChevronLeft 
          className="absolute top-6 left-6 text-white w-6 h-6 cursor-pointer z-10" 
          onClick={onBack}
        />
        <div className="absolute top-6 right-6 text-white text-sm z-10">Value Yourself</div>
        
        {/* Video Section */}
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/Recording 2025-05-29 095945.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Portal Plus Badge */}
      <div className="relative -mt-8 mx-6 z-10">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-4 flex items-center space-x-3 shadow-lg">
          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
            <Play className="w-5 h-5 text-white fill-white" />
          </div>
          <span className="text-white font-bold text-lg">Portal Plus</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 space-y-6">
        <div>
          <p className="text-white text-lg font-medium mb-2">
            Access over 3000 quality courses for creative skills starting at just 600 per year!
          </p>
          <p className="text-gray-400 text-sm">
            Focus on these projects
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Why join Portal Plus?</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Play className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Ad-Free learning!</h4>
                <p className="text-gray-400 text-sm">No more disturbances. Just you, your dream and instructors!</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Only the best for you!</h4>
                <p className="text-gray-400 text-sm">Gain access to high quality premium courses</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Didn't get a concept? Talk it out</h4>
                <p className="text-gray-400 text-sm">Access to discussion forums moderated by instructors!</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Your wallet is in safe hands</h4>
                <p className="text-gray-400 text-sm">High quality content starting at just 600 per year!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get Portal Plus Button */}
      <div className="p-6">
        <Button
          onClick={onNext}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-6 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 text-lg"
        >
          Get Portal Plus!
        </Button>
      </div>
    </div>
  );
};

export default UpgradeScreen;