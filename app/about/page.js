import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Scrapify</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're revolutionizing web scraping with AI-powered solutions that make data extraction simpler, faster, and more intelligent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardContent className="pt-6">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To democratize web data access through intelligent automation and AI-powered insights.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Team</h3>
              <p className="text-muted-foreground">
                A diverse group of engineers, data scientists, and AI experts passionate about web technologies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-muted-foreground">
                Innovation, transparency, and ethical data collection guide everything we do.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-secondary rounded-lg p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2023, Scrapify emerged from a simple idea: make web scraping accessible to everyone. What started as a small project has grown into a comprehensive platform used by researchers, businesses, and developers worldwide.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to serve thousands of users, helping them gather and analyze web data efficiently and ethically.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b"
                alt="Team collaboration"
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