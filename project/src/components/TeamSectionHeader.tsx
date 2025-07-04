import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import techReach from '../../public/Images/teach1.svg'


const TeamSectionHeader: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Services', href: '/' },
        { label: 'Projects', href: '/' },
        { label: 'About', href: '/ ' },
        { label: 'Testimonials', href: '/' },
        { label: 'Contact', href: '/contact' }
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all  bg-primary/80 backdrop-blur-lg border-b border-white/10`}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <span><img className='w-10 h-10' src={techReach} alt="" /></span>
                        <span className="text-xl font-bold">TECH REACH</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-gray-300 hover:text-white transition-colors duration-200"
                            >
                                {item.label}
                            </a>
                        ))}
                        <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                            Get Started
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-white/10">
                        <nav className="flex flex-col space-y-4 mt-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 w-fit">
                                Get Started
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default TeamSectionHeader;