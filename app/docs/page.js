import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Code, Terminal, BookOpen } from 'lucide-react';

export default function DocumentationPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about using Scrapify effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card>
            <CardHeader>
              <FileText className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="text-muted-foreground hover:text-primary cursor-pointer">Quick Start Guide</li>
                <li className="text-muted-foreground hover:text-primary cursor-pointer">Installation</li>
                <li className="text-muted-foreground hover:text-primary cursor-pointer">Basic Concepts</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Code className="w-8 h-8 text-primary mb-2" />
              <CardTitle>API Reference</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="text-muted-foreground hover:text-primary cursor-pointer">Authentication</li>
                <li className="text-muted-foreground hover:text-primary cursor-pointer">Endpoints</li>
                <li className="text-muted-foreground hover:text-primary cursor-pointer">Rate Limits</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Terminal className="w-8 h-8 text-primary mb-2" />
              <CardTitle>CLI Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="text-muted-foreground hover:text-primary cursor-pointer">Command Reference</li>
                <li className="text-muted-foreground hover:text-primary cursor-pointer">Configuration</li>
                <li className="text-muted-foreground hover:text-primary cursor-pointer">Scripts</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BookOpen className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Tutorials</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="text-muted-foreground hover:text-primary cursor-pointer">Basic Scraping</li>
                <li className="text-muted-foreground hover:text-primary cursor-pointer">AI Integration</li>
                <li className="text-muted-foreground hover:text-primary cursor-pointer">Advanced Usage</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Latest Updates</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">Version 2.1.0</h3>
                <p className="text-sm text-muted-foreground">Added support for dynamic content scraping and improved AI summarization.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">Version 2.0.0</h3>
                <p className="text-sm text-muted-foreground">Major update with new AI features and enhanced security measures.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Community Resources</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">GitHub Repository</h3>
                  <p className="text-sm text-muted-foreground">Contribute to Scrapify's development and access example projects.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Community Forum</h3>
                  <p className="text-sm text-muted-foreground">Join discussions, share ideas, and get help from other users.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}