import { Card, CardContent } from '@/components/ui/card';
import { Scale, FileText, Shield, AlertCircle } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Last updated: March 20, 2024
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <Scale className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Legal Agreement</h3>
              <p className="text-muted-foreground">
                By using LiveCrawler, you agree to be bound by these terms and conditions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">License</h3>
              <p className="text-muted-foreground">
                We grant you a limited, non-exclusive license to use our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">User Obligations</h3>
              <p className="text-muted-foreground">
                Users must comply with all applicable laws and our acceptable use policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <AlertCircle className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Limitations</h3>
              <p className="text-muted-foreground">
                Understanding service limitations and user responsibilities.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using LiveCrawler's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <p className="text-muted-foreground mb-4">
              Subject to your compliance with these Terms of Service, LiveCrawler grants you a limited, non-exclusive, non-transferable, non-sublicensable license to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Access and use the services for your internal business purposes</li>
              <li>Download and use our client software</li>
              <li>Access our API according to the documentation</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Restrictions</h2>
            <p className="text-muted-foreground mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Modify or create derivative works</li>
              <li>Reverse engineer the services</li>
              <li>Remove any proprietary notices</li>
              <li>Use the services for illegal purposes</li>
              <li>Interfere with service operation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Termination</h2>
            <p className="text-muted-foreground">
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}