import React from 'react';
import { Code, Heart, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Clean Code Advocate",
      description: "I believe in writing maintainable, scalable code that stands the test of time."
    },
    {
      icon: <Heart className="text-emerald-600" size={24} />,
      title: "User-Centric Design",
      description: "Every solution I create puts user experience at the forefront of decision-making."
    },
    {
      icon: <Zap className="text-orange-600" size={24} />,
      title: "Performance Focused",
      description: "Optimizing for speed and efficiency while maintaining functionality and aesthetics."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                About <span className="text-blue-600">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mb-8"></div>
            </div>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital solutions that make a difference. My journey started with a curiosity 
                about how things work, which evolved into a love for building applications that 
                solve real-world problems.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or mentoring aspiring developers. I believe in continuous 
                learning and staying ahead of industry trends to deliver cutting-edge solutions.
              </p>
              <p>
                My approach combines technical expertise with creative problem-solving, ensuring 
                every project not only meets requirements but exceeds expectations.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{highlight.title}</h3>
                    <p className="text-slate-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-3xl p-1">
              <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-slate-800">5+</div>
                  <div className="text-xl text-slate-600">Years Experience</div>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">50+</div>
                      <div className="text-sm text-slate-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">25+</div>
                      <div className="text-sm text-slate-600">Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-200 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;