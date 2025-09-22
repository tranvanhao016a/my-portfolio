export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Golang', 'C#', 'Java', 'Python', 'Dart'],
      animation: 'animate-slide-in-left'
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Angular', 'Node.js', 'Express.js', 'NestJS', 'Flutter', '.NET Core'],
      animation: 'animate-slide-in-up'
    },
    {
      title: 'Database & DevOps',
      skills: ['Supabase', 'MongoDB', 'Firebase', 'MSSQL', 'Docker', 'GCP'],
      animation: 'animate-slide-in-right'
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-glow">
            Skills & <span className="text-gradient animate-gradient">Technologies</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Technologies I master and work with daily</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`card text-center hover-lift ${category.animation}`}>
              <h3 className="text-xl font-bold text-white mb-6 text-glow">{category.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 glass rounded-full text-white/80 font-medium hover-scale">
                    {skill}
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
