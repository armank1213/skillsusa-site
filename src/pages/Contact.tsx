import { useState } from 'react';
import { MapPin, Mail, Phone, Instagram, MessageSquare, Send, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Mountain House High School', '1090 S. Central Parkway', 'Mountain House, CA 95391'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['1078194@lammersvilleusd.net', 'info@mhskillsusa.weebly.com'],
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-red-50 to-pink-50'
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/mhhs.skillsusa/',
      handle: '@mhhs_skillsusa',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50'
    },
    {
      icon: MessageSquare,
      name: 'Remind',
      url: 'https://remind.com/join/mhhsskillsusa',
      handle: 'Join our Remind class',
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-gradient-to-br from-orange-50 to-yellow-50'
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
            <MessageSquare className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 animate-fade-in">
            Have questions about SkillsUSA? Want to learn more about joining? We'd love to hear from you!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <Card className="bg-gradient-card shadow-card-hover border-0">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-4 animate-bounce-in">
                  <Send className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-primary">
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-primary font-medium">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2 border-border focus:border-accent focus:ring-accent/20 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-primary font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2 border-border focus:border-accent focus:ring-accent/20 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-primary font-medium">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-2 border-border focus:border-accent focus:ring-accent/20 transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-primary font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-2 border-border focus:border-accent focus:ring-accent/20 transition-all duration-300 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-accent hover:bg-gradient-accent/90 text-white font-semibold py-3 text-lg transition-all duration-300 hover:scale-105 shadow-glow"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Contact <span className="text-gradient">Information</span>
              </h2>
              
              {contactInfo.map((info, index) => (
                <Card
                  key={info.title}
                  className={`${info.bgColor} border-0 shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105 group`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-br ${info.color} p-3 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground leading-relaxed">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">
                Follow <span className="text-gradient">Us</span>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <Card
                    key={social.name}
                    className={`${social.bgColor} border-0 shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105 group`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`bg-gradient-to-br ${social.color} p-2 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                          <social.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                            {social.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {social.handle}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;