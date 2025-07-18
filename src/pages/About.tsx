import { useEffect, useState } from 'react';
import { Award, Users, Trophy, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const [isVisible, setIsVisible] = useState({
    intro: false,
    benefits: false,
    journey: false,
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

  const benefits = [
    {
      icon: Trophy,
      title: 'Competition Experience',
      description: 'Compete at regional, state, and national levels in various technical and leadership events.',
    },
    {
      icon: Users,
      title: 'Leadership Development',
      description: 'Build confidence and leadership skills through officer positions and project management.',
    },
    {
      icon: Award,
      title: 'Scholarship Opportunities',
      description: 'Access to hundreds of thousands of dollars in scholarships and educational funding.',
    },
    {
      icon: Calendar,
      title: 'Career Preparation',
      description: 'Gain real-world experience and industry connections for future career success.',
    },
  ];

  const achievements = [
    {
      year: '2023',
      title: 'NorCal Regional Champions',
      description: 'Won first place in multiple categories at the Northern California Regional Competition.',
    },
    {
      year: '2023',
      title: 'State Leadership Conference',
      description: 'Participated in the California State Leadership and Skills Conference with outstanding results.',
    },
    {
      year: '2022',
      title: 'Chapter Excellence Award',
      description: 'Recognized for outstanding chapter performance and community engagement.',
    },
    {
      year: '2022',
      title: 'Community Service Recognition',
      description: 'Completed over 500 hours of community service supporting local STEM initiatives.',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Introduction Section */}
      <section data-section="intro" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible.intro ? 'animate-slide-in-left' : 'opacity-0 translate-x-8'}`}>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                About <span className="text-accent">SkillsUSA</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                SkillsUSA is a partnership of students, teachers, and industry working together to ensure America has a skilled workforce. 
                We serve students enrolled in training programs in trade, technical, and skilled service occupations, including health occupations.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 1965, SkillsUSA has grown to include more than 395,000 students and instructors annually, 
                and serves more than 600 occupations represented in manufacturing, transportation, construction, 
                communications, customer service, hospitality, and health services.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Montgomery High School, our SkillsUSA chapter is dedicated to developing the whole person - 
                combining technical skills with leadership, teamwork, citizenship, and character development.
              </p>
            </div>
            <div className={`transition-all duration-1000 delay-200 ${isVisible.intro ? 'animate-slide-in-right' : 'opacity-0 translate-x-8'}`}>
              <Card className="bg-gradient-card shadow-card-hover">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">What is a CTSO?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A Career and Technical Student Organization (CTSO) is a group that helps students develop 
                    leadership skills, explore career opportunities, and compete in events related to their field of study. 
                    SkillsUSA is one of the most prominent CTSOs in the nation, connecting classroom learning with 
                    real-world applications.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section data-section="benefits" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.benefits ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Why Join SkillsUSA?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the many benefits of becoming a SkillsUSA member
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className={`bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105 ${
                  isVisible.benefits ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-hero p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section data-section="journey" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.journey ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Major achievements and milestones in our chapter's history
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.year}
                className={`flex flex-col md:flex-row gap-6 mb-12 last:mb-0 transition-all duration-1000 ${
                  isVisible.journey ? 'animate-fade-in' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="md:w-24 flex-shrink-0">
                  <div className="bg-gradient-hero text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">
                    {achievement.year.slice(-2)}
                  </div>
                </div>
                <Card className="flex-1 bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;