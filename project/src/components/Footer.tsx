import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send
} from 'lucide-react';
import logo from '../../public/Images/noorifyLogo.png'

const BRAND_COLOR = '#34bfbd';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1200));
    setEmail('');
    setIsSubmitting(false);
  };

  const footerLinks = [
    {
      title: 'Company',
      items: ['About Us', 'Our Team', 'Careers', 'Blog']
    },
    {
      title: 'Services',
      items: ['Web Development', 'UI/UX Design', 'Mobile Apps', 'Consulting']
    },
    {
      title: 'Support',
      items: ['FAQ', 'Privacy Policy', 'Terms of Service', 'Contact']
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand + Contact Info */}
          <div className="md:col-span-2">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Noorify Logo"
                className="h-56 w-56 object-contain"
              />
            </div>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed max-w-md">
              Transforming ideas into powerful digital solutions with innovation and quality.
            </p>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#34bfbd]" />
                <span>officialtechreach@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#34bfbd]" />
                <span>+251 90 752 3814</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#34bfbd]" />
                <span>Ethiopia — Hawassa</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-gray-900 font-semibold mb-5 text-sm uppercase tracking-wider">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#34bfbd] text-sm transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter - Compact version */}
        <div className="mt-12 pt-10 border-t border-gray-200">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Get the latest updates and tech insights
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-2.5 bg-white border border-gray-300 rounded-lg 
                         text-gray-800 placeholder-gray-500 focus:outline-none 
                         focus:border-[#34bfbd] focus:ring-2 focus:ring-[#34bfbd]/20 
                         transition-all text-sm"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  px-6 py-2.5 bg-[#34bfbd] text-white rounded-lg font-medium text-sm
                  hover:bg-[#2aa8a6] transition-colors duration-200
                  flex items-center justify-center gap-2 min-w-[120px]
                  disabled:opacity-60
                `}
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Very common style */}
      <div className="bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <div>
              © {new Date().getFullYear()} TECH REACH. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-500 hover:text-[#34bfbd] transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;