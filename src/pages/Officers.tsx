import { useEffect, useState } from 'react';
import OfficerCard from '@/components/OfficerCard';
import officerPlaceholder from '@/assets/officer-placeholder.jpg';

const Officers = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('[data-section="officers"]');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const officers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'President',
      grade: '12',
      bio: 'Sarah is a dedicated leader with a passion for STEM education and community service. She has been instrumental in organizing our most successful fundraising events and competitions.',
      funFact: 'Can solve a Rubik\'s cube in under 30 seconds and has a collection of over 15 different puzzle cubes!',
      email: 'sarah.johnson@student.mhhs.edu',
      instagram: 'https://instagram.com/sarahj_skillsusa',
      linkedin: 'https://linkedin.com/in/sarah-johnson-student',
      image: officerPlaceholder,
    },
    {
      id: 2,
      name: 'Marcus Chen',
      position: 'Vice President',
      grade: '11',
      bio: 'Marcus brings innovative ideas and technical expertise to our chapter. He leads our robotics team and has won multiple awards in programming competitions.',
      funFact: 'Built his first computer at age 10 and now runs a small tech repair business from his garage.',
      email: 'marcus.chen@student.mhhs.edu',
      instagram: 'https://instagram.com/marcusc_tech',
      image: officerPlaceholder,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Secretary',
      grade: '12',
      bio: 'Emily excels at organization and communication. She manages our social media presence and coordinates all chapter meetings and events.',
      funFact: 'Speaks four languages fluently and plans to study international business in college.',
      email: 'emily.rodriguez@student.mhhs.edu',
      instagram: 'https://instagram.com/emilyrod_skillsusa',
      linkedin: 'https://linkedin.com/in/emily-rodriguez-student',
      image: officerPlaceholder,
    },
    {
      id: 4,
      name: 'David Kim',
      position: 'Treasurer',
      grade: '11',
      bio: 'David manages our chapter finances with precision and transparency. He also leads our entrepreneurship initiatives and business plan competitions.',
      funFact: 'Started a successful online tutoring service and donates 20% of profits to STEM education programs.',
      email: 'david.kim@student.mhhs.edu',
      instagram: 'https://instagram.com/davidk_business',
      image: officerPlaceholder,
    },
    {
      id: 5,
      name: 'Aisha Patel',
      position: 'Historian',
      grade: '10',
      bio: 'Aisha documents our chapter\'s journey and achievements. She has a keen eye for photography and creates our annual memory books.',
      funFact: 'Has photographed over 50 school events and maintains a digital archive of every SkillsUSA moment.',
      email: 'aisha.patel@student.mhhs.edu',
      instagram: 'https://instagram.com/aishap_photography',
      image: officerPlaceholder,
    },
    {
      id: 6,
      name: 'Jake Thompson',
      position: 'Parliamentarian',
      grade: '12',
      bio: 'Jake ensures our meetings run smoothly and all procedures are followed properly. He also represents our chapter at regional leadership conferences.',
      funFact: 'Won the state championship in debate and plans to study political science and engineering.',
      email: 'jake.thompson@student.mhhs.edu',
      linkedin: 'https://linkedin.com/in/jake-thompson-student',
      image: officerPlaceholder,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Meet Our Officers
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 animate-fade-in">
            The dedicated leaders who make our chapter's success possible
          </p>
        </div>
      </section>

      {/* Officers Grid */}
      <section data-section="officers" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}>
            {officers.map((officer, index) => (
              <div
                key={officer.id}
                className={`transition-all duration-500 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <OfficerCard officer={officer} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Become a Leader?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our team and develop the leadership skills that will set you apart in your future career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/join" 
              className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-card hover:shadow-card-hover"
            >
              Join SkillsUSA
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-card hover:shadow-card-hover"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Officers;