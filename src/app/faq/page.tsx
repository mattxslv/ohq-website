'use client';

import Link from "next/link";
import Image from "next/image";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
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
              <Link href="/faq" className={`px-3 py-2 ${isDarkMode ? 'text-white bg-slate-800' : 'text-white bg-slate-800'} rounded-lg font-medium text-sm`}>
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
          <h1 className={`text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-4`}>Frequently Asked Questions</h1>
          <p className={`text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Everything you need to know about ONCE HQ</p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className={`py-24 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {[
              {
                q: "What is ONCE HQ?",
                a: "ONCE HQ is a fan organization dedicated to supporting TWICE, a South Korean girl group. We organize fan events, create community activities, and engage with the local members of TWICE's fandom, known as ONCE."
              },
              {
                q: "Who can join the ONCE HQ Community?",
                a: "Any TWICE fan (ONCE) can join the community, regardless of location or background and providing they observe behavior guidelines. We welcome fans who want to actively participate in fan events and support TWICE."
              },
              {
                q: "How can I become a member of the ONCE HQ Community?",
                a: "You can join the community simply by joining our Facebook group, interacting with our posts, and attending our events!"
              },
              {
                q: "What events does ONCE HQ organize?",
                a: "ONCE HQ organizes various events, including fan gatherings, anniversary celebrations, birthday projects, and charity events in the name of TWICE. Major gatherings are usually in mall venues held to celebrate special milestones such as anniversaries and comebacks."
              },
              {
                q: "Where do ONCE HQ events usually take place?",
                a: "Most ONCE HQ events in the Philippines are held in major cities like Manila or nearby areas."
              },
              {
                q: "How can I participate in an ONCE HQ event?",
                a: "You can participate by following our social media platforms for announcements on event registration, tickets, or guidelines. For physical events, you may need to sign up in advance, while virtual events may have simple participation instructions."
              },
              {
                q: "Do I need to pay to join ONCE HQ or attend events?",
                a: "Joining ONCE HQ events is usually free. However, ONCE HQ may produce and sell fan-made items to help cover costs for venue, merchandise, or giveaways. We ensure that these fees are affordable, and all proceeds go toward making the events enjoyable for all."
              },
              {
                q: "Does ONCE HQ organize events for TWICE's comebacks or birthdays?",
                a: "Yes, ONCE HQ often organizes events such as fan gatherings or can/cup sleeve events to show support during TWICE's comebacks, anniversaries, or member birthdays."
              },
              {
                q: "Can I contribute ideas or help organize ONCE HQ events?",
                a: "Absolutely! We are always open to suggestions and volunteers who want to help plan and execute fan events. You can reach out to our team via direct messages or email, and we'll get in touch regarding how you can assist."
              },
              {
                q: "Where can I find updates about ONCE HQ?",
                a: "Stay updated by following our official social media accounts on platforms like X, Facebook, and Instagram. We regularly post updates on upcoming events, fan projects, and TWICE-related news."
              },
              {
                q: "Is ONCE HQ affiliated with JYP Entertainment or TWICE's management?",
                a: "ONCE HQ is a fan-driven, unofficial organization. We are not affiliated with JYP Entertainment, TWICE, or their management, but we operate with the goal of supporting TWICE in a respectful and dedicated manner."
              },
              {
                q: "What should I do if I have questions or concerns about an ONCE HQ event?",
                a: "If you have any concerns, you can contact us through our official communication channels. We typically respond to queries via direct messages or email, and we aim to resolve any issues promptly."
              },
            ].map((faq, idx) => (
              <div key={idx} className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'} p-6 rounded-xl border hover:shadow-lg transition-all`}>
                <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} text-lg mb-3`}>{idx + 1}. {faq.q}</h3>
                <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>{faq.a}</p>
              </div>
            ))}
          </div>

          <div className={`mt-12 bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl text-white text-center`}>
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="mb-6">Feel free to reach out to us on our social media channels or contact page!</p>
            <Link href="/contact" className={`inline-block ${isDarkMode ? 'bg-amber-600 hover:bg-amber-700' : 'bg-white text-slate-800 hover:bg-amber-50'} px-8 py-3 rounded-xl font-bold shadow-lg transition-all`}>
              Contact Us
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
