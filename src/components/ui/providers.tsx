// components/ui/providers.tsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Providers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(7.5);

  // Manually defined provider images array
  const providerImages = [
    "/images/providers/provider-1.png",
    "/images/providers/provider-2.png",
    "/images/providers/provider-3.png",
    "/images/providers/provider-4.png",
    "/images/providers/provider-5.png",
    "/images/providers/provider-6.png",
    "/images/providers/provider-7.png",
    "/images/providers/provider-1.png",
    "/images/providers/provider-2.png",
    "/images/providers/provider-3.png",
    "/images/providers/provider-4.png",
    "/images/providers/provider-5.png",
    "/images/providers/provider-6.png",
    "/images/providers/provider-7.png"
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(3);
      } else {
        setVisibleItems(7.5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < providerImages.length - visibleItems) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= providerImages.length - visibleItems;

  return (
    <div className="w-full px-4 py-6">
      <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
          <div className="w-6 h-6 relative mr-2">
            <Image src='/images/providers/providers_icon.png' alt='providers'fill className="object-contain" />
          </div>
          <h2 className="text-xl font-bold text-white">Providers</h2>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            disabled={isPrevDisabled}
            className={`px-[8px] py-[2px] text-md font-bold rounded-md cursor-pointer bg-white/30 flex items-center justify-center ${isPrevDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/50'}`}
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            disabled={isNextDisabled}
            className={`px-[8px] py-[2px] text-md font-bold rounded-md cursor-pointer bg-white/30 flex items-center justify-center ${isNextDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/50'}`}
          >
            &gt;
          </button>
        </div>
      </div>
      
      <div className="relative">
        <div className="flex gap-4 overflow-hidden w-full justify-between">
          {providerImages.slice(currentIndex, currentIndex + visibleItems).map((img, index) => (
            <div 
              key={`${img}-${index}`} 
              className="flex-shrink-0 cursor-pointer relative w-32 h-20 rounded-lg overflow-hidden" // Reduced height
            >
              <Image 
                src={img} 
                alt={`Provider ${index + 1}`} 
                fill
                className="object-contain hover:scale-105 transition-transform" // Changed to contain to fit logos better
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}