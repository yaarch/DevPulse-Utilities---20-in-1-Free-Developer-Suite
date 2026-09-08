import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { TOOLS_LIST, TOOL_CATEGORIES } from '../../data/toolsData';
import { ToolCategory } from '../../types';
import { ToolCard } from './ToolCard';
import { IconRenderer } from '../common/IconRenderer';
import { Search, Heart, Sparkles, FilterX } from 'lucide-react';

export const ToolGrid: React.FC = () => {
  const {
    t,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    favorites
  } = useApp();

  const [onlyFavorites, setOnlyFavorites] = useState(false);

  // Filter tools based on search query, category, and favorites
  const filteredTools = useMemo(() => {
    return TOOLS_LIST.filter(tool => {
      // 1. Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesSearch =
          tool.name.toLowerCase().includes(q) ||
          tool.shortDesc.toLowerCase().includes(q) ||
          tool.tags.some(tag => tag.toLowerCase().includes(q));
        if (!matchesSearch) return false;
      }

      // 2. Category filter
      if (activeCategory !== 'all' && tool.category !== activeCategory) {
        return false;
      }

      // 3. Favorites filter
      if (onlyFavorites && !favorites.includes(tool.id)) {
        return false;
      }

      return true;
    });
  }, [searchQuery, activeCategory, onlyFavorites, favorites]);

  // Count per category
  const getCategoryCount = (catId: string) => {
    if (catId === 'all') return TOOLS_LIST.length;
    return TOOLS_LIST.filter(t => t.category === catId).length;
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Category Pills and Filter Controls */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-slate-200 dark:border-slate-800">
        {/* Horizontal scrolling Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {TOOL_CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.id && !onlyFavorites;
            const count = getCategoryCount(cat.id);
            const label = t[cat.labelKey as keyof typeof t] || cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id as ToolCategory);
                  setOnlyFavorites(false);
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60'
                }`}
              >
                <IconRenderer name={cat.icon} className="w-4 h-4" />
                <span>{label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full ${
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
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
              onlyFavorites
                ? 'bg-rose-600 text-white shadow-md shadow-rose-500/20'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60'
            }`}
          >
            <Heart className={`w-4 h-4 ${onlyFavorites ? 'fill-white' : 'text-rose-500'}`} />
            <span>Saved</span>
            <span
              className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                onlyFavorites
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400'
              }`}
            >
              {favorites.length}
            </span>
          </button>
        </div>

        {/* Status text */}
        <div className="text-xs text-slate-500 dark:text-slate-400 font-medium shrink-0">
          Showing <span className="font-bold text-slate-900 dark:text-white">{filteredTools.length}</span> of {TOOLS_LIST.length} tools
        </div>
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
