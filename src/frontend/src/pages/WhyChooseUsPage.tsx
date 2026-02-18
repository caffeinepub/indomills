import Seo from '../components/seo/Seo';
import { DollarSign, Leaf, Truck, Package, Briefcase, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function WhyChooseUsPage() {
  const reasons = [
    {
      icon: DollarSign,
      title: 'Competitive Bulk Pricing',
      description: 'Direct sourcing from farmers and manufacturers means we can offer the most competitive prices in the market. Save significantly on your food procurement costs without compromising on quality.',
    },
    {
      icon: Leaf,
      title: 'Fresh and Quality Products',
      description: 'Every product is carefully selected and quality-checked. Our direct supply chain ensures maximum freshness from farm to your business, maintaining nutritional value and taste.',
    },
    {
      icon: Truck,
      title: 'Reliable Supply Chain',
      description: 'Never worry about supply disruptions. Our robust logistics network and multiple sourcing partnerships ensure consistent, on-time delivery regardless of season or demand.',
    },
    {
      icon: Package,
      title: 'Single-Vendor Sourcing',
      description: 'Simplify your procurement process. Get all your food and grocery needs from one trusted supplier, reducing administrative overhead and building a stronger business relationship.',
    },
    {
      icon: Briefcase,
      title: 'Professional Service',
      description: 'Experience B2B service excellence. Our dedicated team understands institutional needs and provides personalized support, flexible payment terms, and responsive customer service.',
    },
    {
      icon: Users,
      title: 'Local Farmer Support',
      description: 'Partner with a business that cares. By choosing Indomills, you support local farming communities, promote sustainable agriculture, and contribute to rural economic development.',
    },
  ];

  return (
    <>
      <Seo
        title="Why Choose Indomills - Reliable B2B Food Supplier | Competitive Bulk Pricing"
        description="Competitive bulk pricing, fresh quality products, reliable supply chain, single-vendor sourcing, professional service, local farmer support. Trusted institutional food supplier Bihar."
      />

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Why Choose Indomills?</h1>
          <p className="text-xl text-muted-foreground">
            We combine reliability, freshness, and B2B efficiency to deliver exceptional value to your business.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <Card key={reason.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-3xl mx-auto text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Experience the Indomills Advantage</h2>
          <p className="text-muted-foreground mb-6">
            Join hundreds of satisfied businesses across Bihar who trust Indomills for their food supply needs. Let us show you how we can help your business thrive with reliable, quality supply at competitive prices.
          </p>
        </div>
      </div>
    </>
  );
}
