import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, ArrowRight, Filter, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Enhanced Progressive Image Component with blur effect (no loading spinner)
interface ProgressiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc?: string;
}

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  alt,
  className = '',
  placeholderSrc,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);
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
        rootMargin: '100px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} {...props}>
      <div
        className={`absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 transition-opacity duration-700 ${isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        style={{
          backgroundImage: isInView ? `url(${src})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(20px) brightness(1.1)',
          transform: 'scale(1.1)',
        }}
      />

      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`relative z-20 w-full h-full object-cover transition-all duration-700 ${isLoaded ? 'opacity-100 filter-none' : 'opacity-0'
            }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
        />
      )}

      {imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center z-30">
          <div className="text-center text-gray-500">
            <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Alternative blur image component
interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

const BlurToSharpImage: React.FC<BlurImageProps> = ({ src, alt, className = '', placeholder }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageInView, setImageInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${imageLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        style={{
          backgroundImage: imageInView ? `url(${src})` : 'linear-gradient(135deg, #34bfbd 0%, #22d3ee 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px) brightness(1.1)',
          transform: 'scale(1.05)',
        }}
      />

      {imageInView && (
        <img
          src={src}
          alt={alt}
          className={`relative z-10 w-full h-full object-cover transition-all duration-700 ease-in-out ${imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />
      )}
    </div>
  );
};

// Import images
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

const Jejan1 = '/Images/jejan/jejan1.jpg';
const Jejan2 = '/Images/jejan/jejan2.jpg';
const Jejan3 = '/Images/jejan/jejan3.jpg';
const Jejan4 = '/Images/jejan/jejan4.jpg';
const Jejan5 = '/Images/jejan/jejan5.jpg';

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
      title: 'Usman Flour',
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
      liveUrl: '',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'CMS',
      description: 'E-commerce-like product delivery platform',
      image: cms,
      images: [cms, cms1, cms3],
      technologies: ['Python', 'TensorFlow', 'AWS', 'React'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Bekhan',
      description: 'Pharmacy e-commerce system that integrates smart device monitoring, ordering, and inventory control.',
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
    <section id="projects" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Our <span className="bg-gradient-to-r from-[#34bfbd] to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our portfolio of innovative solutions that have transformed businesses across various industries
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white border border-gray-200 rounded-3xl overflow-hidden transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl"

              >
                {/* Project Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <BlurToSharpImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full  transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent"></div>

                  {/* Overlay Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0  transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                    >
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4  transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <button
                    onClick={() => openModal(project)}
                    className="group/btn flex items-center space-x-2 text-[#34bfbd] hover:text-cyan-600 transition-colors font-medium"
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
              className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105"

            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <ProgressiveImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover  transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>

                {/* Overlay Actions */}
                <div className="absolute top-3 right-3 flex space-x-2 opacity-0  transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                  >
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3  transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description.length > 100 ? project.description.substring(0, 100) + '...' : project.description}
                </p>

                {/* View Details Button */}
                <button
                  onClick={() => openModal(project)}
                  className="group/btn flex items-center space-x-2 text-[#34bfbd] hover:text-cyan-600 transition-colors text-sm font-medium"
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
          <p className="text-gray-600 mb-6">
            Have a project in mind? Let's bring your vision to life.
          </p>
          <button
            className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-xl"
            style={{
              background: 'linear-gradient(to right, #34bfbd, #22d3ee)',
              boxShadow: '0 4px 14px 0 rgba(52, 191, 189, 0.25)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 30px 0 rgba(52, 191, 189, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(52, 191, 189, 0.25)';
            }}
          >
            Start Your Project
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
              <button
                onClick={closeModal}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Image Gallery */}
              <div className="mb-6">
                <div className="relative">
                  <BlurToSharpImage
                    src={selectedProject.images ? selectedProject.images[currentImageIndex] : selectedProject.image}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-64 md:h-80 object-cover rounded-2xl"
                  />

                  {/* Navigation arrows */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                      >
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                      </button>

                      {/* Image counter */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 rounded-full px-3 py-1 shadow-lg">
                        <span className="text-gray-700 text-sm font-medium">
                          {currentImageIndex + 1} / {selectedProject.images.length}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Thumbnail pagination */}
                {selectedProject.images && selectedProject.images.length > 1 && (
                  <div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2">
                    {selectedProject.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${currentImageIndex === index
                          ? 'border-[#34bfbd] ring-2 ring-[#34bfbd]/30'
                          : 'border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <ProgressiveImage
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
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Description</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex space-x-4 mb-6">
                    <a
                      href={selectedProject.liveUrl}
                      className=""
                    >
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      className=""
                    >
                    </a>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Features</h4>
                  <ul className="text-gray-600 space-y-2">
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