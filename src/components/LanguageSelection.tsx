import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe, ArrowRight } from 'lucide-react';

interface LanguageSelectionProps {
  onSelect: (lang: string) => void;
}

const languages = [
  { code: 'mr', name: 'मराठी', label: 'Marathi' },
  { code: 'en', name: 'English', label: 'English' },
  { code: 'hi', name: 'हिन्दी', label: 'Hindi' },
  { code: 'gu', name: 'ગુજરાતી', label: 'Gujarati' },
  { code: 'kn', name: 'ಕನ್ನಡ', label: 'Kannada' },
  { code: 'te', name: 'తెలుగు', label: 'Telugu' },
  { code: 'ta', name: 'தமிழ்', label: 'Tamil' },
  { code: 'bn', name: 'বাংলা', label: 'Bengali' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', label: 'Punjabi' },
  { code: 'ml', name: 'മലയാളം', label: 'Malayalam' },
  { code: 'ur', name: 'اردو', label: 'Urdu' },
];

export default function LanguageSelection({ onSelect }: LanguageSelectionProps) {
  const { i18n } = useTranslation();

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('i18nextLng', code);
    onSelect(code);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-8 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
      >
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-8 sm:p-10 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover opacity-10 mix-blend-overlay"></div>
           <Globe className="w-12 h-12 mx-auto mb-4 text-orange-400 relative z-10" />
           <h1 className="text-3xl sm:text-4xl font-extrabold relative z-10 mb-2">Select Your Language</h1>
           <p className="text-blue-200 relative z-10 text-sm sm:text-base">Choose a language to continue to Shri Computers & Multi Services</p>
        </div>

        <div className="p-6 sm:p-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {languages.map((lang, idx) => (
              <motion.button
                key={lang.code}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSelect(lang.code)}
                className="flex flex-col items-center justify-center p-4 sm:p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-blue-50 hover:border-blue-300 transition-all group shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`Select ${lang.label} language`}
              >
                <span className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-blue-700 mb-2">
                  {lang.name}
                </span>
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider group-hover:text-blue-500">
                  {lang.label}
                </span>
              </motion.button>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button 
              onClick={() => handleSelect('en')}
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors focus:outline-none focus:underline"
              aria-label="Skip and continue in English"
            >
              Skip / Continue in English <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
