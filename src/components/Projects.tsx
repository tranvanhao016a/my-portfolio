export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'YumShare',
      subtitle: 'Recipe Sharing Platform',
      description: 'Comprehensive recipe sharing platform with Angular frontend and NestJS backend, featuring real-time interactions and advanced search functionality.',
      achievements: [
        'Improved user engagement by 35%',
        '1,500+ daily recipe submissions',
        '2,000+ active users'
      ],
      technologies: ['Angular', 'NestJS', 'PostgreSQL', 'WebSocket'],
      gradient: 'from-blue-500 to-purple-500',
      animationDelay: 'animate-slide-in-left'
    },
    {
      id: 2,
      name: 'Medical',
      subtitle: 'Plant Database Mobile App',
      description: 'End-to-end development of a medicinal plant database mobile app with comprehensive search and identification features.',
      achievements: [
        '5,000+ plant records',
        '4.8/5 user rating',
        '99% uptime, sub-100ms search'
      ],
      technologies: ['Flutter', 'Golang', 'Elasticsearch', 'Firebase'],
      gradient: 'from-green-500 to-emerald-500',
      animationDelay: 'animate-slide-in-right'
    },
    {
      id: 3,
      name: 'ImagoAdministration',
      subtitle: 'Reporting API System',
      description: 'Built and maintained reporting APIs using Golang, supporting CRUD operations with Firebase integration for secure data storage.',
      achievements: [
        '500+ daily transactions',
        'Zero downtime',
        '10% faster API response'
      ],
      technologies: ['Golang', 'Firebase', 'REST API', 'CRUD'],
      gradient: 'from-purple-500 to-pink-500',
      animationDelay: 'animate-slide-in-left'
    },
    {
      id: 4,
      name: 'Gnosis',
      subtitle: 'Quiz & Course Management',
      description: 'Comprehensive quiz and course management system with Firebase Authentication, progress tracking, and adaptive learning paths.',
      achievements: [
        '2,000+ daily requests',
        '40% faster onboarding',
        '18% faster queries'
      ],
      technologies: ['MongoDB', 'Firebase Auth', 'Google OAuth', 'REST API'],
      gradient: 'from-orange-500 to-red-500',
      animationDelay: 'animate-slide-in-right'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-glow">
            Featured <span className="text-gradient animate-gradient">Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Showcasing my best work and achievements</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className={`card hover-lift ${project.animationDelay} group`}>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-glow transition-all">{project.name}</h3>
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center animate-pulse-custom`}>
                    <span className="text-white font-bold">{project.id}</span>
                  </div>
                </div>
                <p className="text-gradient font-semibold text-lg mb-4 animate-gradient">{project.subtitle}</p>
                <p className="text-white/80 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              
              <div className="space-y-4 mb-6">
                {project.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-center text-white/70">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse-custom"></div>
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 glass rounded-full text-white/80 text-sm font-medium hover-scale">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
