import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Shield, FileJson, Zap } from 'lucide-react';

const features = [
  {
    title: 'AI-Powered Summarization',
    description: 'Leverage OpenAI to condense scraped content into meaningful insights.',
    icon: Bot,
  },
  {
    title: 'Enhanced Security',
    description: 'Robust authentication, rate limiting, and secure data handling for compliant scraping.',
    icon: Shield,
  },
  {
    title: 'Multi-Format Export',
    description: 'Export your data in JSON, CSV, or Markdown formats for maximum flexibility.',
    icon: FileJson,
  },
  {
    title: 'Dynamic Content Scraping',
    description: 'Effortlessly extract data from both static and dynamic websites.',
    icon: Zap,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Powerful Features
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Discover what makes Scrapify the ultimate web scraping solution.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary" />
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;