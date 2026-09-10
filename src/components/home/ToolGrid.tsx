import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { TOOLS_LIST } from '../../data/toolsData';
import { TOOL_CATEGORIES, EDUCATION_SUBCATEGORIES, ToolRegistry } from '../../services/toolRegistry';
import { ToolCategory, EducationSubCategory } from '../../types';
import { ToolCard } from './ToolCard';
import { IconRenderer } from '../common/IconRenderer';
import { Heart, Sparkles, FilterX, GraduationCap, Users, BookOpen } from 'lucide-react';

export const ToolGrid: React.FC = () => {
  const {
    t,
    activeCategory,
    setActiveCategory,
    activeEducationSubCategory,
    setActiveEducationSubCategory,
    searchQuery,
    setSearchQuery,
    favorites
  } = useApp();

  const [onlyFavorites, setOnlyFavorites] = useState(false);

  // Filter tools based on search query, category, education sub-category, and favorites
  const filteredTools = useMemo(() => {
    return ToolRegistry.filterTools({
      category: activeCategory,
      educationSubCategory: activeEducationSubCategory,
      query: searchQuery,
      onlyFavorites,
      favorites
    });
  }, [searchQuery, activeCategory, activeEducationSubCategory, onlyFavorites, favorites]);

  // Dynamic count per category
  const getCategoryCount = (catId: ToolCategory) => {
    return ToolRegistry.getCategoryCount(catId);
  };

  return (
    <section id="tools-grid-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Category Pills and Filter Controls */}
      <div className="space-y-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Horizontal scrolling Main Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
            {TOOL_CATEGORIES.map(cat => {
              const isActive = activeCategory === cat.id && !onlyFavorites;
              const count = getCategoryCount(cat.id);
              const label = t[cat.labelKey as keyof typeof t] || cat.name;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOnlyFavorites(false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20 ring-2 ring-indigo-600/20'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/60'
                  }`}
                >
                  <IconRenderer name={cat.icon} className="w-4 h-4" />
                  <span>{label}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}

            {/* Favorites Filter Tab */}
            <button
              onClick={() => setOnlyFavorites(prev => !prev)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
                onlyFavorites
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-500/20 ring-2 ring-rose-600/20'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/60'
              }`}
            >
              <Heart className={`w-4 h-4 ${onlyFavorites ? 'fill-white' : 'text-rose-500'}`} />
              <span>{t.favorited || 'Saved'}</span>
              <span
                className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                  onlyFavorites
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400'
                }`}
              >
                {favorites.length}
              </span>
            </button>
          </div>

          {/* Status Counter */}
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium shrink-0 self-end lg:self-center">
            <span className="font-bold text-slate-900 dark:text-white">{filteredTools.length}</span> / {TOOLS_LIST.length}
          </div>
        </div>

        {/* Education Sub-category Filters (Appears when Education category is active) */}
        {activeCategory === 'education' && !onlyFavorites && (
          <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-amber-900 dark:text-amber-200">
                  {t.cat_education} • {activeEducationSubCategory === 'teachers' ? t.subcat_teachers : activeEducationSubCategory === 'students' ? t.subcat_students : t.subcat_all_edu}
                </div>
                <div className="text-[11px] text-amber-700/80 dark:text-amber-400">
                  {activeEducationSubCategory === 'teachers'
                    ? (t.teachersDesc || 'Tools designed for teachers: seating groups, test timing, grade-level reading, and quizzes.')
                    : activeEducationSubCategory === 'students'
                    ? (t.studentsDesc || 'Tools for students: GPA tracking, flashcards, Pomodoro study routines, and citations.')
                    : (t.eduPromoDesc || 'Interactive classroom tools & study utilities with 100% private browser execution.')}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto shrink-0">
              {EDUCATION_SUBCATEGORIES.map(subCat => {
                const isSubActive = activeEducationSubCategory === subCat.id;
                const subCount = ToolRegistry.getEducationSubCategoryCount(subCat.id);
                const subLabel = t[subCat.labelKey as keyof typeof t] || subCat.label;

                return (
                  <button
                    key={subCat.id}
                    onClick={() => setActiveEducationSubCategory(subCat.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      isSubActive
                        ? 'bg-amber-600 text-white shadow-sm shadow-amber-600/30'
                        : 'bg-white/80 dark:bg-slate-900/80 text-amber-900 dark:text-amber-200 hover:bg-white dark:hover:bg-slate-900 border border-amber-200 dark:border-amber-800/60'
                    }`}
                  >
                    {subCat.id === 'teachers' && <Users className="w-3.5 h-3.5" />}
                    {subCat.id === 'students' && <BookOpen className="w-3.5 h-3.5" />}
                    {subCat.id === 'all' && <GraduationCap className="w-3.5 h-3.5" />}
                    <span>{subLabel}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isSubActive
                          ? 'bg-white/20 text-white'
                          : 'bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300'
                      }`}
                    >
                      {subCount}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Grid of Tools */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mt-8">
          {filteredTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-16 text-center max-w-md mx-auto">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center">
            <FilterX className="w-7 h-7" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
            {t.noToolsFound}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
            {t.noToolsFoundDesc}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
              setActiveEducationSubCategory('all');
              setOnlyFavorites(false);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.clearFilter}</span>
          </button>
        </div>
      )}
    </section>
  );
};
