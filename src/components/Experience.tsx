export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-glow">
            Professional <span className="text-gradient animate-gradient">Experience</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">My journey in the tech world</p>
        </div>
        
        <div className="max-w-4xl mx-auto animate-slide-in-up">
          <div className="card hover-lift">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-3 text-glow">Full Stack Developer</h3>
                <p className="text-gradient font-semibold text-xl mb-3 animate-gradient">ITSS Training</p>
                <p className="text-white/70 text-lg">Ho Chi Minh, Vietnam</p>
              </div>
              <div className="flex items-center mt-6 lg:mt-0">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse-custom mr-4"></div>
                <span className="text-white/70 font-medium">Currently Working</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 mr-4 flex-shrink-0 animate-pulse-custom"></div>
                  <p className="text-white/80 leading-relaxed">
                    Developed full-stack web applications, ensuring seamless integration between Angular frontend and Golang/Node.js backend
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 mr-4 flex-shrink-0 animate-pulse-custom"></div>
                  <p className="text-white/80 leading-relaxed">
                    Translated Figma designs into responsive user interfaces using HTML, CSS, and Angular
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mt-2 mr-4 flex-shrink-0 animate-pulse-custom"></div>
                  <p className="text-white/80 leading-relaxed">
                    Built scalable back-end systems with Golang and Node.js, optimizing performance and maintainability
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mt-2 mr-4 flex-shrink-0 animate-pulse-custom"></div>
                  <p className="text-white/80 leading-relaxed">
                    Developed and deployed cross-platform mobile applications with Flutter
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
