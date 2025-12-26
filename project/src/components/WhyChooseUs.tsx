import React, { useState, useEffect } from 'react';

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
      title: 'Industry Expertise',
      description: 'Deep knowledge across multiple industries and cutting-edge technologies.'
    },
    {
      title: 'Dedicated Team',
      description: 'Experienced professionals committed to your project success.'
    },
    {
      title: 'Fast Delivery',
      description: 'Agile development process ensuring quick turnaround times.'
    }
  ];

  const stats = [
    {
      value: counts.projects,
      suffix: '+',
      label: 'Projects Completed'
    },
    {
      value: counts.clients,
      suffix: '+',
      label: 'Happy Clients'
    },
    {
      value: counts.years,
      suffix: '+',
      label: 'Years Experience'
    },
    {
      value: counts.growth,
      suffix: '%',
      label: 'Growth Rate'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Why Choose <span style={{ color: BRAND_COLOR }}>Noorify</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We combine technical excellence with business understanding to deliver exceptional results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => {
            return (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4"
                style={{ borderTopColor: BRAND_COLOR }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              return (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: BRAND_COLOR }}>
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;