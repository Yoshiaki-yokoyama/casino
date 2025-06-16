// components/ui/BottomNavBar.tsx
import React from 'react';
import { Home, Search, MessageCircle, Menu } from 'lucide-react';

const BottomNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-800 border-t border-slate-700 md:hidden">
      <div className="flex items-center justify-around py-2 px-4">
        {/* Home */}
        <button className="flex flex-col items-center justify-center p-2 text-white hover:text-blue-400 transition-colors">
          <div className="w-6 h-6 mb-1">
            <Home size={24} />
          </div>
          <span className="text-xs font-medium">Home</span>
        </button>

        {/* Search */}
        <button className="flex flex-col items-center justify-center p-2 text-white hover:text-blue-400 transition-colors">
          <div className="w-6 h-6 mb-1">
            <Search size={24} />
          </div>
          <span className="text-xs font-medium">Search</span>
        </button>

        {/* Center Action Button */}
        <button className="flex flex-col items-center justify-center p-2">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-blue-500 rounded-sm"></div>
            </div>
          </div>
        </button>

        {/* Chat */}
        <button className="flex flex-col items-center justify-center p-2 text-white hover:text-blue-400 transition-colors">
          <div className="w-6 h-6 mb-1">
            <MessageCircle size={24} />
          </div>
          <span className="text-xs font-medium">Chat</span>
        </button>

        {/* Menu */}
        <button className="flex flex-col items-center justify-center p-2 text-white hover:text-blue-400 transition-colors">
          <div className="w-6 h-6 mb-1">
            <Menu size={24} />
          </div>
          <span className="text-xs font-medium">Menu</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavBar;