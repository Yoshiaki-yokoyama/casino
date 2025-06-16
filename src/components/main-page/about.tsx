// components/ui/main-page/about.tsx
"use client";

import { useState } from 'react';
// import Image from 'next/image';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-900 to-gray-800 px-4 py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">******* Casino</h2>
            <div className={`relative ${!isExpanded ? 'max-h-84 overflow-hidden' : ''}`}>
              <div className={`text-white/80 space-y-4 ${!isExpanded ? 'pb-2' : ''}`}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Porta elementum a enim euismod quam justo lectus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Vitae pellentesque sem placerat in id cursus mi. Velti aliquam imperdiet mollis nullam volutpat porttitor ullamcorper. Mattis scelerisque maximus eget fermentum odio phaseius non. Tempus leo eu denean sed diam urna tempor. Turgis fames primis vulputate omere sagittis vehicula praesent. Motiris pharetri vestibulum fusce dictum risus blandit quis. Nec metus bibendum agestas loculis massa nisi molestadio. Proin libero feugiat tristique accumsan maecenas potenti ultricies. Consequat magna ante condimentum neque et luctus nibh. Ut hendrerit semper vel class aptent taciti sociosquam. Suscipit auctor aurabilur facilisit utalila curiae hac habitasse. Interdum tortor ligula congue sollicitudin erat viverra ca. Conubia nostra insegtes himeneaea orci varius natoque penatibus. Dolor sit amet consectetur adipiscing elit quisque faucibus. Aerim euismod quam justo lectus commodo augue. Montes nascetur ridiculus mus donec rhoncus eros lobortis. Sem placerat in id cursus mi pretium tellus. Imperdiet mollis nullam volutpat porttitor ullamcorper rutrum gravida. Maximus eget fermentum odio phaseius non purus est. Eu denean sed diam urna tempor pulvinar vivamus. Primis vulputate omere sagittis vehicula praesent dui felis. Vestibulum fusce dictum risus blandit quis suspendisse
                </p>
              </div>
              
              {!isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-gray-800 to-transparent"></div>
              )}
            </div>
            
            <div className="flex justify-center mt-4">
              <button
                onClick={toggleExpand}
                className="md:w-1/3 w-full px-12 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
              >
                {isExpanded ? 'READ LESS' : 'READ MORE'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}