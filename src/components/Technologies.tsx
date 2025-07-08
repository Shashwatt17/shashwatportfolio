
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Code2, Database, Globe, Terminal, Shield, Store } from 'lucide-react';

const Technologies: React.FC = () => {
  const techCategories = [
    {
      category: 'Programming Languages',
      icon: Code2,
      technologies: ['Python', 'C', 'Java', 'JavaScript']
    },
    {
      category: 'Web Technologies',
      icon: Globe,
      technologies: ['HTML', 'CSS', 'Flask']
    },
    {
      category: 'Development Tools',
      icon: Terminal,
      technologies: ['VS Code', 'Git', 'GitHub']
    },
    {
      category: 'Security & Systems',
      icon: Shield,
      technologies: ['Kali Linux']
    },
    {
      category: 'E-commerce',
      icon: Store,
      technologies: ['Shopify']
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 glitch-text" data-text="Technologies & Tools">
            Technologies & Tools
          </h2>
          
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life. From programming languages to development environments, these are the building blocks of my digital creations.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((category, index) => (
              <Card key={index} className="group hover:animate-glow transition-all duration-300 hover:border-cyber-green bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <category.icon className="w-8 h-8 mr-3 text-cyber-green group-hover:animate-float" />
                    <h3 className="text-xl font-semibold">{category.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-muted/50 hover:bg-cyber-green/20 hover:border-cyber-green transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-cyber-green/10 to-cyber-blue/10 border border-cyber-green/20">
              <h3 className="text-2xl font-bold mb-4 text-cyber-green">Always Learning</h3>
              <p className="text-muted-foreground max-w-2xl">
                Technology evolves rapidly, and so do I. I'm constantly exploring new tools, frameworks, and methodologies to stay at the forefront of innovation in cybersecurity and web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
