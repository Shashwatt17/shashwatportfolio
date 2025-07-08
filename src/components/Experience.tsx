
import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { ChevronDown, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { Button } from './ui/button';

interface Role {
  title: string;
  period: string;
  description: string[];
}

interface Company {
  name: string;
  location: string;
  logo: string;
  roles: Role[];
}

const Experience: React.FC = () => {
  const [expandedCompanies, setExpandedCompanies] = useState<string[]>(['HT Digital Streams']);

  const experiences: Company[] = [
    {
      name: 'HT Digital Streams',
      location: 'New Delhi, India - Remote',
      logo: "https://i.ibb.co/Y7RQr6k0/HT-Media-1653576014631-1653576062159.jpg"
      roles: [
        {
          title: 'Technical Intern',
          period: 'Jul 2025 - Present',
          description: [
            'Working on real-world projects'
          ]
        }
      ]
    },
    {
      name: 'Cyber Sentinel, UPES',
      location: 'Dehradun, India',
      logo: "https://i.ibb.co/21S3Whjt/download.jpg" 
      roles: [
        {
          title: 'Associate Events Head',
          period: 'May 2025 – Present',
          description: [
            'Leading hackathons, workshops, and tech events',
            'Coordinating with industry experts for knowledge sessions',
            'Managing event logistics and participant engagement'
          ]
        },
        {
          title: 'Core Committee Member',
          period: 'Nov 2023 – May 2025',
          description: [
            'Planned and executed cybersecurity initiatives',
            'Organized security awareness programs',
            'Mentored junior members in cybersecurity concepts'
          ]
        },
        {
          title: 'Member',
          period: 'Nov 2023 – May 2025',
          description: [
            'Participated in security workshops and awareness sessions',
            'Contributed to cybersecurity research projects',
            'Engaged in hands-on security analysis and testing'
          ]
        }
      ]
    },
    {
      name: 'Better Nutrition',
      location: 'Lucknow, India - On-site',
      logo: "https://i.ibb.co/gbJzG94f/download-2.png" 
      roles: [
        {
          title: 'Summer Intern',
          period: 'Jun 2023 – Jul 2023',
          description: [
            'Led end-to-end web development and digital strategy',
            'Optimized blog content for SEO to increase organic traffic',
            'Managed Amazon & Flipkart listings to drive e-commerce growth',
          ]
        }
      ]
    },
    {
      name: 'Muskurahat Ki Pahal NGO',
      location: 'India',
      logo: 'MK',
      roles: [
        {
          title: 'Summer Social Intern',
          period: 'Jun 2024 – Aug 2024',
          description: [
            'Educated and empowered slum children through awareness programs',
            'Developed educational content and support materials',
            'Organized community outreach initiatives',
            
          ]
        }
      ]
    }
  ];

  const toggleCompany = (companyName: string) => {
    setExpandedCompanies(prev => 
      prev.includes(companyName) 
        ? prev.filter(name => name !== companyName)
        : [...prev, companyName]
    );
  };

  const playClickSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    
    oscillator.frequency.value = 600;
    oscillator.type = 'square';
    
    gain.gain.setValueAtTime(0.1, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 glitch-text" data-text="Experience Timeline">
            Experience Timeline
          </h2>

          <div className="relative timeline-line">
            <div className="space-y-8">
              {experiences.map((company, companyIndex) => (
                <div key={company.name} className="relative">
                  <div className="flex items-start">
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyber-green rounded-full border-4 border-background z-10 animate-glow"></div>
                    
                    {/* Company card */}
                    <div className="ml-16 md:ml-0 md:w-full">
                      <Card className="group hover:animate-glow transition-all duration-300 hover:border-cyber-green bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <Button
                            variant="ghost"
                            onClick={() => {
                              playClickSound();
                              toggleCompany(company.name);
                            }}
                            className="w-full justify-between p-0 h-auto hover:bg-transparent"
                          >
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 flex-shrink-0">
  {company.logo.startsWith('http') ? (
    <img
      src={company.logo}
      alt={`${company.name} logo`}
      className="w-full h-full object-contain rounded"
    />
  ) : (
    <div className="w-12 h-12 bg-gradient-to-br from-cyber-green to-cyber-blue rounded-lg flex items-center justify-center font-bold text-sm text-white">
      {company.logo}
    </div>
  )}
</div>
                              <div className="text-left">
                                <h3 className="text-xl font-semibold">{company.name}</h3>
                                <div className="flex items-center text-sm text-muted-foreground mt-1">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  {company.location}
                                </div>
                              </div>
                            </div>
                            {expandedCompanies.includes(company.name) ? 
                              <ChevronDown className="w-5 h-5" /> : 
                              <ChevronRight className="w-5 h-5" />
                            }
                          </Button>

                          {expandedCompanies.includes(company.name) && (
                            <div className="mt-6 space-y-6 animate-fade-in">
                              {company.roles.map((role, roleIndex) => (
                                <div key={roleIndex} className="border-l-2 border-cyber-green/30 pl-4">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <h4 className="text-lg font-semibold">{role.title}</h4>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                      <Calendar className="w-4 h-4 mr-1" />
                                      {role.period}
                                    </div>
                                  </div>
                                  <ul className="space-y-2">
                                    {role.description.map((item, itemIndex) => (
                                      <li key={itemIndex} className="text-sm text-muted-foreground flex items-start">
                                        <span className="text-cyber-green mr-2">•</span>
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
