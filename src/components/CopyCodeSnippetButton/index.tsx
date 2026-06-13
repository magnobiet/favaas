'use client';

import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/Button';

const ICON_URL = 'https://favicon.magnobiet.com/e/🐝';
const CODE = `<link rel="icon" href="${ICON_URL}" />`;

export function CopyCodeSnippetButton() {
  const [copied, setCopied] = useState<'url' | 'code' | null>(null);

  async function copy(value: string, type: 'url' | 'code') {
    await navigator.clipboard.writeText(value);
    setCopied(type);
    globalThis.setTimeout(() => setCopied(null), 1800);
  }

  return (
    <Button
      className="mt-4 w-full"
      variant="secondary"
      size="lg"
      onClick={() => copy(CODE, 'code')}
    >
      <span className={copied === 'code' ? 'animate-scale-in' : ''}>
        {copied === 'code' ? <Check /> : <Copy />}
      </span>

      <span className={copied === 'code' ? 'animate-scale-in' : ''}>
        {copied === 'code' ? 'Código copiado!' : 'Copiar código'}
      </span>
    </Button>
  );
}
