import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Coding",
      skills: [
        { name: "R", level: 70 },
        { name: "Python", level: 90 },
        { name: "HTML5", level: 90 },
        { name: "Tailwind CSS", level: 92 },
         { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "mySQL", level: 70 },
        { name: "Github", level: 90 }
      ],
      color: "blue"
    },
    {
      category: "NGS",
      skills: [
        { name: "RNASeq", level: 90 },
        { name: "DESeq2", level: 85 },
        { name: "Minfi Methylation", level: 70 },
        { name: "scRNASeq", level: 90 },
        { name: "Seurat", level: 90 },
        { name: "AWS", level: 90 }
        


      ],
      color: "emerald"
    },
    {
      category: "Biotechnology",
      skills: [
        { name: "PCR", level: 70 },
        { name: "Spectrophotometry", level: 85 },
        { name: "Molecular and Microbiology", level: 80}
        { name: "Phytochemistry", level: 90 }
        { name: "Microscopy", level: 90 }
        { name: "Buffer Systems", level: 90 }
      ],
      color: "orange"
    }
  ];

  const getColorClass = (color: string, type: 'bg' | 'text' | 'border') => {
    const colors = {
      blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-600' },
      emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-600' },
      orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-600' }
    };
    return colors[color as keyof typeof colors][type];
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <h3 className={`text-2xl font-bold ${getColorClass(category.color, 'text')} mb-2`}>
                  {category.category}
                </h3>
                <div className={`w-12 h-1 ${getColorClass(category.color, 'bg')} rounded-full`}></div>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 ${getColorClass(category.color, 'bg')} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "JavaScript", "Python", "React","R", "TypeScript", 
              "mySQL", "Docker", "AWS", "Git"
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white rounded-full shadow-md text-slate-700 font-medium hover:shadow-lg transition-shadow duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;