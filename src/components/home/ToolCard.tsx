import React from 'react';
import { ToolItem } from '../../types';
import { useApp } from '../../context/AppContext';
import { IconRenderer } from '../common/IconRenderer';
import { getToolSeo } from '../../config/seoConfig';
import { Heart, ArrowUpRight, Share2 } from 'lucide-react';

interface ToolCardProps {
  tool: ToolItem;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const { navigateToTool, toggleFavorite, isFavorite, addToast, t } = useApp();
  const favorited = isFavorite(tool.id);
  const seo = getToolSeo(tool.id);
  const slug = seo?.slug || tool.slug || tool.id;
  const toolUrl = `/tools/${slug}/`;

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}${toolUrl}`;
    navigator.clipboard.writeText(url).then(() => {
      addToast(t.urlCopied, url, 'success');
    });
  };

  const handleToggleFav = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(tool.id);
    addToast(
      favorited ? 'Removed from favorites' : 'Added to favorites',
      tool.name,
      'info'
    );
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'developer':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800/60';
      case 'text':
        return 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800/60';
      case 'media':
        return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60';
      case 'security':
        return 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200 dark:border-rose-800/60';
      case 'converter':
        return 'bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800/60';
      default:
        return 'bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  return (
    <a
      href={toolUrl}
      onClick={(e) => {
        e.preventDefault();
        navigateToTool(tool.id);
      }}
      className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-500/80 dark:hover:border-indigo-500/80 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-200 cursor-pointer text-left block"
    >
      <div>
        {/* Top Header Row: Icon + Category Badge + Actions */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center transition-colors shadow-2xs">
            <IconRenderer name={tool.iconName} className="w-5 h-5" />
          </div>

          <div className="flex items-center gap-1.5">
            <span
              className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${getCategoryBadgeClass(
                tool.category
              )}`}
            >
              {tool.category}
            </span>

            {/* Favorite button */}
            <button
              type="button"
              onClick={handleToggleFav}
              className={`p-1.5 rounded-lg transition-colors ${
                favorited
                  ? 'text-rose-500 bg-rose-50 dark:bg-rose-950/50'
                  : 'text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title={favorited ? t.favorited : t.favorite}
              aria-label={t.favorite}
            >
              <Heart className={`w-4 h-4 ${favorited ? 'fill-rose-500' : ''}`} />
            </button>

            {/* Share button */}
            <button
              type="button"
              onClick={handleShare}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={t.copyUrl}
              aria-label={t.copyUrl}
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tool Name & Description */}
        <div className="mb-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-1.5">
            <span>{tool.name}</span>
            {tool.isPopular && (
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300">
                Popular
              </span>
            )}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
            {tool.shortDesc}
          </p>
        </div>
      </div>

      {/* Card Footer: Tags & Action Button */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1">
          {tool.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="text-[10px] font-mono text-slate-400 dark:text-slate-500 bg-slate-100/80 dark:bg-slate-800/60 px-1.5 py-0.5 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform shrink-0">
          <span>{t.openTool}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </a>
  );
};
