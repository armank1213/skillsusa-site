import { useEffect, useState } from 'react';
import OfficerCard from '@/components/OfficerCard';
import President from '../assets/President.jpg';
import VicePresident from '../assets/VicePresident.JPEG';
import Secretary from '../assets/Secretary.jpeg';
import Treasurer from '../assets/Treasurer.jpg';
import DirectorOfEvents1 from '../assets/DOE1.png';
import DirectorOfEvents2 from '../assets/DOE2.jpeg';
import DirectorOfEvents3 from '../assets/DOE3.jpeg';
import CompetitionManager from '../assets/CompetitionManager.jpg';
import SocialMediaManager from '../assets/SocialMediaManager.jpeg';


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
      name: 'Aanya Chandoke',
      position: 'President',
      grade: '12',
      bio: 'I am really excited to meet everyone and am really looking forward to our upcoming Community Events!',
      email: '1078194@lammersvilleusd.net',
      instagram: 'https://www.instagram.com/p/DM_5jzWxRCw/?igsh=NTc4MTIwNjQ2YQ==',
      linkedin: 'https://www.linkedin.com/',
      image: President,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-red-50 to-pink-50'
    },
    {
      id: 2,
      name: 'Daksh Jain',
      position: 'Vice President',
      grade: '12',
      bio: 'I love working with technology and helping our team succeed in all our projects.',
      email: '1080017@lammersvilleusd.net',
      instagram: 'https://www.instagram.com/p/DC67t6XQJHw/?igsh=NGIyYWMzYjQxZg==',
      linkedin: 'https://www.linkedin.com/',
      image: VicePresident,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
      id: 3,
      name: 'Sanvi Tej',
      position: 'Secretary',
      grade: '11',
      bio: 'I enjoy organizing events and keeping everyone connected through our social media.',
      email: '1070654@lammersvilleusd.net',
      instagram: 'https://www.instagram.com/p/DArGlSiR2Vg/?igsh=YmMyMzI2ZDQxZg==',
      linkedin: 'https://www.linkedin.com/',
      image: Secretary,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-violet-50'
    },
    {
      id: 4,
      name: 'Arman Khan',
      position: 'Treasurer',
      grade: '11',
      bio: 'I manage our finances and help plan fundraising activities for our chapter.',
      email: '1077611@lammersvilleusd.net',
      instagram: 'https://www.instagram.com/p/DAnRKskQnVU/?igsh=YmMyMzI2ZDQxZg==',
      linkedin: 'https://www.linkedin.com/',
      image: Treasurer,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50'
    },
    {
      id: 5,
      name: 'Rithvik Illuri',
      position: 'Director of Events',
      grade: '12',
      bio: 'I plan and organize all our chapter events and competitions.',
      email: '1070917@lammersvilleusd.net',
      instagram: 'https://www.instagram.com/p/DApmOlRQ11s/?igsh=YmMyMzI2ZDQxZg==',
      linkedin: 'https://www.linkedin.com/',
      image: DirectorOfEvents1,
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-gradient-to-br from-orange-50 to-yellow-50'
    },
    {
      id: 6,
      name: 'Farah Abdul',
      position: 'Director of Events',
      grade: '12',
      bio: 'I help coordinate our events and make sure everything runs smoothly.',
      email: '1075169@lammersvilleusd.net',
      instagram: 'https://www.instagram.com/p/Dztl2myQASo/?igsh=NzZlODJiNjI2Zg==',
      linkedin: 'https://www.linkedin.com/',
      image: DirectorOfEvents2,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-blue-50'
    },
    {
      id: 7,
      name: 'Dheeraj Seelam',
      position: 'Director of Events',
      grade: '10',
      bio: 'I assist with event planning and help create memorable experiences for our members.',
      email: '1074718@lammersvilleusd.net',
      instagram: 'https://www.instagram.com/p/DtDgNeXSLVc/?igsh=ZmZhNjIwMmYxZg==',
      linkedin: 'https://www.linkedin.com/',
      image: DirectorOfEvents3,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-blue-50'
    },
    {
      id: 8,
      name: 'Anjali Palsaniya',
      position: 'Competition Manager',
      grade: '11',
      bio: 'I organize our competition teams and help prepare students for SkillsUSA contests.',
      email: '1074929@lammersvilleusd.net',
      instagram: 'https://www.instagram.com/p/DuuehviRytI/?igsh=YmMyMzI2ZDQxZg==',
      linkedin: 'https://www.linkedin.com/',
      image: CompetitionManager,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-blue-50'
    },
    {
      id: 9,
      name: 'Plaksha Sisodiya ',
      position: 'Social Media Manager',
      grade: '10',
      bio: 'I manage our social media accounts and help spread the word about our chapter.',
      email: '1076132@lammersvilleusd.net',
      instagram: 'https://www.instagram.com/p/DwpwpL2SBcU/?igsh=NzZlODJiNjI2Zg==',
      linkedin: 'https://www.linkedin.com/',
      image: SocialMediaManager,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-blue-50'
    }
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
            <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Meet Our <span>Leadership Team</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 animate-fade-in">
            The dedicated students who guide our chapter and inspire excellence in everything we do
          </p>
        </div>
      </section>

      {/* Officers Grid */}
      <section data-section="officers" className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Chapter <span className="text-gradient">Officers</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These exceptional students lead by example and drive our chapter's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officers.map((officer, index) => (
              <div
                key={officer.id}
                className={`transition-all duration-1000 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <OfficerCard 
                  officer={officer} 
                  color={officer.color}
                  bgColor={officer.bgColor}
                />
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