import { Service } from '../types';

export interface RateCardItem {
  id: string;
  categoryKey: string;
  serviceNameEn: string;
  serviceNameMr: string;
  price: string;
  priceValue: number; // for sorting
  time: string;
  docs: string[];
}

export const rateCardCategories = [
  "cat_xerox",
  "cat_whatsapp_print",
  "cat_scanning",
  "cat_lamination",
  "cat_typing",
  "cat_revenue",
  "cat_kyc",
  "cat_job",
  "cat_education",
  "cat_business",
  "cat_other"
];

export const rateCardData: RateCardItem[] = [
  // Xerox & Printing
  { id: 'x1', categoryKey: 'cat_xerox', serviceNameEn: 'B/W Xerox 1 Side (1-50)', serviceNameMr: 'झेरॉक्स (B/W) 1 बाजू (1-50)', price: '₹3', priceValue: 3, time: 'Instant', docs: [] },
  { id: 'x2', categoryKey: 'cat_xerox', serviceNameEn: 'B/W Xerox 2 Side (1-50)', serviceNameMr: 'झेरॉक्स (B/W) 2 बाजू (1-50)', price: '₹5', priceValue: 5, time: 'Instant', docs: [] },
  { id: 'x3', categoryKey: 'cat_xerox', serviceNameEn: 'B/W Xerox 1 Side (51-100)', serviceNameMr: 'झेरॉक्स (B/W) 1 बाजू (51-100)', price: '₹2', priceValue: 2, time: 'Instant', docs: [] },
  { id: 'x4', categoryKey: 'cat_xerox', serviceNameEn: 'B/W Xerox 2 Side (51-100)', serviceNameMr: 'झेरॉक्स (B/W) 2 बाजू (51-100)', price: '₹4', priceValue: 4, time: 'Instant', docs: [] },

  // WhatsApp / Print
  { id: 'w1', categoryKey: 'cat_whatsapp_print', serviceNameEn: 'B/W Print', serviceNameMr: 'B/W Print', price: '₹10', priceValue: 10, time: 'Instant', docs: [] },
  { id: 'w2', categoryKey: 'cat_whatsapp_print', serviceNameEn: 'Color Print', serviceNameMr: 'Color Print', price: '₹15', priceValue: 15, time: 'Instant', docs: [] },
  { id: 'w3', categoryKey: 'cat_whatsapp_print', serviceNameEn: 'Wholesale Color Print', serviceNameMr: 'Wholesale Color Print', price: '₹10', priceValue: 10, time: 'Instant', docs: [] },
  { id: 'w4', categoryKey: 'cat_whatsapp_print', serviceNameEn: 'Laser Color Print', serviceNameMr: 'Laser Color Print', price: '₹20', priceValue: 20, time: 'Instant', docs: [] },
  { id: 'w5', categoryKey: 'cat_whatsapp_print', serviceNameEn: 'A4 Photo Paper Print', serviceNameMr: 'A4 Photo Paper Print', price: '₹100', priceValue: 100, time: 'Instant', docs: [] },

  // Scanning
  { id: 's1', categoryKey: 'cat_scanning', serviceNameEn: 'Document Scanning (Per Page)', serviceNameMr: 'स्कॅनिंग (प्रति पेज)', price: '₹10', priceValue: 10, time: 'Instant', docs: [] },

  // Lamination & Card
  { id: 'l1', categoryKey: 'cat_lamination', serviceNameEn: 'ID Card Lamination', serviceNameMr: 'ID Card Lamination', price: '₹20', priceValue: 20, time: 'Instant', docs: [] },
  { id: 'l2', categoryKey: 'cat_lamination', serviceNameEn: 'A4 Lamination', serviceNameMr: 'A4 Lamination', price: '₹30', priceValue: 30, time: 'Instant', docs: [] },
  { id: 'l3', categoryKey: 'cat_lamination', serviceNameEn: 'Legal Size Lamination', serviceNameMr: 'Legal Size Lamination', price: '₹40', priceValue: 40, time: 'Instant', docs: [] },
  { id: 'l4', categoryKey: 'cat_lamination', serviceNameEn: 'A3 Size Lamination', serviceNameMr: 'A3 Size Lamination', price: '₹50', priceValue: 50, time: 'Instant', docs: [] },
  { id: 'l5', categoryKey: 'cat_lamination', serviceNameEn: 'ID/Aadhaar/PAN Photo Paper Print', serviceNameMr: 'ID Card / Aadhaar / PAN Photo Paper Print', price: '₹100', priceValue: 100, time: 'Instant', docs: [] },
  { id: 'l6', categoryKey: 'cat_lamination', serviceNameEn: 'PVC Card Print', serviceNameMr: 'PVC Card Print', price: '₹150', priceValue: 150, time: 'Instant', docs: [] },

  // Typing & Binding
  { id: 't1', categoryKey: 'cat_typing', serviceNameEn: 'Spiral Binding (50 Pages)', serviceNameMr: 'Spiral Binding (50 Pages)', price: '₹50', priceValue: 50, time: '10 mins', docs: [] },
  { id: 't2', categoryKey: 'cat_typing', serviceNameEn: 'Typing / Data Correction', serviceNameMr: 'Typing / माहिती दुरुस्ती', price: '₹10+', priceValue: 10, time: 'Depends', docs: [] },
  { id: 't3', categoryKey: 'cat_typing', serviceNameEn: 'Job Biodata', serviceNameMr: 'Job Biodata', price: '₹100+', priceValue: 100, time: '30 mins', docs: [] },

  // Revenue & Digital
  { id: 'r1', categoryKey: 'cat_revenue', serviceNameEn: 'Digital 7/12', serviceNameMr: 'Digital 7/12', price: '₹50', priceValue: 50, time: '5 mins', docs: [] },
  { id: 'r2', categoryKey: 'cat_revenue', serviceNameEn: 'Digital 8A', serviceNameMr: 'Digital 8A', price: '₹50', priceValue: 50, time: '5 mins', docs: [] },

  // KYC / PAN / Aadhaar
  { id: 'k1', categoryKey: 'cat_kyc', serviceNameEn: 'KYC (Bank & Other)', serviceNameMr: 'KYC (Bank व इतर)', price: '₹100', priceValue: 100, time: '15 mins', docs: ['Aadhaar', 'Bank Passbook'] },
  { id: 'k2', categoryKey: 'cat_kyc', serviceNameEn: 'PAN Card', serviceNameMr: 'PAN Card', price: '₹300', priceValue: 300, time: '10-15 Days', docs: ['Aadhaar', 'Photos'] },
  { id: 'k3', categoryKey: 'cat_kyc', serviceNameEn: 'PAN Correction', serviceNameMr: 'PAN Correction', price: '₹350', priceValue: 350, time: '10-15 Days', docs: ['Aadhaar', 'Old PAN', 'Proof'] },
  { id: 'k4', categoryKey: 'cat_kyc', serviceNameEn: 'Aadhaar-PAN Link (with Challan)', serviceNameMr: 'Aadhaar-PAN Link (चलन सहित)', price: '₹1300', priceValue: 1300, time: '2-4 Days', docs: ['Aadhaar', 'PAN'] },

  // Job Portal
  { id: 'j1', categoryKey: 'cat_job', serviceNameEn: 'Pavitra Registration', serviceNameMr: 'Pavitra Registration', price: '₹300', priceValue: 300, time: '1 Day', docs: [] },
  { id: 'j2', categoryKey: 'cat_job', serviceNameEn: 'Pavitra Option Form', serviceNameMr: 'Pavitra Option Form', price: 'Variable', priceValue: 0, time: 'Variable', docs: [] },
  { id: 'j3', categoryKey: 'cat_job', serviceNameEn: 'TCS Job Application', serviceNameMr: 'TCS Job Application', price: '₹300', priceValue: 300, time: '1 Hr', docs: ['Resume', 'Photos', 'Marksheets'] },
  { id: 'j4', categoryKey: 'cat_job', serviceNameEn: 'Other Job Application', serviceNameMr: 'इतर Job Application', price: '₹200', priceValue: 200, time: '1 Hr', docs: ['Resume', 'Photos', 'Marksheets'] },
  { id: 'j5', categoryKey: 'cat_job', serviceNameEn: 'MPSC First Registration', serviceNameMr: 'MPSC First Registration', price: '₹300', priceValue: 300, time: '1 Hr', docs: ['Aadhaar', 'Marksheets', 'Photo', 'Sign'] },
  { id: 'j6', categoryKey: 'cat_job', serviceNameEn: 'MPSC Renewal', serviceNameMr: 'MPSC Renewal', price: '₹200', priceValue: 200, time: '30 mins', docs: [] },

  // Education / Exam
  { id: 'e1', categoryKey: 'cat_education', serviceNameEn: 'SPPU Exam Form (First Year)', serviceNameMr: 'SPPU Exam Form (First Year)', price: '₹150', priceValue: 150, time: '30 mins', docs: [] },
  { id: 'e2', categoryKey: 'cat_education', serviceNameEn: 'SPPU Renewal', serviceNameMr: 'SPPU Renewal', price: '₹100', priceValue: 100, time: '20 mins', docs: [] },
  { id: 'e3', categoryKey: 'cat_education', serviceNameEn: 'Exam Challan', serviceNameMr: 'Exam Challan', price: '₹100', priceValue: 100, time: '10 mins', docs: [] },
  { id: 'e4', categoryKey: 'cat_education', serviceNameEn: 'Mahadbt Scholarship (New/Renew)', serviceNameMr: 'Mahadbt Scholarship (New / Renew)', price: '₹200', priceValue: 200, time: '1 Hr', docs: ['Income Cert', 'Caste Cert', 'Marksheets', 'Aadhaar'] },
  { id: 'e5', categoryKey: 'cat_education', serviceNameEn: 'Mahadbt Farmer Subsidy', serviceNameMr: 'Mahadbt Farmer Subsidy', price: '₹200', priceValue: 200, time: '1 Hr', docs: ['7/12', '8A', 'Aadhaar', 'Bank Passbook'] },
  { id: 'e6', categoryKey: 'cat_education', serviceNameEn: 'CTET / TET / NET Form', serviceNameMr: 'CTET / TET / NET अर्ज', price: '₹200', priceValue: 200, time: '1 Hr', docs: [] },
  { id: 'e7', categoryKey: 'cat_education', serviceNameEn: 'MHT-CET / JEE / NEET / Diploma CAP', serviceNameMr: 'MHT-CET / JEE / NEET / Diploma CAP', price: '₹300', priceValue: 300, time: '1 Hr', docs: [] },
  { id: 'e8', categoryKey: 'cat_education', serviceNameEn: 'Option Form (Up to 50 Colleges)', serviceNameMr: 'Option Form (50 College पर्यंत)', price: '₹200', priceValue: 200, time: '1 Hr', docs: [] },

  // Business
  { id: 'b1', categoryKey: 'cat_business', serviceNameEn: 'Shop Act Registration', serviceNameMr: 'Shop Act Registration', price: '₹1000', priceValue: 1000, time: '2-3 Days', docs: ['Aadhaar', 'Photo', 'Shop Photo'] },
  { id: 'b2', categoryKey: 'cat_business', serviceNameEn: 'Udyam Aadhaar', serviceNameMr: 'Udyam Aadhaar', price: '₹500', priceValue: 500, time: '1 Day', docs: ['Aadhaar', 'PAN', 'Bank Details'] },
  { id: 'b3', categoryKey: 'cat_business', serviceNameEn: 'Food License (1 Year)', serviceNameMr: 'Food License (1 वर्ष)', price: '₹1500', priceValue: 1500, time: '10-15 Days', docs: ['Aadhaar', 'Photo', 'Place Proof'] },
  { id: 'b4', categoryKey: 'cat_business', serviceNameEn: 'Food License (5 Years)', serviceNameMr: 'Food License (5 वर्ष)', price: '₹2000', priceValue: 2000, time: '10-15 Days', docs: ['Aadhaar', 'Photo', 'Place Proof'] },

  // Other
  { id: 'o1', categoryKey: 'cat_other', serviceNameEn: 'Voting Card (New / Correction)', serviceNameMr: 'Voting Card (New / Correction)', price: '₹200', priceValue: 200, time: '15-30 Days', docs: ['Aadhaar', 'Photo'] },
  { id: 'o2', categoryKey: 'cat_other', serviceNameEn: 'Police Character Verification', serviceNameMr: 'Police Character Verification', price: '₹500', priceValue: 500, time: '15 Days', docs: ['Aadhaar', 'Photo', 'School LC'] },
  { id: 'o3', categoryKey: 'cat_other', serviceNameEn: 'Caste Validity (Student) + Challan', serviceNameMr: 'Caste Validity (Student) (चलन सहित)', price: '₹600', priceValue: 600, time: '30-45 Days', docs: ['Caste Cert', 'School LC', 'Affidavit'] },
  { id: 'o4', categoryKey: 'cat_other', serviceNameEn: 'PF Service', serviceNameMr: 'PF Service', price: 'Variable', priceValue: 0, time: 'Variable', docs: ['UAN', 'Aadhaar', 'PAN'] }
];
