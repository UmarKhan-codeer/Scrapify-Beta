import { Card, CardContent } from '@/components/ui/card';
import { Bot, Shield, Zap, BarChart, Cloud, Code, Lock, Users } from 'lucide-react';
import Image from 'next/image';

export default function LearnMorePage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Discover Scrapify</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn how our AI-powered web scraping platform revolutionizes data extraction
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Transform Web Data into Insights</h2>
            <p className="text-lg text-muted-foreground">
              Scrapify combines advanced web scraping capabilities with AI-powered analysis to deliver actionable insights from web data. Our platform makes it easy to extract, process, and understand data from any website.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5 text-primary" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>Fast</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cloud className="h-5 w-5 text-primary" />
                <span>Scalable</span>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Data visualization"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card>
            <CardContent className="pt-6">
              <Code className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
              <p className="text-muted-foreground">
                Simple API integration with your existing tools and workflows. Support for multiple programming languages and frameworks.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Lock className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-muted-foreground">
                Bank-grade encryption, secure data handling, and compliance with major security standards and regulations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
              <p className="text-muted-foreground">
                24/7 expert support team to help you succeed. Comprehensive documentation and community resources.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-secondary rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Data-Driven Insights</h2>
              <p className="text-muted-foreground mb-6">
                Our AI-powered analysis provides deep insights into your scraped data:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <BarChart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Trend Analysis</h4>
                    <p className="text-muted-foreground">Identify patterns and trends in your data automatically</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Bot className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">AI Summarization</h4>
                    <p className="text-muted-foreground">Get concise summaries of large datasets</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Real-time Processing</h4>
                    <p className="text-muted-foreground">Process and analyze data as it's collected</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Data Analysis"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}