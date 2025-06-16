// app/page.tsx
import About from '@/components/main-page/about';
import HeroSection from '@/components/main-page/mainPage';
import Payments from '@/components/main-page/payments';
import GameSearchSection from '@/components/main-page/Search';
import Footer from '@/components/ui/footer';
import MainSlide from '@/components/ui/mainSlide';
import BottomNavBar from '@/components/ui/MobileNavbar';
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


const hotGames = [
  '/images/hot-games/hot-1.png',
  '/images/hot-games/hot-2.png',
  '/images/hot-games/hot-3.png',
  '/images/hot-games/hot-4.png',
  '/images/hot-games/hot-5.png',
  '/images/hot-games/hot-6.png',
  '/images/hot-games/hot-7.png',
  '/images/hot-games/hot-8.png',
  '/images/hot-games/hot-1.png',
  '/images/hot-games/hot-2.png',
  '/images/hot-games/hot-3.png',
  '/images/hot-games/hot-4.png'
];

const bonusBuyGames = [
  '/images/bonus-buy/bonus-1.png',
  '/images/bonus-buy/bonus-2.png',
  '/images/bonus-buy/bonus-3.png',
  '/images/bonus-buy/bonus-4.png',
  '/images/bonus-buy/bonus-5.png',
  '/images/bonus-buy/bonus-6.png',
  '/images/bonus-buy/bonus-7.png',
  '/images/bonus-buy/bonus-8.png',
  '/images/bonus-buy/bonus-1.png',
  '/images/bonus-buy/bonus-2.png',
    '/images/bonus-buy/bonus-3.png',
    '/images/bonus-buy/bonus-4.png'
];


const liveGames = [
  '/images/live-games/live-1.png',
  '/images/live-games/live-2.png',
  '/images/live-games/live-3.png',
  '/images/live-games/live-4.png',
  '/images/live-games/live-5.png',
  '/images/live-games/live-6.png',
  '/images/live-games/live-7.png',
  '/images/live-games/live-8.png',
  '/images/live-games/live-1.png',
  '/images/live-games/live-2.png',
  '/images/live-games/live-3.png',
  '/images/live-games/live-4.png'
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
      
      {/* Hot Games Slider */}
      <MainSlide 
        title="Hot Games" 
        icon="/images/hot-games/hot.png" 
        images={hotGames} 
      />

      {/* Bonus Buy Games Slider */}
      <MainSlide 
        title="Bonus Buy" 
        icon="/images/bonus-buy/bonus.png" 
        images={bonusBuyGames} 
      />

      {/* Live Games Slider */}
      <MainSlide 
        title="Live Games" 
        icon="/images/live-games/live.png" 
        images={liveGames} 
      />

            {/* Providers Section */}
            <Providers />
          
            {/* Payments Section */}
            <Payments />

              {/* About Section */}
              <About />

            {/* Footer Section */}
            <Footer />

      {/* Mobile Bottom Navbar */}
      <BottomNavBar />
     
    </div>
  );
}