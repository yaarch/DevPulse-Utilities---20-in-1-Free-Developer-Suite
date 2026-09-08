import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Code,
  Copy,
  Download,
  Trash2,
  Sparkles,
  Minimize2,
  CheckCircle2,
  AlertTriangle,
  FileJson
} from 'lucide-react';

export const JsonFormatter: React.FC = () => {
  const { addToast } = useApp();
  const [inputJson, setInputJson] = useState('');
  const [indentSpaces, setIndentSpaces] = useState<number>(2);
  const [validationError, setValidationError] = useState<{ message: string; line?: number; column?: number } | null>(null);
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const sampleJson = {
    name: "DevPulse Suite",
    version: "2.0.0",
    features: ["100% Client-Side", "Privacy Guaranteed", "Zero Latency", "20 Tools"],
    settings: {
      theme: "dark",
      language: "en",
      autoSave: true
    },
    metrics: {
      activeUsers: 45000,
      rating: 4.95,
      supportedBrowsers: ["Chrome", "Firefox", "Safari", "Edge"]
    }
  };

  const handleFormat = (indent: number = indentSpaces) => {
    if (!inputJson.trim()) return;
    try {
      const parsed = JSON.parse(inputJson);
      setInputJson(JSON.stringify(parsed, null, indent));
      setValidationError(null);
      setIsValid(true);
      addToast('JSON formatted successfully!', '', 'success');
    } catch (err: any) {
      parseAndSetError(err);
      setIsValid(false);
    }
  };

  const handleMinify = () => {
    if (!inputJson.trim()) return;
    try {
      const parsed = JSON.parse(inputJson);
      setInputJson(JSON.stringify(parsed));
      setValidationError(null);
      setIsValid(true);
      addToast('JSON minified successfully!', '', 'success');
    } catch (err: any) {
      parseAndSetError(err);
      setIsValid(false);
    }
  };

  const handleValidate = () => {
    if (!inputJson.trim()) {
      setValidationError({ message: 'Input is empty' });
      setIsValid(false);
      return;
    }
    try {
      JSON.parse(inputJson);
      setValidationError(null);
      setIsValid(true);
      addToast('Valid JSON!', 'Syntax is completely compliant.', 'success');
    } catch (err: any) {
      parseAndSetError(err);
      setIsValid(false);
    }
  };

  const parseAndSetError = (err: any) => {
    const message = err.message || 'Invalid JSON syntax';
    // Try to extract line and column from browser error message
    // e.g. "Unexpected token } in JSON at position 42" or "at line 3 column 5"
    let line: number | undefined;
    let column: number | undefined;

    const lineColMatch = message.match(/line (\d+) column (\d+)/i);
    if (lineColMatch) {
      line = parseInt(lineColMatch[1], 10);
      column = parseInt(lineColMatch[2], 10);
    } else {
      const posMatch = message.match(/position (\d+)/i);
      if (posMatch) {
        const pos = parseInt(posMatch[1], 10);
        const upToPos = inputJson.substring(0, pos);
        const lines = upToPos.split('\n');
        line = lines.length;
        column = lines[lines.length - 1].length + 1;
      }
    }

    setValidationError({ message, line, column });
  };

  const handleCopy = () => {
    if (!inputJson) return;
    navigator.clipboard.writeText(inputJson).then(() => {
      addToast('JSON copied to clipboard!', '', 'success');
    });
  };

  const handleDownload = () => {
    if (!inputJson) return;
    const blob = new Blob([inputJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `formatted-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    addToast('Downloaded JSON file', '', 'success');
  };

  const handleLoadSample = () => {
    setInputJson(JSON.stringify(sampleJson, null, 2));
    setValidationError(null);
    setIsValid(true);
  };

  // Line counter calculation
  const lineCount = inputJson ? inputJson.split('\n').length : 1;
  const byteSize = new Blob([inputJson]).size;

  return (
    <div className="space-y-4">
      {/* Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => handleFormat(2)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Prettify (2 spaces)</span>
          </button>

          <button
            onClick={() => handleFormat(4)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
          >
            <span>4 spaces</span>
          </button>

          <button
            onClick={handleMinify}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
          >
            <Minimize2 className="w-3.5 h-3.5" />
            <span>Minify</span>
          </button>

          <button
            onClick={handleValidate}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Validate</span>
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={handleLoadSample}
            className="px-2.5 py-1.5 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-700 transition-colors"
          >
            Load Sample
          </button>

          <button
            onClick={handleCopy}
            disabled={!inputJson}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-700 disabled:opacity-40 transition-colors"
            title="Copy JSON"
          >
            <Copy className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Copy</span>
          </button>

          <button
            onClick={handleDownload}
            disabled={!inputJson}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-700 disabled:opacity-40 transition-colors"
            title="Download JSON"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Download</span>
          </button>

          <button
            onClick={() => {
              setInputJson('');
              setValidationError(null);
              setIsValid(null);
            }}
            disabled={!inputJson}
            className="p-1.5 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 disabled:opacity-40 transition-colors"
            title="Clear"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Error / Success Notification Banner */}
      {validationError && (
        <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900/60 text-rose-800 dark:text-rose-200 text-xs sm:text-sm animate-in fade-in duration-150">
          <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <div className="font-bold">JSON Syntax Error</div>
            <div className="font-mono text-xs opacity-90">{validationError.message}</div>
            {validationError.line && (
              <div className="text-[11px] text-rose-600 dark:text-rose-400 font-semibold">
                Detected near Line {validationError.line}
                {validationError.column ? `, Column ${validationError.column}` : ''}
              </div>
            )}
          </div>
        </div>
      )}

      {isValid && !validationError && (
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-200 text-xs font-medium">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>Valid JSON syntax! No parsing errors found.</span>
        </div>
      )}

      {/* Editor Box */}
      <div className="relative rounded-2xl bg-slate-950 border border-slate-800 text-slate-100 font-mono text-xs sm:text-sm shadow-inner overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500">
        <textarea
          value={inputJson}
          onChange={e => {
            setInputJson(e.target.value);
            if (isValid !== null || validationError !== null) {
              setIsValid(null);
              setValidationError(null);
            }
          }}
          placeholder="Paste or type your JSON code here..."
          rows={16}
          spellCheck={false}
          className="w-full p-4 bg-transparent text-slate-100 font-mono focus:outline-none resize-y leading-relaxed"
        />

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-t border-slate-800 text-[11px] text-slate-400 font-sans">
          <div className="flex items-center gap-3">
            <span>Lines: <strong className="text-slate-200">{lineCount}</strong></span>
            <span>Size: <strong className="text-slate-200">{(byteSize / 1024).toFixed(2)} KB</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
            <span>Client parser ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};
