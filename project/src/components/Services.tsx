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

const BRAND_COLOR = '#34bfbd';

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      color: 'from-[#34bfbd] to-cyan-400'
    },
    {
      icon: Boxes,
      title: 'Industrial Systems (ERP)',
      description: 'We build powerful ERP solutions to manage inventory, finance, HR, and operations for growing industries.',
      color: 'from-[#34bfbd] to-teal-400'
    },
    {
      icon: Brush,
      title: 'Branding',
      description: 'We craft powerful brand identities, helping businesses stand out with strategic design and messaging.',
      color: 'from-[#34bfbd] to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Data analytics, reporting, and business intelligence solutions.',
      color: 'from-cyan-500 to-[#34bfbd]'
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Our <span className="bg-gradient-to-r from-[#34bfbd] to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
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
                className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#34bfbd]/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
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
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors group-hover:text-[#34bfbd]">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#34bfbd]/0 via-cyan-400/0 to-[#34bfbd]/0 group-hover:from-[#34bfbd]/5 group-hover:via-cyan-400/5 group-hover:to-[#34bfbd]/5 transition-all duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;