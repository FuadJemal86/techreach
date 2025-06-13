import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      avatar: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'TECH REACH transformed our digital presence completely. Their attention to detail and technical expertise exceeded our expectations. The team delivered on time and within budget.'
    },
    {
      name: 'Michael Chen',
      position: 'CTO, InnovateLab',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Outstanding work on our mobile application. The performance improvements were remarkable, and the user experience is now best-in-class. Highly recommended for any tech project.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Founder, GrowthCo',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The team at TECH REACH is simply amazing. They understood our vision and brought it to life with cutting-edge technology. Our revenue increased by 200% after the launch.'
    },
    {
      name: 'David Park',
      position: 'VP Engineering, DataFlow',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Exceptional technical skills and project management. They delivered a complex enterprise solution that handles millions of transactions daily. Truly impressed with their capabilities.'
    },
    {
      name: 'Lisa Thompson',
      position: 'Marketing Director, BrandMax',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Professional, responsive, and results-driven. Our new website has improved our conversion rates significantly. The design is beautiful and the functionality is flawless.'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center">
                    {/* Avatar */}
                    <div className="w-20 h-20 mx-auto mb-6 relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover border-2 border-gradient-to-r from-purple-400 to-pink-400"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20"></div>
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author */}
                    <div>
                      <div className="font-semibold text-white text-lg mb-1">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-400">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-purple-500 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;