export interface GovService {
  id: string;
  title: string;
  titleMr: string;
  titleHi: string;
  category: string;
  categoryKey: string;
  description: string;
  descriptionMr: string;
  purpose: string;
  purposeMr: string;
  benefits: string[];
  eligibility: string[];
  requiredDocuments: string[];
  requiredDocumentsMr: string[];
  stepByStepProcess: string[];
  govtFee: string;
  serviceCharge: string;
  totalPrice: string;
  priceValue: number;
  estimatedTime: string;
  validity: string;
  faqs: { question: string; answer: string; questionMr?: string; answerMr?: string }[];
  icon: string;
  popular?: boolean;
}

export const govServicesData: GovService[] = [
  {
    id: 'income-certificate',
    title: 'Income Certificate',
    titleMr: 'उत्पन्नाचा दाखला',
    titleHi: 'आय प्रमाण पत्र',
    category: 'Government Certificates',
    categoryKey: 'cat_revenue',
    description: 'Official revenue department certificate declaring annual family income for scholarships, college admissions, and government schemes.',
    descriptionMr: 'शिष्यवृत्ती, कॉलेज प्रवेश आणि शासकीय योजनांसाठी वार्षिक कौटुंबिक उत्पन्न दर्शवणारा अधिकृत महसूल विभागाचा दाखला.',
    purpose: 'Required for college admissions, Mahadbt scholarship applications, EWS reservation, and government subsidy benefits.',
    purposeMr: 'महाविद्यालयीन प्रवेश, महाडीबीटी शिष्यवृत्ती अर्ज, EWS आरक्षण आणि सरकारी अनुदानाचा लाभ घेण्यासाठी आवश्यक.',
    benefits: [
      'Eligible for Post-Matric & Pre-Matric Scholarships',
      'Tuition Fee Waiver Scheme (TFWS) in engineering/diploma',
      'Avail government housing and welfare subsidies',
      'Valid proof of family annual income across Maharashtra'
    ],
    eligibility: [
      'Resident of Maharashtra State',
      'Head of family or student applying through parent income'
    ],
    requiredDocuments: [
      'Aadhaar Card of Applicant & Parent',
      'Ration Card (Yellow/Orange/White)',
      'Talathi Income Proof / Salary Slip / Form 16',
      'Self Declaration Form (Auto-filled at center)',
      'Electricity Bill / Light Bill (Residence Proof)',
      'Passport Size Photo',
      'Active Mobile Number & Email ID'
    ],
    requiredDocumentsMr: [
      'अर्जदार व पालकांचे आधार कार्ड',
      'राशन कार्ड (पिवळे/केशरी/पांढरे)',
      'तलाठी उत्पन्नाचा दाखला / पगार स्लिप / फॉर्म १६',
      'स्वयंघोषणा पत्र (केंद्रावर भरून मिळेल)',
      'वीज बिल (रहिवासी पुरावा)',
      'पासपोर्ट साईज फोटो',
      'चालू मोबाईल नंबर व ईमेल आयडी'
    ],
    stepByStepProcess: [
      'Visit Shri Computers center with documents or apply online',
      'Document verification & data entry into Maha e-Seva Portal',
      'Biometric / OTP Authentication & Application submission',
      'Verification by Nayab Tehsildar / Revenue Department',
      'Download digitally signed Income Certificate receipt'
    ],
    govtFee: '₹33.60',
    serviceCharge: '₹66.40',
    totalPrice: '₹100',
    priceValue: 100,
    estimatedTime: '5-8 Working Days',
    validity: '1 Year (Valid till 31st March)',
    faqs: [
      {
        question: 'Is Talathi income certificate mandatory?',
        answer: 'Yes, for rural areas Talathi report is mandatory. For salaried employees, Salary Slip or Form 16 can be submitted.'
      },
      {
        question: 'Can I get 3-Year Income Certificate?',
        answer: 'Yes, 3-Year Income Certificates are also issued for higher education scholarships.'
      }
    ],
    icon: 'FileText',
    popular: true
  },
  {
    id: 'domicile-nationality',
    title: 'Domicile & Nationality Certificate',
    titleMr: 'वय, अधिवास व राष्ट्रीयत्व प्रमाणपत्र',
    titleHi: 'डोमिसाइल और राष्ट्रीयता प्रमाण पत्र',
    category: 'Government Certificates',
    categoryKey: 'cat_revenue',
    description: 'Official proof of continuous residence in Maharashtra state for at least 15 years and Indian citizenship.',
    descriptionMr: 'महाराष्ट्र राज्यात सलग १५ वर्षे वास्तव्याचा आणि भारतीय नागरिकत्वाचा अधिकृत पुरावा.',
    purpose: 'Mandatory for State Quota College admissions (Engineering, Medical, Pharmacy, Diploma) and Maharashtra Government Job recruitment.',
    purposeMr: 'राज्य कोटा महाविद्यालयीन प्रवेश (इंजिनिअरिंग, मेडिकल, फार्मसी) आणि महाराष्ट्र शासकीय नोकरभरतीसाठी अनिवार्य.',
    benefits: [
      'Qualifies candidate for Maharashtra State Quota seats',
      'Required for all competitive recruitment exams in Maharashtra',
      'Lifetime validity - no need to renew'
    ],
    eligibility: [
      'Continuous residence in Maharashtra for minimum 15 years',
      'Student born in Maharashtra or completed education in state'
    ],
    requiredDocuments: [
      'Aadhaar Card of Applicant & Father',
      'School Leaving Certificate (LC) / Birth Certificate',
      'Residence Proof (15 Years: Ration Card/Light Bill/Tax Receipt)',
      'Father Domicile or Birth Certificate (if available)',
      'Self Declaration Form',
      'Passport Size Photo'
    ],
    requiredDocumentsMr: [
      'अर्जदार व वडिलांचे आधार कार्ड',
      'शाळा सोडल्याचा दाखला (LC) / जन्म दाखला',
      'रहिवासी पुरावा (१५ वर्षाचा: राशन कार्ड/वीज बिल/घरपट्टी पावती)',
      'वडिलांचा डोमिसाईल किंवा जन्म दाखला',
      'स्वयंघोषणा पत्र',
      'पासपोर्ट साईज फोटो'
    ],
    stepByStepProcess: [
      'Submit required 15-year residence documents',
      'Application drafting & upload on Aaple Sarkar portal',
      'Verification by Tahsildar Office',
      'Certificate generation with Digital Signature'
    ],
    govtFee: '₹33.60',
    serviceCharge: '₹116.40',
    totalPrice: '₹150',
    priceValue: 150,
    estimatedTime: '10-15 Working Days',
    validity: 'Lifetime (आजीवन वैधता)',
    faqs: [
      {
        question: 'Is 15 years residence proof mandatory?',
        answer: 'Yes, minimum 15 years continuous residence proof in Maharashtra is required.'
      }
    ],
    icon: 'Award',
    popular: true
  },
  {
    id: 'caste-certificate',
    title: 'Caste Certificate (जातीचा दाखला)',
    titleMr: 'जातीचा दाखला',
    titleHi: 'जाति प्रमाण पत्र',
    category: 'Government Certificates',
    categoryKey: 'cat_revenue',
    description: 'Official government document certifying the reserved caste category (SC/ST/OBC/VJNT/SBC/SEBC) of an individual.',
    descriptionMr: 'व्यक्तीचा मागासवर्गीय प्रवर्ग (SC/ST/OBC/VJNT/SBC/SEBC) प्रमाणित करणारा अधिकृत शासकीय दाखला.',
    purpose: 'Required for educational reservation, scholarship fees exemption, and reserved category government job posts.',
    purposeMr: 'शैक्षणिक आरक्षण, शिष्यवृत्ती फी सवलत आणि मागासवर्गीय सरकारी नोकरीसाठी आवश्यक.',
    benefits: [
      'College fee concession and full scholarship eligibility',
      'Reservation in government jobs and local elections',
      'Access to government welfare schemes and soft loans'
    ],
    eligibility: [
      'Belonging to recognized SC/ST/OBC/VJNT/SBC category in Maharashtra',
      'Blood relation documentary proof prior to cutoff year (1950/1961/1967)'
    ],
    requiredDocuments: [
      'Applicant Aadhaar Card & Photo',
      'School Leaving Certificate of Applicant',
      'Father / Grandfather School Leaving Certificate showing Caste',
      'Caste Certificate of Relative (Father/Uncle/Grandfather)',
      'Khatian / Old Land Record 7/12 (if required for ST/VJNT)',
      'Ration Card & Residence Proof'
    ],
    requiredDocumentsMr: [
      'अर्जदाराचे आधार कार्ड व फोटो',
      'अर्जदाराची शाळा सोडल्याचा दाखला (LC)',
      'वडिलांचा / आजोबांचा शाळा सोडल्याचा दाखला (जातीची नोंद असलेला)',
      'रक्ताच्या नातेवाईकाचा जातीचा दाखला (वडील/काका/आजोबा)',
      'पुराना ७/१२ / फेरफार उतारा (आवश्यकतेनुसार)',
      'राशन कार्ड व रहिवासी पुरावा'
    ],
    stepByStepProcess: [
      'Document review and genealogical tree (वंशावळ) drafting',
      'Online submission to SDO / Sub-Divisional Officer office',
      'Inquiry officer verification',
      'Issuance of digitally signed Caste Certificate'
    ],
    govtFee: '₹33.60',
    serviceCharge: '₹166.40',
    totalPrice: '₹200',
    priceValue: 200,
    estimatedTime: '15-21 Working Days',
    validity: 'Lifetime (आजीवन)',
    faqs: [
      {
        question: 'What if father LC does not have caste mentioned?',
        answer: 'You can produce uncle, grandfather, or real brother LC or old land revenue records prior to cutoff dates.'
      }
    ],
    icon: 'ShieldCheck',
    popular: true
  },
  {
    id: 'caste-validity',
    title: 'Caste Validity Certificate (जात पडताळणी)',
    titleMr: 'जात पडताळणी प्रमाणपत्र',
    titleHi: 'जाति वैधता प्रमाण पत्र',
    category: 'Government Certificates',
    categoryKey: 'cat_revenue',
    description: 'Verification of authenticity of Caste Certificate by Scrutiny Committee for professional college admissions and government service.',
    descriptionMr: 'व्यावसायिक महाविद्यालयीन प्रवेश व शासकीय सेवेसाठी जात पडताळणी समितीकडून जातीच्या दाखल्याची वैधता.',
    purpose: 'Mandatory for Engineering, Medical, Pharmacy admissions under reserved quota and for government employees.',
    purposeMr: 'आरक्षित कोट्यातून इंजिनिअरिंग, मेडिकल, फार्मसी प्रवेशासाठी आणि शासकीय कर्मचाऱ्यांसाठी बंधनकारक.',
    benefits: [
      'Guarantees admission under reserved category',
      'Prevents cancellation of reserved seats or job appointments'
    ],
    eligibility: [
      'Holding valid Caste Certificate issued by Maharashtra State',
      'Student studying in Class 11/12 Science or applying for professional courses'
    ],
    requiredDocuments: [
      'Original Caste Certificate',
      'Applicant LC & Father LC',
      'College Recommendation / Bonafide Letter',
      'Genealogy Affidavit (वंशावळ प्रतिज्ञापत्र)',
      'Old Caste Validity Certificate of Blood Relative (if available)',
      'Challan Fee Receipt'
    ],
    requiredDocumentsMr: [
      'मूळ जातीचा दाखला',
      'अर्जदाराचा LC व वडिलांचा LC',
      'कॉलेजचे शिफारस पत्र / बोनाफाईड',
      'वंशावळ प्रतिज्ञापत्र (Affidavit)',
      'रक्ताच्या नातेवाईकाचे जात पडताळणी प्रमाणपत्र (असल्यास)',
      'सरकारी चलन भरलेली पावती'
    ],
    stepByStepProcess: [
      'Online registration on CCVIS / BARTI portal',
      'Uploading all historical records and affidavits',
      'Form printing and physical submission to Scrutiny Committee office',
      'Verification and issuance of Validity Certificate'
    ],
    govtFee: '₹100',
    serviceCharge: '₹500',
    totalPrice: '₹600 (चलन सहित)',
    priceValue: 600,
    estimatedTime: '30-45 Working Days',
    validity: 'Lifetime',
    faqs: [
      {
        question: 'How much time does Caste Validity take?',
        answer: 'Standard time is 30 to 45 days. Early processing available if blood relative validity exists.'
      }
    ],
    icon: 'CheckCircle',
    popular: true
  },
  {
    id: 'non-creamy-layer',
    title: 'Non-Creamy Layer Certificate (NCL)',
    titleMr: 'नॉन-क्रिमीलेअर प्रमाणपत्र',
    titleHi: 'नॉन क्रीमी लेयर प्रमाण पत्र',
    category: 'Government Certificates',
    categoryKey: 'cat_revenue',
    description: 'Certificate for OBC, VJNT, SBC, and SEBC categories certifying annual family income is below ₹8 Lakhs for reservation benefits.',
    descriptionMr: 'OBC, VJNT, SBC व SEBC प्रवर्गातील कुटुंबाचे वार्षिक उत्पन्न ₹८ लाखांपेक्षा कमी असल्याचे प्रमाणित करणारे पत्र.',
    purpose: 'Required to claim reservation seats in central & state education institutes and competitive job appointments.',
    purposeMr: 'केंद्र व राज्य शिक्षण संस्थांमध्ये आरक्षित जागा आणि नोकरीतील आरक्षणाचा लाभ मिळवण्यासाठी आवश्यक.',
    benefits: [
      'Avail reservation benefits for OBC/VJNT/SBC/SEBC seats',
      'Mandatory for Mahadbt scholarship fee waiver'
    ],
    eligibility: [
      'Belonging to OBC / VJNT / SBC / SEBC category',
      'Family annual income less than ₹8,000,000 for consecutive 3 years'
    ],
    requiredDocuments: [
      'Caste Certificate of Applicant',
      '3 Years Income Certificate / 3 Years Income Proof',
      'Applicant Aadhaar Card & Photo',
      'School Leaving Certificate',
      'Residence Proof (Ration Card/Light Bill)',
      'Self Declaration'
    ],
    requiredDocumentsMr: [
      'अर्जदाराचा जातीचा दाखला',
      '३ वर्षांचा उत्पन्नाचा दाखला / ३ वर्षांचा उत्पन्नाचा पुरावा',
      'अर्जदाराचे आधार कार्ड व फोटो',
      'शाळा सोडल्याचा दाखला (LC)',
      'रहिवासी पुरावा (राशन कार्ड/वीज बिल)',
      'स्वयंघोषणा पत्र'
    ],
    stepByStepProcess: [
      'Compilation of 3 years income proofs and caste certificate',
      'Submission on Aaple Sarkar revenue portal',
      'Verification by Nayab Tehsildar',
      'Issuance of digitally signed NCL Certificate'
    ],
    govtFee: '₹33.60',
    serviceCharge: '₹116.40',
    totalPrice: '₹150',
    priceValue: 150,
    estimatedTime: '8-12 Working Days',
    validity: '3 Financial Years (३ आर्थिक वर्षे)',
    faqs: [],
    icon: 'Layers',
    popular: true
  },
  {
    id: 'pan-card-new',
    title: 'PAN Card (New / Correction / Duplicate)',
    titleMr: 'पॅन कार्ड (नवीन / दुरुस्ती)',
    titleHi: 'पैन कार्ड (नया / सुधार)',
    category: 'PAN & Aadhaar',
    categoryKey: 'cat_kyc',
    description: 'Permanent Account Number card mandatory for banking transactions, IT returns, business, and financial identity.',
    descriptionMr: 'बँकिंग व्यवहार, आयकर परतावा, व्यवसाय आणि आर्थिक ओळखीसाठी अत्यंत आवश्यक असलेले पॅन कार्ड.',
    purpose: 'Opening bank account, financial transactions over ₹50,000, filing IT returns, and job documentation.',
    purposeMr: 'बँक खाते उघडणे, ५० हजार वरील व्यवहार, आयटी रिटर्न आणि नोकरीसाठी आवश्यक.',
    benefits: [
      'Official 10-digit alphanumeric permanent identification',
      'Required for loan applications, demat accounts, and credit cards',
      'Physical plastic card delivered directly to home address'
    ],
    eligibility: [
      'Any individual citizen aged 18+ (Minors can apply through guardians)'
    ],
    requiredDocuments: [
      'Aadhaar Card (Name, DOB & Gender must match perfectly)',
      '2 Recent Passport Size Photographs',
      'Active Mobile Number linked with Aadhaar (for instant e-PAN)',
      'For Correction: Supporting Gazetted / Marriage / Gazette Certificate'
    ],
    requiredDocumentsMr: [
      'आधार कार्ड (नाव, जन्मतारीख अचूक असावी)',
      '२ नवीन पासपोर्ट साईज फोटो',
      'आधारशी लिंक असलेला मोबाईल नंबर',
      'नाव/जन्मतारीख दुरुस्तीसाठी: पुरावा दाखला'
    ],
    stepByStepProcess: [
      'Biometric / e-KYC or physical photo upload on NSDL / UTITSL portal',
      'Fee payment and application submission',
      'e-PAN delivered on email in 2-3 days',
      'Physical PVC PAN Card delivered via speed post in 10-15 days'
    ],
    govtFee: '₹107',
    serviceCharge: '₹193 (Total ₹300 / Correction ₹350)',
    totalPrice: '₹300 (Correction ₹350)',
    priceValue: 300,
    estimatedTime: 'e-PAN: 2 Days | Physical: 10-12 Days',
    validity: 'Lifetime',
    faqs: [],
    icon: 'CreditCard',
    popular: true
  },
  {
    id: 'aadhaar-pan-link',
    title: 'Aadhaar - PAN Linking (चलन सहित)',
    titleMr: 'आधार - पॅन कार्ड लिंक (चलन सहित)',
    titleHi: 'आधार - पैन कार्ड लिंक',
    category: 'PAN & Aadhaar',
    categoryKey: 'cat_kyc',
    description: 'Mandatory linking of Aadhaar number with PAN card as per Income Tax Department guidelines with penalty fee payment.',
    descriptionMr: 'आयकर विभागाच्या नियमांनुसार दंड चलनासह आधार व पॅन कार्ड लिंक करण्याची सेवा.',
    purpose: 'Prevents PAN card from becoming inoperative and enables bank transactions and IT refunds.',
    purposeMr: 'पॅन कार्ड बंद (Inoperative) होण्यापासून वाचवण्यासाठी व बँक व्यवहार चालू ठेवण्यासाठी.',
    benefits: [
      'Re-activates inoperative PAN card',
      'Seamless bank transactions and seamless ITR filing'
    ],
    eligibility: [
      'All individual PAN card holders'
    ],
    requiredDocuments: [
      'Original PAN Card',
      'Aadhaar Card',
      'Active Mobile Number for OTP verification'
    ],
    requiredDocumentsMr: [
      'मूळ पॅन कार्ड',
      'आधार कार्ड',
      'ओटीपी साठी चालू मोबाईल नंबर'
    ],
    stepByStepProcess: [
      'Income tax portal login & link status verification',
      'Challan 500 payment of ₹1000 penalty fee on e-Pay Tax',
      'Challan settlement and link request submission',
      'Linking confirmation status check within 48-72 hours'
    ],
    govtFee: '₹1000 (Penalty Challan)',
    serviceCharge: '₹300',
    totalPrice: '₹1300',
    priceValue: 1300,
    estimatedTime: '2-4 Working Days',
    validity: 'Permanent',
    faqs: [],
    icon: 'Fingerprint',
    popular: true
  },
  {
    id: 'shop-act-license',
    title: 'Shop Act License / Gumasta (शॉप अॅक्ट)',
    titleMr: 'शॉप अॅक्ट रजिस्ट्रेशन (गुमास्ता परवाना)',
    titleHi: 'दुकान अधिनियम पंजीकरण (गुमास्ता)',
    category: 'Business & Tax',
    categoryKey: 'cat_business',
    description: 'Mandatory labor department registration for establishing shops, offices, commercial establishments, and opening current bank accounts.',
    descriptionMr: 'दुकान, व्यवसाय, शोरूम किंवा ऑफिस सुरू करण्यासाठी आणि चालू बँक खाते (Current Account) उघडण्यासाठी आवश्यक परवाना.',
    purpose: 'Legal proof of business establishment and mandatory document for current bank account opening & business loans.',
    purposeMr: 'व्यवसाय सुरु असल्याचा कायदेशीर पुरावा व चालू बँक खाते उघडण्यासाठी आवश्यक.',
    benefits: [
      'Legal authority to operate business in Maharashtra',
      'Enables opening Current Account in any Bank',
      'Required for MSME / Udyam registration and GST'
    ],
    eligibility: [
      'Any shop owner, commercial proprietor, partnership, or enterprise'
    ],
    requiredDocuments: [
      'Proprietor Aadhaar Card & PAN Card',
      'Passport Size Photo of Owner',
      'Photo of Shop / Business showing Board in Marathi',
      'Electricity Bill of Business Premises',
      'Rent Agreement (if shop is rented)'
    ],
    requiredDocumentsMr: [
      'मालकाचे आधार कार्ड व पॅन कार्ड',
      'मालकाचा फोटो',
      'दुकानाचा/व्यवसायाचा बोर्डसह फोटो (मराठी बोर्ड अनिवार्य)',
      'दुकानाचा वीज बिल',
      'भाडे करारनामा (जागा भाड्याची असल्यास)'
    ],
    stepByStepProcess: [
      'Aaple Sarkar Labour Department portal application drafting',
      'Uploading shop board photos and details',
      'Payment of government fees',
      'Instant generation of digitally signed Shop Act Certificate Form F'
    ],
    govtFee: '₹236 - ₹500',
    serviceCharge: '₹500',
    totalPrice: '₹1000',
    priceValue: 1000,
    estimatedTime: '1-2 Days',
    validity: 'Lifetime (for Intimation Intimation 0-9 workers)',
    faqs: [],
    icon: 'Store',
    popular: true
  },
  {
    id: 'food-license-fssai',
    title: 'Food License (FSSAI Registration 1Yr / 5Yr)',
    titleMr: 'फूड लायसन्स (FSSAI १ वर्ष / ५ वर्षे)',
    titleHi: 'खाद्य लाइसेंस (FSSAI)',
    category: 'Business & Tax',
    categoryKey: 'cat_business',
    description: 'Food Safety and Standards Authority of India (FSSAI) license mandatory for restaurants, grocery shops, hotels, caterers, and food businesses.',
    descriptionMr: 'हॉटेल, किराणा दुकान, खाद्यपदार्थ विक्री, डेअरी आणि मेस चालकांसाठी एफएसएसएआय अन्न सुरक्षा परवाना.',
    purpose: 'Ensures food safety compliance, legal permission for selling edible goods, and listing on Swiggy/Zomato.',
    purposeMr: 'खाद्यपदार्थ विक्रीसाठी कायदेशीर परवानगी व ऑनलाइन फूड डिलिव्हरी लिस्टिंगसाठी.',
    benefits: [
      'Mandatory legal compliance for food business operators',
      'Builds consumer trust with 14-digit FSSAI License number',
      'Required for Swiggy, Zomato, and online food aggregators'
    ],
    eligibility: [
      'Any food manufacturer, trader, retailer, restaurant, or home chef'
    ],
    requiredDocuments: [
      'Aadhaar Card & Passport Size Photo',
      'Business Name & Full Address Proof',
      'Shop Act / Electricity Bill',
      'List of Food Items sold'
    ],
    requiredDocumentsMr: [
      'आधार कार्ड व पासपोर्ट फोटो',
      'व्यवसायाचे नाव व पत्ता पुरावा',
      'वीज बिल / शॉप अॅक्ट',
      'विक्री केल्या जाणाऱ्या खाद्यपदार्थांची यादी'
    ],
    stepByStepProcess: [
      'FoSCoS FSSAI portal application filling',
      'FSSAI fee processing for 1 year or 5 years duration',
      'Food Safety Officer review',
      'Issuance of FSSAI Certificate'
    ],
    govtFee: '₹100 / year',
    serviceCharge: '₹1400',
    totalPrice: '1 Year: ₹1500 | 5 Years: ₹2000',
    priceValue: 1500,
    estimatedTime: '10-15 Working Days',
    validity: '1 Year or 5 Years as selected',
    faqs: [],
    icon: 'Utensils',
    popular: true
  },
  {
    id: 'udyam-aadhaar',
    title: 'Udyam Registration (MSME Certificate)',
    titleMr: 'उद्योग आधार / उद्यम नोंदणी (MSME)',
    titleHi: 'उद्यम पंजीकरण (MSME)',
    category: 'Business & Tax',
    categoryKey: 'cat_business',
    description: 'Free government registration for Micro, Small, and Medium Enterprises (MSME) to avail government loans, subsidies, and tender benefits.',
    descriptionMr: 'सूक्ष्म, लघु आणि मध्यम उद्योगांसाठी (MSME) केंद्र सरकारची अधिकृत नोंदणी.',
    purpose: 'Availing collateral-free bank loans, lower bank interest rates, government subsidies, and tender participation.',
    purposeMr: 'विनातारण बँक कर्ज, कमी व्याजदरात कर्ज, सरकारी योजना व सबसिडीसाठी.',
    benefits: [
      'Collateral free automatic bank loan eligibility under CGTMSE',
      '50% discount on patent/trademark registration',
      'Electricity bill concessions for industrial units'
    ],
    eligibility: [
      'Any proprietor, partnership firm, LLP, or Company'
    ],
    requiredDocuments: [
      'Proprietor Aadhaar Card',
      'PAN Card',
      'Bank Account Number & IFSC Code',
      'Business Name & Investment details'
    ],
    requiredDocumentsMr: [
      'मालकाचे आधार कार्ड',
      'पॅन कार्ड',
      'बँक खाते क्रमांक व IFSC कोड',
      'व्यवसायाचे नाव व माहिती'
    ],
    stepByStepProcess: [
      'Udyam portal registration via Aadhaar OTP',
      'GST & Income tax database cross-verification',
      'Instant generation of Udyam Registration Certificate'
    ],
    govtFee: '₹0 (Free Govt)',
    serviceCharge: '₹500',
    totalPrice: '₹500',
    priceValue: 500,
    estimatedTime: '1 Day',
    validity: 'Lifetime',
    faqs: [],
    icon: 'Briefcase',
    popular: false
  },
  {
    id: 'digital-712-8a',
    title: 'Digital 7/12 & 8A Land Records (७/१२ आणि ८अ)',
    titleMr: 'डिजिटल ७/१२ आणि ८अ उतारा',
    titleHi: 'डिजिटल 7/12 और 8A भूमि रिकॉर्ड',
    category: 'CSC Services',
    categoryKey: 'cat_revenue',
    description: 'Official government digitally signed 7/12 (Satbara) and 8A extract of agricultural land required for crop loans and legal verification.',
    descriptionMr: 'पीक कर्ज, जमिनीचे व्यवहार आणि कायदेशीर कामासाठी लागणारा डिजिटल स्वाक्षरीयुक्त ७/१२ व ८अ उतारा.',
    purpose: 'Applying for Bank Crop Loan, Mahadbt Farmer Scheme, PM Kisan, and property verification.',
    purposeMr: 'बँक पीक कर्ज, महाडीबीटी शेतकरी योजना, पीएम किसान आणि जमीन कामासाठी.',
    benefits: [
      'Official legal document with QR code verification',
      'Accepted directly by all banks and courts without Talathi signature'
    ],
    eligibility: [
      'Land owner in Maharashtra'
    ],
    requiredDocuments: [
      'District, Taluka, Village Name',
      'Survey Number / Gut Number (गट क्रमांक)'
    ],
    requiredDocumentsMr: [
      'जिल्हा, तालुका, गाव नाव',
      'सर्व्हे नंबर / गट क्रमांक'
    ],
    stepByStepProcess: [
      'Digital 7/12 Portal search by Gut number',
      'Instant download of digitally signed PDF'
    ],
    govtFee: '₹15',
    serviceCharge: '₹35',
    totalPrice: '₹50 per copy',
    priceValue: 50,
    estimatedTime: '5 Minutes',
    validity: 'Current Financial Record',
    faqs: [],
    icon: 'Landscape',
    popular: true
  },
  {
    id: 'mahadbt-scholarship',
    title: 'MahaDBT Scholarship Form (नवीन / नूतनीकरण)',
    titleMr: 'महाडीबीटी शिष्यवृत्ती अर्ज (New / Renew)',
    titleHi: 'महाडीबीटी छात्रवृत्ति फॉर्म',
    category: 'Education & Jobs',
    categoryKey: 'cat_education',
    description: 'Government of Maharashtra direct benefit transfer scholarship scheme for SC, ST, OBC, VJNT, SBC, EBC, and minority students.',
    descriptionMr: 'महाराष्ट्र शासनाची विद्यार्थी शिष्यवृत्ती, शिक्षण फी व परीक्षा फी परतावा योजना.',
    purpose: 'Receiving 50% to 100% college tuition fee reimbursement directly into bank account.',
    purposeMr: 'महाविद्यालयीन फी परतावा व विद्यावेतन थेट बँक खात्यात मिळवण्यासाठी.',
    benefits: [
      'Full or partial tuition fee & exam fee reimbursement',
      'Hostel maintenance allowance for outstation students'
    ],
    eligibility: [
      'Admitted through CAP round in recognized college',
      'Valid Income Certificate & Category Certificate'
    ],
    requiredDocuments: [
      'Student Aadhaar Card (Must be seeded with Bank Account)',
      'SSC (10th) & HSC (12th) Marksheet',
      'Previous Year Passed Marksheet',
      'Income Certificate (Current Year)',
      'Caste Certificate & Non-Creamy Layer (if applicable)',
      'Domicile Certificate',
      'College Admission Fee Receipt & Bonafide Certificate',
      'Bank Passbook & Ration Card'
    ],
    requiredDocumentsMr: [
      'विद्यार्थ्याचे आधार कार्ड (बँक खात्याशी लिंक असावे)',
      '१०वी व १२वी गुणपत्रक',
      'मागील वर्षाचे पास गुणपत्रक',
      'चालू वर्षाचा उत्पन्नाचा दाखला',
      'जातीचा दाखला व नॉन-क्रिमीलेअर (लागू असल्यास)',
      'डोमिसाईल दाखला',
      'कॉलेज फी पावती व बोनाफाईड सर्टिफिकेट',
      'बँक पासबुक व राशन कार्ड'
    ],
    stepByStepProcess: [
      'Profile creation on MahaDBT portal via Aadhaar OTP',
      'Entering personal, educational, and bank details',
      'Uploading scanned original documents',
      'Scheme selection and application submit to college scrutiny'
    ],
    govtFee: '₹0',
    serviceCharge: '₹200',
    totalPrice: '₹200',
    priceValue: 200,
    estimatedTime: '1 Hour',
    validity: 'Academic Year',
    faqs: [],
    icon: 'GraduationCap',
    popular: true
  },
  {
    id: 'mpsc-job-application',
    title: 'MPSC / Govt Job Online Form (एमपीएससी नोकरी अर्ज)',
    titleMr: 'एमपीएससी / शासकीय नोकरी फॉर्म',
    titleHi: 'एमपीएससी और सरकारी नौकरी फॉर्म',
    category: 'Education & Jobs',
    categoryKey: 'cat_job',
    description: 'Online application submission for Maharashtra Public Service Commission (MPSC), Saral Seva, Police Bharti, Talathi, ZP, and Railway jobs.',
    descriptionMr: 'एमपीएससी, पोलीस भरती, तलाठी, जिल्हा परिषद आणि सर्व प्रकारच्या सरकारी नोकरी भरतीचे अर्ज ऑनलाइन भरणे.',
    purpose: 'Applying for government job competitive recruitments without mistakes.',
    purposeMr: 'सरकारी नोकरी भरतीसाठी त्रुटीरहित फॉर्म भरण्यासाठी.',
    benefits: [
      'Error-free application submission ensuring hall ticket generation',
      'Document photo/signature scaling as per precise guidelines'
    ],
    eligibility: [
      'As per specific recruitment advertisement guidelines'
    ],
    requiredDocuments: [
      'Aadhaar Card',
      'All Educational Marksheets (10th, 12th, Degree, Typing, MS-CIT)',
      'Caste Certificate, NCL, Domicile',
      'Passport Photo & Signature',
      'Active Mobile No & Email ID'
    ],
    requiredDocumentsMr: [
      'आधार कार्ड',
      'सर्व शैक्षणिक गुणपत्रके (१०वी, १२वी, पदवी, टायपिंग, MS-CIT)',
      'जातीचा दाखला, NCL, डोमिसाईल',
      'पासपोर्ट फोटो व स्वाक्षरी',
      'चालू मोबाईल नंबर व ईमेल आयडी'
    ],
    stepByStepProcess: [
      'MPSC / Mahait recruitment profile creation',
      'Post selection & online fee challan payment',
      'Application printout handover'
    ],
    govtFee: 'As per Govt Notification',
    serviceCharge: '₹200 - ₹300',
    totalPrice: '₹200 - ₹300 (plus exam fee)',
    priceValue: 200,
    estimatedTime: '30-60 Minutes',
    validity: 'Single Application',
    faqs: [],
    icon: 'FileCheck',
    popular: true
  },
  {
    id: 'ayushman-bharat-card',
    title: 'Ayushman Bharat Card (आयुष्मान भारत ५ लाख आरोग्य कार्ड)',
    titleMr: 'आयुष्मान भारत गोल्डन कार्ड (₹५ लाख मोफत उपचार)',
    titleHi: 'आयुष्मान भारत गोल्ड कार्ड',
    category: 'Health & Utility',
    categoryKey: 'cat_other',
    description: 'PM-JAY Health insurance scheme giving free medical treatment up to ₹5 Lakhs per family per year in empanelled hospitals.',
    descriptionMr: 'प्रतिवर्षी प्रति कुटुंब ₹५ लाखांपर्यंत मोफत उपचाराची सोय देणारे केंद्र सरकारचे आयुष्यमान कार्ड.',
    purpose: 'Cashless free hospital treatment for serious operations and critical illnesses.',
    purposeMr: 'गंभीर आजार व ऑपरेशन्ससाठी हॉस्पिटलमध्ये मोफत उपचारासाठी.',
    benefits: [
      '₹500,000 yearly medical treatment cover',
      'Cashless admission in government & major private hospitals'
    ],
    eligibility: [
      'Families included in SECC 2011 census list or holding Ration Card'
    ],
    requiredDocuments: [
      'Aadhaar Card',
      'Ration Card',
      'Active Mobile Number for OTP'
    ],
    requiredDocumentsMr: [
      'आधार कार्ड',
      'राशन कार्ड',
      'मोबाईल नंबर'
    ],
    stepByStepProcess: [
      'Aadhaar e-KYC verification on PMJAY beneficiary portal',
      'Instant card approval and PVC card print'
    ],
    govtFee: '₹0',
    serviceCharge: '₹100',
    totalPrice: '₹100 (PVC Print)',
    priceValue: 100,
    estimatedTime: '15 Minutes',
    validity: 'Lifetime',
    faqs: [],
    icon: 'HeartPulse',
    popular: true
  },
  {
    id: 'voter-card-services',
    title: 'Voter ID Card (नवीन मतदार ओळखपत्र / दुरुस्ती)',
    titleMr: 'नवीन मतदार कार्ड / मतदार यादी दुरुस्ती',
    titleHi: 'नया मतदाता पहचान पत्र / सुधार',
    category: 'CSC Services',
    categoryKey: 'cat_other',
    description: 'Election Commission Form 6 for new voter registration and Form 8 for address or photo correction in Voter ID.',
    descriptionMr: 'नवीन मतदार नोंदणी (फॉर्म ६) आणि मतदार कार्ड दुरुस्ती (फॉर्म ८) सेवा.',
    purpose: 'Official constitutional voting right identification document.',
    purposeMr: 'मतदानाचा हक्क आणि अधिकृत ओळखपत्र मिळवण्यासाठी.',
    benefits: [
      'Official constitutional photo identity card',
      'Delivered to home address via Speed Post'
    ],
    eligibility: [
      'Indian Citizen aged 18 years or above'
    ],
    requiredDocuments: [
      'Aadhaar Card',
      'Birth Certificate / 10th LC (Age Proof)',
      'Residence Proof (Light Bill/Ration Card)',
      'Passport Size Photo'
    ],
    requiredDocumentsMr: [
      'आधार कार्ड',
      'जन्म दाखला / १०वी LC (वयाचा पुरावा)',
      'रहिवासी पुरावा (वीज बिल/राशन कार्ड)',
      'पासपोर्ट फोटो'
    ],
    stepByStepProcess: [
      'NVSP / Voter Service Portal Form 6 online filling',
      'BLO verification',
      'EPIC voter card issuance'
    ],
    govtFee: '₹0',
    serviceCharge: '₹200',
    totalPrice: '₹200',
    priceValue: 200,
    estimatedTime: '15-30 Days',
    validity: 'Lifetime',
    faqs: [],
    icon: 'Vote',
    popular: false
  },
  {
    id: 'police-verification',
    title: 'Police Character Verification (पोलीस चारित्र्य पडताळणी)',
    titleMr: 'पोलीस चारित्र्य पडताळणी प्रमाणपत्र',
    titleHi: 'पुलिस चरित्र सत्यापन',
    category: 'CSC Services',
    categoryKey: 'cat_other',
    description: 'Official police clearance certificate (PCC) certifying no criminal record for private/govt employment or visa.',
    descriptionMr: 'नोकरी, सुरक्षा रक्षक, कंपनी कंत्राट आणि व्हिसासाठी आवश्यक पोलीस चारित्र्य दाखला.',
    purpose: 'Employment onboarding in IT, security, banks, defense, and government projects.',
    purposeMr: 'कंपन्यांमध्ये नोकरीवर रुजू होण्यासाठी व सिक्युरिटी कामासाठी.',
    benefits: [
      'Official Maharashtra Police verified clearance certificate'
    ],
    eligibility: [
      'Citizen residing in Maharashtra with clean record'
    ],
    requiredDocuments: [
      'Aadhaar Card',
      'School LC / Birth Certificate',
      'Company Requirement Letter / Bonafide',
      'Passport Photo',
      'Light Bill / Ration Card'
    ],
    requiredDocumentsMr: [
      'आधार कार्ड',
      'शाळा सोडल्याचा दाखला (LC)',
      'कंपनीचे लेटर / नोकरी पुरावा',
      'पासपोर्ट फोटो',
      'वीज बिल / राशन कार्ड'
    ],
    stepByStepProcess: [
      'MahaOnline Police clearance portal application submit',
      'Local police station inquiry appointment',
      'SP Office approval and certificate issue'
    ],
    govtFee: '₹123',
    serviceCharge: '₹377',
    totalPrice: '₹500 (चलन सहित)',
    priceValue: 500,
    estimatedTime: '15 Working Days',
    validity: '6 Months',
    faqs: [],
    icon: 'ShieldCheck',
    popular: false
  }
];
