import { ToolItem } from '../types';

export const TOOLS_LIST: ToolItem[] = [
  {
    id: 'json-formatter',
    slug: 'json-formatter',
    name: 'JSON Formatter & Validator',
    shortDesc: 'Prettify, minify, validate, and inspect JSON with detailed syntax error detection.',
    category: 'developer',
    iconName: 'Braces',
    tags: ['json', 'format', 'minify', 'beautify', 'validate', 'syntax', 'api'],
    isPopular: true,
    instructions: [
      'Paste your raw or minified JSON payload into the input editor.',
      'Click "Format / Prettify" to format with clean indentations (2 or 4 spaces).',
      'Use "Minify / Compact" to compress payload for API transfer.',
      'Check syntax errors highlighted with exact line and column numbers.',
      'Click "Copy" or "Download" to use your formatted JSON.'
    ],
    faqs: [
      {
        question: 'Is my JSON data uploaded to any remote server?',
        answer: 'No. All parsing and formatting happens 100% in your browser memory. Your sensitive credentials and API tokens never leave your computer.'
      },
      {
        question: 'Does this validator support large JSON payloads?',
        answer: 'Yes, it leverages native browser JSON parsing and efficient string buffering to handle multi-megabyte payloads effortlessly.'
      }
    ]
  },
  {
    id: 'base64-encoder-decoder',
    slug: 'base64-encoder-decoder',
    name: 'Base64 Encoder / Decoder',
    shortDesc: 'Encode and decode plain text or binary files to and from Base64 with URL-safe options.',
    category: 'developer',
    iconName: 'Binary',
    tags: ['base64', 'encode', 'decode', 'binary', 'text', 'crypto', 'ascii'],
    isPopular: true,
    instructions: [
      'Choose whether to encode plaintext to Base64 or decode Base64 back to text.',
      'You can also drag and drop any image or file to get its Base64 Data URL.',
      'Toggle URL-Safe mode (substituting + and / with - and _) when encoding web tokens.',
      'Copy the output with one click or download as a raw file.'
    ],
    faqs: [
      {
        question: 'What is URL-safe Base64?',
        answer: 'Standard Base64 contains "+" and "/" which have special meanings in URLs. URL-safe Base64 swaps them with "-" and "_" so they can be passed as query parameters safely.'
      },
      {
        question: 'Can I decode UTF-8 emojis and special characters?',
        answer: 'Yes! Our implementation properly handles full multi-byte UTF-8 string encoding and decoding without mangling characters.'
      }
    ]
  },
  {
    id: 'image-compressor',
    slug: 'image-compressor',
    name: 'Image Compressor & Resizer',
    shortDesc: 'Compress JPEG, PNG, and WebP images locally using client-side HTML5 canvas.',
    category: 'media',
    iconName: 'ImageDown',
    tags: ['image', 'compress', 'optimize', 'resize', 'jpeg', 'png', 'webp'],
    isPopular: true,
    instructions: [
      'Drop any JPEG, PNG, or WebP image into the upload dropzone.',
      'Adjust the quality slider (e.g. 70%-85% retains optical fidelity with drastic size reductions).',
      'Optionally scale maximum width or height to resize the image.',
      'Compare original vs compressed size and savings percentage side-by-side.',
      'Download your optimized image instantly.'
    ],
    faqs: [
      {
        question: 'Are my private photos uploaded to a cloud server?',
        answer: 'Never. All compression and downscaling is executed directly inside your web browser using HTML5 Canvas APIs.'
      },
      {
        question: 'Which formats yield the highest compression ratio?',
        answer: 'WebP and JPEG offer the highest file size savings. PNG is optimal for graphics with transparent backgrounds.'
      }
    ]
  },
  {
    id: 'qr-code-generator',
    slug: 'qr-code-generator',
    name: 'QR Code Generator',
    shortDesc: 'Generate customizable, high-resolution QR codes for URLs, WiFi credentials, vCards, and text.',
    category: 'media',
    iconName: 'QrCode',
    tags: ['qr', 'qrcode', 'barcode', 'wifi', 'vcard', 'generator', 'svg'],
    isPopular: true,
    instructions: [
      'Select your data type: Link / URL, Plain Text, WiFi Network, or Contact Card (vCard).',
      'Enter the content and watch the QR code render in real time.',
      'Customize foreground color, background color, error correction level (L, M, Q, H), and margin.',
      'Export and download as crisp SVG vector or high-resolution PNG.'
    ],
    faqs: [
      {
        question: 'Do these QR codes expire?',
        answer: 'No! These are static QR codes that encode your data directly into the pixel matrix. They work indefinitely without any subscription or third-party redirection.'
      },
      {
        question: 'What error correction level should I select?',
        answer: 'Level M (15% recovery) or Q (25% recovery) is ideal for standard scanning. Choose H (30%) if you plan on printing onto rough textures or adding custom overlays.'
      }
    ]
  },
  {
    id: 'markdown-editor',
    slug: 'markdown-editor',
    name: 'Markdown Live Editor',
    shortDesc: 'Interactive split-pane Markdown editor with live preview, word statistics, and HTML/MD export.',
    category: 'text',
    iconName: 'FileCode2',
    tags: ['markdown', 'editor', 'preview', 'readme', 'gfm', 'html', 'docs'],
    isPopular: true,
    instructions: [
      'Type Markdown on the left pane and see the rendered HTML preview in real-time on the right.',
      'Use the top toolbar to quickly insert headings, bold, italics, links, tables, blockquotes, and code blocks.',
      'Monitor live word count, character count, and estimated reading time.',
      'Export the content as a .md file or copy the compiled HTML.'
    ],
    faqs: [
      {
        question: 'Does this editor support GitHub Flavored Markdown (GFM)?',
        answer: 'Yes, tables, task lists, code blocks with syntax highlighting classes, strikethrough, and blockquotes are all supported.'
      }
    ]
  },
  {
    id: 'password-generator',
    slug: 'password-generator',
    name: 'Secure Password Generator',
    shortDesc: 'Generate cryptographically strong, uncrackable passwords using window.crypto CSPRNG.',
    category: 'security',
    iconName: 'KeyRound',
    tags: ['password', 'security', 'crypto', 'generator', 'random', 'credentials'],
    isPopular: true,
    instructions: [
      'Choose your desired password length using the slider (12-64 characters recommended).',
      'Toggle character classes: Uppercase, Lowercase, Numbers, and Special Symbols.',
      'Optionally exclude ambiguous characters like (O, 0, l, 1, I).',
      'Review the real-time entropy and brute-force crack-time estimate.',
      'Generate batch passwords or copy your primary password instantly.'
    ],
    faqs: [
      {
        question: 'Is this random generator cryptographically secure?',
        answer: 'Yes! We use window.crypto.getRandomValues(), the industry standard Cryptographically Secure Pseudo-Random Number Generator (CSPRNG).'
      }
    ]
  },
  {
    id: 'hash-generator',
    slug: 'hash-generator',
    name: 'Hash & Checksum Generator',
    shortDesc: 'Compute MD5, SHA-1, SHA-256, SHA-384, and SHA-512 cryptographic hashes with HMAC option.',
    category: 'security',
    iconName: 'ShieldAlert',
    tags: ['hash', 'sha256', 'md5', 'sha1', 'sha512', 'hmac', 'checksum'],
    instructions: [
      'Enter or paste text into the input field.',
      'View simultaneously calculated hashes: SHA-256, SHA-512, SHA-384, SHA-1, and MD5.',
      'Optionally specify a secret key for HMAC message authentication.',
      'Click the copy icon next to any computed hash digest.'
    ],
    faqs: [
      {
        question: 'Which hash algorithm is recommended for modern security?',
        answer: 'SHA-256 or SHA-512 is recommended for integrity checks and signatures. MD5 and SHA-1 should only be used for legacy checksum verifications.'
      }
    ]
  },
  {
    id: 'url-shortener',
    slug: 'url-shortener',
    name: 'URL Cleaner & Privacy Shortener',
    shortDesc: 'Strip invasive tracking parameters (UTM, fbclid, gclid), minify long links, and generate QR codes.',
    category: 'developer',
    iconName: 'Link2',
    tags: ['url', 'link', 'cleaner', 'shorten', 'utm', 'tracking', 'privacy'],
    instructions: [
      'Paste any long or marketing URL cluttered with tracking tokens.',
      'The cleaner automatically strips UTM parameters, gclid, fbclid, and analytics tags.',
      'Generate a clean, compact shareable redirect token or bookmark it to your client library.',
      'Instantly generate a QR code for mobile scanning.'
    ],
    faqs: [
      {
        question: 'Why clean URLs?',
        answer: 'Tracking query parameters track user profiles across websites and bloat link lengths. Cleaning links protects personal privacy and looks cleaner when sharing.'
      }
    ]
  },
  {
    id: 'color-converter',
    slug: 'color-converter',
    name: 'Color Converter & Contrast Checker',
    shortDesc: 'Convert between HEX, RGB, HSL, and CMYK with WCAG accessibility contrast ratio analyzer.',
    category: 'converter',
    iconName: 'Palette',
    tags: ['color', 'hex', 'rgb', 'hsl', 'cmyk', 'contrast', 'wcag', 'css'],
    instructions: [
      'Pick a color with the interactive color wheel or enter a HEX, RGB, or HSL value.',
      'View instantaneous cross-conversions in all formats (HEX, RGB, HSL, CMYK, CSS rgba).',
      'Check WCAG 2.1 contrast ratios against black and white backgrounds (AA and AAA ratings).',
      'Inspect generated tints and shades palette for UI design.'
    ],
    faqs: [
      {
        question: 'What does the WCAG rating mean?',
        answer: 'WCAG AA requires a 4.5:1 contrast ratio for normal text. AAA requires 7:1. Our tool shows exactly whether your color passes for accessible design.'
      }
    ]
  },
  {
    id: 'regex-tester',
    slug: 'regex-tester',
    name: 'Regex Live Tester & Debugger',
    shortDesc: 'Test regular expressions in real-time with visual group highlighting, flags, and cheat presets.',
    category: 'developer',
    iconName: 'SearchCode',
    tags: ['regex', 'regexp', 'regular-expression', 'tester', 'debug', 'matches'],
    instructions: [
      'Type your regular expression pattern and toggle flags (g, i, m, s, u).',
      'Paste your test string in the target text area.',
      'Watch matched strings and capturing groups highlighted in distinct colors.',
      'Pick from ready-made presets (Email, URL, IP address, Phone number, Date).'
    ],
    faqs: [
      {
        question: 'What flags are supported?',
        answer: 'Global (g), Case-insensitive (i), Multiline (m), DotAll (s), and Unicode (u) are supported directly via modern JavaScript RegExp engine.'
      }
    ]
  },
  {
    id: 'diff-checker',
    slug: 'diff-checker',
    name: 'Text & Code Diff Checker',
    shortDesc: 'Compare two text or code snippets side-by-side with line additions, deletions, and differences.',
    category: 'developer',
    iconName: 'GitCompare',
    tags: ['diff', 'compare', 'difference', 'code', 'text', 'merge', 'git'],
    instructions: [
      'Paste your original (old) text into the left pane.',
      'Paste your modified (new) text into the right pane.',
      'Toggle between Side-by-Side and Unified view.',
      'View highlighted differences: red for deletions and green for additions.'
    ],
    faqs: [
      {
        question: 'Can I compare code files like JSON, HTML, or JavaScript?',
        answer: 'Yes, any plain text, source code, config files, or markdown can be compared line-by-line.'
      }
    ]
  },
  {
    id: 'unit-converter',
    slug: 'unit-converter',
    name: 'Universal Unit Converter',
    shortDesc: 'Fast conversion between Length, Weight, Temperature, Area, Speed, Time, and Digital Storage.',
    category: 'converter',
    iconName: 'Scale',
    tags: ['unit', 'converter', 'metric', 'imperial', 'length', 'weight', 'temperature', 'storage'],
    instructions: [
      'Choose a physical category (Length, Weight, Temperature, Digital Data, Speed, Area, Time).',
      'Input the value in the source unit.',
      'Select the target unit to see immediate high-precision calculations.',
      'Swap units with a single click.'
    ],
    faqs: [
      {
        question: 'Are metric and imperial units both supported?',
        answer: 'Yes! Meters, feet, inches, miles, kilograms, pounds, Celsius, Fahrenheit, and all digital data units (bytes to terabytes) are supported.'
      }
    ]
  },
  {
    id: 'timestamp-converter',
    slug: 'timestamp-converter',
    name: 'Unix Timestamp Converter',
    shortDesc: 'Convert Epoch timestamps (seconds/ms) to human-readable UTC/Local time and vice versa.',
    category: 'converter',
    iconName: 'Clock',
    tags: ['timestamp', 'epoch', 'unix', 'time', 'date', 'utc', 'iso'],
    instructions: [
      'Enter an epoch timestamp (seconds or milliseconds) or click "Now" for the current moment.',
      'Read converted representations: UTC time, Local timezone, ISO 8601, and Relative time (e.g. 5 minutes ago).',
      'Or pick any date and time on the calendar to generate its Unix timestamp.'
    ],
    faqs: [
      {
        question: 'Does this handle seconds and milliseconds?',
        answer: 'Yes, the converter auto-detects whether your timestamp is in 10-digit seconds or 13-digit milliseconds and displays both.'
      }
    ]
  },
  {
    id: 'html-minifier',
    slug: 'html-minifier',
    name: 'HTML Minifier & Cleaner',
    shortDesc: 'Compress HTML documents by eliminating redundant whitespaces, comments, and line breaks.',
    category: 'developer',
    iconName: 'FileMinus',
    tags: ['html', 'minify', 'compress', 'web', 'optimization', 'frontend'],
    instructions: [
      'Paste your raw HTML document or snippet into the editor.',
      'Choose whether to strip comments and collapse multiple whitespaces.',
      'Click "Minify HTML" to run the compression.',
      'Review compression metrics (bytes reduced and percentage saved) and copy the output.'
    ],
    faqs: [
      {
        question: 'Does minifying HTML break preformatted tags?',
        answer: 'No, content inside <pre>, <code>, and <textarea> blocks is carefully preserved to protect syntax structure.'
      }
    ]
  },
  {
    id: 'uuid-generator',
    slug: 'uuid-generator',
    name: 'UUID / GUID Generator',
    shortDesc: 'Generate cryptographically random UUID version 4 tokens individually or in bulk.',
    category: 'developer',
    iconName: 'Fingerprint',
    tags: ['uuid', 'guid', 'v4', 'random', 'id', 'token', 'unique'],
    instructions: [
      'Select how many UUIDs to generate (from 1 up to 100).',
      'Toggle uppercase or lowercase output.',
      'Choose whether to include standard hyphens or generate compact 32-character tokens.',
      'Click "Generate" and copy the single or batch list with one click.'
    ],
    faqs: [
      {
        question: 'What version of UUID is generated?',
        answer: 'UUID Version 4 (RFC 4122 compliant), generated with high-entropy cryptographic randomness using crypto.getRandomValues().'
      }
    ]
  },
  {
    id: 'jwt-decoder',
    slug: 'jwt-decoder',
    name: 'JWT Debugger & Decoder',
    shortDesc: 'Decode and inspect JSON Web Tokens (JWT) headers, claims, expiration, and payload signatures.',
    category: 'security',
    iconName: 'FileKey',
    tags: ['jwt', 'token', 'decode', 'auth', 'bearer', 'security', 'claims'],
    instructions: [
      'Paste any standard JSON Web Token (encoded as header.payload.signature).',
      'Inspect the decoded Header (algorithm, token type) and Payload (claims, sub, exp).',
      'Check the automatic Expiration status badge (Valid, Expired, or Not Before).',
      'Human-readable date times are automatically mapped for iat, exp, and nbf timestamps.'
    ],
    faqs: [
      {
        question: 'Is it safe to paste production JWTs here?',
        answer: 'Yes! DevPulse processes everything completely in client-side memory. No network requests are made, keeping your tokens strictly private.'
      }
    ]
  },
  {
    id: 'case-converter',
    slug: 'case-converter',
    name: 'Text Case Converter',
    shortDesc: 'Convert text between camelCase, snake_case, kebab-case, UPPERCASE, Title Case, and PascalCase.',
    category: 'text',
    iconName: 'CaseSensitive',
    tags: ['case', 'converter', 'camelcase', 'snake_case', 'kebab-case', 'uppercase', 'text'],
    instructions: [
      'Type or paste your text in the input box.',
      'Click on any target case style: camelCase, snake_case, kebab-case, PascalCase, UPPERCASE, lowercase, Title Case, Sentence case, or CONSTANT_CASE.',
      'Click copy on your desired converted format.'
    ],
    faqs: [
      {
        question: 'How are word separators handled?',
        answer: 'Our smart tokenizer detects spaces, hyphens, underscores, and existing camelCase boundaries to ensure accurate conversions.'
      }
    ]
  },
  {
    id: 'word-counter',
    slug: 'word-counter',
    name: 'Word & Character Counter',
    shortDesc: 'Real-time text analyzer for words, characters, sentences, reading time, and keyword density.',
    category: 'text',
    iconName: 'FileText',
    tags: ['word', 'counter', 'character', 'reading-time', 'density', 'sentences', 'seo'],
    instructions: [
      'Type or paste text into the document analyzer.',
      'View instant statistics: Word count, character count (with/without spaces), sentence count, and paragraph count.',
      'Inspect estimated reading time (at 200 WPM) and speaking time (at 130 WPM).',
      'Review top 5 most frequently used keywords and their percentage density.'
    ],
    faqs: [
      {
        question: 'Is there a character limit?',
        answer: 'No limit! You can paste full essays, articles, or books, and stats update in milliseconds.'
      }
    ]
  },
  {
    id: 'svg-to-png-converter',
    slug: 'svg-to-png-converter',
    name: 'SVG to PNG Converter',
    shortDesc: 'Convert scalable vector graphics (SVG) into crisp, high-resolution PNG images with custom scaling.',
    category: 'media',
    iconName: 'FileImage',
    tags: ['svg', 'png', 'converter', 'vector', 'raster', 'image', 'export'],
    instructions: [
      'Paste raw SVG XML code or upload an .svg file directly.',
      'Select your output resolution scale multiplier (1x, 2x, 4x Retina, or 8x Ultra HD).',
      'Choose a transparent or solid background color.',
      'Preview the rasterized result and download your PNG file.'
    ],
    faqs: [
      {
        question: 'Does the converted PNG maintain vector sharpness?',
        answer: 'Yes! Because the scaling happens before rasterization onto an HTML5 canvas, selecting 2x or 4x yields pixel-crisp high-DPI graphics.'
      }
    ]
  },
  {
    id: 'box-shadow-generator',
    slug: 'box-shadow-generator',
    name: 'CSS Box Shadow Generator',
    shortDesc: 'Design modern multi-layered CSS box shadows with interactive sliders and instant CSS copy.',
    category: 'developer',
    iconName: 'Sparkles',
    tags: ['css', 'box-shadow', 'shadow', 'generator', 'styling', 'frontend', 'ui'],
    instructions: [
      'Adjust Horizontal and Vertical offsets, Blur radius, and Spread radius sliders.',
      'Select shadow color and tweak opacity.',
      'Toggle Inset checkbox for inner shadows.',
      'Add multiple shadow layers for sophisticated realistic elevation effects.',
      'Copy the ready-to-use CSS box-shadow rule for your stylesheet.'
    ],
    faqs: [
      {
        question: 'Can I add multiple shadow layers?',
        answer: 'Yes! Modern UI design achieves realistic depth by stacking multiple subtle shadows. You can add, adjust, and delete shadow layers seamlessly.'
      }
    ]
  }
];

export const TOOL_CATEGORIES = [
  { id: 'all', labelKey: 'cat_all', icon: 'LayoutGrid' },
  { id: 'developer', labelKey: 'cat_dev', icon: 'Code' },
  { id: 'text', labelKey: 'cat_text', icon: 'FileText' },
  { id: 'media', labelKey: 'cat_media', icon: 'Image' },
  { id: 'security', labelKey: 'cat_security', icon: 'ShieldCheck' },
  { id: 'converter', labelKey: 'cat_converter', icon: 'Repeat' }
] as const;

export const TOOLS_MAP: Record<string, ToolItem> = TOOLS_LIST.reduce((acc, tool) => {
  acc[tool.id] = tool;
  return acc;
}, {} as Record<string, ToolItem>);
