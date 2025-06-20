import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import fuad from '../../public/Images/profiles/fuad.jpg';
import abdu from '../../public/Images/profiles/abdu.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// TypeScript interfaces
interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    alpha: number;
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

interface EmailConfig {
    serviceId: string;
    templateId: string;
    publicKey: string;
}

const TeamSection: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Particle[] = [];

        // Create particles
        for (let i = 0; i < 30; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                alpha: Math.random() * 0.4 + 0.1
            });
        }

        const animate = (): void => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                ctx.fillStyle = `rgba(168, 85, 247, ${particle.alpha})`;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = (): void => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // EmailJS configuration - Replace with your actual values
    const EMAIL_CONFIG: EmailConfig = {
        serviceId: 'YOUR_SERVICE_ID',      // Replace with your EmailJS service ID
        templateId: 'YOUR_TEMPLATE_ID',    // Replace with your EmailJS template ID
        publicKey: 'YOUR_PUBLIC_KEY'       // Replace with your EmailJS public key
    };

    const validateForm = (): boolean => {
        if (!formData.name.trim()) {
            toast('Please enter your name.');
            return false;
        }
        if (!formData.email.trim()) {
            toast('Please enter your email.');
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            toast('Please enter a valid email address.');
            return false;
        }
        if (!formData.message.trim()) {
            toast('Please enter your message.');
            return false;
        }
        return true;
    };

    const handleSubmit = async (): Promise<void> => {
        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            // Method 1: Using EmailJS (requires setup and installation)
            // First install: npm install @emailjs/browser
            // Uncomment this if you set up EmailJS
            /*
            const emailjs = (await import('@emailjs/browser')).default;
            
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject || 'Contact Form Submission',
                message: formData.message,
                to_email: 'officialtechreach@gmail.com'
            };

            await emailjs.send(
                EMAIL_CONFIG.serviceId,
                EMAIL_CONFIG.templateId,
                templateParams,
                EMAIL_CONFIG.publicKey
            );
            */

            // Method 2: Using Formspree (replace with your form ID)
            // Sign up at formspree.io and replace YOUR_FORM_ID
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

            ('Message sent successfully! We\'ll get back to you soon.');
            setFormData({ name: '', email: '', subject: '', message: '' });

        } catch (error) {
            console.error('Error sending email:', error);
            toast('Failed to send message. Please try again or contact us directly at officialtechreach@gmail.com');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Method 3: Backend API call (if you have a backend)
    const handleSubmitWithAPI = async (): Promise<void> => {
        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    to: 'officialtechreach@gmail.com'
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            const result = await response.json();
            toast.success('Message sent successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' });

        } catch (error) {
            console.error('Error:', error);
            toast.success('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const teamMembers: TeamMember[] = [
        {
            name: 'Fuad Jemal',
            role: 'Founder',
            email: 'fuad47722@gmail.com',
            phone: '+251 90 292 0301',
            image: fuad,
            github: 'https://github.com/FuadJemal86',
            linkedin: 'https://www.linkedin.com/in/fuad-jemal-757601302/',
            twitter: 'https://x.com/FuadJemal185415'
        },
        {
            name: 'Abdulahi Redwan',
            role: 'co Founder and STO',
            email: 'abdulahiredwann@gmail.com',
            phone: '+251 90 752 3814',
            image: abdu,
            github: 'https://github.com/abdulahiredwann',
            linkedin: 'https://www.linkedin.com/in/abdulahi-redwan/',
            twitter: 'https://x.com/abd_red08'
        }
        // Uncomment if you want to add the third member
        // {
        //     name: 'Faysel Nesray',
        //     role: 'UI/UX Designer',
        //     email: 'faysel.nesray@company.com',
        //     phone: '+251 97 986 4633',
        //     image: feysel,
        //     github: '#',
        //     linkedin: 'https://linkedin.com/in/fayselnesray',
        //     twitter: 'https://twitter.com/fayselnesray'
        // }
    ];

    return (
        <div className="relative min-h-screen bg-primary text-white overflow-hidden">
            {/* Animated Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.1) 0%, transparent 70%)' }}
            />

            {/* Floating Geometric Shapes */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-32 left-16 w-16 h-16 border border-cyan-500/20 rotate-45 animate-pulse"></div>
                <div className="absolute top-64 right-24 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full animate-bounce"></div>
                <div className="absolute bottom-48 left-32 w-20 h-20 border-2 border-pink-500/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 right-16 w-18 h-18 border border-purple-500/25 rotate-12 animate-pulse"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 py-20">
                {/* Contact Section */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Ready to transform your ideas into reality? Let's discuss your project and build something amazing together.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">Email</p>
                                            <p className="text-white">officialtechreach@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">Phone</p>
                                            <div className="grid">
                                                <span>+251 90 752 3814</span>
                                                <span>+251 90 292 0301</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">Location</p>
                                            <p className="text-white">Ethiopia — Hawassa</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name *"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-400"
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
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-400"
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
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-400"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Your Message *"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-400 resize-none"
                                        required
                                    />
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className="w-full group bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span className="font-semibold">
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </span>
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    <ToastContainer aria-label="notification" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Team</span>
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Meet the talented individuals who bring creativity and expertise to every project.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
                            >
                                {/* Profile Image */}
                                <div className="relative mb-6">
                                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-br from-purple-500 to-pink-500 p-1">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:scale-110 transition-transform duration-300"></div>
                                </div>

                                {/* Member Info */}
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                                    <p className="text-purple-400 font-semibold mb-4">{member.role}</p>

                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center space-x-2 text-gray-300">
                                            <Mail className="w-4 h-4" />
                                            <span>{member.email}</span>
                                        </div>
                                        <div className="flex items-center justify-center space-x-2 text-gray-300">
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
                                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={member.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TeamSection;