import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, FileText, ShieldCheck, Clock, Users, CheckCircle2, 
  Search, Award, Phone, Calendar, Sparkles, MapPin, MessageCircle, ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { govServicesData } from '../data/govServices';
import BookingModal from '../components/BookingModal';

const trustBadges = [
  { icon: ShieldCheck, title: 'CSC Center', desc: 'Authorized Common Service Centre' },
  { icon: Award, title: 'Maha e-Seva Kendra', desc: 'Government Revenue Approved' },
  { icon: Clock, title: 'Same-Day Drafting', desc: 'Fast turnaround for all forms' },
  { icon: Users, title: '10,000+ Happy Citizens', desc: 'Trusted in Shevgaon region' },
];

export default function Home() {
  const [searchDocQuery, setSearchDocQuery] = useState('');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const featuredServices = govServicesData.filter(s => s.popular).slice(0, 6);

  const searchedServices = searchDocQuery.trim() 
    ? govServicesData.filter(s => 
        s.title.toLowerCase().includes(searchDocQuery.toLowerCase()) || 
        s.titleMr.toLowerCase().includes(searchDocQuery.toLowerCase()) ||
        s.requiredDocuments.some(d => d.toLowerCase().includes(searchDocQuery.toLowerCase()))
      ).slice(0, 4)
    : [];

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-blue-950 to-secondary text-white py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-orange-500/20 text-orange-300 font-bold text-xs mb-6 border border-orange-400/30">
                  <Sparkles className="w-4 h-4 text-primary" /> Government Approved CSC & Maha e-Seva Portal
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
                  Shri Computers <span className="text-primary">& Multi Services</span>
                </h1>

                <p className="text-xl text-orange-200 font-semibold mb-3">
                  श्री कॉम्प्युटर्स अँड मल्टी सर्व्हिसेस (महा ई-सेवा केंद्र)
                </p>

                <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
                  One-stop destination for Income Certificate, Domicile, Caste Certificate, PAN Card, Aadhaar Update, Shop Act, GST, Mahadbt Scholarships, and Printing in Shevgaon.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary-hover font-bold shadow-xl rounded-xl text-base px-8 py-4"
                    onClick={() => handleOpenBooking()}
                  >
                    <Calendar className="w-5 h-5 mr-2" /> Book Appointment Online
                  </Button>

                  <Link to="/services">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="text-white border-white/40 hover:bg-white hover:text-secondary font-bold rounded-xl text-base px-8 py-4"
                    >
                      Browse All Services
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Quick Document Search Card */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-3xl shadow-2xl text-white"
              >
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Search className="w-5 h-5 text-primary" /> Instant Document Check
                </h3>
                <p className="text-xs text-orange-200 mb-4">
                  Check required documents & fees for any government certificate:
                </p>

                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Type service name e.g. Income, Domicile, PAN..."
                    value={searchDocQuery}
                    onChange={(e) => setSearchDocQuery(e.target.value)}
                    className="w-full pl-4 pr-10 py-3.5 rounded-xl bg-white text-gray-900 placeholder-gray-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                  />
                  <Search className="w-5 h-5 text-gray-400 absolute right-3 top-4" />
                </div>

                {/* Instant Search Results */}
                {searchedServices.length > 0 && (
                  <div className="space-y-3 bg-white/90 text-gray-900 p-4 rounded-2xl max-h-64 overflow-y-auto shadow-lg">
                    {searchedServices.map(service => (
                      <div key={service.id} className="p-3 bg-orange-50/80 rounded-xl border border-orange-100 flex justify-between items-center text-xs">
                        <div>
                          <p className="font-bold text-gray-900">{service.title}</p>
                          <p className="text-[10px] text-orange-600 font-semibold">{service.titleMr}</p>
                          <p className="text-[11px] text-gray-600 mt-1">Docs: {service.requiredDocuments.slice(0, 2).join(', ')}...</p>
                        </div>
                        <Link 
                          to={`/services/${service.id}`} 
                          className="px-3 py-1.5 bg-primary text-white font-bold rounded-lg shrink-0 ml-2 hover:bg-primary-hover"
                        >
                          View
                        </Link>
                      </div>
                    ))}
                  </div>
                )}

                {/* Quick Service Links */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs">
                  <span className="text-orange-200 font-semibold">Quick links:</span>
                  <Link to="/services/income-certificate" className="underline hover:text-primary">Income Cert</Link>
                  <Link to="/services/domicile-nationality" className="underline hover:text-primary">Domicile</Link>
                  <Link to="/services/caste-certificate" className="underline hover:text-primary">Caste</Link>
                  <Link to="/services/pan-card-new" className="underline hover:text-primary">PAN Card</Link>
                  <Link to="/services/shop-act-license" className="underline hover:text-primary">Shop Act</Link>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div key={idx} className="flex items-center gap-3.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 bg-orange-100 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900 leading-tight">{badge.title}</h4>
                    <p className="text-xs text-gray-500">{badge.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Government Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Maha e-Seva & CSC Services</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">Popular Government Certificates</h2>
              <p className="text-gray-600 text-sm mt-2">Get required documents checklist and official government processing timeline.</p>
            </div>

            <Link to="/services" className="mt-4 md:mt-0 font-bold text-primary hover:text-primary-hover flex items-center gap-1.5 text-sm">
              View All 30+ Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card className="h-full hover:shadow-xl transition-all border-gray-200 flex flex-col overflow-hidden bg-white group">
                  <CardContent className="p-6 flex flex-col h-full">
                    
                    <div className="flex justify-between items-start mb-3">
                      <span className="px-3 py-1 bg-blue-50 text-secondary border border-blue-100 rounded-full text-xs font-bold">
                        {service.category}
                      </span>
                      <span className="text-lg font-black text-primary bg-orange-50 px-2.5 py-0.5 rounded-lg">
                        {service.totalPrice}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-xl mb-1 text-gray-900 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-bold text-orange-600 mb-3">{service.titleMr}</p>

                    <p className="text-xs text-gray-600 mb-4 line-clamp-2">
                      {service.purpose}
                    </p>

                    {/* Document Checklist Preview Box */}
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 mb-6 flex-1">
                      <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1.5">
                        Required Documents:
                      </span>
                      <ul className="space-y-1 text-xs text-gray-700">
                        {service.requiredDocuments.slice(0, 3).map((doc, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                            <span className="truncate">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-auto">
                      <Link 
                        to={`/services/${service.id}`}
                        className="py-2.5 px-3 bg-gray-100 hover:bg-secondary hover:text-white font-bold text-xs rounded-xl text-center transition-colors"
                      >
                        Details & Docs
                      </Link>

                      <button 
                        onClick={() => handleOpenBooking(service.id)}
                        className="py-2.5 px-3 bg-primary hover:bg-primary-hover text-white font-bold text-xs rounded-xl text-center transition-colors shadow-sm"
                      >
                        Apply Now
                      </button>
                    </div>

                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Official Price Board CTA Banner */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-secondary to-blue-950 rounded-3xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl z-10">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 border border-orange-400/30 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                Transparent Pricing Guarantee
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
                Official Center Price List & Rate Card Board
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                All services are charged strictly as per official government rules and center price board. Check full price list for Xerox, Printing, Scanning, Lamination, and Government Certificates.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/pricing">
                  <Button size="lg" className="bg-primary hover:bg-primary-hover font-bold rounded-xl">
                    View Full Rate List Page
                  </Button>
                </Link>
              </div>
            </div>

            <div className="shrink-0 z-10 w-full lg:w-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center space-y-3">
                <p className="text-xs text-orange-200 font-bold uppercase">Center Timings</p>
                <p className="text-2xl font-black">9:00 AM - 9:00 PM</p>
                <p className="text-xs text-gray-300">Open All 7 Days a Week</p>
                <a 
                  href="https://wa.me/918329822358" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl text-xs font-bold shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us (+91 83298 22358)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedServiceId={selectedServiceId}
      />
    </div>
  );
}
