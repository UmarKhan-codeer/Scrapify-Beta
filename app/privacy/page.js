import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Eye, Database } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Last updated: March 20, 2024
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your personal information and scraped data.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Lock className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Security</h3>
              <p className="text-muted-foreground">
                All data is encrypted in transit and at rest using state-of-the-art encryption protocols.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Eye className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-muted-foreground">
                We're committed to being transparent about how we collect, use, and share your data.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Database className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Storage</h3>
              <p className="text-muted-foreground">
                Your data is stored securely in ISO-certified data centers with regular backups.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Account information (name, email, password)</li>
              <li>Usage data and preferences</li>
              <li>Payment information</li>
              <li>Communication data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the collected information for various purposes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Providing and maintaining our services</li>
              <li>Improving user experience</li>
              <li>Processing payments</li>
              <li>Sending administrative information</li>
              <li>Customer support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              You have several rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Right to access your data</li>
              <li>Right to rectification</li>
              <li>Right to erasure</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}