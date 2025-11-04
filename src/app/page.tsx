'use client';

import Link from "next/link";
import Image from "next/image";
import { Users, Gift, Music, ChevronDown, Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

function FAQAccordion({ isDark }: { isDark: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is ONCE HQ?",
      a: "ONCE HQ is a fan organization dedicated to supporting TWICE, a South Korean girl group. We organize fan events, create community activities, and engage with the local members of TWICE's fandom, known as ONCE."
    },
    {
      q: "Who can join the ONCE HQ Community?",
      a: "Any TWICE fan (ONCE) can join the community, regardless of location or background and providing they observe behavior guidelines. We welcome fans who want to actively participate in fan events and support TWICE."
    },
    {
      q: "How can I become a member?",
      a: "You can join the community simply by joining our Facebook group, interacting with our posts, and attending our events!"
    },
    {
      q: "What events does ONCE HQ organize?",
      a: "ONCE HQ organizes various events, including fan gatherings, anniversary celebrations, birthday projects, and charity events in the name of TWICE. Major gatherings are usually in mall venues held to celebrate special milestones such as anniversaries and comebacks."
    },
    {
      q: "Do I need to pay to join or attend events?",
      a: "Joining ONCE HQ events is usually free. However, ONCE HQ may produce and sell fan-made items to help cover costs for venue, merchandise, or giveaways. We ensure that these fees are affordable, and all proceeds go toward making the events enjoyable for all."
    },
    {
      q: "Is ONCE HQ affiliated with JYP Entertainment or TWICE?",
      a: "ONCE HQ is a fan-driven, unofficial organization. We are not affiliated with JYP Entertainment, TWICE, or their management, but we operate with the goal of supporting TWICE in a respectful and dedicated manner."
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <div key={idx} className={`border ${isDark ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'} rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
          <button
            onClick={() => toggleFAQ(idx)}
            className={`w-full px-6 py-4 flex items-center justify-between text-left ${isDark ? 'hover:bg-slate-700' : 'hover:bg-slate-50'} transition-colors`}
          >
            <span className={`font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'} pr-4`}>{faq.q}</span>
            <ChevronDown 
              className={`h-5 w-5 text-amber-600 flex-shrink-0 transition-transform duration-200 ${
                openIndex === idx ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === idx ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <p className={`px-6 pb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize from localStorage if available, otherwise default to true
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved !== null ? saved === 'true' : true;
    }
    return true; // Default to dark mode
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
  };

  return (
    <div className={isDarkMode ? 'min-h-screen bg-slate-900' : 'min-h-screen bg-white'}>
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
                <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Once HQ</p>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link href="/" className={`px-3 py-2 ${isDarkMode ? 'text-white bg-slate-800' : 'text-slate-800 bg-slate-100'} rounded-lg font-medium text-sm`}>
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
              <Link href="/" className={`block px-4 py-2 ${isDarkMode ? 'text-white bg-slate-800' : 'text-slate-800 bg-slate-100'} rounded-lg font-medium`} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className={`block px-4 py-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'} rounded-lg transition font-medium`} onClick={() => setIsMenuOpen(false)}>
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

      {/* Hero Section */}
      <section className={`relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-slate-100 via-white to-slate-50'}`}>
        <div className="relative w-full py-32">
          {/* Decorative elements for dark mode */}
          {isDarkMode && (
            <>
              <div className="absolute top-20 left-10 w-72 h-72 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-72 h-72 bg-slate-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
            </>
          )}
          
          {/* Hero Content */}
          <div className="relative flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="mb-6">
                <span className={`inline-block px-4 py-2 ${isDarkMode ? 'bg-amber-600/80 text-white' : 'bg-amber-600 text-white'} rounded-full text-sm font-semibold backdrop-blur-sm`}>
                  🍭 TWICE Fan Community Since 2018
                </span>
              </div>
              <h1 className={`text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'} drop-shadow-2xl`}>
                Once HQ
              </h1>
              <p className={`text-xl sm:text-2xl ${isDarkMode ? 'text-gray-200' : 'text-slate-600'} mb-10 max-w-3xl mx-auto font-medium drop-shadow-lg`}>
                Your home for TWICE celebrations, gatherings, and unforgettable moments with fellow ONCE
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/events"
                  className="bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-700 shadow-2xl hover:shadow-amber-600/50 transform hover:scale-105 transition-all"
                >
                  View Events
                </Link>
                <Link
                  href="/about"
                  className={`${isDarkMode ? 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20' : 'bg-white/95 backdrop-blur-sm text-slate-900 hover:bg-white'} px-8 py-4 rounded-xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className={`py-24 ${isDarkMode ? 'bg-slate-800' : 'bg-gradient-to-b from-slate-50 to-white'} relative overflow-hidden`}>
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className={`${isDarkMode ? 'text-amber-400' : 'text-slate-700'} font-bold text-sm uppercase tracking-wide`}>What We Do</span>
            <h2 className={`text-4xl sm:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mt-3 mb-4`}>
              Bringing ONCE Together
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} max-w-2xl mx-auto`}>
              OHQ creates memorable experiences for TWICE fans through exciting events and community activities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/events" className={`group ${isDarkMode ? 'bg-slate-700/50 border-slate-600' : 'bg-gradient-to-br from-white to-amber-50/30 border-slate-200'} border p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-amber-300 transition-all duration-300 hover:-translate-y-2`}>
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-4`}>Birthday Parties</h3>
              <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                Celebrate TWICE members&apos; birthdays with special gatherings, games, and activities for all ONCE
              </p>
            </Link>
            <Link href="/events" className={`group ${isDarkMode ? 'bg-slate-700/50 border-slate-600' : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'} border p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-2`}>
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-4`}>Mall Gatherings</h3>
              <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                Meet fellow ONCE at popular malls for fun activities, games, and chances to make new friends
              </p>
            </Link>
            <Link href="/media" className={`group ${isDarkMode ? 'bg-slate-700/50 border-slate-600' : 'bg-gradient-to-br from-white to-amber-50/30 border-slate-200'} border p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-amber-300 transition-all duration-300 hover:-translate-y-2`}>
              <div className="bg-gradient-to-br from-amber-600 to-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Music className="h-8 w-8 text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-4`}>Random Dance Play</h3>
              <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'} leading-relaxed`}>
                Join our energetic RPD sessions and show off your TWICE choreography skills with the community
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className={`py-24 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'} relative overflow-hidden`}>
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-4`}>Our Impact</h2>
            <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Making a difference in the ONCE community since 2018</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'} p-8 rounded-2xl shadow-lg text-center border hover:shadow-xl transition-shadow`}>
              <div className={`text-5xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'} mb-2`}>19</div>
              <div className={`${isDarkMode ? 'text-white' : 'text-slate-900'} font-semibold mb-1`}>Gatherings</div>
              <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>2000+ attendees</div>
            </div>
            <div className={`${isDarkMode ? 'bg-amber-900/30 border-amber-700' : 'bg-gradient-to-br from-amber-50 to-white border-amber-200'} p-8 rounded-2xl shadow-lg text-center border hover:shadow-xl transition-shadow`}>
              <div className="text-5xl font-bold text-amber-600 mb-2">21</div>
              <div className={`${isDarkMode ? 'text-white' : 'text-slate-900'} font-semibold mb-1`}>Cup Sleeve Events</div>
              <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>2500+ items sold</div>
            </div>
            <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'} p-8 rounded-2xl shadow-lg text-center border hover:shadow-xl transition-shadow`}>
              <div className={`text-5xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'} mb-2`}>5</div>
              <div className={`${isDarkMode ? 'text-white' : 'text-slate-900'} font-semibold mb-1`}>Charity Drives</div>
              <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>₱65,000 donated</div>
            </div>
            <div className={`${isDarkMode ? 'bg-amber-900/30 border-amber-700' : 'bg-gradient-to-br from-amber-50 to-white border-amber-200'} p-8 rounded-2xl shadow-lg text-center border hover:shadow-xl transition-shadow`}>
              <div className="text-5xl font-bold text-amber-600 mb-2">2018</div>
              <div className={`${isDarkMode ? 'text-white' : 'text-slate-900'} font-semibold mb-1`}>Founded</div>
              <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Metro Manila, PH</div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/about" className={`inline-block ${isDarkMode ? 'bg-amber-600 hover:bg-amber-700' : 'bg-slate-800 hover:bg-slate-700'} text-white px-8 py-4 rounded-xl font-bold shadow-lg transform hover:scale-105 transition-all`}>
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-24 ${isDarkMode ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800'} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Stay updated on upcoming events, connect with fellow ONCE, and never miss a celebration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-amber-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-amber-700 shadow-2xl transform hover:scale-105 transition-all">
              Get In Touch
            </Link>
            <Link href="/events" className="bg-transparent text-white border-2 border-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all">
              View Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-24 ${isDarkMode ? 'bg-slate-800' : 'bg-gradient-to-b from-white via-slate-50 to-white'} relative overflow-hidden`}>
        {/* Decorative elements */}
        <div className={`absolute top-20 right-10 w-72 h-72 ${isDarkMode ? 'bg-amber-600' : 'bg-amber-100'} rounded-full mix-blend-multiply filter blur-3xl opacity-20`}></div>
        <div className={`absolute bottom-20 left-10 w-72 h-72 ${isDarkMode ? 'bg-slate-600' : 'bg-slate-200'} rounded-full mix-blend-multiply filter blur-3xl opacity-20`}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-bold text-sm uppercase tracking-wide">Have Questions?</span>
            <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mt-3 mb-4`}>Frequently Asked Questions</h2>
            <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Everything you need to know about ONCE HQ</p>
          </div>

          <FAQAccordion isDark={isDarkMode} />
          
          <div className="mt-12 text-center">
            <Link href="/faq" className="inline-block text-amber-600 hover:text-amber-700 font-semibold">
              View All FAQs →
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
                <li>Facebook: @OnceHQ</li>
                <li>Twitter: @OnceHQPH</li>
                <li>Discord: OHQ Community</li>
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
