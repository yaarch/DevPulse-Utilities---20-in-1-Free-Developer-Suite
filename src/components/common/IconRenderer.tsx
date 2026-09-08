import React from 'react';
import {
  Braces,
  Binary,
  ImageDown,
  QrCode,
  FileCode2,
  KeyRound,
  ShieldAlert,
  Link2,
  Palette,
  SearchCode,
  GitCompare,
  Scale,
  Clock,
  FileMinus,
  Fingerprint,
  FileKey,
  CaseSensitive,
  FileText,
  FileImage,
  Sparkles,
  LayoutGrid,
  Code,
  Image,
  ShieldCheck,
  Repeat,
  Wrench
} from 'lucide-react';

interface IconRendererProps {
  name: string;
  className?: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'Braces': return <Braces className={className} />;
    case 'Binary': return <Binary className={className} />;
    case 'ImageDown': return <ImageDown className={className} />;
    case 'QrCode': return <QrCode className={className} />;
    case 'FileCode2': return <FileCode2 className={className} />;
    case 'KeyRound': return <KeyRound className={className} />;
    case 'ShieldAlert': return <ShieldAlert className={className} />;
    case 'Link2': return <Link2 className={className} />;
    case 'Palette': return <Palette className={className} />;
    case 'SearchCode': return <SearchCode className={className} />;
    case 'GitCompare': return <GitCompare className={className} />;
    case 'Scale': return <Scale className={className} />;
    case 'Clock': return <Clock className={className} />;
    case 'FileMinus': return <FileMinus className={className} />;
    case 'Fingerprint': return <Fingerprint className={className} />;
    case 'FileKey': return <FileKey className={className} />;
    case 'CaseSensitive': return <CaseSensitive className={className} />;
    case 'FileText': return <FileText className={className} />;
    case 'FileImage': return <FileImage className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'LayoutGrid': return <LayoutGrid className={className} />;
    case 'Code': return <Code className={className} />;
    case 'Image': return <Image className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Repeat': return <Repeat className={className} />;
    default: return <Wrench className={className} />;
  }
};
