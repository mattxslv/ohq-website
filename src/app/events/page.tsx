'use client';

import Link from "next/link";
import Image from "next/image";
import { Calendar, Gift, Music, Clock, Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Events() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved !== null ? saved === 'true' : true;
    }
    return true;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <Link href="/events" className={`px-3 py-2 ${isDarkMode ? 'text-white bg-slate-800' : 'text-white bg-slate-800'} rounded-lg font-medium text-sm`}>
                Events
              </Link>
              <Link href="/tickets" className={`px-3 py-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'} rounded-lg transition font-medium text-sm`}>
                Tickets
              </Link>
              <Link href="/media" className={`px-3 py-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'} rounded-lg transition font-medium text-sm`}>
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

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className={`p-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'} rounded-lg transition`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'} rounded-lg transition`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 space-y-2">
              <Link href="/" className={`block px-4 py-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'} rounded-lg transition font-medium`} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className={`block px-4 py-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'} rounded-lg transition font-medium`} onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/events" className={`block px-4 py-2 ${isDarkMode ? 'text-white bg-slate-800' : 'text-slate-800 bg-slate-100'} rounded-lg font-medium`} onClick={() => setIsMenuOpen(false)}>
                Events
              </Link>
              <Link href="/tickets" className={`block px-4 py-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'} rounded-lg transition font-medium`} onClick={() => setIsMenuOpen(false)}>
                Tickets
              </Link>
              <Link href="/media" className={`block px-4 py-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'} rounded-lg transition font-medium`} onClick={() => setIsMenuOpen(false)}>
                Media
              </Link>
              <Link href="/faq" className={`block px-4 py-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'} rounded-lg transition font-medium`} onClick={() => setIsMenuOpen(false)}>
                FAQ
              </Link>
              <Link href="/contact" className={`block px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition font-medium text-center`} onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Page Header */}
      <section className={`py-16 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-4`}>Events & Activities</h1>
          <p className={`text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Stay updated with our upcoming and past events</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className={`py-24 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className={`${isDarkMode ? 'text-amber-400' : 'text-amber-600'} font-bold text-sm uppercase tracking-wide`}>What&apos;s Next</span>
            <h2 className={`text-4xl sm:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mt-3 mb-4`}>
              Upcoming Activities (2024)
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'MISAMO Comeback "Haute Couture" Cup Sleeve Event', month: 'October', icon: Gift },
              { title: 'Hirai Momo Birthday Celebration', month: 'November', icon: Calendar },
              { title: 'Yoo Jeongyeon Birthday Celebration', month: 'November', icon: Calendar },
              { title: 'TWICE Comeback "Strategy" Celebration', month: 'December', icon: Music },
            ].map((event, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">{event.month} 2024</span>
                  <event.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg leading-tight">{event.title}</h3>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="inline-block bg-gradient-to-br from-amber-600 to-amber-700 p-6 rounded-2xl text-white">
              <Calendar className="h-6 w-6 inline-block mr-2" />
              <span className="font-bold">Minatozaki Sana Birthday Celebration - December 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className={`py-24 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className={`${isDarkMode ? 'text-amber-400' : 'text-amber-600'} font-bold text-sm uppercase tracking-wide`}>Recent Events</span>
            <h2 className={`text-4xl sm:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mt-3 mb-4`}>
              Recent Activities (2024)
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { title: '9randslam Homerun: TWICE 9th Anniversary Celebration', date: 'October 19, 2024' },
              { title: 'Im Nayeon Birthday Cup Sleeve Event', date: 'September 2024' },
              { title: 'Chou Tzuyu "abouTZU" Solo Debut Cup Sleeve Event', date: 'September 2024' },
              { title: 'DIVE With TWICE Fan Gathering', date: 'August 2024' },
              { title: 'Puppy Love: Chou Tzuyu Birthday Event', date: 'June 2024' },
              { title: 'One More Time With TWICE : (TWICE x OISHI) Fan Meet Cup Sleeve Event', date: 'June 2024' },
              { title: 'Lucky 7: Kim Dahyun Birthday Can Sleeve Event', date: 'May 2024' },
              { title: 'Taste of Ttalgi: Son Chaeyoung Birthday Can Sleeve Event', date: 'April 2024' },
              { title: 'Club Miguin: Mina Birthday Gathering', date: 'March 2024' },
              { title: 'Our Youth With TWICE: With You-th Comeback Fan Gathering', date: 'February 2024' },
              { title: 'Ambitious Park Jihyo: Park Jihyo Birthday Fan Gathering', date: 'January 2024' },
            ].map((activity, idx) => (
              <div key={idx} className={`${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-white border-slate-200'} border p-6 rounded-xl hover:border-amber-300 hover:shadow-lg transition-all flex items-start justify-between`}>
                <div className="flex items-start space-x-4">
                  <div className={`${isDarkMode ? 'bg-amber-600/20' : 'bg-amber-100'} p-3 rounded-lg`}>
                    <Clock className={`h-6 w-6 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                  </div>
                  <div>
                    <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} text-lg mb-1`}>{activity.title}</h3>
                    <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-500'} text-sm`}>{activity.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={`mt-8 p-6 ${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-white border-slate-200'} rounded-xl border text-center shadow-lg`}>
            <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              <strong>Disclaimer:</strong> Information displayed may change without prior notice. Please refer to our social media accounts for updates.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-slate-950' : 'bg-slate-900'} text-white py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-slate-400 bg-clip-text text-transparent">
                Once HQ
              </h3>
              <p className="text-slate-400">
                Your home for TWICE celebrations and community since 2018
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
                <li><Link href="/events" className="hover:text-amber-400 transition-colors">Events</Link></li>
                <li><Link href="/media" className="hover:text-amber-400 transition-colors">Media</Link></li>
                <li><Link href="/faq" className="hover:text-amber-400 transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Connect With Us</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="https://www.facebook.com/OnceHeadquarters" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                    Facebook: @OnceHeadquarters
                  </a>
                </li>
                <li>
                  <a href="https://x.com/oncehq" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                    Twitter/X: @oncehq
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/oncehq/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                    Instagram: @oncehq
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Once HQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
