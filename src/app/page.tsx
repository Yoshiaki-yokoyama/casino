// app/page.tsx
import About from '@/components/main-page/about';
import HeroSection from '@/components/main-page/mainPage';
import Payments from '@/components/main-page/payments';
import GameSearchSection from '@/components/main-page/Search';
import Footer from '@/components/ui/footer';
import MainSlide from '@/components/ui/mainSlide';
import Providers from '@/components/ui/providers';

const featuredGames = [
  '/images/featured-games/featured-1.png',
  '/images/featured-games/featured-2.png',
  '/images/featured-games/featured-3.png',
  '/images/featured-games/featured-4.png',
  '/images/featured-games/featured-5.png',
  '/images/featured-games/featured-6.png',
  '/images/featured-games/featured-7.png',
  '/images/featured-games/featured-8.png',
  '/images/featured-games/featured-1.png',
  '/images/featured-games/featured-2.png',
  '/images/featured-games/featured-3.png',
  '/images/featured-games/featured-4.png'
];

const newReleases = [
  '/images/new-releases/release-1.png',
  '/images/new-releases/release-2.png',
  '/images/new-releases/release-3.png',
  '/images/new-releases/release-4.png',
  '/images/new-releases/release-5.png',
  '/images/new-releases/release-6.png',
  '/images/new-releases/release-7.png',
  '/images/new-releases/release-8.png',
  '/images/new-releases/release-1.png',
  '/images/new-releases/release-2.png',
  '/images/new-releases/release-3.png',
  '/images/new-releases/release-4.png'
];

const popularGames = [
  '/images/image-1.png',
  '/images/image-2.png',
  '/images/image-3.png',
  '/images/image-4.png',
  '/images/image-1.png',
  '/images/image-2.png',
  '/images/image-3.png',
  '/images/image-4.png',
  '/images/image-1.png',
  '/images/image-2.png',
  '/images/image-3.png',
  '/images/image-4.png'
];

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <HeroSection />
      <GameSearchSection />
      
      {/* Featured Games Slider */}
      <MainSlide 
        title="Featured Games" 
        icon="/images/featured-games/featured.png" 
        images={featuredGames} 
      />

      {/* New Releases Slider */}
      <MainSlide 
        title="New Releases" 
        icon="/images/new-releases/release.png" 
        images={newReleases} 
      />
      
      {/* Popular Games Slider */}
      <MainSlide 
        title="Popular Games" 
        icon="/images/icons/icon-1.png" 
        images={popularGames} 
      />

            {/* Providers Section */}
            <Providers />
          
            {/* Payments Section */}
            <Payments />

              {/* About Section */}
              <About />

            {/* Footer Section */}
            <Footer />

     
    </div>
  );
}