import { Language } from '../types';

export interface TranslationDict {
  appName: string;
  appTagline: string;
  heroBadge: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroDescription: string;
  searchPlaceholder: string;
  searchAria: string;
  searchShortcut: string;
  clientSideBadge: string;
  freeForeverBadge: string;
  privacyBadge: string;
  toolsCountBadge: string;
  exploreAllTools: string;
  viewDetails: string;
  openTool: string;
  favorite: string;
  favorited: string;
  copyUrl: string;
  urlCopied: string;
  quickSearch: string;
  noToolsFound: string;
  noToolsFoundDesc: string;
  clearFilter: string;
  // Categories
  cat_all: string;
  cat_dev: string;
  cat_text: string;
  cat_media: string;
  cat_security: string;
  cat_converter: string;
  // Tool page generic
  toolInstructions: string;
  toolFaqs: string;
  toolRelated: string;
  backToTools: string;
  copyOutput: string;
  copied: string;
  clear: string;
  sample: string;
  download: string;
  reset: string;
  // Navigation & Footer
  navHome: string;
  navTools: string;
  navAbout: string;
  navPrivacy: string;
  navTerms: string;
  navContact: string;
  navDeployGuide: string;
  darkMode: string;
  lightMode: string;
  language: string;
  allRightsReserved: string;
  footerTagline: string;
  hostedOnCloudflare: string;
  privacyGuarantee: string;
  popularTools: string;
  // Static pages
  aboutTitle: string;
  privacyTitle: string;
  termsTitle: string;
  contactTitle: string;
  deployGuideTitle: string;
}

