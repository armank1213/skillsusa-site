import { useState } from 'react';
import { Mail, Instagram, Linkedin, X } from 'lucide-react';
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
  funFact: string;
  email: string;
  instagram?: string;
  linkedin?: string;
  image: string;
}

interface OfficerCardProps {
  officer: Officer;
  index: number;
}

const OfficerCard = ({ officer, index }: OfficerCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Card
          className={`bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer group ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardContent className="p-0 overflow-hidden">
            {/* Image Container */}
            <div className="flex justify-center p-6 pb-0">
              <div className="relative w-32 h-32 rounded-full overflow-hidden">
                <img
                  src={officer.image}
                  alt={officer.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="px-6 pb-6 text-center">
              <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors duration-300">
                {officer.name}
              </h3>
              <p className="text-accent font-semibold mb-1">
                {officer.position}
              </p>
              <p className="text-sm text-muted-foreground">
                Grade {officer.grade}
              </p>
              <div className={`mt-3 text-sm text-muted-foreground transition-all duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}>
                Click to learn more
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-md mx-auto bg-background border border-border shadow-card-hover">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary mb-4">
            {officer.name}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Officer profile for {officer.name}, {officer.position}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Officer Image */}
          <div className="flex justify-center">
            <img
              src={officer.image}
              alt={officer.name}
              className="w-32 h-32 rounded-full object-cover shadow-card"
            />
          </div>

          {/* Officer Info */}
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-accent">
              {officer.position}
            </h3>
            <p className="text-muted-foreground">
              Grade {officer.grade}
            </p>
          </div>

          {/* Bio */}
          <div>
            <h4 className="font-semibold text-primary mb-2">About</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {officer.bio}
            </p>
          </div>

          {/* Fun Fact */}
          <div>
            <h4 className="font-semibold text-primary mb-2">Fun Fact</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {officer.funFact}
            </p>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-primary mb-3">Connect</h4>
            <div className="flex justify-center space-x-3">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-accent hover:text-accent-foreground transition-colors"
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
                  className="hover:bg-accent hover:text-accent-foreground transition-colors"
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
                  className="hover:bg-accent hover:text-accent-foreground transition-colors"
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