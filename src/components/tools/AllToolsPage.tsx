import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { TOOLS_LIST } from '../../data/toolsData';
import { TOOL_CATEGORIES, EDUCATION_SUBCATEGORIES, ToolRegistry } from '../../services/toolRegistry';
import { CATEGORIES_INFO, ALL_TOOLS_SEO } from '../../config/seoConfig';
import { ToolCategory, EducationSubCategory } from '../../types';
import { ToolCard } from '../home/ToolCard';
import { IconRenderer } from '../common/IconRenderer';
import { Search, Sparkles, Users, BookOpen, GraduationCap } from 'lucide-react';

export const AllToolsPage: React.FC = () => {
  const { navigateTo, t } = useApp();
  const [activeCat, setActiveCat] = useState<ToolCategory>('all');
  const [activeSubCat, setActiveSubCat] = useState<EducationSubCategory>('all');
  const [search, setSearch] = useState('');

  const filteredTools = useMemo(() => {
    return ToolRegistry.filterTools({
      category: activeCat,
      educationSubCategory: activeSubCat,
      query: search
    });
  }, [search, activeCat, activeSubCat]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigateTo({ type: 'home' });
          }}
          className="hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          Home
        </a>
        <span>/</span>
        <span className="font-semibold text-slate-800 dark:text-slate-200">Tools</span>
      </nav>

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          <span>60 Free Browser Utilities</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {ALL_TOOLS_SEO.h1}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {ALL_TOOLS_SEO.intro}
        </p>

        {/* In-page Search Bar */}
        <div className="max-w-xl mx-auto pt-2">
          <div className="relative flex items-center shadow-sm rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20">
            <div className="pl-4 text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by name, tag, or function (e.g. JSON, Base64, QR, Hash, GPA)..."
              className="w-full py-3 px-3 bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="mr-3 px-2 py-1 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-md"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {TOOL_CATEGORIES.map(cat => {
            const isActive = activeCat === cat.id;
            const count = ToolRegistry.getCategoryCount(cat.id);
            const label = t[cat.labelKey as keyof typeof t] || cat.name;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCat(cat.id);
                  setActiveSubCat('all');
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <IconRenderer name={cat.icon} className="w-4 h-4" />
                <span>{label}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Education Sub-category Filter */}
        {activeCat === 'education' && (
          <div className="max-w-xl mx-auto p-2 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 flex items-center justify-center gap-1.5 flex-wrap">
            {EDUCATION_SUBCATEGORIES.map(sub => {
              const isSubActive = activeSubCat === sub.id;
              const subCount = ToolRegistry.getEducationSubCategoryCount(sub.id);
              const subLabel = t[sub.labelKey as keyof typeof t] || sub.label;

              return (
                <button
                  key={sub.id}
                  onClick={() => setActiveSubCat(sub.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isSubActive
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-white/80 dark:bg-slate-900 text-amber-900 dark:text-amber-200 hover:bg-white border border-amber-200 dark:border-amber-800/60'
                  }`}
                >
                  {sub.id === 'teachers' && <Users className="w-3.5 h-3.5" />}
                  {sub.id === 'students' && <BookOpen className="w-3.5 h-3.5" />}
                  {sub.id === 'all' && <GraduationCap className="w-3.5 h-3.5" />}
                  <span>{subLabel}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${isSubActive ? 'bg-white/20 text-white' : 'bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300'}`}>
                    {subCount}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Tools Grid */}
      <div>
        <div className="mb-4 flex items-center justify-between text-xs text-slate-500">
          <span>Showing <strong>{filteredTools.length}</strong> of {TOOLS_LIST.length} tools</span>
          {activeCat !== 'all' && (
            <button
              onClick={() => {
                setActiveCat('all');
                setActiveSubCat('all');
              }}
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Reset Category
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>

      {/* Category Descriptions Section for SEO */}
      <section className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Explore Tool Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES_INFO.map(cat => (
            <div key={cat.id} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                {cat.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
