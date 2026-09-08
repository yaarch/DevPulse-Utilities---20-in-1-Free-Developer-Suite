import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { FileImage, Download, UploadCloud, Copy, Sparkles } from 'lucide-react';

export const SvgToPngConverter: React.FC = () => {
  const { addToast } = useApp();
  const [svgCode, setSvgCode] = useState(
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366f1" />
      <stop offset="100%" stop-color="#4f46e5" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="url(#grad)" />
  <circle cx="50" cy="50" r="24" fill="#ffffff" opacity="0.9" />
  <path d="M42 35 L65 50 L42 65 Z" fill="#4f46e5" />
</svg>`
  );

  const [scale, setScale] = useState<number>(2);
  const [isTransparent, setIsTransparent] = useState<boolean>(true);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const renderSvgToPng = () => {
    if (!svgCode.trim()) return;

    try {
      const blob = new Blob([svgCode], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const img = new Image();

      img.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const w = (img.width || 300) * scale;
        const h = (img.height || 300) * scale;
        canvas.width = w;
        canvas.height = h;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, w, h);
        if (!isTransparent) {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, w, h);
        }
        ctx.drawImage(img, 0, 0, w, h);

        const pngUrl = canvas.toDataURL('image/png');
        setPreviewUrl(pngUrl);
        URL.revokeObjectURL(url);
      };

      img.onerror = () => {
        URL.revokeObjectURL(url);
        addToast('Invalid SVG syntax!', 'Unable to parse vector data.', 'error');
      };

      img.src = url;
    } catch {
      addToast('Error parsing SVG', '', 'error');
    }
  };

  useEffect(() => {
    renderSvgToPng();
  }, [svgCode, scale, isTransparent]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setSvgCode(reader.result as string);
      addToast('Loaded SVG file!', file.name, 'success');
    };
    reader.readAsText(file);
  };

  const handleDownload = () => {
    if (!previewUrl) return;
    const a = document.createElement('a');
    a.href = previewUrl;
    a.download = `rasterized-${scale}x-${Date.now()}.png`;
    a.click();
    addToast('Downloaded PNG file!', '', 'success');
  };

  return (
    <div className="space-y-6">
      {/* Controls toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Resolution Scale:</span>
            <div className="flex items-center gap-1">
              {[1, 2, 4, 8].map(s => (
                <button
                  key={s}
                  onClick={() => setScale(s)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                    scale === s
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>
          </div>

          <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              checked={isTransparent}
              onChange={e => setIsTransparent(e.target.checked)}
              className="rounded text-indigo-600 focus:ring-indigo-500"
            />
            <span>Transparent Background</span>
          </label>
        </div>

        <div className="flex items-center gap-2">
          <label className="cursor-pointer px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 flex items-center gap-1.5">
            <UploadCloud className="w-3.5 h-3.5 text-indigo-500" />
            <span>Upload .svg</span>
            <input type="file" accept=".svg,image/svg+xml" onChange={handleFileUpload} className="hidden" />
          </label>

          <button
            onClick={handleDownload}
            disabled={!previewUrl}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs disabled:opacity-40"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export PNG</span>
          </button>
        </div>
      </div>

      {/* Code and preview split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* SVG Code Editor */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
            SVG Source Code
          </label>
          <textarea
            value={svgCode}
            onChange={e => setSvgCode(e.target.value)}
            rows={12}
            className="w-full p-3.5 rounded-2xl bg-slate-950 text-slate-100 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y border border-slate-800"
          />
        </div>

        {/* Rasterized PNG Preview */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
            Rendered PNG Canvas ({scale}x resolution)
          </label>
          <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 min-h-[280px] flex items-center justify-center">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="PNG Rasterization"
                className="max-h-64 max-w-full rounded-xl shadow-md"
              />
            ) : (
              <span className="text-xs text-slate-400">Rendering preview...</span>
            )}
          </div>
        </div>
      </div>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};
