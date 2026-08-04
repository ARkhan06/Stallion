import { useState } from "react";
import Home1 from "../assets/Banner.jpeg";

export default function Splash({ onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-center z-50 p-8">
      <div className="relative max-w-[70vw] max-h-[70vh] flex justify-center items-center">
        <img 
          src={Home1} 
          alt="Splash Screen" 
          className="w-full h-full object-contain rounded-lg shadow-2xl"
        />
        <button 
          onClick={handleClose} 
          aria-label="Close splash"
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white text-black rounded-full flex justify-center items-center text-2xl font-bold transition-all duration-200 hover:scale-110 shadow-md hover:shadow-lg focus:outline-2 focus:outline-blue-500 focus:outline-offset-2"
        >
          ✕
        </button>
      </div>
    </div>
  );
}