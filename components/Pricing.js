import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$0',
    description: 'Perfect for small projects and individual researchers.',
    features: [
      '1,000 pages/month',
      'Basic AI summarization',
      'JSON and CSV export',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: '$1',
    description: 'Ideal for businesses and power users.',
    features: [
      '10,000 pages/month',
      'Advanced AI summarization',
      'All export formats',
      'Priority support',
      'API access',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large-scale operations.',
    features: [
      // 'Unlimited pages',
      // 'Custom AI models',
      // 'Dedicated account manager',
      // 'SLA guarantee',
      // 'On-premise deployment option',
      'Comming soon'
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Pricing Plans
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Choose the plan that fits your needs.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-4xl font-bold mb-4">{plan.price}</div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">{plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;