import { useEffect, useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
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
      title: 'NorCal Regional Competition',
      date: 'March 15-16, 2024',
      time: '8:00 AM - 5:00 PM',
      location: 'San Jose Convention Center',
      description: 'Our biggest competition of the year! Students will compete in various technical and leadership events.',
      participants: '45 students',
      status: 'upcoming',
      registrationOpen: true,
    },
    {
      id: 2,
      title: 'Mock Interview Workshop',
      date: 'February 28, 2024',
      time: '3:30 PM - 5:00 PM',
      location: 'MHHS Library',
      description: 'Practice your interview skills with industry professionals and receive valuable feedback.',
      participants: '25 students',
      status: 'upcoming',
      registrationOpen: true,
    },
    {
      id: 3,
      title: 'Leadership Conference',
      date: 'April 12-14, 2024',
      time: 'All Day',
      location: 'Sacramento, CA',
      description: 'State-level leadership development conference with workshops and networking opportunities.',
      participants: '12 officers',
      status: 'upcoming',
      registrationOpen: false,
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
    },
    {
      id: 5,
      title: 'Community Service Day',
      date: 'October 28, 2023',
      location: 'Local Community Center',
      description: 'Volunteered to help set up technology systems for senior citizens.',
      participants: '30 students',
      achievements: ['150 hours of community service', 'Helped 40 seniors', 'Media coverage'],
    },
    {
      id: 6,
      title: 'Regional Competition 2023',
      date: 'March 18-19, 2023',
      location: 'San Jose Convention Center',
      description: 'Our championship performance that qualified us for state competition.',
      participants: '40 students',
      achievements: ['3 first place winners', '5 top-three finishes', 'State qualification'],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Events & Activities
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 animate-fade-in">
            Stay updated with our latest competitions, workshops, and community events
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section data-section="upcoming" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.upcoming ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mark your calendars for these exciting opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card
                key={event.id}
                className={`bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105 ${
                  isVisible.upcoming ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-accent text-accent-foreground">
                      Upcoming
                    </Badge>
                    {event.registrationOpen && (
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Registration Open
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-primary">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      {event.participants}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90" 
                    disabled={!event.registrationOpen}
                  >
                    {event.registrationOpen ? 'Learn More' : 'Registration Closed'}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section data-section="past" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.past ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Past Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating our recent successes and memorable moments
            </p>
          </div>

          <div className="space-y-8">
            {pastEvents.map((event, index) => (
              <Card
                key={event.id}
                className={`bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-500 ${
                  isVisible.past ? 'animate-slide-in-left' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="outline" className="text-muted-foreground">
                          Past Event
                        </Badge>
                        <h3 className="text-2xl font-bold text-primary">
                          {event.title}
                        </h3>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-2" />
                          {event.participants}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-3">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {event.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
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