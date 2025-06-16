'use client';

import { useState } from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      
      {/* Main Content Area */}
      <div className="lg:ml-16 min-h-screen">
        {/* Navbar */}
        <Navbar onToggleSidebar={toggleSidebar} />
        
        {/* Page Content */}
        <main className="p-4 lg:p-6">
          <div className="max-w-7xl mx-auto text-white">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}