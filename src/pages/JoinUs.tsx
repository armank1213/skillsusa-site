import { useEffect, useState } from 'react';
import { Users, Clock, GraduationCap, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const JoinUs = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    info: false,
    faq: false,
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

  const requirements = [
    {
      icon: GraduationCap,
      title: 'Current MHHS Student',
      description: 'Must be enrolled in Mountain House High School with good academic standing (3.2 GPA minimum).',
    },
    {
      icon: Clock,
      title: 'Time Commitment',
      description: 'Attend weekly meetings on Wednesdays from 3:30-4:30 PM and participate in at least 2 events per semester.',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Demonstrate leadership potential, positive attitude, and willingness to collaborate with others.',
    },
  ];

  const faqItems = [
    {
      question: 'When do you meet?',
      answer: 'We meet every Wednesday from 3:30 to 4:30 PM in the MPR. We also have special events and competitions throughout the year.',
    },
    {
      question: 'What are the membership dues?',
      answer: 'Annual membership dues are $25, which covers your SkillsUSA membership, chapter t-shirt, and materials for events. Financial assistance is available for students who need it.',
    },
    {
      question: 'Do I need prior experience?',
      answer: 'Not at all! SkillsUSA welcomes students of all skill levels. We provide training and mentorship to help you develop both technical and leadership skills.',
    },
    {
      question: 'What competitions can I participate in?',
      answer: 'We compete in events like Programming, Web Design, Technical Computer Applications, Leadership competitions, and many more. There\'s something for every interest!',
    },
    {
      question: 'How will this help my future career?',
      answer: 'SkillsUSA provides real-world experience, industry connections, scholarship opportunities, and leadership development that employers and colleges highly value.',
    },
    {
      question: 'Can I join mid-year?',
      answer: 'Yes! While we encourage joining at the beginning of the school year, you can join at any time. We\'ll help you catch up and get involved right away.',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section data-section="hero" className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 ${isVisible.hero ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join the Team?
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Become part of a community that will shape your future through leadership, 
              technical skills, and real-world experience.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 text-lg shadow-hero hover:shadow-card-hover transition-all duration-300 hover:scale-105"
            >
              <a 
                href="https://forms.gle/dWqSQXMdx99v9F4d6" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Join SkillsUSA Now
              </a>
            </Button>
            <p className="text-sm mt-4 opacity-75">
              Click above to access our membership application form
            </p>
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section data-section="info" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.info ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold text-primary mb-6">
              How to Get Involved
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's everything you need to know about joining MHHS SkillsUSA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {requirements.map((requirement, index) => (
              <Card
                key={requirement.title}
                className={`bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105 ${
                  isVisible.info ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <requirement.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">
                    {requirement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {requirement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Steps to Join */}
          <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible.info ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
            <Card className="bg-gradient-card shadow-card-hover">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">
                  Steps to Join
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      1
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Fill Out Application</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete our online membership form with your information and interests
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      2
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Attend a Meeting</h3>
                    <p className="text-sm text-muted-foreground">
                      Come to any weekly meeting to meet the team and learn about opportunities
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      3
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Get Started</h3>
                    <p className="text-sm text-muted-foreground">
                      Pay dues, choose your competition events, and start building your future
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section data-section="faq" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.faq ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers!
            </p>
          </div>

          <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${isVisible.faq ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background border border-border rounded-lg px-6 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-primary font-semibold hover:text-accent">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Reach out to us directly or stop by one of our meetings. We'd love to meet you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="font-semibold"
            >
              <a href="/contact">
                Contact Us
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              <a 
                href="https://forms.google.com/skillsusa-membership" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Join Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;