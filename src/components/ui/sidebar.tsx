'use client';

import { useState } from 'react';
import Image from 'next/image';

const sidebarItems = [
  { id: 1, title: 'Dashboard', icon: '/images/icons/sidebar-1.png' },
  { id: 2, title: 'Games', icon: '/images/icons/sidebar-2.png' },
  { id: 3, title: 'Sports', icon: '/images/icons/sidebar-3.png' },
  { id: 4, title: 'Live Casino', icon: '/images/icons/sidebar-4.png' },
  { id: 5, title: 'Slots', icon: '/images/icons/sidebar-5.png' },
  { id: 6, title: 'Poker', icon: '/images/icons/sidebar-6.png' },
  { id: 7, title: 'Blackjack', icon: '/images/icons/sidebar-7.png' },
  { id: 8, title: 'Roulette', icon: '/images/icons/sidebar-8.png' },
  { id: 9, title: 'Baccarat', icon: '/images/icons/sidebar-9.png' },
  { id: 10, title: 'Tournaments', icon: '/images/icons/sidebar-10.png' },
  { id: 11, title: 'Promotions', icon: '/images/icons/sidebar-11.png' },
  { id: 12, title: 'VIP Club', icon: '/images/icons/sidebar-12.png' },
  { id: 13, title: 'Support', icon: '/images/icons/sidebar-13.png' },
  { id: 14, title: 'History', icon: '/images/icons/sidebar-14.png' },
  { id: 15, title: 'Wallet', icon: '/images/icons/sidebar-15.png' },
  { id: 16, title: 'Settings', icon: '/images/icons/sidebar-16.png' },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-600/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-screen bg-slate-800 transition-transform duration-300 z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        w-16 lg:w-16 hover:w-64 lg:hover:w-64 group
      `}>
        <div className="flex flex-col h-full overflow-hidden">
          {/* Logo/Brand Area */}
          <div className="flex items-center justify-center h-17 bg-slate-900 border-b border-slate-700">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
          </div>
          
          {/* Navigation Items */}
          <div className="flex-1 py-4 overflow-y-auto scrollbar-hide">
            <nav className="space-y-1 px-2">
              {sidebarItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a
                    href="#"
                    className={`
                      flex items-center w-full px-3 py-3 text-sm font-medium rounded-lg
                      text-slate-300 hover:text-white hover:bg-slate-700
                      transition-all duration-200 group-hover:justify-start
                      ${hoveredItem === item.id ? 'bg-slate-700 text-white' : ''}
                    `}
                  >
                    <div className="flex-shrink-0 w-5 h-5 relative">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={20}
                        height={20}
                        className="w-full h-full object-contain opacity-70 group-hover:opacity-100"
                      />
                    </div>
                    <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap text-white">
                      {item.title}
                    </span>
                  </a>
                  
                  {/* Tooltip for non-hover state */}
                  {hoveredItem === item.id && (
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 bg-slate-900 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-0 lg:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                      {item.title}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}