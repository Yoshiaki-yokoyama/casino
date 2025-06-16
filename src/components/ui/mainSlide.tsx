// components/ui/mainSlide.tsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface MainSlideProps {
  title: string;
  icon: string;
  images: string[];
}

export default function MainSlide({ title, icon, images }: MainSlideProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(7.5);

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
    if (currentIndex < images.length - visibleItems) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= images.length - visibleItems;

  return (
    <div className="w-full px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-6 h-6 relative mr-2">
            <Image src={icon} alt={title} fill className="object-contain" />
          </div>
          <h2 className="text-xl font-bold text-white">{title}</h2>
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
        <div className="flex gap-4 overflow-hidden">
          {images.slice(currentIndex, currentIndex + visibleItems).map((img, index) => (
            <div 
              key={`${img}-${index}`} 
              className="flex-shrink-0 cursor-pointer relative w-32 h-40 md:w-40 md:h-48 rounded-lg overflow-hidden"
            >
              <Image 
                src={img} 
                alt={`Game ${index + 1}`} 
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}