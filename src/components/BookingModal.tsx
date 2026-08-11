import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, FileText, CheckCircle2, Calendar, Clock, User, Phone, Mail, MapPin, Printer, Download, MessageCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { govServicesData } from '../data/govServices';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

interface UploadedFile {
  name: string;
  size: string;
  type: string;
}

export default function BookingModal({ isOpen, onClose, preselectedServiceId }: BookingModalProps) {
  const [selectedService, setSelectedService] = useState(preselectedServiceId || govServicesData[0].id);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 11:00 AM');
  const [notes, setNotes] = useState('');
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState<any>(null);

  if (!isOpen) return null;

  const currentServiceObj = govServicesData.find(s => s.id === selectedService) || govServicesData[0];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles: UploadedFile[] = Array.from(e.target.files).map((file: File) => ({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
        type: file.type.includes('pdf') ? 'PDF' : file.type.includes('image') ? 'IMAGE' : 'DOC'
      }));
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('Please enter your Name and Mobile Number.');
      return;
    }

    setIsSubmitting(true);

    const bookingId = 'SCMS-' + Math.floor(100000 + Math.random() * 900000);
    const bookingData = {
      id: bookingId,
      fullName,
      phone,
      email,
      serviceId: selectedService,
      serviceTitle: currentServiceObj.title,
      date,
      timeSlot,
      notes,
      files: files.map(f => f.name),
      status: 'Pending Verification',
      createdAt: new Date().toISOString()
    };

    // Save locally
    const existing = JSON.parse(localStorage.getItem('scms_appointments') || '[]');
    localStorage.setItem('scms_appointments', JSON.stringify([bookingData, ...existing]));

    // Try posting to backend
    try {
      await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });
    } catch (err) {
      // Offline fallback already stored in localStorage
    }

    setIsSubmitting(false);
    setBookingConfirmation(bookingData);
  };

  const handlePrint = () => {
    window.print();
  };

  const sendWhatsAppConfirmation = () => {
    if (!bookingConfirmation) return;
    const text = encodeURIComponent(
      `Hello Shri Computers, I booked an appointment!\n` +
      `📌 Booking ID: ${bookingConfirmation.id}\n` +
      `👤 Name: ${bookingConfirmation.fullName}\n` +
      `📞 Phone: ${bookingConfirmation.phone}\n` +
      `📂 Service: ${bookingConfirmation.serviceTitle}\n` +
      `📅 Date: ${bookingConfirmation.date} (${bookingConfirmation.timeSlot})\n` +
      `📄 Documents Uploaded: ${bookingConfirmation.files.length} file(s)`
    );
    window.open(`https://wa.me/918329822358?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white print:static">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8 overflow-hidden border border-gray-100 relative print:shadow-none print:border-0 print:max-w-none"
        >
          {/* Header */}
          <div className="bg-secondary p-6 text-white flex justify-between items-center print:hidden">
            <div>
              <h2 className="text-2xl font-bold">Book Service / Appointment</h2>
              <p className="text-orange-200 text-sm">Shri Computers & Multi Services (CSC Center)</p>
            </div>
            <button onClick={onClose} className="p-2 text-gray-300 hover:text-white rounded-full hover:bg-white/10 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {!bookingConfirmation ? (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Select Service *</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary text-gray-800 bg-gray-50 font-medium"
                >
                  {govServicesData.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.title} ({service.titleMr}) - {service.totalPrice}
                    </option>
                  ))}
                </select>
              </div>

              {/* Required Documents Highlight Box */}
              {currentServiceObj && (
                <div className="bg-orange-50 border-l-4 border-primary p-4 rounded-r-xl">
                  <div className="flex items-center gap-2 font-bold text-secondary mb-2 text-sm">
                    <AlertCircle className="w-4 h-4 text-primary" />
                    Required Documents for {currentServiceObj.title}:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-gray-700">
                    {currentServiceObj.requiredDocuments.map((doc, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Mobile Number (WhatsApp) *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      placeholder="ramesh@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Preferred Date *</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Time Slot */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Preferred Time Slot *</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['09:00 AM - 11:00 AM', '11:00 AM - 01:00 PM', '02:00 PM - 05:00 PM', '05:00 PM - 08:00 PM'].map(slot => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setTimeSlot(slot)}
                      className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all ${
                        timeSlot === slot 
                          ? 'bg-secondary text-white border-secondary shadow-sm' 
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Document Upload Area */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Upload Required Documents (PDF / Images)
                </label>
                <div className="border-2 border-dashed border-gray-300 hover:border-primary rounded-xl p-4 text-center bg-gray-50 hover:bg-orange-50/50 transition-colors relative cursor-pointer">
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                    onChange={handleFileUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <Upload className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-xs font-semibold text-gray-700">Click or Drag & Drop Documents Here</p>
                  <p className="text-[11px] text-gray-400 mt-1">Supports PDF, PNG, JPG, DOCX (Max 5MB each)</p>
                </div>

                {/* Uploaded Files List */}
                {files.length > 0 && (
                  <div className="mt-3 space-y-2">
                    <p className="text-xs font-semibold text-gray-600">{files.length} File(s) Attached:</p>
                    {files.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 bg-white border border-gray-200 rounded-lg text-xs">
                        <div className="flex items-center gap-2 truncate">
                          <FileText className="w-4 h-4 text-primary shrink-0" />
                          <span className="font-medium text-gray-800 truncate">{file.name}</span>
                          <span className="text-gray-400 text-[10px]">({file.size})</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(idx)}
                          className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Notes / Instructions for Center</label>
                <textarea
                  rows={2}
                  placeholder="Any specific urgent request or details..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary text-xs"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full py-4 text-base font-bold bg-primary hover:bg-primary-hover shadow-lg rounded-xl"
                >
                  {isSubmitting ? 'Submitting Appointment...' : 'Confirm & Generate Booking Receipt'}
                </Button>
              </div>
            </form>
          ) : (
            /* Booking Confirmation / Receipt */
            <div className="p-8 text-center space-y-6 print:p-0">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto print:hidden">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full uppercase tracking-wider mb-2">
                  Appointment Confirmed
                </span>
                <h3 className="text-2xl font-bold text-gray-900">Shri Computers & Multi Services</h3>
                <p className="text-sm text-gray-500">Official CSC Digital Service Center Receipt</p>
              </div>

              {/* Receipt Box */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-left text-sm space-y-3 print:bg-white print:border-gray-400">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="font-bold text-secondary">Booking ID:</span>
                  <span className="font-mono font-bold text-primary text-base">{bookingConfirmation.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Customer Name:</span>
                  <span className="font-semibold text-gray-800">{bookingConfirmation.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Phone Number:</span>
                  <span className="font-semibold text-gray-800">{bookingConfirmation.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Service:</span>
                  <span className="font-semibold text-gray-800">{bookingConfirmation.serviceTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Appointment Date & Time:</span>
                  <span className="font-semibold text-gray-800">{bookingConfirmation.date} ({bookingConfirmation.timeSlot})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Uploaded Documents:</span>
                  <span className="font-semibold text-gray-800">{bookingConfirmation.files.length} File(s)</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="text-gray-500">Total Charges Payable at Center:</span>
                  <span className="font-bold text-secondary text-base">{currentServiceObj.totalPrice}</span>
                </div>
              </div>

              {/* Center Address Note */}
              <div className="bg-blue-50 p-4 rounded-xl text-xs text-blue-800 flex items-start gap-2 text-left print:hidden">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Center Location:</p>
                  <p>Shri Computers & Multi Services, Near Bus Stand / Tehsil Office Road, Shevgaon, Dist. Ahilyanagar.</p>
                  <p className="mt-1 font-medium text-blue-900">Please bring original Aadhaar Card and physical documents when visiting!</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 justify-center pt-4 print:hidden">
                <Button className="gap-2 bg-green-600 hover:bg-green-700 text-white" onClick={sendWhatsAppConfirmation}>
                  <MessageCircle className="w-4 h-4" /> Send Receipt to WhatsApp
                </Button>
                <Button variant="outline" className="gap-2" onClick={handlePrint}>
                  <Printer className="w-4 h-4" /> Print Receipt
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Done & Close
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
