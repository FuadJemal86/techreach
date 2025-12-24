import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const BRAND_COLOR = '#34bfbd';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
    }> = [];

    // Create particles with brand color
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Using brand color (52, 191, 189) - #34bfbd
        ctx.fillStyle = `rgba(52, 191, 189, ${particle.alpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(52, 191, 189, 0.08) 0%, rgba(255, 255, 255, 0.95) 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className='pb-20'>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
              We Build the <span className="bg-gradient-to-r from-[#34bfbd] to-cyan-400 bg-clip-text text-transparent">Future</span>. Faster.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Empowering businesses with cutting-edge web systems and global digital presence.
              We transform ideas into scalable digital solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: BRAND_COLOR }}>23+</div>
              <div className="text-gray-500 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: BRAND_COLOR }}>12+</div>
              <div className="text-gray-500 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: BRAND_COLOR }}>95%</div>
              <div className="text-gray-500 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: BRAND_COLOR }}>24/7</div>
              <div className="text-gray-500 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;