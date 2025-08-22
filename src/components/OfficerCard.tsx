import { useState } from 'react';
import { Mail, Instagram, Linkedin, X, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import officerPlaceholder from '@/assets/officer-placeholder.jpg';

interface Officer {
  id: number;
  name: string;
  position: string;
  grade: string;
  bio: string;
  funFact?: string;
  email: string;
  instagram?: string;
  linkedin?: string;
  image: string;
  color?: string;
  bgColor?: string;
}

interface OfficerCardProps {
  officer: Officer;
  color?: string;
  bgColor?: string;
}

const OfficerCard = ({ officer, color = "from-red-500 to-pink-500", bgColor = "bg-gradient-to-br from-red-50 to-pink-50" }: OfficerCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Card
          className={`${bgColor} border-0 shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer group overflow-hidden ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <CardContent className="p-0 overflow-hidden">
            {/* Image Container with Enhanced Effects */}
            <div className="flex justify-center p-6 pb-0 relative">
              <div className="relative w-32 h-32 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-500">
                <img
                  src={officer.image}
                  alt={officer.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Floating Badge */}
              <div className={`absolute top-4 right-4 bg-gradient-to-br ${color} text-white text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-glow`}>
                Grade {officer.grade}
              </div>
            </div>
            
            {/* Content */}
            <div className="px-6 pb-6 text-center">
              <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors duration-300">
                {officer.name}
              </h3>
              <p className="text-gradient font-semibold mb-1">
                {officer.position}
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                Grade {officer.grade}
              </p>
              <div className={`mt-3 text-sm text-muted-foreground transition-all duration-300 flex items-center justify-center space-x-1 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}>
                <span>Click to learn more</span>
                <ExternalLink className="h-3 w-3" />
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-md mx-auto glass border border-white/20 shadow-glow">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary mb-4">
            {officer.name}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Officer profile for {officer.name}, {officer.position}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Officer Image with Enhanced Styling */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={officer.image}
                alt={officer.name}
                className="w-32 h-32 rounded-full object-cover shadow-glow"
              />
              <div className={`absolute -inset-2 bg-gradient-to-br ${color} rounded-full opacity-20 blur-lg`}></div>
            </div>
          </div>

          {/* Officer Info */}
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-gradient">
              {officer.position}
            </h3>
            <p className="text-muted-foreground">
              Grade {officer.grade}
            </p>
          </div>

          {/* Bio */}
          <div className="bg-background/50 rounded-lg p-4">
            <h4 className="font-semibold text-primary mb-2 flex items-center">
              <span className={`w-2 h-2 bg-gradient-to-br ${color} rounded-full mr-2`}></span>
              About
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {officer.bio}
            </p>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-primary mb-3 flex items-center">
              <span className={`w-2 h-2 bg-gradient-to-br ${color} rounded-full mr-2`}></span>
              Connect
            </h4>
            <div className="flex justify-center space-x-3">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-gradient-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 shadow-glass"
              >
                <a href={`mailto:${officer.email}`} target="_blank" rel="noopener noreferrer">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              
              {officer.instagram && (
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:bg-gradient-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 shadow-glass"
                >
                  <a href={officer.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4" />
                  </a>
                </Button>
              )}
              
              {officer.linkedin && (
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:bg-gradient-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 shadow-glass"
                >
                  <a href={officer.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OfficerCard;