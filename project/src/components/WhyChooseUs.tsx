import React, { useState, useEffect } from 'react';
import { Award, Users, Clock, TrendingUp } from 'lucide-react';

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
    const duration = 2000; // Animation duration in ms
    const interval = 50; // Update interval in ms
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
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Experienced professionals committed to your project\'s success.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Agile development process ensuring quick turnaround times.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const stats = [
    {
      icon: Award,
      value: counts.projects,
      suffix: '+',
      label: 'Projects Completed',
      color: 'text-purple-400'
    },
    {
      icon: Users,
      value: counts.clients,
      suffix: '+',
      label: 'Happy Clients',
      color: 'text-cyan-400'
    },
    {
      icon: Clock,
      value: counts.years,
      suffix: '+',
      label: 'Years Experience',
      color: 'text-pink-400'
    },
    {
      icon: TrendingUp,
      value: counts.growth,
      suffix: '%',
      label: 'Growth Rate',
      color: 'text-blue-400'
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">TECH REACH</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We combine technical excellence with business understanding to deliver exceptional results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center group"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="mt-16 text-center">
          <p className="text-gray-400 mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 hover:opacity-100 transition-opacity duration-300">
           
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <div className="text-white/50 text-sm font-medium">Logo {i}</div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;