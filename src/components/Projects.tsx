
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

interface Project {
  name: string;
  description: string;
  techStack: string[];
  tags: string[];
  features: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      name: 'Intellicart',
      description: 'Smart multi-agent product recommendation system based on customer browse history with intelligent filtering and personalized suggestions.',
      techStack: ['Python', 'Streamlit', 'SQLite', 'Pandas', 'Machine Learning'],
      tags: ['AI', 'Recommendation', 'Web App'],
      features: [
        'Multi-agent recommendation engine',
        'Browse history analysis',
        'Real-time product suggestions',
        'Interactive web interface'
      ]
    },
    {
      name: 'Expense Splitter',
      description: 'Desktop application for managing and splitting group expenses with intuitive GUI and comprehensive expense tracking.',
      techStack: ['Java', 'JDBC', 'Swing', 'Gradle', 'SQLite'],
      tags: ['Desktop App', 'Finance', 'Java'],
      features: [
        'Group expense management',
        'Automated split calculations',
        'User-friendly GUI',
        'Database integration'
      ]
    },
    {
      name: 'Phishing Email Detector',
      description: 'Real-time email phishing detection system combining machine learning and rule-based NLP techniques in a responsive web interface.',
      techStack: ['Python', 'Scikit-learn', 'Flask', 'NLTK', 'HTML/CSS', 'JavaScript'],
      tags: ['Cybersecurity', 'ML', 'Web App'],
      features: [
        'Real-time phishing detection',
        'ML + NLP hybrid approach',
        'Responsive web interface',
        'Email content analysis'
      ]
    }
  ];

  const playHoverSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    
    oscillator.frequency.value = 1000;
    oscillator.type = 'sine';
    
    gain.gain.setValueAtTime(0.05, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.15);
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 glitch-text" data-text="Featured Projects">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:animate-glow transition-all duration-300 hover:border-cyber-green bg-card/50 backdrop-blur-sm cursor-pointer"
                onMouseEnter={playHoverSound}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-xl font-bold group-hover:text-cyber-green transition-colors">
                      {project.name}
                    </span>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:text-cyber-green"
                        onClick={() => console.log('GitHub link for', project.name)}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:text-cyber-blue"
                        onClick={() => console.log('Demo link for', project.name)}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-xs text-muted-foreground flex items-start">
                            <span className="text-cyber-green mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="outline" 
                          className="text-xs border-cyber-green/50 text-cyber-green hover:bg-cyber-green/10"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
