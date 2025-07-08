import React from 'react';
import { Card, CardContent } from './ui/card';
import { Shield, Code, Brain, Users } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Network security, penetration testing, and security analysis'
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Modern web technologies, APIs, and database management'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Exploring intelligent systems and data-driven solutions'
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'Event management and team coordination'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 glitch-text" data-text="Welcome to my Digital Playground">
            Welcome to my Digital Playground
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Hello! I'm Shashwat Tripathi, a passionate B.Tech student specializing in Computer Science and Engineering with a focus on Cybersecurity at the University of Petroleum and Energy Studies (UPES).
              </p>
              
              <p className="text-lg leading-relaxed">
                My journey in technology is driven by curiosity and a desire to explore the intersection of security, development, and artificial intelligence. I believe in learning by doing, which is why I'm actively involved in real-world projects and leadership roles.
              </p>
              
              <p className="text-lg leading-relaxed">
                Currently serving as Associate Events Head at UPES Cyber Sentinel and interning at HT Digital Streams, I'm constantly expanding my knowledge while contributing to the tech community through workshops, hackathons, and security awareness initiatives.
              </p>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-green to-cyber-blue rounded-2xl opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 bg-card rounded-xl neon-border flex items-center justify-center overflow-hidden">
                  <div className="text-center p-4">
                    <div className="w-64 h-64 mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyber-green/50">
                      <img 
                        src="https://i.ibb.co/Kgs5SPg/Whats-App-Image-2025-06-17-at-21-01-10-4bd00513.jpg" 
                        alt="Shashwat Tripathi"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground font-mono">SHASHWAT_TRIPATHI.JPG</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="group hover:animate-glow transition-all duration-300 hover:border-cyber-green bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <skill.icon className="w-12 h-12 mx-auto mb-4 text-cyber-green group-hover:animate-float" />
                  <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
