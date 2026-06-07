'use client';

import { useEffect, useState } from 'react';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

type CopyNumberButtonProps = {
  number: string;
};

export function CopyNumberButton({ number }: CopyNumberButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const copyNumber = async () => {
    await navigator.clipboard.writeText(number);
    setCopied(true);
  };

  return (
    <div>
      <Button
        type="button"
        variant="outline"
        onClick={copyNumber}
        className="border-wintima-maroon text-wintima-maroon hover:!bg-wintima-maroon min-h-11 rounded-full hover:!text-white"
        aria-label={`Copy Mobile Money number ${number}`}
      >
        <Copy className="h-4 w-4" aria-hidden="true" />
        {copied ? 'Copied' : 'Copy number'}
      </Button>
      <p className="sr-only" aria-live="polite">
        {copied ? 'Copied!' : ''}
      </p>
    </div>
  );
}
