import { Service, PricingItem } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Aadhaar Card Update',
    description: 'Update name, address, DOB, mobile number in Aadhaar.',
    icon: 'Fingerprint',
    category: 'Government Services',
    price: '₹50 - ₹100',
    estimatedTime: '3-5 Days',
    requiredDocuments: ['Old Aadhaar', 'Address Proof / ID Proof']
  },
  {
    id: '2',
    title: 'PAN Card Application',
    description: 'Apply for a new PAN card or make corrections to an existing one.',
    icon: 'CreditCard',
    category: 'Government Services',
    price: '₹200',
    estimatedTime: '10-15 Days',
    requiredDocuments: ['Aadhaar Card', '2 Passport Photos']
  },
  {
    id: '3',
    title: 'Passport Services',
    description: 'New passport application and renewal services.',
    icon: 'Plane',
    category: 'Government Services',
    price: '₹1500 (Govt Fee) + ₹300 (Service)',
    estimatedTime: '15-30 Days',
    requiredDocuments: ['Aadhaar', '10th Marksheet', 'Birth Certificate']
  },
  {
    id: '4',
    title: 'Income Certificate',
    description: 'Apply for official income certificate for scholarships/loans.',
    icon: 'FileText',
    category: 'Maha e-Seva',
    price: '₹100',
    estimatedTime: '8-15 Days',
    requiredDocuments: ['Aadhaar', 'Ration Card', 'Talathi Income Proof']
  },
  {
    id: '5',
    title: 'Money Transfer',
    description: 'Secure and instant domestic money transfer to any bank.',
    icon: 'Banknote',
    category: 'Banking',
    price: '1% of amount',
    estimatedTime: 'Instant'
  },
  {
    id: '6',
    title: 'Color Printing',
    description: 'High quality A4 and A3 color printing services.',
    icon: 'Printer',
    category: 'Printing',
    price: '₹10 / page'
  },
  {
    id: '7',
    title: 'Online Exam Forms',
    description: 'Assistance with filling MPSC, UPSC, SSC, and other competitive exam forms.',
    icon: 'GraduationCap',
    category: 'Education',
    price: '₹50 - ₹100 / form',
    requiredDocuments: ['Marksheets', 'Aadhaar', 'Photo', 'Signature']
  },
  {
    id: '8',
    title: 'Shop Act License',
    description: 'Gumasta license registration and renewal for your business.',
    icon: 'Store',
    category: 'Business Registration',
    price: '₹300',
    estimatedTime: '2-3 Days',
    requiredDocuments: ['Aadhaar', 'Photo', 'Shop Photo', 'Light Bill']
  }
];

export const pricingItems: PricingItem[] = [
  { id: '1', serviceName: 'Black & White Printing (A4)', price: '₹3 / page', category: 'Printing' },
  { id: '2', serviceName: 'Color Printing (A4)', price: '₹10 / page', category: 'Printing' },
  { id: '3', serviceName: 'Scanning', price: '₹10 / page', category: 'Scanning' },
  { id: '4', serviceName: 'Lamination (A4)', price: '₹20', category: 'Lamination' },
  { id: '5', serviceName: 'Passport Size Photo (8 copies)', price: '₹50', category: 'Photography' },
  { id: '6', serviceName: 'Resume Making', price: '₹100', category: 'Documentation' },
  { id: '7', serviceName: 'Spiral Binding', price: '₹40 - ₹100', category: 'Binding' },
  { id: '8', serviceName: 'PVC Smart Card Print', price: '₹100', category: 'Printing' },
];

export const categories = Array.from(new Set(services.map(s => s.category)));
