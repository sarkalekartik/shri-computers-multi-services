import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MonitorPlay, Globe, Shield, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';
import BookingModal from '../BookingModal';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('services'), path: '/services' },
    { name: t('pricing'), path: '/pricing' },
    { name: t('gallery'), path: '/gallery' },
    { name: t('contact'), path: '/contact' },
  ];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
    setShowLangMenu(false);
  };

  const langLabels: Record<string, string> = {
    mr: 'मराठी', en: 'English', hi: 'हिन्दी', gu: 'ગુજરાતી', 
    kn: 'ಕನ್ನಡ', te: 'తెలుగు', ta: 'தமிழ்', bn: 'বাংলা', 
    pa: 'ਪੰਜਾਬੀ', ml: 'മലയാളം', ur: 'اردو'
  };
  const currentLangLabel = langLabels[i18n.language] || 'English';

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-md">
                  SC
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-extrabold text-secondary leading-tight">
                    Shri Computers
                  </span>
                  <span className="text-[10px] font-bold text-primary tracking-wider uppercase">
                    CSC & Multi Services
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors hover:text-primary ${
                    location.pathname === link.path ? 'text-primary border-b-2 border-primary py-1' : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Controls */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language Selector Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-gray-700 bg-gray-100 hover:bg-orange-50 hover:text-primary rounded-xl border border-gray-200 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-primary" />
                  <span>{currentLangLabel}</span>
                </button>

                {showLangMenu && (
                  <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50 h-64 overflow-y-auto">
                    {[
                      { code: 'mr', name: 'मराठी' },
                      { code: 'en', name: 'English' },
                      { code: 'hi', name: 'हिन्दी' },
                      { code: 'gu', name: 'ગુજરાતી' },
                      { code: 'kn', name: 'ಕನ್ನಡ' },
                      { code: 'te', name: 'తెలుగు' },
                      { code: 'ta', name: 'தமிழ்' },
                      { code: 'bn', name: 'বাংলা' },
                      { code: 'pa', name: 'ਪੰਜਾਬੀ' },
                      { code: 'ml', name: 'മലയാളം' },
                      { code: 'ur', name: 'اردو' }
                    ].map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className="block w-full text-left px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-orange-50 hover:text-primary"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Admin Panel Link */}
              <Link 
                to="/admin" 
                className="p-2 text-gray-500 hover:text-secondary hover:bg-gray-100 rounded-xl transition-colors"
                title="Admin Management Panel"
              >
                <Shield className="w-4 h-4" />
              </Link>

              {/* Appointment Booking Trigger */}
              <Button 
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-primary hover:bg-primary-hover font-bold text-xs shadow-md rounded-xl py-2.5 px-4"
              >
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                {t('book_appointment')}
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-1 px-2.5 py-1 text-xs font-bold bg-gray-100 text-gray-700 rounded-lg relative"
              >
                <Globe className="w-3.5 h-3.5 text-primary" />
                <span>{currentLangLabel}</span>
                {showLangMenu && (
                  <div className="absolute top-full right-0 mt-2 w-36 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50 h-64 overflow-y-auto">
                    {[
                      { code: 'mr', name: 'मराठी' },
                      { code: 'en', name: 'English' },
                      { code: 'hi', name: 'हिन्दी' },
                      { code: 'gu', name: 'ગુજરાતી' },
                      { code: 'kn', name: 'ಕನ್ನಡ' },
                      { code: 'te', name: 'తెలుగు' },
                      { code: 'ta', name: 'தமிழ்' },
                      { code: 'bn', name: 'বাংলা' },
                      { code: 'pa', name: 'ਪੰਜਾਬੀ' },
                      { code: 'ml', name: 'മലയാളം' },
                      { code: 'ur', name: 'اردو' }
                    ].map(lang => (
                      <button
                        key={lang.code}
                        onClick={(e) => {
                          e.stopPropagation();
                          changeLanguage(lang.code);
                        }}
                        className="block w-full text-left px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-orange-50 hover:text-primary"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-700 hover:text-primary focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {isOpen && (
          <div className="md:hidden border-t bg-white shadow-xl absolute w-full">
            <div className="space-y-1 px-4 pb-4 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-xl px-4 py-2.5 text-sm font-bold ${
                    location.pathname === link.path
                      ? 'bg-orange-50 text-primary'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-3 border-t border-gray-100 space-y-2">
                <Button 
                  onClick={() => { setIsOpen(false); setIsBookingModalOpen(true); }}
                  className="w-full bg-primary font-bold py-3"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {t('book_appointment')}
                </Button>

                <Link 
                  to="/admin"
                  onClick={() => setIsOpen(false)}
                  className="block text-center text-xs text-gray-500 py-2 hover:text-secondary font-semibold"
                >
                  🔒 Admin Login Panel
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
}
