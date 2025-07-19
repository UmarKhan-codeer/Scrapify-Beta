import { Card, CardContent } from '@/components/ui/card';
import { Cookie, Settings, Shield, Info } from 'lucide-react';

export default function CookiePolicyPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Last updated: March 20, 2024
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <Cookie className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">What Are Cookies</h3>
              <p className="text-muted-foreground">
                Cookies are small text files stored on your device that help us provide and improve our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Settings className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cookie Settings</h3>
              <p className="text-muted-foreground">
                You can control and manage cookie usage through your browser settings.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cookie Security</h3>
              <p className="text-muted-foreground">
                We use secure cookies to protect your data and enhance security.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Info className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cookie Usage</h3>
              <p className="text-muted-foreground">
                Learn how we use different types of cookies to improve your experience.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
                <p className="text-muted-foreground">
                  Required for basic site functionality. These cookies are necessary for our website to function properly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Performance Cookies</h3>
                <p className="text-muted-foreground">
                  Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Functionality Cookies</h3>
                <p className="text-muted-foreground">
                  Enable enhanced functionality and personalization, such as remembering your preferences.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Marketing Cookies</h3>
                <p className="text-muted-foreground">
                  Used to track visitors across websites to enable us to display relevant and engaging content.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
            <p className="text-muted-foreground mb-4">
              You can control cookies through your browser settings. Be aware that disabling cookies may affect the functionality of this and many other websites you visit.
            </p>
            <p className="text-muted-foreground">
              Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>View your cookies</li>
              <li>Delete specific cookies</li>
              <li>Block cookies from being set</li>
              <li>Block third-party cookies</li>
              <li>Clear all cookies when you close your browser</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
            <p className="text-muted-foreground">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 