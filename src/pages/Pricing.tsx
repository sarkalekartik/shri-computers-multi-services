import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Search, Filter, Printer, Download, MessageCircle, X, Maximize2, LayoutGrid, List } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { rateCardData, rateCardCategories, RateCardItem } from '../data/rateCard';

export default function Pricing() {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'default' | 'low-high' | 'high-low'>('default');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showImageModal, setShowImageModal] = useState(false);

  // Use a generic placeholder for the rate card since we don't have the user's uploaded file path
  // In a real scenario, the admin would upload the image and the URL would be fetched
  const officialBoardUrl = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop";

  const getServiceName = (item: RateCardItem) => {
    return i18n.language === 'mr' ? item.serviceNameMr : item.serviceNameEn;
  };

  const filteredData = rateCardData
    .filter(item => {
      const matchesSearch = getServiceName(item).toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'all' || item.categoryKey === activeCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'low-high') return a.priceValue - b.priceValue;
      if (sortBy === 'high-low') return b.priceValue - a.priceValue;
      return 0; // default order
    });

  const handlePrint = () => {
    window.print();
  };

  const openWhatsApp = (serviceName: string) => {
    const text = encodeURIComponent(`Hello, I would like to enquire about the service: ${serviceName}`);
    window.open(`https://wa.me/918329822358?text=${text}`, '_blank');
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20 print:bg-white print:pb-0">
      {/* Header Section (Hidden in print) */}
      <div className="bg-secondary text-white py-12 print:hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('pricing')}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Transparent and affordable pricing for all our digital services. Data is synchronized with our official rate card.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2" onClick={() => setShowImageModal(true)}>
              <Maximize2 className="w-4 h-4" /> {t('view_official_board')}
            </Button>
            <Button variant="default" className="gap-2 bg-primary hover:bg-primary-hover" onClick={handlePrint}>
              <Printer className="w-4 h-4" /> {t('print_list')}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Controls (Hidden in print) */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-8 print:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
            {/* Search */}
            <div className="relative lg:col-span-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={t('search_services')}
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary sm:text-sm bg-gray-50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Category Filter */}
            <div className="lg:col-span-3">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary sm:text-sm bg-gray-50"
              >
                <option value="all">{t('all_categories')}</option>
                {rateCardCategories.map(cat => (
                  <option key={cat} value={cat}>{t(cat)}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="lg:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary sm:text-sm bg-gray-50"
              >
                <option value="default">{t('sort_default')}</option>
                <option value="low-high">{t('sort_low_high')}</option>
                <option value="high-low">{t('sort_high_low')}</option>
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex gap-2 lg:col-span-2 justify-end items-center">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                aria-label={t('grid_view')}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                aria-label={t('list_view')}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Print Header (Only visible during print) */}
        <div className="hidden print:block text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shri Computers & Multi Services</h1>
          <p className="text-xl font-medium text-gray-600">Official Rate Card</p>
          <p className="text-sm text-gray-500">Contact: +91 83298 22358 | CSC ID: 625663450012</p>
        </div>

        {/* Data Display */}
        {filteredData.length > 0 ? (
          <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 print:grid-cols-2 print:gap-4" : "space-y-4 print:space-y-2"}>
            <AnimatePresence>
              {filteredData.map((item, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={item.id}
                  className={`bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all ${viewMode === 'list' ? 'flex flex-col sm:flex-row items-center p-4 gap-4' : ''} print:shadow-none print:border-gray-300`}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <div className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-orange-50 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
                          {t(item.categoryKey)}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">{getServiceName(item)}</h3>
                      </div>
                      
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <div className="flex justify-between items-end mb-4">
                          <div>
                            <p className="text-xs text-gray-500 uppercase font-semibold">Price</p>
                            <p className="text-2xl font-black text-secondary">{item.price}</p>
                          </div>
                          {item.time && (
                            <div className="text-right">
                              <p className="text-xs text-gray-500 uppercase font-semibold">Time</p>
                              <p className="text-sm font-medium text-gray-700">{item.time}</p>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex gap-2 print:hidden mt-4">
                          <Button 
                            className="flex-1 gap-2 bg-green-500 hover:bg-green-600 text-white" 
                            onClick={() => openWhatsApp(getServiceName(item))}
                          >
                            <MessageCircle className="w-4 h-4" /> {t('enquire_now')}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // List View
                    <>
                      <div className="flex-1 min-w-0">
                        <span className="inline-block px-2 py-0.5 bg-orange-50 text-primary rounded text-xs font-semibold uppercase tracking-wider mb-1">
                          {t(item.categoryKey)}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 truncate">{getServiceName(item)}</h3>
                        {item.time && <p className="text-sm text-gray-500">Estimated time: {item.time}</p>}
                      </div>
                      <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end mt-4 sm:mt-0">
                        <div className="text-right">
                          <p className="text-xl font-black text-secondary">{item.price}</p>
                        </div>
                        <Button 
                          size="sm"
                          className="gap-2 bg-green-500 hover:bg-green-600 text-white print:hidden shrink-0" 
                          onClick={() => openWhatsApp(getServiceName(item))}
                        >
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your search filters.</p>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-12 text-center text-sm text-gray-500 bg-gray-100 p-6 rounded-xl border border-gray-200">
          <p className="font-medium text-gray-700 mb-1">{t('last_updated')}: {new Date().toLocaleDateString()}</p>
          <p>{t('price_disclaimer')}</p>
        </div>
      </div>

      {/* Official Board Image Modal */}
      <AnimatePresence>
        {showImageModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm print:hidden"
            onClick={() => setShowImageModal(false)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-gray-300 p-2 bg-white/10 rounded-full transition-colors"
              onClick={(e) => { e.stopPropagation(); setShowImageModal(false); }}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-4xl w-full mx-auto relative" onClick={(e) => e.stopPropagation()}>
              <div className="bg-white p-2 rounded-xl">
                <img 
                  src={officialBoardUrl} 
                  alt="Official Rate Card Board" 
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg" 
                />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm shadow-lg backdrop-blur-md">
                    Note: This is a placeholder for the official uploaded rate card image.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
