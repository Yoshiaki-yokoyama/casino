'use client'

import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const GameSearchSection = () => {
  const [activeButton, setActiveButton] = useState('All Games');
  const [searchValue, setSearchValue] = useState('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const gameButtons = [
    { name: 'All Games', hasDropdown: false, icon: '/images/icons/sidebar-4.png' },
    { name: 'Slots', hasDropdown: false, icon: '/images/icons/sidebar-5.png' },
    { name: 'Blackjack', hasDropdown: false, icon: '/images/icons/sidebar-6.png' },
    { name: 'Roulette', hasDropdown: false, icon: '/images/icons/sidebar-7.png' },
    { name: 'Live', hasDropdown: false, icon: '/images/icons/sidebar-8.png' },
    { name: 'Baccarat', hasDropdown: false, icon: '/images/icons/sidebar-9.png' },
    { name: 'Crash', hasDropdown: false, icon: '/images/icons/sidebar-10.png' },
    { name: 'Dice', hasDropdown: false, icon: '/images/icons/sidebar-10.png' },
    { name: 'Collections', hasDropdown: true, icon: '/images/icons/sidebar-10.png' },
    { name: 'Providers', hasDropdown: true, icon: '/images/icons/sidebar-10.png' },
  ];

  type DropdownOptionKey = 'Collections' | 'Providers';
  const dropdownOptions: Record<DropdownOptionKey, string[]> = {
    Collections: ['Popular', 'New', 'Jackpot'],
    Providers: ['Pragmatic Play', 'Evolution', 'NetEnt'],
  };

  const handleButtonClick = (buttonName: string, hasDropdown: boolean) => {
    if (hasDropdown) {
      setOpenDropdown(openDropdown === buttonName ? null : buttonName);
    } else {
      setOpenDropdown(null);
    }
    setActiveButton(buttonName);
  };

  return (
    <div className="bg-slate-800 p-4 ">
      {/* Search Bar */}
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search your game"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="w-full overflow-x-auto scrollbar-hide pb-2">
        <div className="flex justify-between gap-2 w-full ">
          {gameButtons.map((button) => (
            <div key={button.name} className="">
              <button
                onClick={() => handleButtonClick(button.name, button.hasDropdown)}
                className={`flex w-max items-center justify-between gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeButton === button.name
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={button.icon}
                    alt={`${button.name} icon`}
                    width={100}
                    height={100}
                    className="w-4 h-4 opacity-70"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <span className="text-sm font-medium">{button.name}</span>
                </div>

                {button.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>

              {/* Dropdown (if applicable) */}
              {button.hasDropdown && openDropdown === button.name && (
                <div className="absolute z-10 mt-1 w-48 bg-slate-700 rounded-lg shadow-lg border border-slate-600">
                  {dropdownOptions[button.name as DropdownOptionKey]?.map((option: string) => (
                    <div
                      key={option}
                      className="px-4 py-2 text-sm text-white hover:bg-slate-600 cursor-pointer first:rounded-t-lg last:rounded-b-lg"
                      onClick={() => {
                        setActiveButton(`${button.name}: ${option}`);
                        setOpenDropdown(null);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameSearchSection;