'use client';

import Link from "next/link";
import Image from "next/image";
import { Heart, Star, TrendingUp, Gift, Award, Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

export default function About() {
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
              <Link href="/about" className={`px-3 py-2 ${isDarkMode ? 'text-white bg-slate-800' : 'text-slate-800 bg-slate-100'} rounded-lg font-medium text-sm`}>
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
              <Link href="/contact" className={`px-4 py-2 ${isDarkMode ? 'bg-amber-600 hover:bg-amber-700' : 'bg-slate-800 hover:bg-slate-700'} text-white rounded-lg transition font-medium shadow-md hover:shadow-lg text-sm`}>
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
              <Link href="/about" className={`block px-4 py-2 ${isDarkMode ? 'text-white bg-slate-800' : 'text-slate-800 bg-slate-100'} rounded-lg font-medium`} onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/events" className={`block px-4 py-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'} rounded-lg transition font-medium`} onClick={() => setIsMenuOpen(false)}>
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
              <Link href="/contact" className={`block px-4 py-2 ${isDarkMode ? 'bg-amber-600 hover:bg-amber-700' : 'bg-slate-800 hover:bg-slate-700'} text-white rounded-lg transition font-medium text-center`} onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Page Header */}
      <section className={`py-16 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-4`}>About ONCE HQ</h1>
          <p className={`text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Learn about our journey, mission, and impact</p>
        </div>
      </section>

      {/* Our Story */}
      <section className={`py-24 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className={`${isDarkMode ? 'text-amber-400' : 'text-amber-600'} font-bold text-sm uppercase tracking-wide`}>Our Story</span>
              <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mt-3 mb-6`}>Who We Are</h2>
              <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed mb-6`}>
                We are a <strong>non-profit TWICE fan organization</strong> founded in <strong>2018</strong> and based in <strong>Metro Manila, Philippines</strong>. We host regular social events dedicated to celebrating TWICE&apos;s members, milestones, and advocacies.
              </p>
              <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                Since our inception, we&apos;ve brought together thousands of ONCE members through memorable gatherings, charity drives, and community celebrations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className={`bg-gradient-to-br ${isDarkMode ? 'from-slate-700 to-slate-800' : 'from-slate-700 to-slate-800'} p-6 rounded-2xl text-white text-center ${isDarkMode ? 'border-slate-700' : 'border-slate-200'} border shadow-lg`}>
                <div className="text-4xl font-bold mb-2">2018</div>
                <div className="text-slate-300">Founded</div>
              </div>
              <div className={`bg-gradient-to-br from-amber-600 to-amber-700 p-6 rounded-2xl text-white text-center ${isDarkMode ? 'border-amber-700' : 'border-slate-200'} border shadow-lg`}>
                <div className="text-4xl font-bold mb-2">2000+</div>
                <div className="text-amber-100">Attendees</div>
              </div>
              <div className={`bg-gradient-to-br from-amber-600 to-slate-700 p-6 rounded-2xl text-white text-center ${isDarkMode ? 'border-amber-700' : 'border-slate-200'} border shadow-lg`}>
                <div className="text-4xl font-bold mb-2">19</div>
                <div className="text-amber-100">Gatherings</div>
              </div>
              <div className={`bg-gradient-to-br from-slate-700 to-amber-700 p-6 rounded-2xl text-white text-center ${isDarkMode ? 'border-slate-700' : 'border-slate-200'} border shadow-lg`}>
                <div className="text-4xl font-bold mb-2">₱65K</div>
                <div className="text-slate-200">For Charity</div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'} p-10 rounded-2xl border shadow-lg`}>
              <div className="flex items-center mb-4">
                <Heart className={`h-8 w-8 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'} mr-3`} />
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Mission</h3>
              </div>
              <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'} leading-relaxed text-lg`}>
                To provide the PH ONCE Community with opportunities to grow and enjoy their journey as a fan of TWICE via meaningful social activities.
              </p>
            </div>
            <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'} p-10 rounded-2xl border shadow-lg`}>
              <div className="flex items-center mb-4">
                <Star className={`h-8 w-8 ${isDarkMode ? 'text-amber-400' : 'text-slate-700'} mr-3`} />
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Vision</h3>
              </div>
              <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'} leading-relaxed text-lg`}>
                A community conducive to personal growth and well-being, grounded and supported by unselfish service, where all TWICE members are unequivocally loved and supported and whose members are allowed to demonstrate their passion for the group freely and respectfully.
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="text-center mb-12">
              <span className={`${isDarkMode ? 'text-amber-400' : 'text-amber-600'} font-bold text-sm uppercase tracking-wide`}>Our Impact</span>
              <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mt-3 mb-4`}>Activities & Collaborations</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-8 rounded-xl shadow-lg border text-center`}>
                <TrendingUp className={`h-10 w-10 ${isDarkMode ? 'text-amber-400' : 'text-slate-700'} mx-auto mb-4`} />
                <div className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-2`}>19</div>
                <div className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'} font-medium`}>PH ONCE Gatherings</div>
                <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mt-1`}>2000+ attendees</div>
              </div>
              <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-8 rounded-xl shadow-lg border text-center`}>
                <Gift className={`h-10 w-10 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'} mx-auto mb-4`} />
                <div className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-2`}>21</div>
                <div className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'} font-medium`}>Can/Cup Sleeve Events</div>
                <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mt-1`}>2500+ drinks & sleeves sold</div>
              </div>
              <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-8 rounded-xl shadow-lg border text-center`}>
                <Heart className={`h-10 w-10 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'} mx-auto mb-4`} />
                <div className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-2`}>5</div>
                <div className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'} font-medium`}>Charity Drives</div>
                <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mt-1`}>₱65,000 raised & donated</div>
              </div>
              <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-8 rounded-xl shadow-lg border text-center`}>
                <Award className={`h-10 w-10 ${isDarkMode ? 'text-amber-400' : 'text-slate-700'} mx-auto mb-4`} />
                <div className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-2`}>4+</div>
                <div className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'} font-medium`}>Major Collaborations</div>
                <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mt-1`}>With brands & platforms</div>
              </div>
            </div>

            {/* Collaborations List */}
            <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'} rounded-2xl shadow-xl p-8 md:p-12 border`}>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-8 text-center`}>Featured Collaborations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "SPOTIFY Alcohol-Free Comeback Promotion",
                  "#ShopeePHxTWICE Live Guest Participation",
                  "GLOBE KmmunityPH K'tizens' Choice Awards 2022",
                  "#JustLikeTTT Shuttle Service for TWICE READY TO BE IN BULACAN Concert"
                ].map((collab, idx) => (
                  <div key={idx} className={`flex items-start space-x-3 p-4 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-50'} rounded-lg`}>
                    <div className={`h-6 w-6 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'} flex-shrink-0 mt-0.5`}>✓</div>
                    <span className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'} font-medium`}>{collab}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In The News */}
      <section className={`py-24 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className={`${isDarkMode ? 'text-amber-400' : 'text-amber-600'} font-bold text-sm uppercase tracking-wide`}>Press Coverage</span>
            <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mt-3 mb-4`}>ONCE HQ in the News</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { outlet: "Dojeon Media", title: "PH ONCEs Gear Up for TWICE's 9th Anniversary Fan Gathering!" },
              { outlet: "Rappler", title: "One More Time With TWICE - Oishi Fan Meet Cup Sleeve Event" },
              { outlet: "Stan by Me", title: "The TWICE fan community in the Philippines" },
              { outlet: "WhenInManila", title: "ONCEs to Hold K-Pop Party for Twice's Upcoming 'Ready To Be' Manila Tour!" },
            ].map((news, idx) => (
              <div key={idx} className={`${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-white border-slate-100'} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border`}>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-3 rounded-lg shrink-0">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${isDarkMode ? 'text-amber-400' : 'text-amber-600'} mb-2`}>{news.outlet}</p>
                    <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} text-lg leading-tight`}>{news.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className={`py-24 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className={`${isDarkMode ? 'text-amber-400' : 'text-amber-600'} font-bold text-sm uppercase tracking-wide`}>Trusted By</span>
            <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mt-3 mb-4`}>Our Partners</h2>
            <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Collaborating with amazing brands</p>
          </div>

          <div className="flex justify-center items-center">
            <div className={`${isDarkMode ? 'bg-slate-800 border-amber-600' : 'bg-white border-amber-200'} border-2 p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all`}>
              <div className="text-center">
                <div className={`text-6xl font-bold ${isDarkMode ? 'text-amber-400' : 'text-amber-600'} mb-4`}>POND&apos;S</div>
                <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} font-medium`}>Beauty Partner</p>
              </div>
            </div>
          </div>
          <p className={`text-center mt-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>More partners coming soon!</p>
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
