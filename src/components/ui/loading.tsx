import { Loader2, Sparkles } from 'lucide-react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  variant?: 'default' | 'sparkles' | 'dots';
}

export const Loading = ({ size = 'md', text, variant = 'default' }: LoadingProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  if (variant === 'sparkles') {
    return (
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="relative">
          <div className={`${sizeClasses[size]} animate-spin`}>
            <Sparkles className="w-full h-full text-accent" />
          </div>
          <div className={`absolute inset-0 ${sizeClasses[size]} animate-ping`}>
            <Sparkles className="w-full h-full text-accent/30" />
          </div>
        </div>
        {text && (
          <p className={`${textSizes[size]} text-muted-foreground animate-pulse`}>
            {text}
          </p>
        )}
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`bg-accent rounded-full animate-bounce`}
              style={{
                width: size === 'sm' ? '8px' : size === 'md' ? '12px' : '16px',
                height: size === 'sm' ? '8px' : size === 'md' ? '12px' : '16px',
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
        {text && (
          <p className={`${textSizes[size]} text-muted-foreground`}>
            {text}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        <Loader2 className={`${sizeClasses[size]} animate-spin text-accent`} />
        <div className={`absolute inset-0 ${sizeClasses[size]} animate-ping`}>
          <Loader2 className="w-full h-full text-accent/30" />
        </div>
      </div>
      {text && (
        <p className={`${textSizes[size]} text-muted-foreground animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );
};

export const LoadingSpinner = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div className="relative">
      <div className="w-8 h-8 animate-spin rounded-full border-4 border-accent/20 border-t-accent"></div>
    </div>
  </div>
);

export const LoadingOverlay = ({ children, isLoading, text = 'Loading...' }: {
  children: React.ReactNode;
  isLoading: boolean;
  text?: string;
}) => (
  <div className="relative">
    {children}
    {isLoading && (
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
        <Loading text={text} />
      </div>
    )}
  </div>
); 