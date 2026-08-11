import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(() => {
    return localStorage.getItem('scms_muted') === 'true';
  });
  const [showPlayButton, setShowPlayButton] = useState(false);
  const voicePlayed = useRef(false);

  useEffect(() => {
    localStorage.setItem('scms_muted', String(isMuted));
  }, [isMuted]);

  useEffect(() => {
    const duration = 4000;
    const interval = 50;
    let current = 0;

    const timer = setInterval(() => {
      current += (interval / duration) * 100;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(onComplete, 500); // Wait a bit before transitioning
      }
      setProgress(current);
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    if (progress > 30 && !voicePlayed.current && !isMuted) {
      playWelcomeAudio();
    }
  }, [progress, isMuted]);

  const playWelcomeAudio = () => {
    if (voicePlayed.current || !window.speechSynthesis) return;
    
    // Attempt to play audio
    const utterance = new SpeechSynthesisUtterance("श्री कॉम्प्युटर्स अँड मल्टी सर्व्हिसेसमध्ये आपले मनःपूर्वक स्वागत आहे. Welcome to Shri Computers and Multi Services.");
    utterance.lang = 'mr-IN'; // Marathi / English mix
    utterance.rate = 0.9;
    
    utterance.onerror = (e) => {
      if (e.error === 'not-allowed') {
        setShowPlayButton(true);
      }
    };

    window.speechSynthesis.speak(utterance);
    voicePlayed.current = true;
  };

  const handleManualPlay = () => {
    setShowPlayButton(false);
    setIsMuted(false);
    voicePlayed.current = false;
    playWelcomeAudio();
  };

  return (
    <div className="fixed inset-0 z-[200] overflow-hidden bg-white text-gray-900 flex flex-col items-center justify-center font-sans">
      {/* Animated Gradient Background */}
      <motion.div 
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF9933] via-blue-500 to-[#138808] bg-[length:200%_200%]"
      />

      {/* Audio Controls */}
      <div className="absolute top-6 right-6 z-50">
        <button 
          onClick={() => {
            setIsMuted(!isMuted);
            window.speechSynthesis.cancel();
          }}
          className="p-3 bg-white/50 backdrop-blur-md border border-gray-200 rounded-full shadow-sm text-gray-700 hover:bg-white/80 transition-colors"
          title={isMuted ? "Unmute Welcome Voice" : "Mute Welcome Voice"}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-lg">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-6"
        >
          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full scale-150"></div>
          <div className="w-28 h-28 bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-3xl flex items-center justify-center font-black text-5xl shadow-[0_0_40px_rgba(30,58,138,0.3)] border border-white/20 relative z-10">
            SC
          </div>
        </motion.div>

        {/* Titles */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-950 mb-1">
            श्री कॉम्प्युटर्स & मल्टी सर्व्हिसेस
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            Shri Computers & Multi Services
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF9933]"></span>
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span className="w-2 h-2 rounded-full bg-[#138808]"></span>
            <span className="text-xs font-bold tracking-wider text-gray-700 uppercase ml-1">
              CSC • Maha e-Seva • Digital Services
            </span>
          </div>
        </motion.div>

        {/* Welcome Messages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8 h-16"
        >
          <p className="text-xl font-bold text-[#FF9933] mb-1">आपले मनःपूर्वक स्वागत आहे!</p>
          <p className="text-sm font-semibold text-gray-600">Welcome to Shri Computers & Multi Services</p>
        </motion.div>

        {/* Manual Play Button if Autoplay fails */}
        <AnimatePresence>
          {showPlayButton && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleManualPlay}
              className="mt-4 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-bold shadow-lg hover:bg-blue-700"
            >
              <Play className="w-4 h-4" /> Play Welcome Voice
            </motion.button>
          )}
        </AnimatePresence>

        {/* Loading Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full mt-12"
        >
          <div className="flex justify-between text-xs font-bold text-gray-500 mb-2 px-1">
            <span>Loading...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#FF9933] via-blue-600 to-[#138808] transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
