'use client';

import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Users, ExternalLink, Ticket, Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

export default function TicketsPage() {
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

  // You can replace these with your actual Luma event links
  const upcomingEvents = [
    {
      title: "MISAMO Concert Viewing Party",
      date: "December 15, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "SM Mall of Asia, Pasay City",
      price: "FREE",
      capacity: "100 attendees",
      lumaLink: "https://lu.ma/your-event-link", // Replace with your actual Luma link
      description: "Join us for an exclusive MISAMO concert viewing party with games, prizes, and fellow ONCE!",
      status: "Available"
    },
    {
      title: "Momo Birthday Celebration",
      date: "November 9, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Trinoma Mall, Quezon City",
      price: "₱150",
      capacity: "80 attendees",
      lumaLink: "https://lu.ma/your-event-link", // Replace with your actual Luma link
      description: "Celebrate Momo's birthday with special activities, cupsleeves, and giveaways!",
      status: "Available"
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className={`${isDarkMode ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-gray-100'} backdrop-blur-lg shadow-md sticky top-0 z-50 border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/ohq-profile.jpg"
                alt="OHQ Logo"
                width={50}
                height={50}
                className="rounded-full ring-2 ring-amber-200 shadow-lg"
              />
              <div>
                <span className={`text-2xl font-bold ${isDarkMode ? 'text-slate-100' : 'text-gray-900'}`}>OHQ</span>
                <p className="text-xs text-gray-500">Once HQ</p>
              </div>
            </Link>
            <div className="hidden lg:flex items-center space-x-1">
              <Link href="/" className={`px-3 py-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'} rounded-lg transition font-medium text-sm`}>
                Home
              </Link>
              <Link href="/about" className={`px-3 py-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'} rounded-lg transition font-medium text-sm`}>
                About
              </Link>
              <Link href="/events" className={`px-3 py-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'} rounded-lg transition font-medium text-sm`}>
                Events
              </Link>
              <Link href="/tickets" className={`px-3 py-2 ${isDarkMode ? 'text-white bg-slate-800' : 'text-blue-900 bg-blue-50'} rounded-lg font-medium text-sm`}>
                Tickets
              </Link>
              <Link href="/media" className={`px-3 py-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'} rounded-lg transition font-medium text-sm`}>
                Media
              </Link>
              <Link href="/faq" className={`px-3 py-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'} rounded-lg transition font-medium text-sm`}>
                FAQ
              </Link>
              <button
                onClick={toggleDarkMode}
                className={`p-2 ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'} rounded-lg transition`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <Link href="/contact" className={`px-4 py-2 ${isDarkMode ? 'bg-amber-600 hover:bg-amber-700' : 'bg-blue-900 hover:bg-blue-800'} text-white rounded-lg transition font-medium shadow-md hover:shadow-lg text-sm`}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative py-24 ${isDarkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900'} overflow-hidden`}>
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute top-20 left-10 w-72 h-72 ${isDarkMode ? 'bg-amber-400' : 'bg-amber-400'} rounded-full blur-3xl`}></div>
          <div className={`absolute bottom-20 right-10 w-96 h-96 ${isDarkMode ? 'bg-slate-600' : 'bg-blue-400'} rounded-full blur-3xl`}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-6">
            <div className={`inline-block p-4 ${isDarkMode ? 'bg-amber-600/20' : 'bg-amber-500/20'} backdrop-blur-sm rounded-2xl mb-4`}>
              <Ticket className={`h-16 w-16 ${isDarkMode ? 'text-amber-400' : 'text-amber-400'}`} />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6">
            Get Your Event Tickets
          </h1>
          <p className={`text-xl ${isDarkMode ? 'text-slate-300' : 'text-blue-100'} max-w-3xl mx-auto leading-relaxed`}>
            Reserve your spot at our upcoming TWICE celebrations and gatherings. Join fellow ONCE for unforgettable experiences!
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-1">19</div>
              <div className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-blue-200'}`}>Events Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-1">2000+</div>
              <div className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-blue-200'}`}>Happy Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-1">₱0-200</div>
              <div className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-blue-200'}`}>Event Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={`py-12 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className={`${isDarkMode ? 'bg-amber-600/20' : 'bg-blue-100'} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className={`${isDarkMode ? 'text-amber-400' : 'text-blue-900'} font-bold text-xl`}>1</span>
              </div>
              <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Choose Your Event</h3>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm`}>Browse available events below and find the perfect celebration to join</p>
            </div>
            <div>
              <div className={`${isDarkMode ? 'bg-amber-600/20' : 'bg-amber-100'} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className={`${isDarkMode ? 'text-amber-400' : 'text-amber-700'} font-bold text-xl`}>2</span>
              </div>
              <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Register on Luma</h3>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm`}>Click &quot;Get Tickets&quot; to register on Luma - it&apos;s quick and free!</p>
            </div>
            <div>
              <div className={`${isDarkMode ? 'bg-amber-600/20' : 'bg-blue-100'} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className={`${isDarkMode ? 'text-amber-400' : 'text-blue-900'} font-bold text-xl`}>3</span>
              </div>
              <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Join the Fun</h3>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm`}>Show your confirmation and enjoy the event with fellow ONCE!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className={`py-16 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className={`${isDarkMode ? 'text-amber-400' : 'text-blue-900'} font-bold text-sm uppercase tracking-wide`}>Available Now</span>
            <h2 className={`text-3xl sm:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mt-2 mb-4`}>
              Upcoming Events
            </h2>
            <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Register now to secure your spot at these exciting TWICE community events
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden`}>
                {/* Event Header */}
                <div className={`${isDarkMode ? 'bg-gradient-to-br from-slate-700 to-slate-800' : 'bg-gradient-to-br from-blue-900 to-blue-800'} p-6 text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      event.status === 'Available' ? 'bg-amber-500' : 'bg-gray-400'
                    }`}>
                      {event.status}
                    </span>
                    <span className="text-2xl font-bold">{event.price}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                </div>

                {/* Event Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className={`h-5 w-5 ${isDarkMode ? 'text-amber-400' : 'text-blue-900'} shrink-0 mt-0.5`} />
                    <div>
                      <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{event.date}</p>
                      <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className={`h-5 w-5 ${isDarkMode ? 'text-amber-400' : 'text-blue-900'} shrink-0 mt-0.5`} />
                    <p className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{event.location}</p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className={`h-5 w-5 ${isDarkMode ? 'text-amber-400' : 'text-blue-900'} shrink-0 mt-0.5`} />
                    <p className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{event.capacity}</p>
                  </div>

                  <p className={`${isDarkMode ? 'text-slate-400 border-slate-700' : 'text-gray-600 border-gray-100'} text-sm leading-relaxed pt-2 border-t`}>
                    {event.description}
                  </p>

                  <a
                    href={event.lumaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 text-center shadow-lg"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Get Tickets on Luma</span>
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-slate-950' : 'bg-gray-900'} text-white py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-blue-400 bg-clip-text text-transparent">
                Once HQ
              </h3>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-400'}`}>
                Your home for TWICE celebrations and community since 2018
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className={`space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-gray-400'}`}>
                <li><Link href="/about" className={`${isDarkMode ? 'hover:text-amber-400' : 'hover:text-amber-400'} transition-colors`}>About Us</Link></li>
                <li><Link href="/events" className={`${isDarkMode ? 'hover:text-amber-400' : 'hover:text-amber-400'} transition-colors`}>Events</Link></li>
                <li><Link href="/tickets" className={`${isDarkMode ? 'hover:text-amber-400' : 'hover:text-amber-400'} transition-colors`}>Tickets</Link></li>
                <li><Link href="/media" className={`${isDarkMode ? 'hover:text-amber-400' : 'hover:text-amber-400'} transition-colors`}>Media</Link></li>
                <li><Link href="/faq" className={`${isDarkMode ? 'hover:text-amber-400' : 'hover:text-amber-400'} transition-colors`}>FAQ</Link></li>
                <li><Link href="/contact" className={`${isDarkMode ? 'hover:text-amber-400' : 'hover:text-amber-400'} transition-colors`}>Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Connect With Us</h4>
              <ul className={`space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-gray-400'}`}>
                <li>Facebook: @OnceHQ</li>
                <li>Twitter: @OnceHQPH</li>
                <li>Discord: OHQ Community</li>
              </ul>
            </div>
          </div>
          <div className={`${isDarkMode ? 'border-slate-800' : 'border-gray-800'} border-t mt-12 pt-8 text-center ${isDarkMode ? 'text-slate-400' : 'text-gray-400'}`}>
            <p>&copy; 2024 Once HQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
