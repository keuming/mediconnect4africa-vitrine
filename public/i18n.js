// ════════════════════════════════════════════════════════════════
// SYSTÈME DE GESTION DE LANGUE (i18n)
// ════════════════════════════════════════════════════════════════

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.features': 'Fonctionnalités',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.login': 'Connexion',
    'nav.signup': 'S\'inscrire',

    // Hero Section
    'hero.title': 'La santé numérique pour l\'Afrique',
    'hero.subtitle': 'Connectez patients, cliniques, pharmacies, livreurs, laboratoires et assureurs en un seul écosystème',
    'hero.cta': 'Commencer maintenant',
    'hero.demo': 'Voir la démo',

    // Features
    'features.title': 'Nos Services',
    'features.subtitle': 'Une plateforme complète pour la santé numérique en Afrique',
    'features.appointments': 'Prise de rendez-vous',
    'features.appointments.desc': 'Patients prennent rendez-vous dans n\'importe quelle clinique du réseau',
    'features.medications': 'Commande de médicaments',
    'features.medications.desc': 'Commande et livraison rapide de médicaments en pharmacie',
    'features.insurance': 'Gestion des assurances',
    'features.insurance.desc': 'Validation automatisée des dossiers patients par les assureurs',
    'features.queue': 'Gestion des files d\'attente',
    'features.queue.desc': 'Gestion digitale via QR CODE et affichage de position',
    'features.payment': 'Paiement digital',
    'features.payment.desc': 'Paiement sécurisé des frais de santé en ligne',
    'features.telemedicine': 'Téléconsultation',
    'features.telemedicine.desc': 'Consultation par visioconférence avec médecins',
    'features.medical_records': 'Dossiers médicaux',
    'features.medical_records.desc': 'Suivi médical centralisé des patients et familles',
    'features.specialties': 'Spécialités cliniques',
    'features.specialties.desc': 'Affichage des spécialités par clinique pour orientation patients',
    'features.statistics': 'Dashboard santé publique',
    'features.statistics.desc': 'Statistiques pathologies et médicaments pour planification budgétaire',

    // Roles
    'roles.title': 'Pour tous les acteurs de santé',
    'roles.patients': 'Patients',
    'roles.patients.desc': 'Accès facile aux services de santé et suivi médical',
    'roles.clinics': 'Cliniques',
    'roles.clinics.desc': 'Gestion des rendez-vous et facturation automatisée',
    'roles.pharmacies': 'Pharmacies',
    'roles.pharmacies.desc': 'Monitoring des commandes et gestion des stocks',
    'roles.insurers': 'Assureurs',
    'roles.insurers.desc': 'Validation des dossiers et gestion des sinistres',
    'roles.doctors': 'Médecins privés',
    'roles.doctors.desc': 'Suivi de patients en présentiel ou téléconsultation',
    'roles.deliverers': 'Livreurs',
    'roles.deliverers.desc': 'Consultation et livraison des commandes',

    // Stats
    'stats.countries': 'Pays couverts',
    'stats.clinics': 'Cliniques partenaires',
    'stats.patients': 'Patients actifs',
    'stats.transactions': 'Transactions mensuelles',

    // CTA
    'cta.title': 'Rejoignez l\'écosystème MediConnect',
    'cta.subtitle': 'Transformez la santé numérique en Afrique',
    'cta.patient': 'Je suis patient',
    'cta.provider': 'Je suis prestataire',
    'cta.insurer': 'Je suis assureur',

    // Footer
    'footer.about': 'À propos',
    'footer.privacy': 'Confidentialité',
    'footer.terms': 'Conditions',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2026 MediConnect Africa. Tous droits réservés.',

    // Chatbot
    'chatbot.title': 'MediConnect Assistant',
    'chatbot.greeting': 'Bonjour! Je suis l\'assistant MediConnect. Je peux vous aider avec:',
    'chatbot.services': [
      'Spécialités des cliniques',
      'Prises de rendez-vous',
      'Commandes de médicaments',
      'Assurances maladie',
      'Pharmacies de garde'
    ],
    'chatbot.quick_q1': 'Quelles sont les spécialités disponibles dans les cliniques?',
    'chatbot.quick_q2': 'Comment prendre un rendez-vous médical?',
    'chatbot.quick_q3': 'Comment commander des médicaments?',
    'chatbot.quick_q4': 'Quelles assurances maladie sont acceptées?',
    'chatbot.quick_btn1': '🏥 Spécialités cliniques',
    'chatbot.quick_btn2': '📅 Prendre rendez-vous',
    'chatbot.quick_btn3': '💊 Commande médicaments',
    'chatbot.quick_btn4': '🛡️ Assurances maladie',
    'chatbot.placeholder': 'Votre message...',
    'chatbot.send': 'Envoyer',
    'chatbot.typing': 'L\'agent tape...',
    'chatbot.error': 'Désolé, une erreur s\'est produite. Veuillez réessayer.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',

    // Hero Section
    'hero.title': 'Digital Health for Africa',
    'hero.subtitle': 'Connect patients, clinics, pharmacies, deliverers, laboratories and insurers in a single ecosystem',
    'hero.cta': 'Get Started',
    'hero.demo': 'View Demo',

    // Features
    'features.title': 'Our Services',
    'features.subtitle': 'A complete platform for digital health in Africa',
    'features.appointments': 'Medical Appointments',
    'features.appointments.desc': 'Patients book appointments at any clinic in the network',
    'features.medications': 'Medication Orders',
    'features.medications.desc': 'Fast medication ordering and delivery from pharmacies',
    'features.insurance': 'Insurance Management',
    'features.insurance.desc': 'Automated patient file validation by insurers',
    'features.queue': 'Queue Management',
    'features.queue.desc': 'Digital queue management via QR CODE and position display',
    'features.payment': 'Digital Payment',
    'features.payment.desc': 'Secure online payment for healthcare fees',
    'features.telemedicine': 'Teleconsultation',
    'features.telemedicine.desc': 'Video consultation with doctors',
    'features.medical_records': 'Medical Records',
    'features.medical_records.desc': 'Centralized medical tracking for patients and families',
    'features.specialties': 'Clinic Specialties',
    'features.specialties.desc': 'Display clinic specialties for patient orientation',
    'features.statistics': 'Public Health Dashboard',
    'features.statistics.desc': 'Pathology and medication statistics for budget planning',

    // Roles
    'roles.title': 'For all healthcare actors',
    'roles.patients': 'Patients',
    'roles.patients.desc': 'Easy access to healthcare services and medical tracking',
    'roles.clinics': 'Clinics',
    'roles.clinics.desc': 'Appointment management and automated billing',
    'roles.pharmacies': 'Pharmacies',
    'roles.pharmacies.desc': 'Order monitoring and inventory management',
    'roles.insurers': 'Insurers',
    'roles.insurers.desc': 'File validation and claims management',
    'roles.doctors': 'Private Doctors',
    'roles.doctors.desc': 'Patient tracking in-person or via teleconsultation',
    'roles.deliverers': 'Deliverers',
    'roles.deliverers.desc': 'Order consultation and delivery',

    // Stats
    'stats.countries': 'Countries Covered',
    'stats.clinics': 'Partner Clinics',
    'stats.patients': 'Active Patients',
    'stats.transactions': 'Monthly Transactions',

    // CTA
    'cta.title': 'Join the MediConnect Ecosystem',
    'cta.subtitle': 'Transform digital health in Africa',
    'cta.patient': 'I\'m a patient',
    'cta.provider': 'I\'m a provider',
    'cta.insurer': 'I\'m an insurer',

    // Footer
    'footer.about': 'About',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2026 MediConnect Africa. All rights reserved.',

    // Chatbot
    'chatbot.title': 'MediConnect Assistant',
    'chatbot.greeting': 'Hello! I\'m the MediConnect assistant. I can help you with:',
    'chatbot.services': [
      'Clinic specialties',
      'Medical appointments',
      'Medication orders',
      'Health insurance',
      'On-call pharmacies'
    ],
    'chatbot.quick_q1': 'What specialties are available at clinics?',
    'chatbot.quick_q2': 'How do I book a medical appointment?',
    'chatbot.quick_q3': 'How do I order medications?',
    'chatbot.quick_q4': 'What health insurance plans are accepted?',
    'chatbot.quick_btn1': '🏥 Clinic specialties',
    'chatbot.quick_btn2': '📅 Book appointment',
    'chatbot.quick_btn3': '💊 Order medications',
    'chatbot.quick_btn4': '🛡️ Health insurance',
    'chatbot.placeholder': 'Your message...',
    'chatbot.send': 'Send',
    'chatbot.typing': 'Agent is typing...',
    'chatbot.error': 'Sorry, an error occurred. Please try again.',
  }
};

