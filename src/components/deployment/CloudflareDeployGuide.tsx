import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  CloudUpload,
  Terminal,
  FolderTree,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
  Copy,
  ExternalLink,
  ChevronRight,
  ArrowLeft,
  Search,
  FileText
} from 'lucide-react';

export const CloudflareDeployGuide: React.FC = () => {
  const { t, navigateTo, addToast } = useApp();
  const [activeTab, setActiveTab] = useState<'git' | 'cli' | 'direct' | 'gsc'>('gsc');

  const copyCode = (code: string, label: string) => {
    navigator.clipboard.writeText(code).then(() => {
      addToast(`Copied ${label} to clipboard!`, '', 'success');
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb / Back button */}
      <button
        onClick={() => navigateTo({ type: 'home' })}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 mb-6 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>{t.backToTools}</span>
      </button>

      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white shadow-xl mb-8 relative overflow-hidden">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold mb-4">
            <CloudUpload className="w-3.5 h-3.5" />
            <span>Cloudflare Pages Ready</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Deploying DevPulse to Cloudflare Pages
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            DevPulse is architected to compile into a completely static, standalone client-side distribution (`dist/`). You can deploy it globally across Cloudflare’s 300+ edge locations with zero server maintenance costs and automatic HTTPS.
          </p>
        </div>
      </div>

      {/* Deployment Method Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8 gap-2">
        <button
          onClick={() => setActiveTab('gsc')}
          className={`pb-3 px-4 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === 'gsc'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Search className="w-4 h-4 text-emerald-500" />
          <span>Google Search Console &amp; Sitemap</span>
        </button>

        <button
          onClick={() => setActiveTab('git')}
          className={`pb-3 px-4 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === 'git'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <GitBranch className="w-4 h-4" />
          <span>Option 1: Git Integration</span>
        </button>

        <button
          onClick={() => setActiveTab('cli')}
          className={`pb-3 px-4 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === 'cli'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Terminal className="w-4 h-4" />
          <span>Option 2: Wrangler CLI</span>
        </button>

        <button
          onClick={() => setActiveTab('direct')}
          className={`pb-3 px-4 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === 'direct'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <FolderTree className="w-4 h-4" />
          <span>Option 3: Direct ZIP Upload</span>
        </button>
      </div>

      {/* Tab 0: Google Search Console & Sitemap */}
      {activeTab === 'gsc' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Search className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>ربط الموقع مع Google Search Console (GSC)</span>
              </h3>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                جاهز ومفعل
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              تم تجهيز خريطة الموقع (<code className="font-mono text-indigo-600 dark:text-indigo-400">sitemap.xml</code>) وملف الروبوتات (<code className="font-mono text-indigo-600 dark:text-indigo-400">robots.txt</code>) ووسوم التوثيق لربط النطاق <strong className="text-slate-900 dark:text-white">https://devpulsetools.pages.dev/</strong> بمحرك بحث جوجل.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                1. روابط الملفات الأساسية لمحركات البحث
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-semibold text-slate-500">خريطة الموقع (Sitemap)</div>
                    <code className="text-xs font-mono text-indigo-600 dark:text-indigo-400">/sitemap.xml</code>
                  </div>
                  <button
                    onClick={() => copyCode('https://devpulsetools.pages.dev/sitemap.xml', 'Sitemap URL')}
                    className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                    title="Copy Sitemap URL"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-semibold text-slate-500">ملف التوجيه (Robots.txt)</div>
                    <code className="text-xs font-mono text-indigo-600 dark:text-indigo-400">/robots.txt</code>
                  </div>
                  <button
                    onClick={() => copyCode('https://devpulsetools.pages.dev/robots.txt', 'Robots.txt URL')}
                    className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                    title="Copy Robots.txt URL"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                2. خطوات التفعيل خطوة بخطوة في Google Search Console
              </h4>
              <ol className="list-decimal list-inside text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-3 leading-relaxed">
                <li>
                  توجه إلى <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline font-semibold inline-flex items-center gap-1">Google Search Console <ExternalLink className="w-3 h-3" /></a> وسجّل الدخول بحسابك.
                </li>
                <li>
                  اختر إضافة موقع (Add Property)، ثم حدد نوع <strong>بادئة عنوان URL (URL prefix)</strong> وأدخل الرابط:
                  <div className="mt-1.5 p-2 rounded-lg bg-slate-100 dark:bg-slate-950 font-mono text-xs flex items-center justify-between text-slate-900 dark:text-white">
                    <span>https://devpulsetools.pages.dev/</span>
                    <button
                      onClick={() => copyCode('https://devpulsetools.pages.dev/', 'Site URL')}
                      className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </li>
                <li>
                  <strong>طريقة التوثيق (HTML Tag)</strong>: اختر &quot;علامة HTML&quot; وانسخ رمز التوثيق (Verification Code)، ثم ضعه في ملف <code className="font-mono text-indigo-500">index.html</code> في وسم <code className="font-mono">&lt;meta name=&quot;google-site-verification&quot; content=&quot;...&quot; /&gt;</code>.
                </li>
                <li>
                  <strong>إرسال خريطة الموقع (Sitemap)</strong>: بعد تأكيد الملكية، انتقل في القائمة الجانبية إلى <strong>ملفات Sitemap</strong>، واكتب في حقل الإرسال:
                  <div className="mt-1.5 p-2 rounded-lg bg-slate-100 dark:bg-slate-950 font-mono text-xs flex items-center justify-between text-slate-900 dark:text-white">
                    <span>sitemap.xml</span>
                    <button
                      onClick={() => copyCode('sitemap.xml', 'sitemap.xml')}
                      className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      )}

      {/* Tab 1: Git Integration */}
      {activeTab === 'git' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs">
                1
              </span>
              Push Code to GitHub / GitLab
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Export the DevPulse repository and push it to your GitHub or GitLab account:
            </p>
            <div className="relative p-3.5 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs">
              <pre className="overflow-x-auto">
{`git init
git add .
git commit -m "feat: initial devpulse release"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/devpulse-tools.git
git push -u origin main`}
              </pre>
              <button
                onClick={() =>
                  copyCode(
                    `git init\ngit add .\ngit commit -m "feat: initial devpulse release"\ngit branch -M main\ngit remote add origin https://github.com/YOUR_USERNAME/devpulse-tools.git\ngit push -u origin main`,
                    'Git commands'
                  )
                }
                className="absolute top-2 right-2 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs">
                2
              </span>
              Connect in Cloudflare Dashboard
            </h3>
            <ol className="list-decimal list-inside text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-2 leading-relaxed">
              <li>Log in to your <strong>Cloudflare Dashboard</strong> and select <strong>Workers & Pages</strong>.</li>
              <li>Click <strong>Create Application</strong> &rarr; <strong>Pages</strong> &rarr; <strong>Connect to Git</strong>.</li>
              <li>Select your GitHub repository (`devpulse-tools`).</li>
            </ol>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs">
                3
              </span>
              Build Configuration Settings
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Configure the exact build parameters in the Cloudflare Pages prompt:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-slate-400 block font-medium">Framework Preset</span>
                <span className="font-bold text-slate-900 dark:text-white text-sm">Vite</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-slate-400 block font-medium">Build Command</span>
                <span className="font-bold font-mono text-indigo-600 dark:text-indigo-400 text-sm">npm run build</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-slate-400 block font-medium">Build Output Directory</span>
                <span className="font-bold font-mono text-emerald-600 dark:text-emerald-400 text-sm">dist</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-slate-400 block font-medium">Node Version (Optional)</span>
                <span className="font-bold text-slate-900 dark:text-white text-sm">NODE_VERSION = 20</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Click <strong>Save and Deploy</strong>. Cloudflare will build the application and assign a live <code className="text-indigo-500">*.pages.dev</code> domain in under 45 seconds!
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Wrangler CLI */}
      {activeTab === 'cli' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Instant Deployment via Wrangler CLI
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              If you prefer deploying directly from your local terminal or CI/CD pipeline, use Cloudflare's official Wrangler tool:
            </p>
            <div className="relative p-3.5 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs">
              <pre className="overflow-x-auto">
{`# 1. Build the production bundle
npm run build

# 2. Deploy the dist folder to Cloudflare Pages
npx wrangler pages deploy dist --project-name=devpulse-tools`}
              </pre>
              <button
                onClick={() =>
                  copyCode(
                    'npm run build\nnpx wrangler pages deploy dist --project-name=devpulse-tools',
                    'Wrangler commands'
                  )
                }
                className="absolute top-2 right-2 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Direct Upload */}
      {activeTab === 'direct' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Direct Upload (No Git Required)
            </h3>
            <ol className="list-decimal list-inside text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-3 leading-relaxed">
              <li>Run <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded font-mono">npm run build</code> locally to produce the <code className="font-mono text-indigo-500">dist/</code> directory.</li>
              <li>Go to <strong>Cloudflare Dashboard</strong> &rarr; <strong>Workers & Pages</strong> &rarr; <strong>Upload Assets</strong>.</li>
              <li>Drag and drop the entire contents of your <code className="font-mono">dist/</code> directory or zip them.</li>
              <li>Click <strong>Deploy site</strong>. Your website is live immediately.</li>
            </ol>
          </div>
        </div>
      )}

      {/* SPA Routing Configuration Note */}
      <div className="mt-8 p-6 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60">
        <h4 className="text-sm font-bold text-indigo-950 dark:text-indigo-200 flex items-center gap-2 mb-2">
          <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          Single Page Application (SPA) Client Routing
        </h4>
        <p className="text-xs text-indigo-900/80 dark:text-indigo-300 leading-relaxed mb-3">
          For full URL fallback support (such as navigating directly to subroutes without 404s), Cloudflare Pages natively supports single-page apps via a <code className="font-mono bg-white dark:bg-slate-900 px-1 py-0.5 rounded">_routes.json</code> or by configuring a custom 200 rule in <code className="font-mono bg-white dark:bg-slate-900 px-1 py-0.5 rounded">public/_redirects</code>:
        </p>
        <div className="p-2.5 rounded-lg bg-slate-900 text-slate-200 font-mono text-xs flex items-center justify-between">
          <span>/*    /index.html   200</span>
          <button
            onClick={() => copyCode('/*    /index.html   200', '_redirects rule')}
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <Copy className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
