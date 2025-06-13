import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, ArrowRight, Filter, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Lazy Image Component
interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = '', ...props }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative ${className}`} {...props}>
      {/* Placeholder while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Actual image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};

// Import images (in your actual app, these would be real imports)
const flour = '/Images/Flour/flour.png';
const flour2 = '/Images/Flour/flour2.png';
const flour3 = '/Images/Flour/flour3.png';
const flour4 = '/Images/Flour/flour4.png';
const flour5 = '/Images/Flour/flour5.png';
const flour6 = '/Images/Flour/flour6.png';
const flour1 = '/Images/Flour/flour-dashboard.png';

const nebal = '/Images/Nebel/Nebel.png';
const nebal1 = '/Images/Nebel/nebel1.png';
const nebal2 = '/Images/Nebel/nebel2.png';

const alif = '/Images/alif/alif.png';
const alif4 = '/Images/alif/alif4.png';
const alif2 = '/Images/alif/alif2.png';
const alif3 = '/Images/alif/alif5.png';
const alif5 = '/Images/alif/alif3.png';

const cms = '/Images/CMS/cms.png';
const cms1 = '/Images/CMS/cms1.png';
const cms3 = '/Images/CMS/cms3.png';

const bekhan = '/Images/Bekha/bekhan.png';
const bekhan1 = '/Images/Bekha/bekhan1.png';
const bekhan2 = '/Images/Bekha/bekhan2.png';
const bekhan3 = '/Images/Bekha/bekhan3.png';
const bekhan4 = '/Images/Bekha/bekhan4.png';
const bekhan5 = '/Images/Bekha/bekhan5.png';

const health = '/Images/Health/health.png';

const family = '/Images/family/family.png';
const family1 = '/Images/family/family1.png';
const family2 = '/Images/family/family2.png';
const family3 = '/Images/family/family3.png';
const family4 = '/Images/family/family4.png';

const jmc = '/Images/Jmc/jmc1.png';
const jmc1 = '/Images/Jmc/jmc.png';
const jmc2 = '/Images/Jmc/jmc2.png';

const siham1 = '/Images/Siham/siham1.png';
const siham2 = '/Images/Siham/siham2.png';
const siham3 = '/Images/Siham/siham3.png';
const siham4 = '/Images/Siham/siham4.png';

const Jejan1 = '/../../public/Images/jejan/Jejan1.jpg';
const Jejan2 = '/../../public/Images/jejan/Jejan2.jpg';
const Jejan3 = '/../../public/Images/jejan/Jejan3.jpg';
const Jejan4 = '/../../public/Images/jejan/Jejan4.jpg';
const Jejan5 = '/../../public/Images/jejan/Jejan5.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  images?: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  category?: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Useman Flour',
      description: 'Comprehensive flour management system that tracks input and output of flour inventory, manages payments, and offers real-time analytics.',
      image: flour,
      images: [flour, flour2, flour3, flour4, flour5, flour6, flour1],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Nebal',
      description: 'A dental service application offering patient registration, appointment booking, and real-time communication between dentists and patients.',
      image: nebal,
      images: [nebal, nebal1, nebal2],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Alif School',
      description: 'School management system for efficient administration of teachers, students, and academic workflows.',
      image: alif,
      images: [alif, alif4, alif2, alif3, alif5],
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
      liveUrl: 'https://alif-school-system.vercel.app/',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'CMS',
      description: 'E-commerce-like product delivery platform with machine learning features for predictive inventory and customer behavior analytics.',
      image: cms,
      images: [cms, cms1, cms3],
      technologies: ['Python', 'TensorFlow', 'AWS', 'React'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Smart IoT Platform (Bekhan)',
      description: 'Pharmacy e-commerce system that integrates smart device monitoring, automated ordering, and inventory control.',
      image: bekhan,
      images: [bekhan, bekhan1, bekhan2, bekhan3, bekhan4, bekhan5],
      technologies: ['Node.js', 'MQTT', 'InfluxDB', 'Grafana'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Health Platform',
      description: 'Patient-doctor management system that enables appointment scheduling and automatically matches patients with available doctors.',
      image: health,
      images: [health],
      technologies: ['Next.js', 'GraphQL', 'Redis', 'WebSocket'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 7,
      title: 'Family Community System',
      description: 'Locality-based family management platform that simplifies family registration, member tracking, and community services.',
      image: family,
      images: [family1, family2, family4, family, family3],
      category: 'Web Development',
      technologies: ['Next.js', 'GraphQL', 'Redis', 'WebSocket'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 8,
      title: 'JMC',
      description: 'Healthcare platform that helps patients easily find and connect with available doctors for consultations.',
      image: jmc,
      images: [jmc1, jmc, jmc2],
      category: 'Web Development',
      technologies: ['Next.js', 'GraphQL', 'Redis', 'WebSocket'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 9,
      title: 'Siham Hotel',
      description: 'Hotel management and promotional website that showcases hotel services, room availability, and customer booking options.',
      image: siham1,
      images: [siham1, siham2, siham3, siham4],
      category: 'Web Development',
      technologies: ['Next.js', 'GraphQL', 'Redis', 'WebSocket'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 10,
      title: 'Jejan E-Commerce',
      description: 'An e-commerce platform that connects customers and suppliers, facilitating seamless online transactions and product exchanges.',
      image: Jejan1,
      images: [Jejan1, Jejan2, Jejan3, Jejan4, Jejan5],
      category: 'Web Development',
      technologies: ['Next.js', 'GraphQL', 'Redis', 'WebSocket'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  const openModal = (project: Project): void => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = (): void => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = (): void => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = (): void => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images!.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index: number): void => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover our portfolio of innovative solutions that have transformed businesses across various industries
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Project Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                  {/* Overlay Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <button
                    onClick={() => openModal(project)}
                    className="group/btn flex items-center space-x-2 text-purple-400 hover:text-white transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>

                {/* Overlay Actions */}
                <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description.length > 100 ? project.description.substring(0, 100) + '...' : project.description}
                </p>

                {/* View Details Button */}
                <button
                  onClick={() => openModal(project)}
                  className="group/btn flex items-center space-x-2 text-purple-400 hover:text-white transition-colors text-sm"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Have a project in mind? Let's bring your vision to life.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 font-semibold">
            Start Your Project
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <button
                onClick={closeModal}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Image Gallery */}
              <div className="mb-6">
                <div className="relative">
                  <LazyImage
                    src={selectedProject.images ? selectedProject.images[currentImageIndex] : selectedProject.image}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-64 md:h-80 object-cover rounded-2xl"
                  />

                  {/* Navigation arrows - only show if multiple images */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                      >
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>

                      {/* Image counter */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 rounded-full px-3 py-1">
                        <span className="text-white text-sm">
                          {currentImageIndex + 1} / {selectedProject.images.length}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Thumbnail pagination - only show if multiple images */}
                {selectedProject.images && selectedProject.images.length > 1 && (
                  <div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2">
                    {selectedProject.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${currentImageIndex === index
                          ? 'border-purple-400 ring-2 ring-purple-400/50'
                          : 'border-white/20 hover:border-white/40'
                          }`}
                      >
                        <LazyImage
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Project Links</h4>
                  <div className="flex space-x-4 mb-6">
                    <a
                      href={selectedProject.liveUrl}
                      className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Real-time data processing</li>
                    <li>• Responsive design</li>
                    <li>• User authentication</li>
                    <li>• Database integration</li>
                    <li>• API development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;