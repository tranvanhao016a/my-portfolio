interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/20">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20 gap-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-white relative z-10">
            <span className="text-gradient animate-gradient">Tran</span> Van Hao
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12 relative z-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/30'
                    : 'text-white/80 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-pulse-custom"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative z-10">
            <button className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
