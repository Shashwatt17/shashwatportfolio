
import React, { useState } from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  const [resumeClicks, setResumeClicks] = useState(0);

  const playHoverSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    
    oscillator.frequency.value = 1200;
    oscillator.type = 'sine';
    
    gain.gain.setValueAtTime(0.05, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
  };

  const handleResumeClick = () => {
    playHoverSound();
    setResumeClicks(prev => prev + 1);
    // In a real app, this would download the actual resume
    console.log('Resume download initiated');
  };

  const FloatingElements = () => (
    <>
      <div className="floating-element w-4 h-4 bg-cyber-green rounded-full animate-float"></div>
      <div className="floating-element w-6 h-6 bg-cyber-blue rounded-full animate-float"></div>
      <div className="floating-element w-3 h-3 bg-cyber-purple rounded-full animate-float"></div>
      <div className="floating-element w-5 h-5 bg-cyber-red rounded-full animate-float"></div>
    </>
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden noise-bg">
      <FloatingElements />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 glitch-text" data-text="SHASHWAT TRIPATHI">
            SHASHWAT TRIPATHI
          </h1>
          
          <div className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 space-y-2">
            <p className="animate-float">Cybersecurity Enthusiast</p>
            <p className="animate-float" style={{ animationDelay: '0.5s' }}>Web Developer</p>
            <p className="animate-float" style={{ animationDelay: '1s' }}>Exploring AI</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={handleResumeClick}
              onMouseEnter={playHoverSound}
              className={`group relative px-8 py-3 text-lg font-semibold transition-all duration-300 hover:animate-glow ${
                resumeClicks > 0 && resumeClicks % 2 === 0 ? 'bg-gradient-to-r from-cyber-green to-cyber-blue' : ''
              }`}
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>

            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open('https://github.com/Shashwatt17', '_blank')}
                onMouseEnter={playHoverSound}
                className="hover:animate-glow hover:border-cyber-green"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open('https://linkedin.com/in/shashwat-tripathi-', '_blank')}
                onMouseEnter={playHoverSound}
                className="hover:animate-glow hover:border-cyber-blue"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open('mailto:tshashwat409@gmail.com', '_blank')}
                onMouseEnter={playHoverSound}
                className="hover:animate-glow hover:border-cyber-red"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>B.Tech Computer Science & Engineering (Cybersecurity)</p>
            <p>University of Petroleum and Energy Studies (UPES)</p>
          </div>
        </div>
      </div>

      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
    </section>
  );
};

export default Hero;
