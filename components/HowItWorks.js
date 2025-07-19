import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Code, Database, BarChart } from 'lucide-react';

const steps = [
  {
    title: 'Define Your Target',
    description: 'Specify the websites and data you want to scrape.',
    icon: Search,
  },
  {
    title: 'Configure Scraper',
    description: 'Set up scraping rules and AI summarization parameters.',
    icon: Code,
  },
  {
    title: 'Extract Data',
    description: 'Scrapify securely scrapes and processes the data.',
    icon: Database,
  },
  {
    title: 'Analyze Results',
    description: 'Review AI-summarized insights and export data as needed.',
    icon: BarChart,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Get started with Scrapify in four simple steps.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index} className="bg-background">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="mt-4">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;