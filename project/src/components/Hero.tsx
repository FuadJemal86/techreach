import React from 'react';
import animate from '../../public/Images/animate.png'

const BRAND_COLOR = '#34bfbd';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          src="https://seositecheckup.com/images/BackgroundEndlessConstellation.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Text Content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Welcome to <span className="bg-gradient-to-r from-[#34bfbd] to-cyan-400 bg-clip-text text-transparent">Noorify</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We build innovative web solutions and digital experiences that drive your business forward. Transform your ideas into reality with cutting-edge technology and expert development.
            </p>

            {/* CTA Button */}
            <button
              className="px-8 py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              Get Started
            </button>
          </div>

          {/* Right Side - Tech Image */}
          <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
            <img
              src={animate}
              alt="Technology"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;