import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeCheck, MapPin, Clock } from 'lucide-react';

const positions = [
  {
    title: 'Senior Full Stack Developer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Join our core team to build and scale our web scraping infrastructure.',
  },
  {
    title: 'AI/ML Engineer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Help develop our AI-powered content analysis and summarization features.',
  },
  {
    title: 'DevOps Engineer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Manage and optimize our cloud infrastructure and deployment pipelines.',
  },
];

export default function CareersPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help us build the future of web data extraction and analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center p-6 bg-secondary rounded-lg">
            <BadgeCheck className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Competitive Benefits</h3>
            <p className="text-center text-muted-foreground">
              Health insurance, stock options, and flexible vacation policy
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-secondary rounded-lg">
            <MapPin className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Remote-First</h3>
            <p className="text-center text-muted-foreground">
              Work from anywhere in the world
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-secondary rounded-lg">
            <Clock className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
            <p className="text-center text-muted-foreground">
              Balance work and life on your terms
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
          <div className="grid gap-6">
            {positions.map((position, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{position.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {position.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {position.type}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  <Button>Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}