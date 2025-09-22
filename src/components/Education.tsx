export default function Education() {
  return (
    <section className="section-sm">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-glow">
            <span className="text-gradient animate-gradient">Education</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">My academic foundation</p>
        </div>
        
        <div className="max-w-4xl mx-auto animate-slide-in-up">
          <div className="card hover-lift">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-3 text-glow">Bachelor of Information Technology</h3>
                <p className="text-gradient font-semibold text-xl mb-3 animate-gradient">Hoa Sen University</p>
                <p className="text-white/70 text-lg">Ho Chi Minh, Vietnam</p>
              </div>
              <div className="text-right mt-6 lg:mt-0">
                <p className="text-white/70 mb-2 text-lg">09/2019 – 03/2024</p>
                <p className="text-gradient font-bold text-2xl animate-gradient">GPA: 3.22/4.00</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse-custom mr-4"></div>
              <span className="text-white/70 font-medium text-lg">Graduated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
