import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Lock, Key, Users, Calendar, FileText, Settings, Plus, Edit2, Trash2, 
  CheckCircle, XCircle, Search, Download, Upload, Eye, RefreshCw, MessageCircle, DollarSign, Image as ImageIcon
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { govServicesData, GovService } from '../data/govServices';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  const [activeTab, setActiveTab] = useState<'dashboard' | 'appointments' | 'services' | 'rateboard' | 'enquiries'>('dashboard');

  // Admin Data States
  const [appointments, setAppointments] = useState<any[]>([]);
  const [services, setServices] = useState<GovService[]>(govServicesData);
  const [rateCardUrl, setRateCardUrl] = useState("https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop");
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Edit Service Modal State
  const [editingService, setEditingService] = useState<GovService | null>(null);
  const [isAddServiceOpen, setIsAddServiceOpen] = useState(false);

  // New Service Form State
  const [newTitle, setNewTitle] = useState('');
  const [newTitleMr, setNewTitleMr] = useState('');
  const [newCategory, setNewCategory] = useState('Government Certificates');
  const [newPrice, setNewPrice] = useState('₹200');
  const [newDocs, setNewDocs] = useState('');

  useEffect(() => {
    // Check session auth
    if (sessionStorage.getItem('scms_admin_auth') === 'true') {
      setIsAuthenticated(true);
    }
    loadAppointments();
  }, []);

  const loadAppointments = () => {
    const saved = localStorage.getItem('scms_appointments');
    if (saved) {
      try {
        setAppointments(JSON.parse(saved));
      } catch (e) {
        setAppointments([]);
      }
    } else {
      // Mock sample appointments
      const sample = [
        {
          id: 'SCMS-829104',
          fullName: 'Suresh Patil',
          phone: '9822334455',
          email: 'suresh@example.com',
          serviceTitle: 'Income Certificate (उत्पन्नाचा दाखला)',
          date: '2026-08-05',
          timeSlot: '10:00 AM - 11:00 AM',
          status: 'Pending Verification',
          files: ['Aadhaar_Card.pdf', 'Ration_Card.jpg', 'Talathi_Income.pdf'],
          createdAt: new Date().toISOString()
        },
        {
          id: 'SCMS-739182',
          fullName: 'Ankita Shinde',
          phone: '9421001122',
          email: 'ankita@example.com',
          serviceTitle: 'PAN Card Application',
          date: '2026-08-04',
          timeSlot: '11:00 AM - 01:00 PM',
          status: 'Completed',
          files: ['Aadhaar_Ankita.pdf', 'Photo.jpg'],
          createdAt: new Date().toISOString()
        }
      ];
      setAppointments(sample);
      localStorage.setItem('scms_appointments', JSON.stringify(sample));
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'admin123' || passwordInput === 'shri2026') {
      sessionStorage.setItem('scms_admin_auth', 'true');
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid Admin Password. (Default: admin123)');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('scms_admin_auth');
    setIsAuthenticated(false);
  };

  const updateAppointmentStatus = (id: string, newStatus: string) => {
    const updated = appointments.map(app => app.id === id ? { ...app, status: newStatus } : app);
    setAppointments(updated);
    localStorage.setItem('scms_appointments', JSON.stringify(updated));
  };

  const deleteAppointment = (id: string) => {
    if (confirm('Are you sure you want to delete this appointment?')) {
      const updated = appointments.filter(app => app.id !== id);
      setAppointments(updated);
      localStorage.setItem('scms_appointments', JSON.stringify(updated));
    }
  };

  const handleSavePriceEdit = () => {
    if (!editingService) return;
    const updated = services.map(s => s.id === editingService.id ? editingService : s);
    setServices(updated);
    setEditingService(null);
  };

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;

    const newService: GovService = {
      id: 'custom-' + Date.now(),
      title: newTitle,
      titleMr: newTitleMr || newTitle,
      titleHi: newTitle,
      category: newCategory,
      categoryKey: 'cat_other',
      description: 'Custom added service',
      descriptionMr: 'नवीन सेवा',
      purpose: 'Service added via Admin Panel',
      purposeMr: 'प्रशासकीय पॅनेलद्वारे जोडलेली सेवा',
      benefits: ['Fast processing at center'],
      eligibility: ['Maharashtra Residents'],
      requiredDocuments: newDocs ? newDocs.split(',').map(d => d.trim()) : ['Aadhaar Card'],
      requiredDocumentsMr: [],
      stepByStepProcess: ['Document submission', 'Processing', 'Delivery'],
      govtFee: '₹50',
      serviceCharge: '₹100',
      totalPrice: newPrice,
      priceValue: parseInt(newPrice.replace(/[^0-9]/g, '')) || 100,
      estimatedTime: '2-3 Days',
      validity: '1 Year',
      faqs: [],
      icon: 'FileText'
    };

    setServices(prev => [newService, ...prev]);
    setIsAddServiceOpen(false);
    setNewTitle('');
    setNewTitleMr('');
    setNewDocs('');
  };

  const exportBackupJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ appointments, services, rateCardUrl }, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `scms_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-gray-200"
        >
          <div className="w-16 h-16 bg-orange-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8" />
          </div>

          <h2 className="text-2xl font-bold text-center text-secondary mb-1">Shri Computers Admin</h2>
          <p className="text-xs text-center text-gray-500 mb-6">Enter management credentials to access panel</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Admin Password</label>
              <div className="relative">
                <Key className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                <input
                  type="password"
                  required
                  placeholder="Enter Password (admin123)"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary text-sm"
                />
              </div>
            </div>

            {authError && <p className="text-xs text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-200">{authError}</p>}

            <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-blue-950 font-bold py-3">
              Login to Admin Panel
            </Button>
          </form>
        </motion.div>
      </div>
    );
  }

  // Admin Dashboard View
  const filteredAppointments = appointments.filter(app => {
    const matchesSearch = app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          app.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          app.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-gray-100 min-h-screen pb-20">
      {/* Top Admin Bar */}
      <header className="bg-secondary text-white border-b border-blue-900 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary text-white rounded-lg flex items-center justify-center font-bold">
              SC
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">Admin Management Panel</h1>
              <p className="text-xs text-orange-200">Shri Computers & Multi Services</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button size="sm" variant="outline" className="text-white border-white/40 hover:bg-white hover:text-secondary text-xs" onClick={exportBackupJSON}>
              <Download className="w-3.5 h-3.5 mr-1" /> Backup Data
            </Button>
            <Button size="sm" className="bg-red-600 hover:bg-red-700 text-xs" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="container mx-auto px-4 py-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-xl border border-gray-200 shadow-sm">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: FileText },
            { id: 'appointments', label: `Appointments (${appointments.length})`, icon: Calendar },
            { id: 'services', label: `Services & Pricing (${services.length})`, icon: Settings },
            { id: 'rateboard', label: 'Rate Card Board', icon: ImageIcon }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab 1: Dashboard Overview */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase font-semibold">Total Appointments</span>
                  <div className="text-2xl font-bold text-gray-900">{appointments.length}</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 text-primary rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase font-semibold">Active Services</span>
                  <div className="text-2xl font-bold text-gray-900">{services.length}</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase font-semibold">Pending Verification</span>
                  <div className="text-2xl font-bold text-gray-900">
                    {appointments.filter(a => a.status === 'Pending Verification').length}
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase font-semibold">Completed Services</span>
                  <div className="text-2xl font-bold text-gray-900">
                    {appointments.filter(a => a.status === 'Completed').length}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Recent Appointments */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Appointments</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
                    <tr>
                      <th className="p-3">ID</th>
                      <th className="p-3">Customer</th>
                      <th className="p-3">Service</th>
                      <th className="p-3">Date</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {appointments.slice(0, 5).map(app => (
                      <tr key={app.id}>
                        <td className="p-3 font-mono font-bold text-primary">{app.id}</td>
                        <td className="p-3 font-medium text-gray-800">{app.fullName} ({app.phone})</td>
                        <td className="p-3">{app.serviceTitle}</td>
                        <td className="p-3 text-xs text-gray-500">{app.date}</td>
                        <td className="p-3">
                          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                            {app.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Appointments Manager */}
        {activeTab === 'appointments' && (
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search by ID, Name or Phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 text-xs"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-300 text-xs bg-gray-50"
              >
                <option value="all">All Statuses</option>
                <option value="Pending Verification">Pending Verification</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
                    <tr>
                      <th className="p-4">Booking ID</th>
                      <th className="p-4">Customer Details</th>
                      <th className="p-4">Service Required</th>
                      <th className="p-4">Appointment Date</th>
                      <th className="p-4">Uploaded Documents</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredAppointments.map(app => (
                      <tr key={app.id} className="hover:bg-gray-50/80">
                        <td className="p-4 font-mono font-bold text-primary">{app.id}</td>
                        <td className="p-4">
                          <p className="font-bold text-gray-900">{app.fullName}</p>
                          <p className="text-xs text-gray-500">{app.phone}</p>
                        </td>
                        <td className="p-4 font-medium text-gray-800">{app.serviceTitle}</td>
                        <td className="p-4 text-xs text-gray-600">
                          <p className="font-semibold">{app.date}</p>
                          <p className="text-gray-400">{app.timeSlot}</p>
                        </td>
                        <td className="p-4">
                          {app.files && app.files.length > 0 ? (
                            <div className="space-y-1">
                              {app.files.map((f: string, i: number) => (
                                <span key={i} className="inline-block px-2 py-0.5 bg-gray-100 text-gray-700 text-[10px] rounded mr-1">
                                  📄 {f}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <span className="text-xs text-gray-400">No documents</span>
                          )}
                        </td>
                        <td className="p-4">
                          <select
                            value={app.status}
                            onChange={(e) => updateAppointmentStatus(app.id, e.target.value)}
                            className="px-2.5 py-1 rounded-lg text-xs font-bold border border-gray-300 bg-white"
                          >
                            <option value="Pending Verification">Pending Verification</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Rejected">Rejected</option>
                          </select>
                        </td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => {
                              const msg = encodeURIComponent(`Hello ${app.fullName}, regarding your booking ${app.id} for ${app.serviceTitle} at Shri Computers.`);
                              window.open(`https://wa.me/91${app.phone}?text=${msg}`, '_blank');
                            }}
                            className="p-1.5 text-green-600 hover:bg-green-50 rounded-md mr-2"
                            title="WhatsApp Customer"
                          >
                            <MessageCircle className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteAppointment(app.id)}
                            className="p-1.5 text-red-500 hover:bg-red-50 rounded-md"
                            title="Delete Booking"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Services & Pricing Manager */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">Manage Services & Pricing List</h2>
              <Button onClick={() => setIsAddServiceOpen(true)} className="gap-2 bg-primary">
                <Plus className="w-4 h-4" /> Add New Service
              </Button>
            </div>

            {/* Services Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
                    <tr>
                      <th className="p-4">Service Title</th>
                      <th className="p-4">Marathi Title</th>
                      <th className="p-4">Category</th>
                      <th className="p-4">Price</th>
                      <th className="p-4">Required Documents</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {services.map(s => (
                      <tr key={s.id} className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">{s.title}</td>
                        <td className="p-4 font-medium text-orange-600">{s.titleMr}</td>
                        <td className="p-4">
                          <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded font-medium">
                            {s.category}
                          </span>
                        </td>
                        <td className="p-4 font-black text-secondary">{s.totalPrice}</td>
                        <td className="p-4 text-xs text-gray-600">
                          {s.requiredDocuments.slice(0, 2).join(', ')}...
                        </td>
                        <td className="p-4 text-right space-x-2">
                          <button
                            onClick={() => setEditingService(s)}
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Rate Card Board Manager */}
        {activeTab === 'rateboard' && (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900">Official Rate Board Banner Settings</h2>
            <p className="text-xs text-gray-500">Update the official rate card board image displayed on the Pricing page.</p>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">Image URL</label>
              <input
                type="text"
                value={rateCardUrl}
                onChange={(e) => setRateCardUrl(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm"
              />
            </div>

            <div className="border p-2 rounded-xl bg-gray-50">
              <p className="text-xs font-semibold text-gray-500 mb-2">Current Board Preview:</p>
              <img src={rateCardUrl} alt="Rate Board" className="w-full h-auto rounded-lg max-h-96 object-contain" />
            </div>

            <Button className="w-full py-3 bg-primary" onClick={() => alert('Rate board updated successfully!')}>
              Save Board Configuration
            </Button>
          </div>
        )}

      </div>

      {/* Add Service Modal */}
      {isAddServiceOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Add New Service</h3>
            <form onSubmit={handleAddService} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold mb-1">Service Title (English)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Caste Validity Certificate"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full p-2.5 border rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Service Title (Marathi)</label>
                <input
                  type="text"
                  placeholder="e.g. जात पडताळणी प्रमाणपत्र"
                  value={newTitleMr}
                  onChange={(e) => setNewTitleMr(e.target.value)}
                  className="w-full p-2.5 border rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Price (e.g. ₹200)</label>
                <input
                  type="text"
                  required
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  className="w-full p-2.5 border rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Required Documents (comma separated)</label>
                <input
                  type="text"
                  placeholder="Aadhaar, Ration Card, Photo"
                  value={newDocs}
                  onChange={(e) => setNewDocs(e.target.value)}
                  className="w-full p-2.5 border rounded-lg"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <Button type="submit" className="flex-1 bg-primary">Add Service</Button>
                <Button type="button" variant="ghost" onClick={() => setIsAddServiceOpen(false)}>Cancel</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Service Modal */}
      {editingService && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Edit Price: {editingService.title}</h3>
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold mb-1">Total Price</label>
                <input
                  type="text"
                  value={editingService.totalPrice}
                  onChange={(e) => setEditingService({ ...editingService, totalPrice: e.target.value })}
                  className="w-full p-2.5 border rounded-lg font-bold text-sm"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Govt Fee</label>
                <input
                  type="text"
                  value={editingService.govtFee}
                  onChange={(e) => setEditingService({ ...editingService, govtFee: e.target.value })}
                  className="w-full p-2.5 border rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Service Charge</label>
                <input
                  type="text"
                  value={editingService.serviceCharge}
                  onChange={(e) => setEditingService({ ...editingService, serviceCharge: e.target.value })}
                  className="w-full p-2.5 border rounded-lg"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <Button onClick={handleSavePriceEdit} className="flex-1 bg-primary">Save Price</Button>
                <Button variant="ghost" onClick={() => setEditingService(null)}>Cancel</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
