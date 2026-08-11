import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  MonitorPlay, Printer, Fingerprint, CreditCard, Plane, 
  Landmark, ShieldCheck, Cloud, CheckCircle2, MapPin
} from 'lucide-react';
import { Button } from '../components/ui/Button';

type Step = 'splash' | 'welcome' | 'language' | 'location' | 'done';

interface OnboardingProps {
  onComplete: () => void;
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState<Step>('splash');
  const [progress, setProgress] = useState(0);
  const { t, i18n } = useTranslation();

  // Splash Screen Logic
  useEffect(() => {
    if (step === 'splash') {
      const interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            clearInterval(interval);
            setTimeout(() => setStep('welcome'), 500);
            return 100;
          }
          return p + 20;
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [step]);

  const handleLanguageSelect = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
    speakWelcome(lang);
    setStep('location');
  };

  const handleLocation = () => {
    // In a real app, we would request navigator.geolocation here
    finishOnboarding();
  };

  const finishOnboarding = () => {
    localStorage.setItem('onboardingCompleted', 'true');
    setStep('done');
    setTimeout(onComplete, 300);
  };

  const speakWelcome = (lang: string) => {
    if ('speechSynthesis' in window) {
      const msg = new SpeechSynthesisUtterance();
      if (lang === 'en') {
        msg.text = "Welcome to Shri Computers and Multi Services.";
        msg.lang = 'en-IN';
      } else if (lang === 'mr') {
        msg.text = "श्री कॉम्प्युटर्स अँड मल्टी सर्व्हिसेस मध्ये आपले स्वागत आहे.";
        msg.lang = 'mr-IN';
      } else if (lang === 'hi') {
        msg.text = "श्री कंप्यूटर्स एंड मल्टी सर्विसेज में आपका स्वागत है।";
        msg.lang = 'hi-IN';
      }
      window.speechSynthesis.speak(msg);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-50 overflow-hidden">
      <AnimatePresence mode="wait">
        
        {/* Splash Screen */}
        {step === 'splash' && (
          <motion.div 
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-white via-orange-50 to-white"
          >
            {/* Animated Background Icons */}
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
               <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 40, ease: 'linear' }} className="absolute -top-20 -left-20">
                 <Cloud className="w-64 h-64 text-primary" />
               </motion.div>
               <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 35, ease: 'linear' }} className="absolute -bottom-20 -right-20">
                 <ShieldCheck className="w-80 h-80 text-secondary" />
               </motion.div>
            </div>

            <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6 text-center">
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', bounce: 0.5 }}
                className="w-32 h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center mb-8 border border-gray-100"
              >
                <MonitorPlay className="w-16 h-16 text-primary" />
              </motion.div>

              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl font-bold text-secondary mb-3"
              >
                Shri Computers <br/>
                <span className="text-primary">& Multi Services</span>
              </motion.h1>

              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-500 mb-12"
              >
                "Your Trusted Cyber Cafe & Digital Service Centre"
              </motion.p>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="w-full"
              >
                <div className="flex justify-between text-xs text-gray-400 mb-2 font-medium">
                  <span>Loading Digital Services...</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                  <motion.div 
                    className="bg-primary h-1.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>

              <div className="flex gap-4 mt-8 text-gray-300">
                <Printer className="w-5 h-5 animate-pulse" style={{ animationDelay: '0s' }} />
                <Fingerprint className="w-5 h-5 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <CreditCard className="w-5 h-5 animate-pulse" style={{ animationDelay: '0.4s' }} />
                <Plane className="w-5 h-5 animate-pulse" style={{ animationDelay: '0.6s' }} />
                <Landmark className="w-5 h-5 animate-pulse" style={{ animationDelay: '0.8s' }} />
              </div>
            </div>
          </motion.div>
        )}

        {/* Welcome Screen */}
        {step === 'welcome' && (
          <motion.div 
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col justify-end"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                alt="Office" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent backdrop-blur-sm" />
            </div>

            <div className="relative z-10 p-6 sm:p-12 w-full max-w-2xl mx-auto text-white mb-8">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-orange-400 font-medium mb-1 tracking-wider uppercase text-sm">Welcome To</p>
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
                  Shri Computers <br/>
                  <span className="text-white">Multi Services</span>
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Providing trusted digital services for everyone.
                </p>

                <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-10">
                  {['CSC', 'Maha e-Seva', 'Aadhaar', 'PAN Card', 'Passport', 'Online Forms', 'Printing', 'Banking'].map((service, i) => (
                    <motion.div 
                      key={service}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-gray-200">{service}</span>
                    </motion.div>
                  ))}
                </div>

                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-12 py-6 text-lg rounded-xl shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] transition-all"
                  onClick={() => setStep('language')}
                >
                  Continue
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Language Selection */}
        {step === 'language' && (
          <motion.div
            key="language"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gray-50 flex flex-col"
          >
            <div className="flex-1 overflow-y-auto px-4 py-12 sm:px-6 lg:px-8">
              <div className="max-w-md mx-auto text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-6"
                >
                  <span className="text-3xl">🗣️</span>
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Language</h2>
                <p className="text-gray-500">Please select your preferred language.</p>
              </div>

              <div className="max-w-md mx-auto space-y-4">
                {[
                  { id: 'en', title: 'English', subtitle: 'Continue in English', flag: '🇮🇳' },
                  { id: 'mr', title: 'मराठी', subtitle: 'मराठीत पुढे जा', flag: '🇮🇳' },
                  { id: 'hi', title: 'हिन्दी', subtitle: 'हिन्दी में आगे बढ़ें', flag: '🇮🇳' }
                ].map((lang, i) => (
                  <motion.button
                    key={lang.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => handleLanguageSelect(lang.id)}
                    className="w-full flex items-center p-5 bg-white border border-gray-200 rounded-2xl hover:border-primary hover:shadow-lg transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-2xl group-hover:bg-orange-50 transition-colors">
                      {lang.flag}
                    </div>
                    <div className="ml-4 text-left flex-1">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{lang.title}</h3>
                      <p className="text-sm text-gray-500">{lang.subtitle}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-colors">
                      <div className="w-3 h-3 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Quick Preview of features */}
              <div className="max-w-md mx-auto mt-16 pt-8 border-t">
                 <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4 text-center">Popular Services</h4>
                 <div className="flex flex-wrap gap-2 justify-center">
                    {['Aadhaar', 'PAN Card', 'Passport', 'Railway Ticket', 'Printing', 'Banking'].map(s => (
                      <span key={s} className="px-3 py-1 bg-white border rounded-full text-xs text-gray-600 font-medium">
                        {s}
                      </span>
                    ))}
                 </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Location Permission */}
        {step === 'location' && (
          <motion.div
            key="location"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-white flex flex-col items-center justify-center p-6"
          >
            <div className="max-w-md w-full text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-24 h-24 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 relative"
              >
                <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20" />
                <MapPin className="w-10 h-10" />
              </motion.div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('allow_location')}</h2>
              <p className="text-gray-500 mb-10 leading-relaxed">
                {t('location_desc')}
              </p>

              <div className="space-y-3">
                <Button 
                  size="lg" 
                  className="w-full py-6 text-lg rounded-xl"
                  onClick={handleLocation}
                >
                  {t('allow')}
                </Button>
                <Button 
                  size="lg" 
                  variant="ghost"
                  className="w-full py-6 text-lg text-gray-500"
                  onClick={finishOnboarding}
                >
                  {t('skip')}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
