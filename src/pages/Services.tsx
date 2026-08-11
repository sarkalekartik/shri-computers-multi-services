import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search, FileText, CheckCircle2, Clock, Calendar, ArrowRight, Mic, ShieldCheck, Sparkles } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { govServicesData, GovService } from '../data/govServices';
import BookingModal from '../components/BookingModal';

export default function Services() {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);

  const categories = ['All', 'Government Certificates', 'PAN & Aadhaar', 'Business & Tax', 'CSC Services', 'Education & Jobs', 'Health & Utility'];

  const filteredServices = govServicesData.filter(service => {
    const term = searchTerm.toLowerCase();
    const matchesSearch = service.title.toLowerCase().includes(term) || 
                          service.titleMr.toLowerCase().includes(term) ||
                          service.description.toLowerCase().includes(term) ||
                          service.requiredDocuments.some(doc => doc.toLowerCase().includes(term));
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleVoiceSearch = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Voice recognition is not supported in your browser. Please type your search.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = i18n.language === 'mr' ? 'mr-IN' : i18n.language === 'hi' ? 'hi-IN' : 'en-US';
    
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setSearchTerm(transcript);
    };

    recognition.start();
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-primary border border-orange-200 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Government Approved Digital Center
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our Government & Digital Services
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Search required documents, government fees, and processing time for all Maha e-Seva, CSC, and Digital Services.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col gap-6 mb-12 max-w-5xl mx-auto">
          <div className="relative w-full shadow-md rounded-2xl bg-white p-2 border border-gray-200 flex items-center">
            <Search className="h-6 w-6 text-gray-400 ml-3" />
            <input
              type="text"
              placeholder="Search by service name or document (e.g., Income, PAN, Ration Card, ७/१२)..."
              className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-400 bg-transparent focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={handleVoiceSearch}
              className={`p-3 rounded-xl transition-colors mr-1 ${
                isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-primary'
              }`}
              title="Voice Search"
            >
              <Mic className="h-5 w-5" />
            </button>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-secondary text-white shadow-md scale-105' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, idx) => {
              const displayTitle = i18n.language === 'mr' ? service.titleMr : service.title;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 border-gray-200 flex flex-col overflow-hidden group hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col h-full bg-white relative">
                      
                      {/* Top Badges */}
                      <div className="flex justify-between items-start mb-3">
                        <span className="inline-block px-3 py-1 bg-blue-50 text-secondary border border-blue-100 rounded-full text-xs font-bold">
                          {service.category}
                        </span>
                        <span className="text-xl font-black text-primary bg-orange-50 px-3 py-1 rounded-xl border border-orange-100">
                          {service.totalPrice}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-extrabold text-xl mb-1 text-gray-900 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs font-bold text-orange-600 mb-3">{service.titleMr}</p>

                      {/* Description */}
                      <p className="text-gray-600 text-xs mb-4 line-clamp-2 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Required Documents Checklist Preview */}
                      <div className="bg-gray-50/80 p-3.5 rounded-xl border border-gray-100 mb-6 flex-1">
                        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-2 flex items-center gap-1">
                          <FileText className="w-3.5 h-3.5 text-primary" /> Required Documents Checklist:
                        </span>
                        <ul className="space-y-1.5">
                          {service.requiredDocuments.slice(0, 3).map((doc, i) => (
                            <li key={i} className="flex items-center gap-1.5 text-xs text-gray-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                              <span className="truncate">{doc}</span>
                            </li>
                          ))}
                          {service.requiredDocuments.length > 3 && (
                            <li className="text-[10px] text-orange-600 font-bold pl-5">
                              + {service.requiredDocuments.length - 3} more documents
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Time & Fee summary */}
                      <div className="flex justify-between items-center text-xs text-gray-500 mb-6 pt-3 border-t border-gray-100">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-gray-400" /> {service.estimatedTime}
                        </span>
                        <span className="flex items-center gap-1 text-green-700 font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5" /> Govt Fee: {service.govtFee}
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-2 mt-auto">
                        <Link 
                          to={`/services/${service.id}`}
                          className="flex items-center justify-center gap-1 bg-gray-100 hover:bg-secondary hover:text-white text-gray-800 font-bold text-xs py-3 rounded-xl transition-all text-center"
                        >
                          View Details <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        <button 
                          onClick={() => setSelectedServiceForBooking(service.id)}
                          className="flex items-center justify-center gap-1 bg-primary hover:bg-primary-hover text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md text-center"
                        >
                          <Calendar className="w-3.5 h-3.5" /> Apply / Book
                        </button>
                      </div>

                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900">No services found for "{searchTerm}"</h3>
            <p className="text-gray-500 mt-2 text-sm">Try searching with a different term like "Income", "PAN", "Caste", or "७/१२".</p>
            <Button className="mt-4 bg-primary" onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}>
              Reset Filters
            </Button>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={!!selectedServiceForBooking}
        onClose={() => setSelectedServiceForBooking(null)}
        preselectedServiceId={selectedServiceForBooking || undefined}
      />
    </div>
  );
}
