export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-glow">
            About <span className="text-gradient animate-gradient">Me</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Passionate developer crafting digital experiences</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2 animate-slide-in-left">
            <div className="card hover-lift">
              <h3 className="text-3xl font-bold text-white mb-6 text-glow">Full Stack Developer</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with <span className="text-gradient font-semibold">2 years of experience</span> in 
                Angular, Node.js, and Flutter. I specialize in building scalable applications and optimizing performance 
                to deliver exceptional user experiences.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Based in <span className="text-gradient font-semibold">Ho Chi Minh City, Vietnam</span>, I'm always eager to contribute to 
                high-impact projects and collaborate in agile teams. My goal is to create innovative solutions that make a real difference.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 glass rounded-xl hover-scale">
                  <div className="text-3xl mb-3">📍</div>
                  <span className="text-white/70 font-medium">Ho Chi Minh</span>
                </div>
                <div className="text-center p-4 glass rounded-xl hover-scale">
                  <div className="text-3xl mb-3">🎓</div>
                  <span className="text-white/70 font-medium">Hoa Sen University</span>
                </div>
                <div className="text-center p-4 glass rounded-xl hover-scale">
                  <div className="text-3xl mb-3">💼</div>
                  <span className="text-white/70 font-medium">2+ Years</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex flex-col gap-10 animate-slide-in-right">
            <div className="card text-center hover-lift hover-glow">
              <div className="text-4xl font-bold text-gradient mb-2 animate-gradient">2+</div>
              <div className="text-white/70">Years Experience</div>
            </div>
            <div className="card text-center hover-lift hover-glow">
              <div className="text-4xl font-bold text-gradient mb-2 animate-gradient">4+</div>
              <div className="text-white/70">Personal Projects</div>
            </div>
            <div className="card text-center hover-lift hover-glow">
              <div className="text-4xl font-bold text-gradient mb-2 animate-gradient">15+</div>
              <div className="text-white/70">Technologies</div>
            </div>
            <div className="card text-center hover-lift hover-glow">
              <div className="text-4xl font-bold text-gradient mb-2 animate-gradient">100%</div>
              <div className="text-white/70">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
