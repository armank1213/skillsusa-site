import { useEffect, useState } from 'react';
import { Users, Cpu, Target, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';
import heroImage from '@/assets/hero-banner.jpg';

const Home = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    mission: false,
    pillars: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute('data-section') as keyof typeof isVisible;
            if (sectionName) {
              setIsVisible(prev => ({ ...prev, [sectionName]: true }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-section]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      icon: Target,
      title: 'Leadership',
      description: 'Develop essential leadership skills through hands-on experiences and competitive events that prepare you for future success.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cpu,
      title: 'Technology',
      description: 'Master cutting-edge technology and technical skills that are in high demand in today\'s rapidly evolving job market.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Build strong collaborative relationships and learn to work effectively with others to achieve common goals.',
      color: 'from-green-500 to-emerald-500'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        data-section="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(35, 47, 83, 0.8), rgba(220, 38, 38, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center text-white z-10 relative">
          <div className={`transition-all duration-1000 delay-300 ${isVisible.hero ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            {/* Sparkles Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-accent p-3 rounded-full animate-pulse-glow">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            </div>
            
            {/* Hero Text */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              MHHS <span className="text-gradient">SkillsUSA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md font-light">
              Champions at Work
            </p>
            
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Empowering students through leadership, technology, and career-ready skills
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <NavLink to="/join">
                <Button
                  size="lg"
                  className="bg-gradient-accent hover:bg-gradient-accent/90 text-accent-foreground font-bold px-8 py-4 text-lg shadow-glow hover:shadow-glow/80 transition-all duration-300 hover:scale-105 btn-modern group"
                >
                  Join Us Today
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </NavLink>
              <NavLink to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white font-semibold px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/80 hover:text-primary border-white/30 hover:border-white"
                >
                  Learn More
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section data-section="mission" className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.mission ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-6 animate-bounce-in">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              SkillsUSA is a national education association serving students, teachers, and industry to ensure America has a skilled workforce. 
              We help our members become world-class workers, leaders, and responsible American citizens through hands-on learning, 
              career preparation, and competitive excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section data-section="pillars" className="py-20 bg-secondary/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 to-primary/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.pillars ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Three Pillars
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The foundation of everything we do at SkillsUSA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card
                key={pillar.title}
                className={`glass shadow-glass hover:shadow-glow transition-all duration-500 hover:scale-105 group ${
                  isVisible.pillars 
                    ? index === 0 
                      ? 'animate-slide-in-left' 
                      : index === 2 
                      ? 'animate-slide-in-right' 
                      : 'animate-fade-in'
                    : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`bg-gradient-to-br ${pillar.color} p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                    <pillar.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;