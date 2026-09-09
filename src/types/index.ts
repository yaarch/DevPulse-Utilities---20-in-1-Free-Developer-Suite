export type Language = 'en' | 'es' | 'fr' | 'ar' | 'de';

export type ToolCategory = 
  | 'all'
  | 'developer'
  | 'text'
  | 'media'
  | 'security'
  | 'converter';

export interface ToolItem {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  category: ToolCategory;
  iconName: string;
  tags: string[];
  isPopular?: boolean;
  isNew?: boolean;
  instructions: string[];
  faqs: { question: string; answer: string }[];
}

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info' | 'warning' | 'error';
}

export type ActivePage = 
  | { type: 'home' }
  | { type: 'tools' }
  | { type: 'tool'; toolId: string }
  | { type: 'about' }
  | { type: 'privacy' }
  | { type: 'terms' }
  | { type: 'contact' }
  | { type: 'deploy-guide' }
  | { type: 'not-found' };
