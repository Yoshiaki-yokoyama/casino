'use client';

import { useState } from 'react';
import Image from 'next/image';

interface NavbarProps {
  onToggleSidebar: () => void;
}

export default function Navbar({ onToggleSidebar }: NavbarProps) {
  const [balance] = useState(10566.12);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    { id: 1, message: "Your deposit of $500 has been processed", time: "2 minutes ago" },
    { id: 2, message: "New game available: Lucky Spin", time: "1 hour ago" },
    { id: 3, message: "Weekly bonus credits added to your account", time: "3 hours ago" }
  ];

  return (
    <nav className="sticky top-0 bg-slate-800 border-b border-slate-700 px-4 py-3 z-40">
      <div className="flex items-center justify-between">
        {/* Left Side - Menu Button (Mobile) */}
        <div className="flex items-center">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Spacer for mobile */}
        <div className="flex-1 lg:hidden"></div>

        {/* Right Side - Balance and Actions */}
        <div className="flex items-center space-x-3">
          {/* Balance */}
          <div className="flex items-center bg-slate-900 rounded-lg px-4 py-2 border border-slate-600">
            <span className="text-green-400 text-xl font-bold mr-2">$</span>
            <span className="text-white text-lg font-semibold">
              {balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>

          {/* Deposit Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 hidden sm:flex items-center cursor-pointer">
            <Image
              src="/images/icons/deposit.png"
              alt="Deposit"
              width={16}
              height={16}
              className="mr-2"
            />
            DEPOSIT
          </button>
          
          {/* Deposit Icon (Mobile) */}
          <button className="sm:hidden bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-200 cursor-pointer">
            <Image
              src="/images/icons/deposit.png"
              alt="Deposit"
              width={20}
              height={20}
            />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button 
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-colors duration-200 relative cursor-pointer"
              onMouseEnter={() => setShowNotifications(true)}
              onMouseLeave={() => setShowNotifications(false)}
            >
              <Image
                src="/images/icons/bell.png"
                alt="Notifications"
                width={20}
                height={20}
                className="opacity-70 hover:opacity-100"
              />
              {/* Notification Badge */}
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div 
                className="absolute right-0 top-full mt-2 w-80 bg-slate-800 border border-slate-600 rounded-lg shadow-xl z-50"
                onMouseEnter={() => setShowNotifications(true)}
                onMouseLeave={() => setShowNotifications(false)}
              >
                <div className="p-4 border-b border-slate-600">
                  <h3 className="text-white font-semibold">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="p-4 border-b border-slate-700 hover:bg-slate-700 transition-colors cursor-pointer">
                      <p className="text-white text-sm mb-1">{notification.message}</p>
                      <p className="text-slate-400 text-xs">{notification.time}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-slate-600">
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium w-full text-center">
                    View All Notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button 
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-colors duration-200 cursor-pointer"
              onMouseEnter={() => setShowProfile(true)}
              onMouseLeave={() => setShowProfile(false)}
            >
              <Image
                src="/images/icons/profile.png"
                alt="Profile"
                width={20}
                height={20}
                className="opacity-70 hover:opacity-100"
              />
            </button>

            {/* Profile Dropdown */}
            {showProfile && (
              <div 
                className="absolute right-0 top-full mt-2 w-48 bg-slate-800 border border-slate-600 rounded-lg shadow-xl z-50"
                onMouseEnter={() => setShowProfile(true)}
                onMouseLeave={() => setShowProfile(false)}
              >
                <div className="p-4 border-b border-slate-600">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center">
                      <Image
                        src="/images/icons/profile.png"
                        alt="Profile"
                        width={20}
                        height={20}
                        className="opacity-70"
                      />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">John Doe</p>
                      <p className="text-slate-400 text-xs">Premium Member</p>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <button className="w-full cursor-pointer px-4 py-2 text-left text-white hover:bg-slate-700 transition-colors text-sm">
                    My Account
                  </button>
                  <button className="w-full cursor-pointer px-4 py-2 text-left text-white hover:bg-slate-700 transition-colors text-sm">
                    Game History
                  </button>
                  <button className="w-full cursor-pointer px-4 py-2 text-left text-white hover:bg-slate-700 transition-colors text-sm">
                    Settings
                  </button>
                  <button className="w-full cursor-pointer px-4 py-2 text-left text-white hover:bg-slate-700 transition-colors text-sm">
                    Support
                  </button>
                </div>
                <div className="border-t border-slate-600 py-2">
                  <button className="w-full cursor-pointer px-4 py-2 text-left text-red-400 hover:bg-slate-700 transition-colors text-sm">
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}