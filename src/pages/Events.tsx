import { useEffect, useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight, Clock, Star, Trophy, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Events = () => {
  const [isVisible, setIsVisible] = useState({
    upcoming: false,
    past: false,
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

  const upcomingEvents = [
    {
      id: 1,
      title: 'Fall Leadership Conference',
      date: 'November 15-17, 2024',
      time: 'All Day',
      location: 'Sacramento, CA',
      description: 'California SkillsUSA Fall Leadership Conference where officers and members develop leadership skills, attend workshops, and network with other chapters.',
      participants: '15-20 students',
      status: 'upcoming',
      registrationOpen: true,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-violet-50',
      icon: Star
    },
    {
      id: 2,
      title: 'NorCal Regional Competition',
      date: 'March 15-16, 2025',
      time: '8:00 AM - 5:00 PM',
      location: 'San Jose Convention Center',
      description: 'Northern California Regional SkillsUSA Championships where students compete in technical and leadership events to qualify for state competition.',
      participants: '45-50 students',
      status: 'upcoming',
      registrationOpen: false,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-red-50 to-pink-50',
      icon: Trophy
    },
    {
      id: 3,
      title: 'California State Leadership & Skills Conference',
      date: 'April 24-27, 2025',
      time: 'All Day',
      location: 'Ontario Convention Center, Ontario, CA',
      description: 'California State SkillsUSA Championships where regional winners compete for gold, silver, and bronze medals and qualify for Nationals.',
      participants: '8-12 students',
      status: 'upcoming',
      registrationOpen: false,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      icon: Award
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Fall Chapter Meeting',
      date: 'November 15, 2023',
      location: 'MHHS Auditorium',
      description: 'Kicked off the school year with goal setting and team building activities.',
      participants: '60 students',
      achievements: ['Elected new officers', 'Set fundraising goals', 'Planned spring competitions'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
      icon: Calendar
    },
    {
      id: 5,
      title: 'Community Service Day',
      date: 'October 28, 2023',
      location: 'Local Community Center',
      description: 'Volunteered to help set up technology systems for senior citizens.',
      participants: '30 students',
      achievements: ['150 hours of community service', 'Helped 40 seniors', 'Media coverage'],
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-gradient-to-br from-orange-50 to-yellow-50',
      icon: Award
    },
    {
      id: 6,
      title: 'Regional Competition 2023',
      date: 'March 18-19, 2023',
      location: 'San Jose Convention Center',
      description: 'Our championship performance that qualified us for state competition.',
      participants: '40 students',
      achievements: ['3 first place winners', '5 top-three finishes', 'State qualification'],
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-blue-50',
      icon: Trophy
    },
    {
      id: 7,
      title: 'CPR Training Workshop',
      date: '2023-2024',
      location: 'MHHS Campus',
      description: 'SkillsUSA partnered with the MH Fire Department and taught high schoolers the importance and basics of CPR.',
      participants: '25 students',
      achievements: ['Life-saving skills training', 'Fire Department partnership', 'Community safety focus'],
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-red-50 to-pink-50',
      icon: Award
    },
    {
      id: 8,
      title: 'Volunteering for Homeless Resources',
      date: '2023-2024',
      location: 'Tracy Interfaith',
      description: 'SkillsUSA collected and organized canned goods for Tracy Interfaith, to help the homeless.',
      participants: '20 students',
      achievements: ['Food drive organization', 'Community outreach', 'Supporting local charities'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
      icon: Award
    },
    {
      id: 9,
      title: 'Resume Development Workshop',
      date: '2023-2024',
      location: 'MHHS Library',
      description: 'SkillsUSA hosted a Resume Workshop to teach students how to effectively write a resume for a job interview.',
      participants: '35 students',
      achievements: ['Career preparation skills', 'Professional development', 'Job readiness training'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      icon: Users
    },
    {
      id: 10,
      title: 'Firehouse Pancake Breakfast',
      date: '2022-2023',
      location: 'Mountain House Fire Department',
      description: 'SkillsUSA Officers partnered with Culinary Students to provide a traditional American breakfast to show our support to our local Mountain House Fire Department.',
      participants: '15 students',
      achievements: ['Community partnership', 'Culinary collaboration', 'First responder support'],
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-gradient-to-br from-orange-50 to-yellow-50',
      icon: Award
    },
    {
      id: 11,
      title: 'Circuitry Breadboarding Workshop',
      date: '2022-2023',
      location: 'MHHS Campus',
      description: 'SkillsUSA collaborated with Circuitry Club to host a middle school Circuitry Workshop to teach students the introduction into breadboarding.',
      participants: '40 students',
      achievements: ['STEM education outreach', 'Middle school collaboration', 'Technical skill development'],
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-violet-50',
      icon: Users
    },
    {
      id: 12,
      title: 'Resume Development Workshop',
      date: '2022-2023',
      location: 'MHHS Library',
      description: 'SkillsUSA hosted a Resume Workshop to teach students how to effectively write a resume for a job interview.',
      participants: '30 students',
      achievements: ['Career preparation skills', 'Professional development', 'Job readiness training'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      icon: Users
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-accent to-primary/80 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/15 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-bounce-in">
            <Calendar className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            SkillsUSA <span className="text-gradient">Events</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 animate-fade-in">
            Stay up to date with all our upcoming events, competitions, and achievements
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section data-section="upcoming" className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.upcoming ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold text-primary mb-6">
              <span className="text-gradient">Upcoming</span> Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mark your calendars and get ready for these exciting opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {upcomingEvents.map((event, index) => (
              <Card
                key={event.id}
                className={`${event.bgColor} border-0 shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105 group ${
                  isVisible.upcoming ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`bg-gradient-to-br ${event.color} p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                    <event.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-300">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{event.participants}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <Badge 
                      variant={event.registrationOpen ? "default" : "secondary"}
                      className={`${event.registrationOpen ? 'bg-gradient-accent text-white' : 'bg-muted text-muted-foreground'}`}
                    >
                      {event.registrationOpen ? 'Registration Open' : 'Registration Closed'}
                    </Badge>
                    
                    {event.registrationOpen && (
                      <Button
                        size="sm"
                        className="bg-gradient-accent hover:bg-gradient-accent/90 text-white font-semibold group-hover:scale-105 transition-all duration-300"
                      >
                        Register Now
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section data-section="past" className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.past ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold text-primary mb-6">
              <span className="text-gradient">Past</span> Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating our achievements and the impact we've made together
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card
                key={event.id}
                className={`${event.bgColor} border-0 shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105 group ${
                  isVisible.past ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`bg-gradient-to-br ${event.color} p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                    <event.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-300">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{event.participants}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {event.description}
                  </p>
                  
                  <div className="pt-2">
                    <h4 className="font-semibold text-primary mb-2 text-sm">Achievements:</h4>
                    <ul className="space-y-1">
                      {event.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-gradient-accent rounded-full"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;