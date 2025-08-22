import { useEffect, useState } from 'react';
import { Award, Users, Trophy, Calendar, Star, Target, TrendingUp } from 'lucide-react';
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
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50'
    },
    {
      icon: Users,
      title: 'Leadership Development',
      description: 'Build confidence and leadership skills through officer positions and project management.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
      icon: Award,
      title: 'Scholarship Opportunities',
      description: 'Access to hundreds of thousands of dollars in scholarships and educational funding.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50'
    },
    {
      icon: Calendar,
      title: 'Career Preparation',
      description: 'Gain real-world experience and industry connections for future career success.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50'
    },
  ];

  const achievements = [
    {
      year: '2023-24',
      title: 'National Excellence',
      description: '8 students sent to Nationals, 3 students placed gold in states, 9 students placed silver/bronze in states, 63/127 students placed gold/silver/bronze at regionals.',
      color: 'from-red-500 to-pink-500',
      icon: Star
    },
    {
      year: '2022-23',
      title: 'Record Breaking Year',
      description: '8 students placed gold in Nationals, 11 students sent to Nationals, 96/103 students placed gold/silver/bronze at regionals, all competitors placed Top 10 nationally.',
      color: 'from-blue-600 to-indigo-600',
      icon: Target
    },
    {
      year: '2021-22',
      title: 'National Champions',
      description: '1 student placed gold in Nationals, 7 students sent to Nationals, 85/93 students placed gold/silver/bronze at regionals, all competitors placed Top 10 nationally.',
      color: 'from-green-600 to-teal-600',
      icon: Award
    },
    {
      year: 'Overall',
      title: 'Chapter Excellence',
      description: '200+ Members, 9 Golds Nationally, 65+ Events, CEP (Chapter Excellence Program) recognition for community service and workshops.',
      color: 'from-purple-600 to-violet-600',
      icon: TrendingUp
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Introduction Section */}
      <section data-section="intro" className="py-20 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-accent/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible.intro ? 'animate-slide-in-left' : 'opacity-0 translate-x-8'}`}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-accent rounded-full mb-6 animate-bounce-in">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                About <span className="text-gradient">SkillsUSA</span>
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
                At Mountain House High School, our SkillsUSA chapter is dedicated to developing the whole person - 
                technical skills, leadership abilities, and professional development.
              </p>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${isVisible.intro ? 'animate-slide-in-right' : 'opacity-0 translate-x-8'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-accent rounded-3xl transform rotate-3 animate-pulse-glow"></div>
                <div className="relative bg-gradient-card rounded-3xl p-8 shadow-card-hover">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-accent rounded-full mx-auto mb-6 flex items-center justify-center animate-bounce-in">
                      <Star className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">Why SkillsUSA?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We're not just another club - we're a career preparation powerhouse that connects classroom learning with real-world application.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section data-section="benefits" className="py-20 bg-gradient-to-br from-secondary/30 via-background to-accent/5 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.benefits ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Why Join <span className="text-gradient">SkillsUSA</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the incredible benefits that await you as a SkillsUSA member
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className={`${benefit.bgColor} border-0 shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105 group ${
                  isVisible.benefits ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`bg-gradient-to-br ${benefit.color} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section data-section="journey" className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.journey ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating the milestones and achievements that define our chapter's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.title}
                className={`bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105 group ${
                  isVisible.journey 
                    ? index === 0 
                      ? 'animate-slide-in-left' 
                      : index === 1 
                      ? 'animate-fade-in' 
                      : index === 2 
                      ? 'animate-fade-in' 
                      : 'animate-slide-in-right'
                    : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`bg-gradient-to-br ${achievement.color} p-3 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-gradient-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                          {achievement.year}
                        </span>
                        <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                          {achievement.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CEP Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Chapter Excellence <span className="text-gradient">Program</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to community service and skill development through workshops and events
            </p>
          </div>

          <div className="space-y-12">
            {/* 2023-2024 School Year */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">2023-2024 School Year</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-0 shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-bold text-primary mb-3">Resume Development Workshop</h4>
                    <p className="text-muted-foreground text-sm">
                      SkillsUSA hosted a Resume Workshop to teach students how to effectively write a resume for a job interview.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-bold text-primary mb-3">Volunteering for Homeless Resources</h4>
                    <p className="text-muted-foreground text-sm">
                      SkillsUSA collected and organized canned goods for Tracy Interfaith, to help the homeless.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-0 shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-bold text-primary mb-3">CPR Training Workshop</h4>
                    <p className="text-muted-foreground text-sm">
                      SkillsUSA partnered with the MH Fire Department and taught high schoolers the importance and basics of CPR.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 2022-2023 School Year */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">2022-2023 School Year</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-0 shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-bold text-primary mb-3">Resume Development Workshop</h4>
                    <p className="text-muted-foreground text-sm">
                      SkillsUSA hosted a Resume Workshop to teach students how to effectively write a resume for a job interview.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-0 shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-bold text-primary mb-3">Firehouse Pancake Breakfast</h4>
                    <p className="text-muted-foreground text-sm">
                      SkillsUSA Officers partnered with Culinary Students to provide a traditional American breakfast to show our support to our local Mountain House Fire Department.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-0 shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-bold text-primary mb-3">Circuitry Breadboarding Workshop</h4>
                    <p className="text-muted-foreground text-sm">
                      SkillsUSA collaborated with Circuitry Club to host a middle school Circuitry Workshop to teach students the introduction into breadboarding.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;