import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Base English Translations
const enTranslation = {
  // Navigation
  "home": "Home",
  "about": "About",
  "services": "Services",
  "pricing": "Pricing",
  "gallery": "Gallery",
  "contact": "Contact",
  "book_appointment": "Book Appointment",
  // Common
  "loading": "Loading...",
  "select_language": "Select Your Language",
  "search_placeholder": "Search by service name or document...",
  "view_details": "View Details",
  "apply_now": "Apply Now",
  "required_documents": "Required Documents",
  "govt_fee": "Govt Fee",
  "processing_time": "Processing Time",
  // Pricing Categories
  "cat_xerox": "Xerox & Printing",
  "cat_whatsapp_print": "WhatsApp & Print",
  "cat_scanning": "Scanning",
  "cat_lamination": "Lamination & Card Services",
  "cat_typing": "Typing & Binding",
  "cat_revenue": "Revenue & Digital Services",
  "cat_kyc": "KYC / PAN / Aadhaar",
  "cat_job": "Job / Portal Services",
  "cat_education": "Education / Exam Services",
  "cat_business": "Business Registration",
  "cat_other": "Other Services",
  "price_disclaimer": "* Prices may change without prior notice based on government fees and urgency.",
  "last_updated": "Last Updated",
  "search_services": "Search services...",
  "all_categories": "All Categories",
  "sort_default": "Default",
  "sort_low_high": "Price: Low to High",
  "sort_high_low": "Price: High to Low",
  "grid_view": "Grid View",
  "list_view": "List View",
  "enquire_now": "Enquire Now",
  "print_list": "Print List",
  "download_pdf": "Download PDF",
  "view_official_board": "View Official Board",
  "close": "Close"
};

