import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export function SafeImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  loading = 'lazy',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#162C4E] via-[#1E3A63] to-[#0F1F38] text-[#FAF7F2]/80 p-6 text-center ${className}`}
      >
        <ImageOff className="w-6 h-6 text-[#C5A267] mb-3 opacity-80" aria-hidden="true" />
        <span className="font-editorial text-lg tracking-wide text-[#FAF7F2]">
          {fallbackTitle || 'Belle & Bow Kitchens'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