// ════════════════════════════════════════════════════════════════
// FONCTIONS DE GESTION DE LANGUE
// ════════════════════════════════════════════════════════════════

let currentLanguage = localStorage.getItem('mediconnect-lang') || 'fr';

function setLanguage(lang) {
  if (lang !== 'fr' && lang !== 'en') return;
  currentLanguage = lang;
  localStorage.setItem('mediconnect-lang', lang);
  document.documentElement.lang = lang;
  updatePageLanguage();
}

function getLanguage() {
  return currentLanguage;
}

function t(key) {
  const keys = key.split('.');
  let value = translations[currentLanguage];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Fallback to key if translation not found
    }
  }
  
  return value;
}

function updatePageLanguage() {
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key);
    
    if (Array.isArray(translation)) {
      // For arrays, join with line breaks
      el.innerHTML = translation.map(item => `<li>${item}</li>`).join('');
    } else {
      el.textContent = translation;
    }
  });

  // Update language selector buttons
  updateLanguageButtons();
  
  // Trigger custom event for dynamic content
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: currentLanguage } }));
}

function updateLanguageButtons() {
  const frBtn = document.getElementById('lang-fr');
  const enBtn = document.getElementById('lang-en');
  
  if (frBtn) {
    if (currentLanguage === 'fr') {
      frBtn.style.opacity = '1';
      frBtn.style.borderColor = 'var(--green)';
    } else {
      frBtn.style.opacity = '0.5';
      frBtn.style.borderColor = 'rgba(255,255,255,.1)';
    }
  }
  
  if (enBtn) {
    if (currentLanguage === 'en') {
      enBtn.style.opacity = '1';
      enBtn.style.borderColor = 'var(--green)';
    } else {
      enBtn.style.opacity = '0.5';
      enBtn.style.borderColor = 'rgba(255,255,255,.1)';
    }
  }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLanguage);
});

