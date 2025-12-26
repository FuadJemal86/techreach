import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

import logo from '../../public/Images/noorifyLogo.png'

const BRAND_COLOR = '#34bfbd';

const Footer: React.FC = () => {
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
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Brand Section */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Noorify Logo"
              className="h-40 w-40 object-contain mb-4"
            />
            <p className="text-gray-400 mb-6 text-sm">
              Transforming ideas into powerful digital solutions with innovation and quality.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4" style={{ color: BRAND_COLOR }} />
                <span>officialtechreach@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4" style={{ color: BRAND_COLOR }} />
                <span>+251 90 752 3814</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4" style={{ color: BRAND_COLOR }} />
                <span>Ethiopia — Hawassa</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold mb-4 text-white">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Noorify. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
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