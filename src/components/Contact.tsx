export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-glow">
            Get In <span className="text-gradient animate-gradient">Touch</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Let's create something amazing together</p>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl text-white/80 mb-12 leading-relaxed animate-slide-in-up">
            I'm always interested in new opportunities and exciting projects. Let's connect! 🚀
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card hover-lift hover-glow animate-slide-in-left">
              <div className="text-gradient mb-6 animate-gradient">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-glow">Email</h3>
              <a href="mailto:tranvanhao016@gmail.com" className="text-white/80 hover:text-white transition-colors text-lg">
                tranvanhao016@gmail.com
              </a>
            </div>
            
            <div className="card hover-lift hover-glow animate-slide-in-right">
              <div className="text-gradient mb-6 animate-gradient">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-glow">GitHub</h3>
              <a href="https://github.com/tranvanhao016a" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors text-lg">
                github.com/tranvanhao016a
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-in-up">
            <a
              href="mailto:tranvanhao016@gmail.com"
              className="btn-primary hover-lift text-xl font-semibold px-10 py-4"
            >
              Send Email ✉️
            </a>
            <a
              href="https://www.linkedin.com/in/haotran-van-4806b831a/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary hover-lift text-xl font-semibold px-10 py-4"
            >
              LinkedIn 💼
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
