import React from 'react';
import { TOOLS_MAP } from '../../data/toolsData';
import { ToolWrapper } from './ToolWrapper';
import { JsonFormatter } from './JsonFormatter';
import { Base64Tool } from './Base64Tool';
import { QrCodeGenerator } from './QrCodeGenerator';
import { ImageCompressor } from './ImageCompressor';
import { MarkdownEditor } from './MarkdownEditor';
import { PasswordGenerator } from './PasswordGenerator';
import { HashGenerator } from './HashGenerator';
import { UrlShortener } from './UrlShortener';
import { ColorConverter } from './ColorConverter';
import { RegexTester } from './RegexTester';
import { DiffChecker } from './DiffChecker';
import { UnitConverter } from './UnitConverter';
import { TimestampConverter } from './TimestampConverter';
import { HtmlMinifier } from './HtmlMinifier';
import { UuidGenerator } from './UuidGenerator';
import { JwtDecoder } from './JwtDecoder';
import { CaseConverter } from './CaseConverter';
import { WordCounter } from './WordCounter';
import { SvgToPngConverter } from './SvgToPngConverter';
import { BoxShadowGenerator } from './BoxShadowGenerator';

interface ToolViewProps {
  toolId: string;
}

export const ToolView: React.FC<ToolViewProps> = ({ toolId }) => {
  const tool = TOOLS_MAP[toolId];

  if (!tool) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Tool Not Found</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          The requested developer tool does not exist or has been moved.
        </p>
      </div>
    );
  }

  const renderToolComponent = () => {
    switch (tool.id) {
      case 'json-formatter':
        return <JsonFormatter />;
      case 'base64-encoder-decoder':
      case 'base64-tool':
        return <Base64Tool />;
      case 'qr-code-generator':
      case 'qr-generator':
        return <QrCodeGenerator />;
      case 'image-compressor':
        return <ImageCompressor />;
      case 'markdown-editor':
        return <MarkdownEditor />;
      case 'password-generator':
        return <PasswordGenerator />;
      case 'hash-generator':
        return <HashGenerator />;
      case 'url-shortener':
      case 'url-cleaner':
        return <UrlShortener />;
      case 'color-converter':
        return <ColorConverter />;
      case 'regex-tester':
        return <RegexTester />;
      case 'diff-checker':
        return <DiffChecker />;
      case 'unit-converter':
        return <UnitConverter />;
      case 'timestamp-converter':
        return <TimestampConverter />;
      case 'html-minifier':
        return <HtmlMinifier />;
      case 'uuid-generator':
        return <UuidGenerator />;
      case 'jwt-decoder':
        return <JwtDecoder />;
      case 'case-converter':
        return <CaseConverter />;
      case 'word-counter':
        return <WordCounter />;
      case 'svg-to-png':
      case 'svg-to-png-converter':
        return <SvgToPngConverter />;
      case 'box-shadow-generator':
      case 'css-box-shadow-generator':
        return <BoxShadowGenerator />;
      default:
        return (
          <div className="p-8 text-center text-sm text-slate-500">
            Tool under active refinement.
          </div>
        );
    }
  };

  return <ToolWrapper tool={tool}>{renderToolComponent()}</ToolWrapper>;
};
