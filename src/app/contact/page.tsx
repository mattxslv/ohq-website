'use client';

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, MessageCircle, Mail, Phone, Sparkles, Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Contact() {
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
              <Link href="/events" className={`px-3 py-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'} rounded-lg transition font-medium text-sm`}>
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
              <Link href="/contact" className="px-4 py-2 bg-amber-600 text-white rounded-lg font-medium shadow-md text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className={`py-16 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-4`}>Get In Touch</h1>
          <p className={`text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Join our community and stay connected with fellow ONCE</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className={`py-24 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Sparkles className={`h-12 w-12 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'} mx-auto mb-4`} />
            <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-4`}>Join Our Community</h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} max-w-2xl mx-auto`}>
              Stay updated on upcoming events, connect with fellow ONCE, and never miss a celebration
            </p>
          </div>

          {/* Social Media Links */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <a href="https://www.facebook.com/OnceHeadquarters" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl hover:shadow-2xl transition-all text-center group hover:-translate-y-1">
              <Facebook className="h-12 w-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-white text-xl mb-2">Facebook</h3>
              <p className="text-blue-100 text-sm">Join our Facebook group</p>
            </a>
            <a href="https://x.com/oncehq" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-sky-400 to-sky-500 p-8 rounded-2xl hover:shadow-2xl transition-all text-center group hover:-translate-y-1">
              <Twitter className="h-12 w-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-white text-xl mb-2">Twitter/X</h3>
              <p className="text-sky-100 text-sm">Follow us for updates</p>
            </a>
            <a href="https://www.instagram.com/oncehq/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-pink-500 to-purple-600 p-8 rounded-2xl hover:shadow-2xl transition-all text-center group hover:-translate-y-1">
              <MessageCircle className="h-12 w-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-white text-xl mb-2">Instagram</h3>
              <p className="text-purple-100 text-sm">Follow us on Instagram</p>
            </a>
          </div>

          {/* Contact Information */}
          <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'} p-10 rounded-2xl border shadow-xl`}>
            <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-8 text-center`}>Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-white'} p-6 rounded-xl shadow-md`}>
                <div className="flex items-start space-x-4">
                  <div className={`${isDarkMode ? 'bg-amber-600/20' : 'bg-amber-100'} p-3 rounded-lg`}>
                    <Mail className={`h-6 w-6 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                  </div>
                  <div>
                    <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-2 text-lg`}>Email Us</h4>
                    <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>oncehq@example.com</p>
                    <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mt-1`}>We&apos;ll respond within 24-48 hours</p>
                  </div>
                </div>
              </div>
              <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-white'} p-6 rounded-xl shadow-md`}>
                <div className="flex items-start space-x-4">
                  <div className={`${isDarkMode ? 'bg-slate-600' : 'bg-slate-200'} p-3 rounded-lg`}>
                    <Phone className={`h-6 w-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`} />
                  </div>
                  <div>
                    <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-2 text-lg`}>Contact Number</h4>
                    <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>+63 XXX XXX XXXX</p>
                    <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mt-1`}>Available during events</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="mt-12 text-center">
            <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-4`}>Our Location</h3>
            <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Metro Manila, Philippines</p>
            <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mt-2`}>Events held in various malls across Metro Manila</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Become part of the largest TWICE fan community in the Philippines!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.facebook.com/OnceHeadquarters" target="_blank" rel="noopener noreferrer" className="bg-amber-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-amber-700 shadow-2xl transform hover:scale-105 transition-all">
              Join Facebook Group
            </a>
            <Link href="/events" className="bg-transparent text-white border-2 border-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all">
              View Events
            </Link>
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
