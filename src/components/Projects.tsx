import React, { useState } from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';
import InterestDrawer from './InterestDrawer';

const Projects = () => {
  const [drawerState, setDrawerState] = useState<{
    isOpen: boolean;
    type: 'photography' | 'stocks' | 'cooking' | null;
  }>({
    isOpen: false,
    type: null
  });

  const openDrawer = (type: 'photography' | 'stocks' | 'cooking') => {
    setDrawerState({ isOpen: true, type });
  };

  const closeDrawer = () => {
    setDrawerState({ isOpen: false, type: null });
  };

  const projects = [
    {
      title: "Methylation Pipeline Designing",
      description: "A full-stack solution built with R, Minfi, and ChAMP integration. Features include methylation scanning and data analysis, advanced DEG identification, and influence on Hypoxia.",
      image: "https://geneticeducation.co.in/wp-content/uploads/2024/03/DNA-methylation-min.png?auto=compress&cs=tinysrgb&w=800",
      technologies: ["R", "Illumina iScan", "Illumina EPIC BeadChips"],
      demoLink: "https://youtu.be/KYHBbEKap0A?si=pMeVn4m78ULa1PZm",
      githubLink: "https://github.com/vishnuspillai/Methylation",
      featured: true
    },
    {
      title: "Single Cell Sequencing",
      description: "Real-time analytics dashboard with interactive charts, data visualization, and automated reporting capabilities.",
      image: "https://www.genengnews.com/wp-content/uploads/2019/07/SingleCellGenomics__Getty_1087306246_MeletiosVerras_SingleCellAnalyisis-1024x768.jpg",
      technologies: ["R", "Seurat", "Platypus", "scRepertoire"],
      demoLink: "#",
      githubLink: "https://github.com/vishnuspillai/MG-scRNAseq_BCR",
      featured: true
    },
    {
      title: "Stock Market Landscape and Prediction",
      description: "Fully automated price prediction with real-time support and resistance analysis, moving average, RSI and MACD technicals.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b6nY8f-8VB_EKAafmUB83d0eDA3dM_p6gg&s",
      technologies: ["Jupyter Notebook", "Python"],
      demoLink: "#",
      githubLink: "https://github.com/vishnuspillai/BullsandBears",
      featured: true
    },
    {
      title: "Stock Markets",
      description: "Algorithmic trading strategies and market analysis using statistical methods and machine learning for optimal portfolio management.",
      image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "R", "TradingView", "Statistical Analysis"],
      demoLink: "#",
      githubLink: "#",
      featured: false,
      isClickable: true,
      clickAction: () => openDrawer('stocks')
    },
    {
      title: "Photography",
      description: "Capturing moments through creative lens work, specializing in nature, portraits, and street photography across Kerala's diverse landscapes.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Nikon 5200", "Lightroom", "Photoshop", "Drone Photography"],
      demoLink: "#",
      githubLink: "#",
      featured: false,
      isClickable: true,
      clickAction: () => openDrawer('photography')
    },
    {
      title: "Cooking",
      description: "Exploring culinary arts through traditional Kerala cuisine and fusion cooking, combining flavors and techniques from different cultures.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Traditional Recipes", "Fusion Techniques", "Spice Blending", "Fermentation"],
      demoLink: "#",
      githubLink: "#",
      featured: false,
      isClickable: true,
      clickAction: () => openDrawer('cooking')
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating technical expertise and creative problem-solving
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex gap-4">
                        <a 
                          href={project.demoLink}
                          className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                        <a 
                          href={project.githubLink}
                          className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4">
                    <div className="bg-orange-400 text-white p-2 rounded-full">
                      <Zap size={20} />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">{project.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.demoLink}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors duration-200 font-semibold"
                  >
                    <ExternalLink size={18} />
                    View Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    className="flex items-center gap-2 border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-3 rounded-full transition-colors duration-200 font-semibold"
                  >
                    <Github size={18} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Me Outside</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                  project.isClickable ? 'cursor-pointer hover:scale-105' : ''
                }`}
                onClick={project.isClickable ? project.clickAction : undefined}
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex gap-2">
                        {project.isClickable ? (
                          <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                            <ExternalLink size={14} />
                            Explore
                          </div>
                        ) : (
                          <>
                            <a 
                              href={project.demoLink}
                              className="flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm hover:bg-white/30 transition-colors duration-200"
                            >
                              <ExternalLink size={14} />
                              Demo
                            </a>
                            <a 
                              href={project.githubLink}
                              className="flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm hover:bg-white/30 transition-colors duration-200"
                            >
                              <Github size={14} />
                              Code
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  {project.isClickable && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-blue-500 text-white p-2 rounded-full opacity-80">
                        <ExternalLink size={16} />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h4>
                  <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {project.isClickable && (
                    <div className="text-blue-600 text-sm font-medium">
                      Click to explore more →
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interest Drawer */}
      <InterestDrawer 
        isOpen={drawerState.isOpen}
        onClose={closeDrawer}
        type={drawerState.type!}
      />
    </section>
  );
};

export default Projects;