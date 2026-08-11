import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  ArrowLeft, CheckCircle2, FileText, Clock, ShieldCheck, Award, 
  HelpCircle, MessageCircle, Phone, Calendar, ArrowRight, Printer, AlertCircle, Share2
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { govServicesData, GovService } from '../data/govServices';
import BookingModal from '../components/BookingModal';

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const service = govServicesData.find(s => s.id === serviceId) || govServicesData[0];

  const currentTitle = i18n.language === 'mr' ? service.titleMr : service.title;
  const currentDesc = i18n.language === 'mr' ? service.descriptionMr : service.description;
  const currentPurpose = i18n.language === 'mr' ? service.purposeMr : service.purpose;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hello Shri Computers, I need details & booking for service: ${service.title} (${service.titleMr})`);
    window.open(`https://wa.me/918329822358?text=${text}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+918329822358');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20 print:bg-white print:pb-0">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-secondary via-blue-950 to-secondary text-white py-12 relative overflow-hidden print:bg-none print:text-black print:py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center gap-2 text-orange-200 hover:text-white text-sm font-semibold mb-6 print:hidden transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to All Services
          </Link>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="max-w-3xl">
              <span className="inline-block px-3.5 py-1 bg-orange-500/20 text-orange-300 border border-orange-400/30 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                {service.category} • CSC Approved Service
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight">
                {currentTitle}
              </h1>
              <p className="text-xl font-medium text-orange-200 mb-4">{service.titleMr}</p>
              <p className="text-gray-300 text-base max-w-2xl leading-relaxed">
                {currentDesc}
              </p>
            </div>

            {/* Price Box */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shrink-0 text-center min-w-[240px] shadow-xl print:border-gray-300 print:bg-white">
              <span className="text-xs uppercase text-gray-300 font-semibold tracking-wider">Total Charges</span>
              <div className="text-4xl font-black text-orange-400 my-1">{service.totalPrice}</div>
              <p className="text-xs text-gray-300">Govt Fee: {service.govtFee} | Service: {service.serviceCharge}</p>
              <div className="mt-4 flex flex-col gap-2 print:hidden">
                <Button 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-hover font-bold shadow-lg"
                  onClick={() => setIsBookingOpen(true)}
                >
                  <Calendar className="w-4 h-4 mr-2" /> Apply Now / Book
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full text-white border-white/40 hover:bg-white hover:text-secondary"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="w-4 h-4 mr-2 text-green-400" /> WhatsApp Enquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* REQUIRED DOCUMENTS BOX - PROMINENT AS REQUESTED */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl border-2 border-orange-200 p-6 sm:p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                Mandatory Checklist
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-primary">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Required Documents (आवश्यक कागदपत्रे)</h2>
                  <p className="text-xs text-gray-500">Bring physical or soft copy when visiting center</p>
                </div>
              </div>

              {/* Documents List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {service.requiredDocuments.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-gray-800 leading-snug">{doc}</span>
                  </div>
                ))}
              </div>

              {/* Marathi Documents Checklist if available */}
              {service.requiredDocumentsMr && service.requiredDocumentsMr.length > 0 && (
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">कागदपत्रे यादी (मराठी)</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                    {service.requiredDocumentsMr.map((doc, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                        <span className="font-medium">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Purpose & Overview */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" /> Purpose & Overview
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">{currentPurpose}</p>
              </div>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100 text-center">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                  <span className="text-xs text-gray-500 block">Processing Time</span>
                  <span className="font-bold text-gray-900 text-sm">{service.estimatedTime}</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <Award className="w-5 h-5 text-secondary mx-auto mb-1" />
                  <span className="text-xs text-gray-500 block">Validity</span>
                  <span className="font-bold text-gray-900 text-sm">{service.validity}</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl col-span-2 sm:col-span-1">
                  <ShieldCheck className="w-5 h-5 text-green-600 mx-auto mb-1" />
                  <span className="text-xs text-gray-500 block">Govt Approval</span>
                  <span className="font-bold text-gray-900 text-sm">Maha e-Seva / CSC</span>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Benefits of {service.title}</h2>
              <div className="space-y-3">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-secondary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-gray-700 text-sm">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step by Step Process */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Step-by-Step Application Process</h2>
              <div className="relative border-l-2 border-primary/30 ml-4 space-y-6">
                {service.stepByStepProcess.map((step, idx) => (
                  <div key={idx} className="relative pl-6">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-orange-100" />
                    <h3 className="font-bold text-gray-900 text-base">Step {idx + 1}</h3>
                    <p className="text-gray-600 text-sm mt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Frequently Asked Questions */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-primary" /> Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="p-4 bg-gray-50 rounded-xl">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Q: {faq.question}</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">A: {faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            {/* Quick Action Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sticky top-24 print:hidden">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Ready to Apply?</h3>
              <p className="text-xs text-gray-500 mb-6">Book an appointment online or visit our center directly.</p>

              <div className="space-y-3">
                <Button 
                  size="lg" 
                  className="w-full py-4 bg-primary hover:bg-primary-hover font-bold shadow-md rounded-xl"
                  onClick={() => setIsBookingOpen(true)}
                >
                  <Calendar className="w-5 h-5 mr-2" /> Book Appointment
                </Button>

                <Button 
                  size="lg"
                  className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Inquiry
                </Button>

                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full py-4 border-gray-300 font-bold rounded-xl"
                  onClick={handleCall}
                >
                  <Phone className="w-5 h-5 mr-2 text-primary" /> Call +91 83298 22358
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3 text-xs text-gray-500">
                <div className="flex justify-between">
                  <span>Center Hours:</span>
                  <span className="font-semibold text-gray-800">9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Working Days:</span>
                  <span className="font-semibold text-gray-800">Mon - Sun (All Days)</span>
                </div>
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="font-semibold text-gray-800">Shevgaon, Ahilyanagar</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex gap-2">
                <button onClick={handlePrint} className="flex-1 text-xs text-gray-600 hover:text-primary flex items-center justify-center gap-1 py-2 bg-gray-50 rounded-lg">
                  <Printer className="w-3.5 h-3.5" /> Print Details
                </button>
              </div>
            </div>

            {/* Other Popular Services */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 print:hidden">
              <h3 className="font-bold text-base text-gray-900 mb-4">Other Popular Services</h3>
              <div className="space-y-3">
                {govServicesData.filter(s => s.id !== service.id).slice(0, 5).map(other => (
                  <Link 
                    key={other.id} 
                    to={`/services/${other.id}`}
                    className="flex justify-between items-center p-3 rounded-xl bg-gray-50 hover:bg-orange-50 border border-gray-100 transition-all group"
                  >
                    <div>
                      <h4 className="font-semibold text-xs text-gray-900 group-hover:text-primary transition-colors">{other.title}</h4>
                      <span className="text-[10px] text-gray-400">{other.totalPrice}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        preselectedServiceId={service.id} 
      />
    </div>
  );
}
