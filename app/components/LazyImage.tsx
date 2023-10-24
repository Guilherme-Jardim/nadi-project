import React, { useEffect, useRef, useState } from 'react';

interface LazyImageProps {
  alt: string;
  src: string;
  className: string;
}

export function LazyImage({ alt, src, className }: LazyImageProps) {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowImage(true);
          if (imageRef.current) {
            observer.unobserve(imageRef.current);
          }
        }
      });
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imageRef}
      src={showImage ? src : ''}
      alt={alt}
      className={`${className} ${showImage ? 'fade-in' : 'hidden'}`}
    />
  );
}
