import React from 'react';
import {
  Globe,
  Smartphone,
  Database,
  Cloud,
  Shield,
  BarChart3,
  Rocket,
  Brush,
  Boxes,
  Code
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      color: 'from-purple-500 to-pink-500'
    },
    // {
    //   icon: Smartphone,
    //   title: 'Mobile Apps',
    //   description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    //   color: 'from-cyan-500 to-blue-500'
    // },

    {
      icon: Boxes,
      title: 'Industrial Systems (ERP)',
      description: 'We build powerful ERP solutions to manage inventory, finance, HR, and operations for growing industries.',
      color: 'from-purple-500 to-pink-500'
    },
    // {
    //   icon: Cloud,
    //   title: 'Cloud Solutions',
    //   description: 'Cloud infrastructure, deployment, and DevOps services for optimal performance.',
    //   color: 'from-cyan-500 to-blue-500'
    {
      icon: Brush,
      title: 'Branding',
      description: 'We craft powerful brand identities, helping businesses stand out with strategic design and messaging.',
      color: 'from-purple-500 to-pink-500'
    }
    ,
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Data analytics, reporting, and business intelligence solutions.',
      color: 'from-cyan-500 to-blue-500'
    },
    // {
    //   icon: Rocket,
    //   title: 'Performance Optimization',
    //   description: 'Speed optimization and performance tuning for maximum efficiency.',
    //   color: 'from-purple-500 to-pink-500'
    // },
    // {
    //   icon: Code,
    //   title: 'Custom Solutions',
    //   description: 'Tailored software solutions designed specifically for your business needs.',
    //   color: 'from-cyan-500 to-blue-500'
    // }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions to transform your business and accelerate growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/20 group-hover:via-pink-500/20 group-hover:to-purple-500/20 transition-all duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Ready to transform your digital presence?
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 font-semibold">
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;