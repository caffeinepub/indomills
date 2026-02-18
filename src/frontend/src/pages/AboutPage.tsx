import Seo from '../components/seo/Seo';
import { Target, Heart, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Indomills - B2B Food Supply Network | Farm to Business Direct"
        description="Indomills connects farmers and manufacturers directly with businesses and institutions. Ethical sourcing, cost reduction, fresh quality products. Trusted B2B food supplier in Bihar."
      />

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About Indomills</h1>
          <p className="text-xl text-muted-foreground">
            Your trusted partner in B2B food and fresh vegetable supply, connecting farmers directly with businesses across Bihar.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-muted-foreground mb-4">
              Indomills is a B2B food supply network that bridges the gap between farmers, manufacturers, and businesses. We deliver bulk food items and fresh vegetables directly from the source to grocery stores, retailer shops, mini marts, grocery marts, hotels, restaurants, cafes, schools, hostels, hospitals, canteens, messes, and all institutional buyers.
            </p>
            <p className="text-muted-foreground">
              Our business model eliminates unnecessary middlemen, ensuring you get the freshest products at the most competitive prices while supporting local farmers and ethical sourcing practices.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <Target className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cost Reduction</h3>
                <p className="text-muted-foreground">
                  By sourcing directly from farmers and manufacturers, we eliminate intermediaries and pass the savings directly to your business.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Heart className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Freshness Guaranteed</h3>
                <p className="text-muted-foreground">
                  Our streamlined supply chain ensures products reach you quickly, maintaining maximum freshness and quality.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Supporting Local Farmers</h3>
                <p className="text-muted-foreground">
                  We partner with local farmers, providing them fair prices and helping strengthen the agricultural community.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <TrendingUp className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Uninterrupted Supply</h3>
                <p className="text-muted-foreground">
                  Our reliable logistics network ensures your business never faces supply disruptions or shortages.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <p className="text-muted-foreground mb-4">
              At Indomills, we are committed to ethical sourcing practices. Every farmer and manufacturer we work with is carefully vetted to ensure they meet our quality and ethical standards. We believe in building long-term relationships based on trust, transparency, and mutual benefit.
            </p>
            <p className="text-muted-foreground">
              We understand that your business depends on consistent, quality supply. That's why we've built a robust supply chain that can handle both daily deliveries and large bulk orders with the same level of reliability and professionalism.
            </p>
          </section>

          <section className="bg-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground">
              To become the most trusted B2B food supply brand in India, known for quality, reliability, and ethical business practices. We aim to expand our network across the country, bringing the benefits of direct sourcing to businesses everywhere while continuing to support local farming communities.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
