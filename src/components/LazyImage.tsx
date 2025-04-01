
import { useState, useEffect, CSSProperties } from "react";
import { ImageOff } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
  style?: CSSProperties;
}

export function LazyImage({ 
  src, 
  alt, 
  className = "", 
  fallbackClassName = "",
  style
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Reset states when src changes
  useEffect(() => {
    setIsLoaded(false);
    setError(false);
  }, [src]);

  return (
    <div className="relative w-full h-full">
      {!isLoaded && !error && (
        <Skeleton 
          className={`absolute inset-0 ${fallbackClassName}`} 
        />
      )}
      
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <ImageOff className="h-8 w-8 text-muted-foreground" />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={style}
          className={`w-full h-full transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}
