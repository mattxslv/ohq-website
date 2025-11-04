'use client';

import Link from "next/link";
import Image from "next/image";
import { Youtube, Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Media() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved !== null ? saved === 'true' : true;
    }
    return true;
  });

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className={`${isDarkMode ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-100'} backdrop-blur-lg shadow-md sticky top-0 z-50 border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/ohq-profile.jpg"
                alt="OHQ Logo"
                width={50}
                height={50}
                className="rounded-full ring-2 ring-amber-300 shadow-lg"
              />
              <div>
                <span className={`text-2xl font-bold ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>OHQ</span>
                <p className="text-xs text-slate-500">Once HQ</p>
              </div>
            </Link>
            <div className="hidden lg:flex items-center space-x-1">
              <Link href="/" className={`px-3 py-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'} rounded-lg transition font-medium text-sm`}>
                Home
              </Link>
              <Link href="/about" className={`px-3 py-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'} rounded-lg transition font-medium text-sm`}>
                About
              </Link>
              <Link href="/events" className={`px-3 py-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'} rounded-lg transition font-medium text-sm`}>
                Events
              </Link>
              <Link href="/tickets" className={`px-3 py-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'} rounded-lg transition font-medium text-sm`}>
                Tickets
              </Link>
              <Link href="/media" className={`px-3 py-2 ${isDarkMode ? 'text-white bg-slate-800' : 'text-white bg-slate-800'} rounded-lg font-medium text-sm`}>
                Media
              </Link>
              <Link href="/faq" className={`px-3 py-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'} rounded-lg transition font-medium text-sm`}>
                FAQ
              </Link>
              <button
                onClick={toggleDarkMode}
                className={`p-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'} rounded-lg transition`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <Link href="/contact" className={`px-4 py-2 ${isDarkMode ? 'bg-amber-600 hover:bg-amber-700' : 'bg-amber-600 hover:bg-amber-700'} text-white rounded-lg transition font-medium shadow-md hover:shadow-lg text-sm`}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className={`py-16 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-4`}>Media Gallery</h1>
          <p className={`text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Highlights from our events and gatherings</p>
        </div>
      </section>

      {/* Content */}
      <section className={`py-24 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Video Section */}
          <div className="mb-20">
            <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-8 flex items-center justify-center`}>
              <Youtube className="h-8 w-8 text-red-600 mr-3" />
              Random Play Dance Videos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((idx) => (
                <div key={idx} className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all`}>
                  <div className={`aspect-video ${isDarkMode ? 'bg-gradient-to-br from-slate-700 to-amber-900/30' : 'bg-gradient-to-br from-slate-200 to-amber-100'} flex items-center justify-center`}>
                    <div className="text-center">
                      <Youtube className={`h-16 w-16 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'} mx-auto mb-2`} />
                      <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'} font-medium`}>RPD Video {idx}</p>
                      <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Placeholder</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Add YouTube video link here</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Gallery */}
          <div>
            <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-8 text-center`}>
              Event Photos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((idx) => (
                <div key={idx} className={`aspect-square ${isDarkMode ? 'bg-gradient-to-br from-slate-700 to-amber-900/30' : 'bg-gradient-to-br from-slate-200 to-amber-100'} rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center justify-center cursor-pointer hover:scale-105`}>
                  <div className="text-center">
                    <div className="text-4xl mb-2">📸</div>
                    <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Photo {idx}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className={`text-center mt-8 ${isDarkMode ? 'text-slate-300 bg-amber-600/20 border-amber-600/30' : 'text-slate-600 bg-amber-50 border-amber-200'} p-4 rounded-lg border`}>
              Photo placeholders - Add your event photos here!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
