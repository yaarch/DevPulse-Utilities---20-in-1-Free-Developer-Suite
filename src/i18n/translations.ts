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
  // Formal Categories
  cat_all: string;
  cat_developer: string;
  cat_designer: string;
  cat_security: string;
  cat_data: string;
  cat_education: string;
  // Subcategories
  subcat_all_edu: string;
  subcat_teachers: string;
  subcat_students: string;
  teachersBadge: string;
  studentsBadge: string;
  bothAudienceBadge: string;
  // Legacy / fallbacks
  cat_dev: string;
  cat_text: string;
  cat_media: string;
  cat_converter: string;
  cat_everyday: string;
  cat_design: string;
  cat_math: string;
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
  recentlyUsed: string;
  eduPromoTitle: string;
  eduPromoDesc: string;
  teachersDesc: string;
  studentsDesc: string;
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
    appTagline: '60-in-1 Free Developer & User Utility Suite',
    heroBadge: '100% Client-Side • Zero Server Logging • Blazing Fast',
    heroTitle: '60+ Free Tools for Developers, Designers,',
    heroTitleHighlight: 'Teachers & Students.',
    heroDescription: 'Fast, private, browser-based tools for everyday work, coding, design and learning. All operations execute strictly on your device with zero data sent to external servers.',
    searchPlaceholder: 'Search 60+ tools (e.g. JSON, Base64, QR, Regex, SQL, Flexbox, Cron)...',
    searchAria: 'Search tools',
    searchShortcut: 'Press ⌘K or Ctrl+K to search anytime',
    clientSideBadge: '100% Client-Side',
    freeForeverBadge: '100% Free Forever',
    privacyBadge: 'No Data Logs',
    toolsCountBadge: '60+ Essential Tools',
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
    cat_developer: 'Developer',
    cat_designer: 'Designer',
    cat_security: 'Security',
    cat_data: 'Data',
    cat_education: 'Education',
    subcat_all_edu: 'All Education',
    subcat_teachers: 'For Teachers',
    subcat_students: 'For Students',
    teachersBadge: 'Teachers',
    studentsBadge: 'Students',
    bothAudienceBadge: 'Teachers & Students',
    cat_dev: 'Developer & Code',
    cat_text: 'Text & Writing',
    cat_media: 'Media & Design',
    cat_converter: 'Math & Converters',
    cat_everyday: 'Everyday Utilities',
    cat_design: 'UI & Design',
    cat_math: 'Math & Finance',
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
    recentlyUsed: 'Recently Used Tools',
    eduPromoTitle: 'Academic Hub for Teachers & Students',
    eduPromoDesc: 'Dedicated, privacy-first academic utilities. Zero account required, zero tracking, and instant client-side execution.',
    teachersDesc: 'Classroom group generators, seating charts, test timers, readability scoring, and quiz formatting utilities.',
    studentsDesc: 'Cumulative GPA calculator, citation generator (APA/MLA/Chicago), Pomodoro study timer, and interactive flashcards.',
    aboutTitle: 'About DevPulse Utilities',
    privacyTitle: 'Privacy Policy',
    termsTitle: 'Terms of Service',
    contactTitle: 'Contact & Feedback',
    deployGuideTitle: 'Cloudflare Pages Deployment Guide'
  },
  es: {
    appName: 'DevPulse Utilidades',
    appTagline: 'Suite de 60 herramientas gratuitas para desarrolladores',
    heroBadge: '100% en el navegador • Sin registros en servidores • Ultrarrápido',
    heroTitle: 'Más de 60 herramientas para desarrolladores, diseñadores,',
    heroTitleHighlight: 'profesores y estudiantes.',
    heroDescription: 'Herramientas rápidas y privadas en el navegador para programación, diseño y aprendizaje. Todo se ejecuta en tu dispositivo sin enviar datos a servidores.',
    searchPlaceholder: 'Buscar 40+ herramientas (ej. JSON, Base64, QR, Regex, SQL, Flexbox)...',
    searchAria: 'Buscar herramientas',
    searchShortcut: 'Presiona ⌘K o Ctrl+K para buscar',
    clientSideBadge: '100% en Navegador',
    freeForeverBadge: '100% Gratis Siempre',
    privacyBadge: 'Sin Registros',
    toolsCountBadge: '60 Herramientas Esenciales',
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
    cat_all: 'Todas las herramientas',
    cat_developer: 'Desarrollador',
    cat_designer: 'Diseñador',
    cat_security: 'Seguridad',
    cat_data: 'Datos',
    cat_education: 'Educación',
    subcat_all_edu: 'Toda la educación',
    subcat_teachers: 'Para profesores',
    subcat_students: 'Para estudiantes',
    teachersBadge: 'Profesores',
    studentsBadge: 'Estudiantes',
    bothAudienceBadge: 'Profesores y Estudiantes',
    cat_dev: 'Desarrollo y Código',
    cat_text: 'Texto y Redacción',
    cat_media: 'Medios y Diseño',
    cat_converter: 'Matemáticas y Conversores',
    cat_everyday: 'Utilidades Diarias',
    cat_design: 'Diseño e IU',
    cat_math: 'Matemáticas y Finanzas',
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
    recentlyUsed: 'Herramientas Recientes',
    eduPromoTitle: 'Centro Académico para Profesores y Estudiantes',
    eduPromoDesc: 'Utilidades académicas dedicadas con privacidad primero. Sin cuentas, sin rastreo y ejecución 100% en el navegador.',
    teachersDesc: 'Generador de grupos de aula, temporizadores de exámenes y formateador de cuestionarios.',
    studentsDesc: 'Calculadora de promedio GPA, generador de citas bibliográficas, temporizador Pomodoro y tarjetas de estudio.',
    aboutTitle: 'Acerca de DevPulse',
    privacyTitle: 'Política de Privacidad',
    termsTitle: 'Términos de Servicio',
    contactTitle: 'Contacto y Comentarios',
    deployGuideTitle: 'Guía de Despliegue en Cloudflare Pages'
  },
  fr: {
    appName: 'DevPulse Utilitaires',
    appTagline: 'Suite 60-en-1 gratuite pour développeurs et créateurs',
    heroBadge: '100% côté client • Zéro journal serveur • Ultra rapide',
    heroTitle: 'Plus de 60 outils gratuits pour développeurs, designers,',
    heroTitleHighlight: 'enseignants et étudiants.',
    heroDescription: 'Des outils rapides et privés dans le navigateur pour le code, le design et l\'apprentissage. Toutes les opérations s\'exécutent localement.',
    searchPlaceholder: 'Rechercher 60+ utilitaires (ex: JSON, Base64, QR, Regex, SQL)...',
    searchAria: 'Rechercher des outils',
    searchShortcut: 'Appuyez sur ⌘K ou Ctrl+K pour rechercher',
    clientSideBadge: '100% Côté Client',
    freeForeverBadge: '100% Gratuit pour toujours',
    privacyBadge: 'Aucun Journal de Données',
    toolsCountBadge: '60 Utilitaires Essentiels',
    exploreAllTools: 'Explorer Tous Les Outils',
    viewDetails: 'Ouvrir L\'outil',
    openTool: 'Lancer L\'outil',
    favorite: 'Ajouter aux favoris',
    favorited: 'Ajouté aux favoris',
    copyUrl: 'Partager le lien',
    urlCopied: 'Lien copié dans le presse-papiers !',
    quickSearch: 'Recherche Rapide',
    noToolsFound: 'Aucun outil trouvé',
    noToolsFoundDesc: 'Essayez de modifier votre requête ou de changer de catégorie.',
    clearFilter: 'Réinitialiser les filtres',
    cat_all: 'Tous les outils',
    cat_developer: 'Développeur',
    cat_designer: 'Designer',
    cat_security: 'Sécurité',
    cat_data: 'Données',
    cat_education: 'Éducation',
    subcat_all_edu: 'Toute l\'éducation',
    subcat_teachers: 'Pour enseignants',
    subcat_students: 'Pour étudiants',
    teachersBadge: 'Enseignants',
    studentsBadge: 'Étudiants',
    bothAudienceBadge: 'Enseignants & Étudiants',
    cat_dev: 'Développeur & Code',
    cat_text: 'Texte & Rédaction',
    cat_media: 'Médias & Design',
    cat_converter: 'Maths & Convertisseurs',
    cat_everyday: 'Utilitaires Quotidiens',
    cat_design: 'Design & UI',
    cat_math: 'Maths & Finance',
    toolInstructions: 'Mode d\'emploi',
    toolFaqs: 'Questions Fréquentes',
    toolRelated: 'Outils Similaires',
    backToTools: 'Retour aux outils',
    copyOutput: 'Copier le résultat',
    copied: 'Copié !',
    clear: 'Effacer',
    sample: 'Charger un exemple',
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
    footerTagline: 'Conçu pour les développeurs et les designers. 100% privé et prêt pour Cloudflare Pages.',
    hostedOnCloudflare: 'Optimisé pour Cloudflare Pages',
    privacyGuarantee: 'Garantie de Confidentialité : Vos données ne quittent jamais votre navigateur.',
    popularTools: 'Outils Populaires',
    recentlyUsed: 'Outils Récents',
    eduPromoTitle: 'Espace Académique pour Enseignants et Étudiants',
    eduPromoDesc: 'Utilitaires académiques dédiés axés sur la confidentialité. Aucun compte requis, zéro suivi et exécution instantanée.',
    teachersDesc: 'Générateur de groupes de classe, minuteurs d\'examen et outils de mise en forme de quiz.',
    studentsDesc: 'Calculateur de moyenne GPA, générateur de citations académiques, minuteur Pomodoro et fiches de révision.',
    aboutTitle: 'À Propos de DevPulse',
    privacyTitle: 'Politique de Confidentialité',
    termsTitle: 'Conditions d\'Utilisation',
    contactTitle: 'Contact et Retours',
    deployGuideTitle: 'Guide de Déploiement Cloudflare Pages'
  },
  ar: {
    appName: 'أدوات ديف بلس',
    appTagline: '60 أداة مجانية للمطورين وصناع المحتوى في مكان واحد',
    heroBadge: '١٠٠٪ داخل المتصفح • بدون حفظ بيانات • فائق السرعة',
    heroTitle: 'أكثر من 60 أداة مجانية للمطورين، المصممين،',
    heroTitleHighlight: 'المعلمين والطلاب.',
    heroDescription: 'أدوات سريعة، آمنة، وتعمل بالكامل داخل متصفحك لإنجاز المهام اليومية، البرمجة، التصميم، والتعليم. جميع العمليات تتم محلياً على جهازك لضمان الخصوصية.',
    searchPlaceholder: 'ابحث بين أكثر من 60 أداة (مثال: JSON, Base64, QR, Regex, SQL)...',
    searchAria: 'البحث في الأدوات',
    searchShortcut: 'اضغط ⌘K أو Ctrl+K للبحث السريع',
    clientSideBadge: '١٠٠٪ محلي بالمتصفح',
    freeForeverBadge: 'مجاني بالكامل للأبد',
    privacyBadge: 'حماية كاملة للخصوصية',
    toolsCountBadge: '٦٠ أداة برمجية أساسية',
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
    cat_developer: 'المطورون',
    cat_designer: 'المصممون',
    cat_security: 'الأمان والحماية',
    cat_data: 'البيانات وقواعد البيانات',
    cat_education: 'التعليم والتدريس',
    subcat_all_edu: 'جميع أدوات التعليم',
    subcat_teachers: 'قسم الأساتذة والمعلمين',
    subcat_students: 'قسم الطلاب والدارسين',
    teachersBadge: 'للأساتذة',
    studentsBadge: 'للطلاب',
    bothAudienceBadge: 'للأساتذة والطلاب',
    cat_dev: 'التطوير والبرمجة',
    cat_text: 'النصوص والكتابة',
    cat_media: 'الوسائط والتصميم',
    cat_converter: 'الرياضيات والتحويل',
    cat_everyday: 'أدوات يومية',
    cat_design: 'التصميم والواجهات',
    cat_math: 'الرياضيات والمالية',
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
    recentlyUsed: 'الأدوات المستخدمة مؤخراً',
    eduPromoTitle: 'المركز التعليمي الشامل للأساتذة والطلاب',
    eduPromoDesc: 'أدوات أكاديمية مخصصة وعالية الدقة لحماية الخصوصية. لا تتطلب إنشاء حساب، خالية من التتبع، وتعمل فورياً داخل متصفحك.',
    teachersDesc: 'أدوات مخصصة للمعلمين والأساتذة: تقسيم المجموعات، مؤقت الاختبارات، قياس مستوى القراءة، وتنسيق الاختبارات السريعة.',
    studentsDesc: 'أدوات مخصصة للطلاب والدارسين: حساب المعدل التراكمي GPA، توليد المراجع والاقتباسات (APA/MLA)، مؤقت دراسة بومودورو، والبطاقات التعليمية.',
    aboutTitle: 'عن منصة ديف بلس',
    privacyTitle: 'سياسة الخصوصية والأمان',
    termsTitle: 'شروط وأحكام الاستخدام',
    contactTitle: 'التواصل والاستفسارات',
    deployGuideTitle: 'دليل النشر والاستضافة على Cloudflare Pages'
  },
  de: {
    appName: 'DevPulse Werkzeuge',
    appTagline: '60-in-1 Kostenlose Entwickler- & Benutzer-Tools',
    heroBadge: '100% Client-Seitig • Keine Server-Logs • Blitzschnell',
    heroTitle: '60+ kostenlose Tools für Entwickler, Designer,',
    heroTitleHighlight: 'Lehrer & Studenten.',
    heroDescription: 'Schnelle, private, browserbasierte Tools für Code, Design und Lernen. Alle Vorgänge werden lokal auf Ihrem Gerät ohne Datenübertragung ausgeführt.',
    searchPlaceholder: '60+ Werkzeuge durchsuchen (z. B. JSON, Base64, QR, Regex, SQL)...',
    searchAria: 'Werkzeuge durchsuchen',
    searchShortcut: 'Drücken Sie ⌘K oder Strg+K zum Suchen',
    clientSideBadge: '100% im Browser',
    freeForeverBadge: '100% Kostenlos',
    privacyBadge: 'Keine Logs',
    toolsCountBadge: '60 Wichtige Tools',
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
    cat_developer: 'Entwickler',
    cat_designer: 'Designer',
    cat_security: 'Sicherheit',
    cat_data: 'Daten',
    cat_education: 'Bildung',
    subcat_all_edu: 'Gesamte Bildung',
    subcat_teachers: 'Für Lehrer',
    subcat_students: 'Für Studenten',
    teachersBadge: 'Lehrer',
    studentsBadge: 'Studenten',
    bothAudienceBadge: 'Lehrer & Studenten',
    cat_dev: 'Entwickler & Code',
    cat_text: 'Text & Schreiben',
    cat_media: 'Medien & Design',
    cat_converter: 'Mathe & Konverter',
    cat_everyday: 'Alltägliche Tools',
    cat_design: 'Design & UI',
    cat_math: 'Mathe & Finanzen',
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
    recentlyUsed: 'Kürzlich verwendete Tools',
    eduPromoTitle: 'Akademisches Zentrum für Lehrer & Studenten',
    eduPromoDesc: 'Dedizierte akademische Hilfsmittel mit Fokus auf Datenschutz. Keine Registrierung, kein Tracking und sofortige Ausführung im Browser.',
    teachersDesc: 'Gruppengenerator für Klassenräume, Prüfungstimer und Quiz-Formatierer.',
    studentsDesc: 'Notendurchschnitt-Rechner (GPA), Zitationsgenerator, Pomodoro-Lerntimer und Karteikarten.',
    aboutTitle: 'Über DevPulse Utilities',
    privacyTitle: 'Datenschutzerklärung',
    termsTitle: 'Nutzungsbedingungen',
    contactTitle: 'Kontakt & Feedback',
    deployGuideTitle: 'Cloudflare Pages Bereitstellungsanleitung'
  }
};
