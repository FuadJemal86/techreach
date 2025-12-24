import React, { useState, useEffect } from 'react';
import { Award, Users, Clock, TrendingUp } from 'lucide-react';

const BRAND_COLOR = '#34bfbd';

const WhyChooseUs: React.FC = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    growth: 0
  });

  const finalCounts = {
    projects: 23,
    clients: 12,
    years: 5,
    growth: 73
  };

  useEffect(() => {
    const duration = 2000;
    const interval = 50;
    const steps = duration / interval;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        projects: Math.floor(finalCounts.projects * progress),
        clients: Math.floor(finalCounts.clients * progress),
        years: Math.floor(finalCounts.years * progress),
        growth: Math.floor(finalCounts.growth * progress)
      });

      if (step >= steps) {
        setCounts(finalCounts);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: Award,
      title: 'Industry Expertise',
      description: 'Deep knowledge across multiple industries and cutting-edge technologies.',
      color: 'from-[#34bfbd] to-cyan-400'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Experienced professionals committed to your project\'s success.',
      color: 'from-cyan-500 to-[#34bfbd]'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Agile development process ensuring quick turnaround times.',
      color: 'from-[#34bfbd] to-teal-400'
    }
  ];

  const stats = [
    {
      icon: Award,
      value: counts.projects,
      suffix: '+',
      label: 'Projects Completed',
      color: 'text-[#34bfbd]'
    },
    {
      icon: Users,
      value: counts.clients,
      suffix: '+',
      label: 'Happy Clients',
      color: 'text-cyan-500'
    },
    {
      icon: Clock,
      value: counts.years,
      suffix: '+',
      label: 'Years Experience',
      color: 'text-teal-500'
    },
    {
      icon: TrendingUp,
      value: counts.growth,
      suffix: '%',
      label: 'Growth Rate',
      color: 'text-[#34bfbd]'
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Why Choose <span className="bg-gradient-to-r from-[#34bfbd] to-cyan-400 bg-clip-text text-transparent">Noorify</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We combine technical excellence with business understanding to deliver exceptional results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            return (
              <div
                key={feature.title}
                className="text-center group"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              return (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center mb-4">
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Optional: Trusted Companies Section */}
        {/* <div className="mt-16 text-center">
          <p className="text-gray-500 mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 hover:opacity-100 transition-opacity duration-300">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-24 h-12 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                <div className="text-gray-400 text-sm font-medium">Logo {i}</div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;