// Ajouter les traductions manquantes
translations.fr['nav.bd'] = 'ESPACE BUSINESS DEVELOPER';
translations.en['nav.bd'] = 'BUSINESS DEVELOPER SPACE';

// Traductions pour la section tarification
translations.fr['pricing.title'] = 'Des tarifs accessibles pour tous';
translations.fr['pricing.subtitle'] = 'Conçus pour être supportables à toute échelle, des zones rurales aux grandes métropoles d\'Afrique.';
translations.fr['pricing.patient'] = 'Patient standard';
translations.fr['pricing.patient_desc'] = 'Dossier médical électronique, prise de RDV en ligne, ordonnances numériques, historique des consultations.';
translations.fr['pricing.patient_family'] = 'Patient + médecin privé';
translations.fr['pricing.patient_family_desc'] = 'Tout inclus + médecin de famille attitré, suivi médical continu et consultation directe sans passer par une clinique.';
translations.fr['pricing.clinic'] = 'Clinique / Hôpital';
translations.fr['pricing.clinic_desc'] = 'Agenda, DME, facturation, caisse, statistiques, intégrations labo et imagerie.';
translations.fr['pricing.doctor'] = 'Médecin indépendant / Médecin de famille';
translations.fr['pricing.doctor_desc'] = 'Visibilité publique, gestion de planning, suivi des patients privés et facturation.';
translations.fr['pricing.pharmacy'] = 'Pharmacie';
translations.fr['pricing.pharmacy_desc'] = 'Monitoring des commandes, validation des devis, gestion des stocks et facturation.';
translations.fr['pricing.lab'] = 'Laboratoire / Centre d\'imagerie';
translations.fr['pricing.lab_desc'] = 'Gestion des demandes d\'analyses, résultats numériques et intégration aux dossiers patients.';

translations.en['pricing.title'] = 'Affordable pricing for all';
translations.en['pricing.subtitle'] = 'Designed to be affordable at any scale, from rural areas to major African cities.';
translations.en['pricing.patient'] = 'Standard Patient';
translations.en['pricing.patient_desc'] = 'Electronic medical record, online appointment booking, digital prescriptions, consultation history.';
translations.en['pricing.patient_family'] = 'Patient + Private Doctor';
translations.en['pricing.patient_family_desc'] = 'Everything included + dedicated family doctor, continuous medical follow-up and direct consultation without going through a clinic.';
translations.en['pricing.clinic'] = 'Clinic / Hospital';
translations.en['pricing.clinic_desc'] = 'Appointment management, EMR, billing, cashier, statistics, lab and imaging integrations.';
translations.en['pricing.doctor'] = 'Independent Doctor / Family Doctor';
translations.en['pricing.doctor_desc'] = 'Public visibility, schedule management, private patient follow-up and billing.';
translations.en['pricing.pharmacy'] = 'Pharmacy';
translations.en['pricing.pharmacy_desc'] = 'Order monitoring, quote validation, inventory management and billing.';
translations.en['pricing.lab'] = 'Laboratory / Medical Imaging Center';
translations.en['pricing.lab_desc'] = 'Analysis request management, digital results and integration into patient files.';


// Traductions pour les nouveaux tarifs
translations.fr['pricing.lab'] = 'Laboratoire';
translations.fr['pricing.lab_desc'] = 'Gestion des demandes d\'analyses, résultats numériques et intégration aux dossiers patients.';
translations.fr['pricing.imaging'] = 'Centre d\'imagerie médicale';
translations.fr['pricing.imaging_desc'] = 'Gestion des demandes d\'imagerie, stockage sécurisé des images et intégration aux dossiers patients.';
translations.fr['pricing.insurance'] = 'Compagnie d\'assurance maladie';
translations.fr['pricing.insurance_desc'] = 'Validation des dossiers patients, gestion des sinistres, suivi des remboursements et statistiques.';

translations.en['pricing.lab'] = 'Laboratory';
translations.en['pricing.lab_desc'] = 'Analysis request management, digital results and integration into patient files.';
translations.en['pricing.imaging'] = 'Medical Imaging Center';
translations.en['pricing.imaging_desc'] = 'Imaging request management, secure image storage and integration into patient files.';
translations.en['pricing.insurance'] = 'Health Insurance Company';
translations.en['pricing.insurance_desc'] = 'Patient file validation, claims management, reimbursement tracking and statistics.';
