import { useState } from "react";
import "../styles/Splash.css";
import Home1 from "../assets/Fifa.jpeg";

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
    <div className="splash-overlay">
      <div className="splash-container">
        <button className="splash-close" onClick={handleClose} aria-label="Close splash">
          ✕
        </button>
        <img src={Home1} alt="Splash Screen" className="splash-image" />
      </div>
    </div>
  );
}
