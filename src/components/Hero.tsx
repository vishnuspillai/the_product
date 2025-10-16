import React from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img
                src="/image.png"
                alt="Vishnu S Pillai"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Vishnu S Pillai</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              NGS Specialised Bioinformatician and Biotechnologist
            </p>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We embark in providing NGS analysis experiences through clean code, thoughtful design,
              and cutting-edge technology, bridging the gap between Lab tables and Desktops.
              Let's build something amazing together.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <Mail size={20} />
              Get In Touch
              <div className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </div>
            </a>
            <a
              href="/resume.pdf"
              download="Vishnu_S_Pillai_Resume.pdf"
              className="group border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 hover:bg-white/10"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-white/60" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;