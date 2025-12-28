import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fuad from '../../public/Images/fuad.jpg';
import abdu from '../../public/Images/profiles/abdu.jpg';

const BRAND_COLOR = '#34bfbd';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface TeamMember {
    name: string;
    role: string;
    email: string;
    phone: string;
    image: string;
    github: string;
    linkedin: string;
    twitter: string;
}

const TeamSection: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = (): boolean => {
        if (!formData.name.trim()) {
            toast.error('Please enter your name.');
            return false;
        }
        if (!formData.email.trim()) {
            toast.error('Please enter your email.');
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            toast.error('Please enter a valid email address.');
            return false;
        }
        if (!formData.message.trim()) {
            toast.error('Please enter your message.');
            return false;
        }
        return true;
    };

    const handleSubmit = async (): Promise<void> => {
        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/mblyadwo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject || 'Contact Form Submission',
                    message: formData.message,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            toast.success('Message sent successfully! We\'ll get back to you soon.');
            setFormData({ name: '', email: '', subject: '', message: '' });

        } catch (error) {
            console.error('Error sending email:', error);
            toast.error('Failed to send message. Please try again or contact us directly at officialtechreach@gmail.com');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Note: Replace these placeholder images with your actual image imports


    const teamMembers: TeamMember[] = [
        {
            name: 'Fuad Jemal',
            role: 'Founder',
            email: 'fuad.jemal.mail@gmail.com',
            phone: '+251 90 292 0301',
            image: fuad,
            github: 'https://github.com/FuadJemal86',
            linkedin: 'https://www.linkedin.com/in/fuad-jemal-757601302/',
            twitter: 'https://x.com/FuadJemal185415'
        },
        {
            name: 'Abdulahi Redwan',
            role: 'co Founder and CTO',
            email: 'abdulahiredwann@gmail.com',
            phone: '+251 90 752 3814',
            image: abdu,
            github: 'https://github.com/abdulahiredwann',
            linkedin: 'https://www.linkedin.com/in/abdulahi-redwan/',
            twitter: 'https://x.com/abd_red08'
        }
    ];

    return (
        <div className="bg-white">
            {/* Contact Section */}
            <section id="contact" className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                            Get In <span className="text-[#1eb290]">Touch</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Ready to transform your ideas into reality? Let's discuss your project and build something amazing together.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div
                                className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#34bfbd]/30 transition-all duration-300"
                                style={{ boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.05)' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0 10px 40px 0 rgba(52, 191, 189, 0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = '0 2px 8px 0 rgba(0, 0, 0, 0.05)';
                                }}
                            >
                                <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1eb290] to-[#34bfbd] flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm font-medium">Email</p>
                                            <p className="text-gray-900 font-medium">officialtechreach@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1eb290] to-[#34bfbd] flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm font-medium">Phone</p>
                                            <div className="grid text-gray-900 font-medium">
                                                <span>+251 90 752 3814</span>
                                                <span>+251 90 292 0301</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1eb290] to-[#34bfbd] flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm font-medium">Location</p>
                                            <p className="text-gray-900 font-medium">Ethiopia — Hawassa</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div
                            className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#34bfbd]/30 transition-all duration-300"
                            style={{ boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.05)' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 10px 40px 0 rgba(52, 191, 189, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 2px 8px 0 rgba(0, 0, 0, 0.05)';
                            }}
                        >
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name *"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#34bfbd] transition-colors text-gray-900 placeholder-gray-400"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email *"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#34bfbd] transition-colors text-gray-900 placeholder-gray-400"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#34bfbd] transition-colors text-gray-900 placeholder-gray-400"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Your Message *"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#34bfbd] transition-colors text-gray-900 placeholder-gray-400 resize-none"
                                        required
                                    />
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className="w-full group px-6 py-3 bg-gradient-to-br from-[#1eb290] to-[#34bfbd] text-white rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                                    style={{ boxShadow: '0 4px 14px 0 rgba(52, 191, 189, 0.25)' }}
                                    onMouseEnter={(e) => {
                                        if (!isSubmitting) {
                                            e.currentTarget.style.boxShadow = '0 10px 30px 0 rgba(52, 191, 189, 0.4)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(52, 191, 189, 0.25)';
                                    }}
                                >
                                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                            Our <span className="text-[#1eb290]">Team</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Meet the talented individuals who bring creativity and expertise to every project
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#34bfbd]/30 transition-all duration-300 hover:transform hover:scale-105"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.05)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0 10px 40px 0 rgba(52, 191, 189, 0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = '0 2px 8px 0 rgba(0, 0, 0, 0.05)';
                                }}
                            >
                                {/* Profile Image */}
                                <div className="relative mb-6">
                                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden p-1 bg-gradient-to-br from-[#1eb290] to-[#34bfbd]">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full rounded-full object-cover bg-white"
                                        />
                                    </div>
                                </div>

                                {/* Member Info */}
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#34bfbd] transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-[#1eb290] font-semibold mb-4">{member.role}</p>

                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center space-x-2 text-gray-600">
                                            <Mail className="w-4 h-4" />
                                            <span>{member.email}</span>
                                        </div>
                                        <div className="flex items-center justify-center space-x-2 text-gray-600">
                                            <Phone className="w-4 h-4" />
                                            <span>{member.phone}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="flex justify-center space-x-4">
                                    <a
                                        href={member.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 text-[#1eb290] rounded-full flex items-center justify-center hover:bg-[#34bfbd] hover:text-white transition-all duration-300"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 text-[#1eb290] rounded-full flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={member.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 text-[#1eb290] rounded-full flex items-center justify-center hover:bg-[#34bfbd] hover:text-white transition-all duration-300"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default TeamSection;