export const TRANSLATIONS: Record<Language, TranslationDict> = {
  en: {
    appName: 'DevPulse Utilities',
    appTagline: '20-in-1 Free Developer & User Utility Suite',
    heroBadge: '100% Client-Side • Zero Server Logging • Blazing Fast',
    heroTitle: 'Essential Tools for Developers & Creators,',
    heroTitleHighlight: 'Completely In Your Browser.',
    heroDescription: 'Experience 20 high-performance utility tools with uncompromising privacy. All operations execute strictly on your device with zero data sent to external servers.',
    searchPlaceholder: 'Search 20 tools (e.g. JSON, Base64, QR, Regex, UUID, JWT)...',
    searchAria: 'Search tools',
    searchShortcut: 'Press ⌘K or Ctrl+K to search anytime',
    clientSideBadge: '100% Client-Side',
    freeForeverBadge: '100% Free Forever',
    privacyBadge: 'No Data Logs',
    toolsCountBadge: '20 Essential Tools',
    exploreAllTools: 'Explore All Tools',
    viewDetails: 'Open Tool',
    openTool: 'Launch Tool',
    favorite: 'Save to favorites',
    favorited: 'Saved in favorites',
    copyUrl: 'Share Tool Link',
    urlCopied: 'Tool URL copied to clipboard!',
    quickSearch: 'Quick Search',
    noToolsFound: 'No tools match your criteria',
    noToolsFoundDesc: 'Try adjusting your search query or switching to another category.',
    clearFilter: 'Reset Filters',
    cat_all: 'All Tools',
    cat_dev: 'Developer & Code',
    cat_text: 'Text & Writing',
    cat_media: 'Media & Design',
    cat_security: 'Security & Web',
    cat_converter: 'Math & Converters',
    toolInstructions: 'How to Use',
    toolFaqs: 'Frequently Asked Questions',
    toolRelated: 'Related Utility Tools',
    backToTools: 'Back to All Tools',
    copyOutput: 'Copy to Clipboard',
    copied: 'Copied!',
    clear: 'Clear',
    sample: 'Load Sample',
    download: 'Download',
    reset: 'Reset',
    navHome: 'Home',
    navTools: 'Tools',
    navAbout: 'About',
    navPrivacy: 'Privacy',
    navTerms: 'Terms',
    navContact: 'Contact',
    navDeployGuide: 'Cloudflare Deployment',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    language: 'Language',
    allRightsReserved: 'All rights reserved.',
    footerTagline: 'Engineered for developers, writers, and designers. 100% private, free, and hosted on Cloudflare Pages.',
    hostedOnCloudflare: 'Optimized for Cloudflare Pages',
    privacyGuarantee: 'Private by Design: Your data never leaves your browser.',
    popularTools: 'Featured Tools',
    aboutTitle: 'About DevPulse Utilities',
    privacyTitle: 'Privacy Policy',
    termsTitle: 'Terms of Service',
    contactTitle: 'Contact & Feedback',
    deployGuideTitle: 'Cloudflare Pages Deployment Guide'
  },
  es: {
    appName: 'DevPulse Utilidades',
    appTagline: 'Suite de 20 herramientas gratuitas para desarrolladores',
    heroBadge: '100% en el navegador • Sin registros en servidores • Ultrarrápido',
    heroTitle: 'Herramientas esenciales para creadores y desarrolladores,',
    heroTitleHighlight: 'Completamente en tu navegador.',
    heroDescription: 'Disfruta de 20 herramientas de alto rendimiento con total privacidad. Todos los procesos se ejecutan localmente sin enviar datos a servidores externos.',
    searchPlaceholder: 'Buscar 20 herramientas (ej. JSON, Base64, QR, Regex, JWT)...',
    searchAria: 'Buscar herramientas',
    searchShortcut: 'Presiona ⌘K o Ctrl+K para buscar',
    clientSideBadge: '100% en Navegador',
    freeForeverBadge: '100% Gratis Siempre',
    privacyBadge: 'Sin Registros',
    toolsCountBadge: '20 Herramientas Esenciales',
    exploreAllTools: 'Explorar Herramientas',
    viewDetails: 'Abrir Herramienta',
    openTool: 'Iniciar Herramienta',
    favorite: 'Guardar en favoritos',
    favorited: 'Guardado en favoritos',
    copyUrl: 'Compartir enlace',
    urlCopied: '¡Enlace copiado al portapapeles!',
    quickSearch: 'Búsqueda Rápida',
    noToolsFound: 'No se encontraron herramientas',
    noToolsFoundDesc: 'Intenta modificar los términos de búsqueda o cambiar de categoría.',
    clearFilter: 'Restablecer Filtros',
    cat_all: 'Todas',
    cat_dev: 'Desarrollo y Código',
    cat_text: 'Texto y Redacción',
    cat_media: 'Medios y Diseño',
    cat_security: 'Seguridad y Web',
    cat_converter: 'Matemáticas y Conversores',
    toolInstructions: 'Instrucciones de Uso',
    toolFaqs: 'Preguntas Frecuentes',
    toolRelated: 'Herramientas Relacionadas',
    backToTools: 'Volver a Herramientas',
    copyOutput: 'Copiar al Portapapeles',
    copied: '¡Copiado!',
    clear: 'Limpiar',
    sample: 'Cargar Ejemplo',
    download: 'Descargar',
    reset: 'Reiniciar',
    navHome: 'Inicio',
    navTools: 'Herramientas',
    navAbout: 'Acerca de',
    navPrivacy: 'Privacidad',
    navTerms: 'Términos',
    navContact: 'Contacto',
    navDeployGuide: 'Despliegue Cloudflare',
    darkMode: 'Modo Oscuro',
    lightMode: 'Modo Claro',
    language: 'Idioma',
    allRightsReserved: 'Todos los derechos reservados.',
    footerTagline: 'Diseñado para programadores y diseñadores. 100% privado y listo para Cloudflare Pages.',
    hostedOnCloudflare: 'Optimizado para Cloudflare Pages',
    privacyGuarantee: 'Privacidad Garantizada: Tus datos nunca salen de tu ordenador.',
    popularTools: 'Herramientas Populares',
    aboutTitle: 'Acerca de DevPulse',
    privacyTitle: 'Política de Privacidad',
    termsTitle: 'Términos de Servicio',
    contactTitle: 'Contacto y Comentarios',
    deployGuideTitle: 'Guía de Despliegue en Cloudflare Pages'
  },
  fr: {
    appName: 'DevPulse Utilitaires',
    appTagline: 'Suite 20-en-1 gratuite pour développeurs et créateurs',
    heroBadge: '100% côté client • Zéro journal serveur • Ultra rapide',
    heroTitle: 'Outils essentiels pour développeurs et créateurs,',
    heroTitleHighlight: 'Directement dans votre navigateur.',
    heroDescription: 'Profitez de 20 utilitaires haute performance avec une confidentialité sans compromis. Tous les traitements s\'exécutent localement.',
    searchPlaceholder: 'Rechercher 20 outils (ex. JSON, Base64, QR, Regex, JWT)...',
    searchAria: 'Rechercher des outils',
    searchShortcut: 'Appuyez sur ⌘K ou Ctrl+K pour chercher',
    clientSideBadge: '100% Côté Client',
    freeForeverBadge: '100% Gratuit à Vie',
    privacyBadge: 'Zéro Donnée Stockée',
    toolsCountBadge: '20 Outils Utiles',
    exploreAllTools: 'Explorer Tous les Outils',
    viewDetails: 'Ouvrir l\'outil',
    openTool: 'Lancer l\'outil',
    favorite: 'Ajouter aux favoris',
    favorited: 'Dans les favoris',
    copyUrl: 'Copier le lien',
    urlCopied: 'Lien copié dans le presse-papier !',
    quickSearch: 'Recherche Rapide',
    noToolsFound: 'Aucun outil correspondant',
    noToolsFoundDesc: 'Modifiez votre recherche ou sélectionnez une autre catégorie.',
    clearFilter: 'Réinitialiser',
    cat_all: 'Tous',
    cat_dev: 'Développeur & Code',
    cat_text: 'Texte & Rédaction',
    cat_media: 'Médias & Design',
    cat_security: 'Sécurité & Web',
    cat_converter: 'Maths & Convertisseurs',
    toolInstructions: 'Mode d\'emploi',
    toolFaqs: 'Foire Aux Questions',
    toolRelated: 'Outils Similaires',
    backToTools: 'Retour aux Outils',
    copyOutput: 'Copier dans le presse-papier',
    copied: 'Copié !',
    clear: 'Effacer',
    sample: 'Exemple',
    download: 'Télécharger',
    reset: 'Réinitialiser',
    navHome: 'Accueil',
    navTools: 'Outils',
    navAbout: 'À Propos',
    navPrivacy: 'Confidentialité',
    navTerms: 'Conditions',
    navContact: 'Contact',
    navDeployGuide: 'Déploiement Cloudflare',
    darkMode: 'Mode Sombre',
    lightMode: 'Mode Clair',
    language: 'Langue',
    allRightsReserved: 'Tous droits réservés.',
    footerTagline: 'Conçu pour développeurs et créateurs. 100% privé et prêt pour Cloudflare Pages.',
    hostedOnCloudflare: 'Optimisé pour Cloudflare Pages',
    privacyGuarantee: 'Confidentialité totale : vos données restent sur votre machine.',
    popularTools: 'Outils Populaires',
    aboutTitle: 'À Propos de DevPulse',
    privacyTitle: 'Politique de Confidentialité',
    termsTitle: 'Conditions d\'Utilisation',
    contactTitle: 'Contact & Support',
    deployGuideTitle: 'Guide de Déploiement Cloudflare Pages'
  },
  ar: {
    appName: 'أدوات ديف بلس',
    appTagline: 'مجموعة متكاملة تضم 20 أداة مجانية للمطورين والمصممين',
    heroBadge: '١٠٠٪ داخل المتصفح • بدون حفظ بيانات • فائق السرعة',
    heroTitle: 'أدوات احترافية لا غنى عنها للمطورين والمبدعين،',
    heroTitleHighlight: 'تعمل كلياً داخل متصفحك.',
    heroDescription: 'استمتع بأفضل 20 أداة متطورة مع حماية قصوى لخصوصيتك. تتم جميع العمليات محلياً على جهازك دون إرسال أي بيانات لخوادم خارجية.',
    searchPlaceholder: 'ابحث بين 20 أداة (مثال: JSON, Base64, QR, Regex, JWT)...',
    searchAria: 'البحث في الأدوات',
    searchShortcut: 'اضغط ⌘K أو Ctrl+K للبحث السريع',
    clientSideBadge: '١٠٠٪ محلي بالمتصفح',
    freeForeverBadge: 'مجاني بالكامل للأبد',
    privacyBadge: 'حماية كاملة للخصوصية',
    toolsCountBadge: '٢٠ أداة برمجية أساسية',
    exploreAllTools: 'استكشاف جميع الأدوات',
    viewDetails: 'فتح الأداة',
    openTool: 'تشغيل الأداة',
    favorite: 'إضافة للمفضلة',
    favorited: 'موجود في المفضلة',
    copyUrl: 'نسخ رابط الأداة',
    urlCopied: 'تم نسخ الرابط إلى الحافظة بنجاح!',
    quickSearch: 'بحث سريع',
    noToolsFound: 'لم يتم العثور على أي نتائج',
    noToolsFoundDesc: 'جرب تعديل كلمات البحث أو اختيار تصنيف آخر.',
    clearFilter: 'إعادة ضبط الفلاتر',
    cat_all: 'جميع الأدوات',
    cat_dev: 'التطوير والبرمجة',
    cat_text: 'النصوص والكتابة',
    cat_media: 'الوسائط والتصميم',
    cat_security: 'الأمان والويب',
    cat_converter: 'الرياضيات والتحويل',
    toolInstructions: 'طريقة الاستخدام',
    toolFaqs: 'الأسئلة الشائعة',
    toolRelated: 'أدوات ذات صلة',
    backToTools: 'العودة لجميع الأدوات',
    copyOutput: 'نسخ النتيجة',
    copied: 'تم النسخ!',
    clear: 'مسح',
    sample: 'تحميل نموذج',
    download: 'تحميل الملف',
    reset: 'إعادة تعيين',
    navHome: 'الرئيسية',
    navTools: 'الأدوات',
    navAbout: 'من نحن',
    navPrivacy: 'سياسة الخصوصية',
    navTerms: 'الشروط والأحكام',
    navContact: 'اتصل بنا',
    navDeployGuide: 'نشر على Cloudflare',
    darkMode: 'الوضع الليلي',
    lightMode: 'الوضع النهاري',
    language: 'اللغة',
    allRightsReserved: 'جميع الحقوق محفوظة.',
    footerTagline: 'صُممت خصيصاً للمطورين والكتاب والمصممين. خصوصية كاملة ١٠٠٪ وجاهزة للنشر على Cloudflare Pages.',
    hostedOnCloudflare: 'مهيأ للنشر المباشر على Cloudflare Pages',
    privacyGuarantee: 'ضمان الخصوصية: بياناتك وملفاتك لا تغادر متصفحك أبداً.',
    popularTools: 'الأدوات الأكثر استخداماً',
    aboutTitle: 'عن منصة ديف بلس',
    privacyTitle: 'سياسة الخصوصية والأمان',
    termsTitle: 'شروط وأحكام الاستخدام',
    contactTitle: 'التواصل والاستفسارات',
    deployGuideTitle: 'دليل النشر والاستضافة على Cloudflare Pages'
  },
  de: {
    appName: 'DevPulse Werkzeuge',
    appTagline: '20-in-1 Kostenlose Entwickler- & Benutzer-Tools',
    heroBadge: '100% Client-Seitig • Keine Server-Logs • Blitzschnell',
    heroTitle: 'Unverzichtbare Werkzeuge für Entwickler & Kreative,',
    heroTitleHighlight: 'Direkt in Ihrem Browser.',
    heroDescription: 'Erleben Sie 20 leistungsstarke Online-Tools mit kompromissloser Privatsphäre. Alle Berechnungen laufen lokal auf Ihrem Gerät ohne Datenübertragung.',
    searchPlaceholder: '20 Werkzeuge durchsuchen (z. B. JSON, Base64, QR, Regex, JWT)...',
    searchAria: 'Werkzeuge durchsuchen',
    searchShortcut: 'Drücken Sie ⌘K oder Strg+K zum Suchen',
    clientSideBadge: '100% im Browser',
    freeForeverBadge: '100% Kostenlos',
    privacyBadge: 'Keine Logs',
    toolsCountBadge: '20 Wichtige Tools',
    exploreAllTools: 'Alle Tools erkunden',
    viewDetails: 'Tool öffnen',
    openTool: 'Tool starten',
    favorite: 'Zu Favoriten hinzufügen',
    favorited: 'In Favoriten gespeichert',
    copyUrl: 'Link kopieren',
    urlCopied: 'Link in die Zwischenablage kopiert!',
    quickSearch: 'Schnellsuche',
    noToolsFound: 'Keine Werkzeuge gefunden',
    noToolsFoundDesc: 'Passen Sie Ihre Suchanfrage an oder wählen Sie eine andere Kategorie.',
    clearFilter: 'Filter zurücksetzen',
    cat_all: 'Alle Tools',
    cat_dev: 'Entwickler & Code',
    cat_text: 'Text & Schreiben',
    cat_media: 'Medien & Design',
    cat_security: 'Sicherheit & Web',
    cat_converter: 'Mathe & Konverter',
    toolInstructions: 'Anleitung & Verwendung',
    toolFaqs: 'Häufig gestellte Fragen (FAQ)',
    toolRelated: 'Ähnliche Werkzeuge',
    backToTools: 'Zurück zur Übersicht',
    copyOutput: 'Kopieren',
    copied: 'Kopiert!',
    clear: 'Löschen',
    sample: 'Beispiel laden',
    download: 'Herunterladen',
    reset: 'Zurücksetzen',
    navHome: 'Startseite',
    navTools: 'Tools',
    navAbout: 'Über uns',
    navPrivacy: 'Datenschutz',
    navTerms: 'AGB',
    navContact: 'Kontakt',
    navDeployGuide: 'Cloudflare Deployment',
    darkMode: 'Dunkelmodus',
    lightMode: 'Hellmodus',
    language: 'Sprache',
    allRightsReserved: 'Alle Rechte vorbehalten.',
    footerTagline: 'Entwickelt für Coder, Autoren und Designer. 100% datenschutzkonform und Cloudflare Pages fähig.',
    hostedOnCloudflare: 'Optimiert für Cloudflare Pages',
    privacyGuarantee: 'Datenschutz-Garantie: Ihre Daten verlassen niemals Ihren Browser.',
    popularTools: 'Beliebte Tools',
    aboutTitle: 'Über DevPulse Utilities',
    privacyTitle: 'Datenschutzerklärung',
    termsTitle: 'Nutzungsbedingungen',
    contactTitle: 'Kontakt & Feedback',
    deployGuideTitle: 'Cloudflare Pages Bereitstellungsanleitung'
  }
};
