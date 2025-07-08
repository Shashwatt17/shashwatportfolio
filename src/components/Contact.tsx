
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tshashwat409@gmail.com',
      href: 'mailto:tshashwat409@gmail.com',
      color: 'cyber-red'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Shashwatt17',
      href: 'https://github.com/Shashwatt17',
      color: 'cyber-green'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'shashwat-tripathi-',
      href: 'https://linkedin.com/in/shashwat-tripathi-',
      color: 'cyber-blue'
    }
  ];

  const playGlowSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    
    oscillator.frequency.value = 1400;
    oscillator.type = 'sine';
    
    gain.gain.setValueAtTime(0.05, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 glitch-text" data-text="Let's Connect">
            Let's Connect
          </h2>
          
          <div className="mb-12">
            <p className="text-lg text-muted-foreground mb-4">
              Ready to collaborate on exciting projects or discuss the latest in cybersecurity and tech?
            </p>
            <p className="text-lg text-muted-foreground">
              I'm always open to new opportunities and interesting conversations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className="group hover:animate-glow transition-all duration-300 hover:border-cyber-green bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      playGlowSound();
                      window.open(method.href, '_blank');
                    }}
                    className="w-full h-auto p-0 hover:bg-transparent"
                  >
                    <div className="text-center space-y-4">
                      <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-${method.color} to-cyber-purple flex items-center justify-center group-hover:animate-float`}>
                        <method.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{method.label}</h3>
                        <p className="text-sm text-muted-foreground break-all">{method.value}</p>
                      </div>
                    </div>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-purple rounded-lg opacity-20 animate-pulse"></div>
            <Card className="relative bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-cyber-green animate-float" />
                <h3 className="text-xl font-semibold mb-4">Ready to Start a Conversation?</h3>
                <p className="text-muted-foreground mb-6">
                  Whether it's about cybersecurity, web development, AI, or just tech in general, 
                  I'd love to hear from you. Drop me a message and let's create something amazing together!
                </p>
                <Button
                  onClick={() => {
                    playGlowSound();
                    window.open('mailto:tshashwat409@gmail.com?subject=Hello%20Shashwat!', '_blank');
                  }}
                  className="hover:animate-glow bg-gradient-to-r from-cyber-green to-cyber-blue hover:from-cyber-blue hover:to-cyber-purple transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
