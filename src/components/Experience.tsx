import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Project Trainee",
      company: "CSIR - Institute of Genomics and Integrative Biology",
      location: "Mall Road, New Delhi, India",
      period: "2022 - Present",
      description: "Designing the preprocess pipeline for normalization and outlier detection in Methylated samples due to  High Altitude Hypoxia and HAPE Exposures.",
      achievements: [
        "Improved detection performance by 40%",
        "Got Exposed to Epigenetics",
        "Implemented DMR and SVD pipelines.",
        "Got exposure to designing a variant classification pipeline using ACMG for Cardiac Channellopathies."
      ],
      technologies: ["R", "Linux", "AWS"]
    },
    {
      title: "Project Intern",
      company: "Department of Computational Biology and Bioinformatics",
      location: "Remote and On-Site",
      period: "2021",
      description: "Standardized a workflow for the isolation of extrachromosal DNA from leaf tissues.",
      achievements: [
        "Proved that CTAB is preferable than SDS for plant samples",
        "Experimented and submitted an analysis during 2021 COVID-19",
        "Got experienced in handling precision samples"
      ],
      technologies: ["Genome extraction", "Spectrophotometry", "Electrophoresis", "PCR"]
    },
    {
      title: "Project Intern",
      company: "University of Kerala",
      location: "Kerala, India",
      period: "2019",
      description: "Comprehensive phytochemical analysis of Flaxseed tissues.",
      achievements: [
        "Identified the antioxidant capability",
        "Learned the influence of Omega3 acids from a plant source",
        "Got hands on training in Microbiology and Fungal samples"
      ],
      technologies: ["Soxhlets", "Microbiology", "Biotechnology", "Agriculture"]
    }
  ];


  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            My <span className="text-blue-600">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A timeline of my professional growth and key achievements in the tech industry
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-32 bg-blue-200"></div>
                  )}
                  
                  <div className="flex gap-6">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                      <Calendar className="text-white" size={20} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="mb-4">
                        <h4 className="text-xl font-bold text-slate-800 mb-1">{exp.title}</h4>
                        <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-2">
                          <span className="font-semibold text-blue-600">{exp.company}</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 mb-4">{exp.description}</p>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                          <Award size={16} className="text-emerald-600" />
                          Key Achievements
                        </h5>
                        <ul className="list-disc list-inside text-slate-600 space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm">{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Education */}
  <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl p-6 text-white">
              <h1 className="text-xl font-bold mb-6">Education</h1>
              <div className="space-y-4"></div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
             
              <div className="space-y-4"></div>
             
                  <h4 className="font-bold text-slate-800">Masters in Computational Biology and Bioinformatics in NGS</h4>
                  <p className="text-slate-600">University of Kerala</p>
                  <p className="text-sm text-slate-500">2023 - 2025</p>
                  <p className="text-sm text-slate-600 mt-1"> GPA: 9.13/10</p>
                 </div>
                <div>
            </div>
            
  <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-800">Masters of Arts in Public Administration</h4>
                  <p className="text-slate-600">Indira Gandhi National Open University</p>
                  <p className="text-sm text-slate-500">2022 - 2024</p>
                  <p className="text-sm text-slate-600 mt-1"> GPA: 6/10</p>
                </div>
              </div>
            </div>
            
             <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-800">Masters in Biotechnology</h4>
                  <p className="text-slate-600">University of Kerala</p>
                  <p className="text-sm text-slate-500">2019 - 2021</p>
                  <p className="text-sm text-slate-600 mt-1"> GPA: 7.525/10</p>
                </div>
              </div>
            </div>
            
 <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-800">Bachelors in Biotechnology</h4>
                  <p className="text-slate-600">University of Kerala</p>
                  <p className="text-sm text-slate-500">2016 - 2019</p>
                  <p className="text-sm text-slate-600 mt-1"> GPA: 7.022/10</p>
                </div>
              </div>
            </div>
            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Years of Experience</span>
                  <span className="font-bold text-2xl">1+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Projects Completed</span>
                  <span className="font-bold text-2xl">5+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Years of Exposure</span>
                  <span className="font-bold text-2xl">5+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Code Commits</span>
                  <span className="font-bold text-2xl">100+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;