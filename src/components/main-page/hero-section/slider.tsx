'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

interface SliderProps {
  images: string[];
  autoSlideInterval?: number;
  className?: string;
}

export default function Slider({
  images,
  autoSlideInterval = 5000,
  className = '',
}: SliderProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const imagesPerPage = isLargeScreen ? 2 : 1;
  
  // Calculate total pages based on images per page
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const nextSlide = useCallback(() => {
    setCurrentPage((prevPage) => {
      return prevPage + 1 >= totalPages ? 0 : prevPage + 1;
    });
  }, [totalPages]);

  const prevSlide = useCallback(() => {
    setCurrentPage((prevPage) => {
      return prevPage - 1 < 0 ? totalPages - 1 : prevPage - 1;
    });
  }, [totalPages]);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, autoSlideInterval);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextSlide, autoSlideInterval]);

  // Reset to valid page when screen size changes
  useEffect(() => {
    const newTotalPages = Math.ceil(images.length / imagesPerPage);
    if (currentPage >= newTotalPages) {
      setCurrentPage(Math.max(0, newTotalPages - 1));
    }
  }, [imagesPerPage, images.length, currentPage]);

  // Get images for current page
  const getCurrentPageImages = () => {
    const startIndex = currentPage * imagesPerPage;
    return images.slice(startIndex, startIndex + imagesPerPage);
  };

  const currentPageImages = getCurrentPageImages();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Main slider container */}
      <div className="relative h-full">
        <div 
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            gap: isLargeScreen ? '16px' : '0px',
          }}
        >
          {currentPageImages.map((src, index) => {
            const actualIndex = currentPage * imagesPerPage + index;
            return (
              <div
                key={actualIndex}
                className="relative h-full flex-shrink-0"
                style={{
                  width: `calc(${100 / imagesPerPage}% - ${isLargeScreen && imagesPerPage > 1 ? '8px' : '0px'})`,
                }}
              >
                <Image
                  src={src}
                  alt={`Slide ${actualIndex + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  priority={currentPage === 0}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-20"
        aria-label="Previous page"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-20"
        aria-label="Next page"
      >
        →
      </button> */}

      {/* Page Dots */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2 z-20">
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => setCurrentPage(pageIndex)}
            className={`rounded-full transition-colors ${
              currentPage === pageIndex ? 'bg-white' : 'bg-white/50'
            } w-2 h-2 sm:w-3 sm:h-3`}
            aria-label={`Go to page ${pageIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}