interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium animate-slide-in-up">
                👋 Hello, I'm
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight text-glow">
                <span className="text-gradient animate-gradient">Tran Van</span>
                <br />
                <span className="text-white text-shadow">Hao</span>
              </h1>
              
              <div className="relative">
                <h2 className="text-2xl md:text-4xl text-white/90 font-semibold mb-4">
                  Full Stack Developer
                </h2>
                <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse-custom"></div>
              </div>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-shadow">
                Passionate about building <span className="text-gradient font-semibold">scalable applications</span> with 
                modern technologies. Creating innovative solutions that make a difference in the digital world.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary hover-lift text-lg font-semibold px-8 py-4 group"
              >
                View My Work
                <svg className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary hover-lift text-lg font-semibold px-8 py-4"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/tranvanhao016a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass rounded-full hover-lift hover-glow group"
              >
                <svg className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/haotran-van-4806b831a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass rounded-full hover-lift hover-glow group"
              >
                <svg className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:tranvanhao016@gmail.com"
                className="p-4 glass rounded-full hover-lift hover-glow group"
              >
                <svg className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Spectacular Avatar */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Main Avatar Circle */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2 animate-glow">
                <div className="w-full h-full rounded-full glass-card flex items-center justify-center relative overflow-hidden">
                  <span className="text-7xl lg:text-9xl font-black text-gradient animate-gradient">TH</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-gradient"></div>
                </div>
              </div>
              
              {/* Status Indicator */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse-custom flex items-center justify-center shadow-2xl">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse-custom"></div>
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-8 -left-8 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-float">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 glass-card rounded-full flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                <span className="text-3xl">🚀</span>
              </div>
              <div className="absolute top-1/2 -left-12 w-12 h-12 glass-card rounded-full flex items-center justify-center animate-float" style={{animationDelay: '4s'}}>
                <span className="text-xl">💻</span>
              </div>
              
              {/* Rotating Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-rotate opacity-50" style={{animationDuration: '30s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
