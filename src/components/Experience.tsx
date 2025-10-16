import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
      achievements: [
        "Improved application performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipelines"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript"]
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create pixel-perfect implementations.",
      achievements: [
        "Delivered 15+ client projects on time",
        "Reduced bug reports by 60%",
        "Introduced automated testing practices"
      ],
      technologies: ["Vue.js", "Python", "PostgreSQL", "Firebase"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Co",
      location: "New York, NY",
      period: "2019 - 2020",
      description: "Created responsive web applications and optimized user experiences. Worked closely with UX designers to implement design systems.",
      achievements: [
        "Built 20+ responsive websites",
        "Improved page load times by 50%",
        "Established component library"
      ],
      technologies: ["JavaScript", "CSS3", "SASS", "Webpack"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023"
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2022"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2021"
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
            {/* Certifications */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Award className="text-emerald-600" size={24} />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-b border-slate-100 last:border-b-0 pb-4 last:pb-0">
                    <h4 className="font-semibold text-slate-800 mb-1">{cert.name}</h4>
                    <p className="text-sm text-slate-600">{cert.issuer}</p>
                    <p className="text-xs text-slate-500">{cert.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-800">Bachelor of Computer Science</h4>
                  <p className="text-slate-600">University of Technology</p>
                  <p className="text-sm text-slate-500">2015 - 2019</p>
                  <p className="text-sm text-slate-600 mt-1">Magna Cum Laude, GPA: 3.8/4.0</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Years of Experience</span>
                  <span className="font-bold text-2xl">5+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Projects Completed</span>
                  <span className="font-bold text-2xl">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Happy Clients</span>
                  <span className="font-bold text-2xl">25+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Code Commits</span>
                  <span className="font-bold text-2xl">2000+</span>
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