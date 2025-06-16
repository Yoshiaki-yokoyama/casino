'use client';

import Image from 'next/image';
import Slider from './hero-section/slider';

export default function HeroSection() {
  // Carousel images array
  const carouselImages = [
    '/images/image-1.png',
    '/images/image-2.png',
    '/images/image-3.png',
    '/images/image-4.png',
    '/images/image-5-1.png',
    '/images/image-5-2.png',
    '/images/image-5-3.png',
    '/images/image-5-4.png'
  ];

  return (
    <div className="w-full space-y-4 min-h-[calc(100vh-120px)] flex flex-col">
      {/* Top Section - Carousel */}
      <div className="relative w-full h-[50vh]">
        <Slider images={carouselImages} className="w-full h-full" />

      </div>
        {/* Mobile Buttons */}
        <div className="w-full lg:hidden   z-30 w-full max-w-md px-4 flex gap-3">
          <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition">
            LOG IN
          </button>
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition">
            SIGN UP
          </button>
        </div>


      {/* Bottom Section - Grid Layout */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {/* First Section - Single Image */}
        <div className="relative h-48 lg:h-56">
          <Image
            src="/images/image-3.png"
            alt="Welcome Bonus"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>

        {/* Second Section - Single Image */}
        <div className="relative h-48 lg:h-56">
          <Image
            src="/images/image-4.png"
            alt="Cash Back"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>

        {/* Third Section - Four Images Grid */}
        <div className="col-span-2 lg:col-span-1">
          <div className="grid grid-cols-4 lg:grid-cols-2 gap-2 h-34 lg:h-56">
            <div className="relative">
              <Image
                src="/images/image-5-1.png"
                alt="Tournament"
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute top-1 right-1 bg-orange-500 text-white text-xs px-1 py-0.5 rounded">
                Tournament
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/image-5-2.png"
                alt="Wager Race"
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute top-1 right-1 bg-orange-500 text-white text-xs px-1 py-0.5 rounded">
                Tournament
              </div>
              <div className="absolute top-1 left-1 bg-black/50 text-white text-xs px-1 py-0.5 rounded flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
                08
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/image-5-3.png"
                alt="Octoplay"
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute top-1 left-1 bg-purple-500 text-white text-xs px-1 py-0.5 rounded">
                💎 Slot
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/image-5-4.png"
                alt="Big Time Gaming"
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute top-1 left-1 bg-blue-500 text-white text-xs px-1 py-0.5 rounded">
                🎰 Slot
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}