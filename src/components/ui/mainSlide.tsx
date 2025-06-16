// components/ui/mainSlide.tsx
"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface MainSlideProps {
  title: string;
  icon: string;
  images: string[];
}

export default function MainSlide({ title, icon, images }: MainSlideProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(7);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [itemWidth, setItemWidth] = useState(160);
  const [containerWidth, setContainerWidth] = useState(0);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const resumeAutoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Create an extended array for infinite scrolling
  const extendedImages = [...images, ...images, ...images];

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth - 32; // subtract padding
        const gap = 16; // gap-4 = 16px
        
        if (window.innerWidth < 768) {
          // Mobile: 3 full images
          const availableWidth = containerWidth - (2 * gap); // 2 gaps between 3 images
          const calculatedWidth = Math.floor(availableWidth / 3);
          setItemWidth(calculatedWidth);
          setVisibleItems(3);
        } else {
          // Desktop: 7 full images
          const availableWidth = containerWidth - (6 * gap); // 6 gaps between 7 images
          const calculatedWidth = Math.floor(availableWidth / 7);
          setItemWidth(calculatedWidth);
          setVisibleItems(7);
        }
        setContainerWidth(containerWidth);
      }
    };

    // Initial calculation
    setTimeout(handleResize, 0);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto scroll functionality with resume after inactivity
  useEffect(() => {
    if (isAutoScrolling && images.length > 0) {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          const nextIndex = prev + 1;
          if (nextIndex >= images.length * 2) {
            return images.length;
          }
          return nextIndex;
        });
      }, 3000);
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isAutoScrolling, images.length]);

  // Resume auto scroll after 5 seconds of inactivity
  const scheduleAutoScrollResume = () => {
    if (resumeAutoScrollRef.current) {
      clearTimeout(resumeAutoScrollRef.current);
    }
    
    resumeAutoScrollRef.current = setTimeout(() => {
      setIsAutoScrolling(true);
    }, 5000); // Resume after 5 seconds of inactivity
  };

  // Stop auto scroll when user interacts
  const stopAutoScroll = () => {
    setIsAutoScrolling(false);
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    scheduleAutoScrollResume();
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
      if (resumeAutoScrollRef.current) {
        clearTimeout(resumeAutoScrollRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    stopAutoScroll();
    setCurrentIndex(prev => {
      const nextIndex = prev + 1;
      // Reset to beginning of second set when we reach the end
      if (nextIndex >= images.length * 2) {
        return images.length;
      }
      return nextIndex;
    });
  };

  const prevSlide = () => {
    stopAutoScroll();
    setCurrentIndex(prev => {
      const prevIndex = prev - 1;
      // Reset to end of second set when we go before the beginning
      if (prevIndex < images.length) {
        return images.length * 2 - 1;
      }
      return prevIndex;
    });
  };

  // Initialize current index to start from the middle set for smooth infinite scroll
  useEffect(() => {
    if (images.length > 0) {
      setCurrentIndex(images.length);
    }
  }, [images.length]);

  return (
    <div className="w-full px-4" ref={containerRef}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className="w-6 h-6 relative mr-2">
            <Image src={icon} alt={title} fill className="object-contain" />
          </div>
          <h2 className="text-xl font-bold text-white">{title}</h2>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="px-[8px] py-[2px] text-md font-bold rounded-md cursor-pointer bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="px-[8px] py-[2px] text-md font-bold rounded-md cursor-pointer bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors"
          >
            &gt;
          </button>
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        <div 
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (itemWidth + 16)}px)`
          }}
        >
          {extendedImages.map((img, index) => (
            <div 
              key={`${img}-${index}`} 
              className="flex-shrink-0 cursor-pointer relative rounded-lg overflow-hidden"
              style={{ 
                width: `${itemWidth}px`, 
                height: `${Math.floor(itemWidth * 1.25)}px` // 4:5 aspect ratio
              }}
            >
              <Image 
                src={img} 
                alt={`Game ${(index % images.length) + 1}`} 
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Auto scroll indicator */}
      {isAutoScrolling && (
        <div className="flex justify-center mt-2">
          <div className="text-xs text-white/60">Auto-scrolling • Click navigation to pause</div>
        </div>
      )}
      
      {!isAutoScrolling && (
        <div className="flex justify-center mt-2">
          <div className="text-xs text-white/40">Manual mode • Auto-scroll resumes in 5s</div>
        </div>
      )}
    </div>
  );
}