const resources = {
  en: { translation: enTranslation },
  mr: { 
    translation: { 
      ...enTranslation, 
      home: "मुख्यपृष्ठ", about: "आमच्याबद्दल", services: "सेवा", pricing: "दरपत्रक", gallery: "गॅलरी", contact: "संपर्क", book_appointment: "अपॉइंटमेंट बुक करा", 
      search_placeholder: "सेवा शोधा...", view_details: "माहिती पहा", apply_now: "आता अर्ज करा", required_documents: "आवश्यक कागदपत्रे", govt_fee: "शासकीय फी", processing_time: "वेळ",
      cat_xerox: "झेरॉक्स / प्रिंट सेवा", cat_whatsapp_print: "व्हॉट्सॲप / प्रिंट", cat_scanning: "स्कॅनिंग", cat_lamination: "लॅमिनेशन / कार्ड सेवा",
      cat_typing: "टायपिंग / बाईंडिंग", cat_revenue: "महसूल / डिजिटल सेवा", cat_kyc: "KYC / PAN / आधार सेवा", cat_job: "नोकरी / पोर्टल सेवा",
      cat_education: "शिक्षण / परीक्षा सेवा", cat_business: "व्यवसाय / नोंदणी सेवा", cat_other: "इतर सेवा",
      price_disclaimer: "* सरकारी शुल्क आणि निकडीनुसार पूर्वसूचनेशिवाय दरांमध्ये बदल होऊ शकतो.", last_updated: "शेवटचे अपडेट", search_services: "सेवा शोधा...",
      all_categories: "सर्व श्रेणी", sort_default: "डिफॉल्ट", sort_low_high: "किंमत: कमी ते जास्त", sort_high_low: "किंमत: जास्त ते कमी",
      grid_view: "ग्रीड व्ह्यू", list_view: "लिस्ट व्ह्यू", enquire_now: "चौकशी करा", print_list: "प्रिंट करा", download_pdf: "PDF डाउनलोड करा", view_official_board: "अधिकृत फलक पहा", close: "बंद करा"
    } 
  },
  hi: { 
    translation: { 
      ...enTranslation, 
      home: "मुख्य पृष्ठ", about: "हमारे बारे में", services: "सेवाएं", pricing: "मूल्य निर्धारण", gallery: "गैलरी", contact: "संपर्क करें", book_appointment: "नियुक्ति बुक करें", 
      search_placeholder: "सेवाएं खोजें...", view_details: "विवरण देखें", apply_now: "अभी आवेदन करें", required_documents: "आवश्यक दस्तावेज़", govt_fee: "सरकारी शुल्क", processing_time: "प्रक्रिया समय",
      cat_xerox: "जेरोक्स / प्रिंट सेवा", cat_whatsapp_print: "व्हाट्सएप / प्रिंट", cat_scanning: "स्कैनिंग", cat_lamination: "लेमिनेशन / कार्ड सेवा",
      cat_typing: "टाइपिंग / बाइंडिंग", cat_revenue: "राजस्व / डिजिटल सेवा", cat_kyc: "KYC / PAN / आधार सेवा", cat_job: "नौकरी / पोर्टल सेवा",
      cat_education: "शिक्षा / परीक्षा सेवा", cat_business: "व्यवसाय / पंजीकरण सेवा", cat_other: "अन्य सेवाएं",
      price_disclaimer: "* सरकारी शुल्क और तात्कालिकता के आधार पर बिना किसी पूर्व सूचना के कीमतें बदल सकती हैं।", last_updated: "अंतिम अपडेट", search_services: "सेवाएं खोजें...",
      all_categories: "सभी श्रेणियां", sort_default: "डिफ़ॉल्ट", sort_low_high: "कीमत: कम से ज्यादा", sort_high_low: "कीमत: ज्यादा से कम",
      grid_view: "ग्रिड व्यू", list_view: "लिस्ट व्यू", enquire_now: "पूछताछ करें", print_list: "प्रिंट करें", download_pdf: "PDF डाउनलोड करें", view_official_board: "आधिकारिक बोर्ड देखें", close: "बंद करें"
    } 
  },
  gu: { translation: { ...enTranslation, home: "મુખ્ય પૃષ્ઠ", about: "અમારા વિશે", services: "સેવાઓ", pricing: "ભાવ યાદી", gallery: "ગેલેરી", contact: "સંપર્ક કરો", book_appointment: "એપોઇન્ટમેન્ટ બુક કરો" } },
  kn: { translation: { ...enTranslation, home: "ಮುಖಪುಟ", about: "ನಮ್ಮ ಬಗ್ಗೆ", services: "ಸೇವೆಗಳು", pricing: "ಬೆಲೆಗಳು", gallery: "ಗ್ಯಾಲರಿ", contact: "ಸಂಪರ್ಕ", book_appointment: "ನೇಮಕಾತಿ ಕಾಯ್ದಿರಿಸಿ" } },
  te: { translation: { ...enTranslation, home: "హోమ్", about: "మా గురించి", services: "సేవలు", pricing: "ధరలు", gallery: "గ్యాలరీ", contact: "సంప్రదించండి", book_appointment: "అపాయింట్‌మెంట్ బుక్ చేయండి" } },
  ta: { translation: { ...enTranslation, home: "முகப்பு", about: "எங்களை பற்றி", services: "சேவைகள்", pricing: "விலை", gallery: "புகைப்பட தொகுப்பு", contact: "தொடர்பு", book_appointment: "பதவி முன்பதிவு" } },
  bn: { translation: { ...enTranslation, home: "হোম", about: "আমাদের সম্পর্কে", services: "পরিষেবা", pricing: "মূল্যতালিকা", gallery: "গ্যালারি", contact: "যোগাযোগ", book_appointment: "অ্যাপয়েন্টমেন্ট বুক করুন" } },
  pa: { translation: { ...enTranslation, home: "ਘਰ", about: "ਸਾਡੇ ਬਾਰੇ", services: "ਸੇਵਾਵਾਂ", pricing: "ਕੀਮਤਾਂ", gallery: "ਗੈਲਰੀ", contact: "ਸੰਪਰਕ", book_appointment: "ਅਪੌਇੰਟਮੈਂਟ ਬੁੱਕ ਕਰੋ" } },
  ml: { translation: { ...enTranslation, home: "ഹോം", about: "ഞങ്ങളെക്കുറിച്ച്", services: "സേവനങ്ങൾ", pricing: "വിലകൾ", gallery: "ഗാലറി", contact: "ബന്ധപ്പെടുക", book_appointment: "അപ്പോയിന്റ്മെന്റ് ബുക്ക് ചെയ്യുക" } },
  ur: { translation: { ...enTranslation, home: "ہوم", about: "ہمارے بارے میں", services: "خدمات", pricing: "قیمتوں کا تعین", gallery: "گیلری", contact: "رابطہ", book_appointment: "اپوائنٹمنٹ بک کریں" } },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
