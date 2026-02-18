import Seo from '../components/seo/Seo';
import ContactCtas from '../components/cta/ContactCtas';
import TrustBadges from '../components/marketing/TrustBadges';
import { ArrowRight, Truck, Shield, Clock, MapPin, Warehouse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';

export default function HomePage() {
  return (
    <>
      <Seo
        title="Indomills - Bulk Food & Vegetable Supply for Hotels, Restaurants, Schools | B2B Food Supplier Bihar"
        description="Leading B2B food supplier in Bihar. Fresh vegetables, bulk food supply for hotels, restaurants, cafes, schools, grocery stores. Direct from farmers. Competitive bulk pricing. Call 8210088306"
      />

      {/* Hero Section with Warehouse Image */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                Bulk Food & Vegetable Supply for Hotels, Restaurants, Cafes, Schools & Grocery Stores
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Fresh vegetables sourced directly from farmers. Consistent quality, competitive bulk pricing, and timely delivery for your business.
              </p>
              <ContactCtas variant="large" />
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Serving Bihar | Expansion planned across India</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/home-godown-warehouse.dim_1600x900.jpg"
                alt="Indomills warehouse and godown facility for bulk food storage"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
                width="1600"
                height="900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <TrustBadges />
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Indomills?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <Truck className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
                <p className="text-muted-foreground">
                  Reliable daily and bulk supply ensuring your business never runs out of essential items.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
                <p className="text-muted-foreground">
                  Every product undergoes rigorous quality checks to meet the highest standards.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
                <p className="text-muted-foreground">
                  Direct sourcing from farmers and manufacturers means better prices for your business.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Warehouse & Storage Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/assets/generated/home-bulk-groceries-1.dim_1200x800.jpg"
                alt="Bulk grocery staples and food supplies"
                className="w-full h-80 object-cover"
                width="1200"
                height="800"
                loading="lazy"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Warehouse className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold">Modern Storage Facilities</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                Our state-of-the-art warehouse and godown facilities ensure your bulk orders are stored in optimal conditions, maintaining freshness and quality.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Temperature-controlled storage for perishables</span>
                </li>
                <li className="flex items-start gap-2">
                  <Truck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Efficient logistics for timely bulk deliveries</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Large inventory capacity for consistent supply</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Product Range</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            From farm-fresh vegetables to essential staples, we supply everything your business needs.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/assets/generated/home-fresh-produce-1.dim_1200x800.jpg"
                alt="Fresh produce and vegetables from local farmers"
                className="w-full h-64 object-cover"
                width="1200"
                height="800"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Fresh Produce</h3>
                  <p className="text-sm">Farm-fresh vegetables and fruits delivered daily</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/assets/generated/product-fresh-vegetables.dim_1200x800.jpg"
                alt="Fresh vegetables"
                className="w-full h-64 object-cover"
                width="1200"
                height="800"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Fresh Vegetables</h3>
                  <p className="text-sm">Direct from local farmers, delivered daily</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/assets/generated/product-bulk-staples.dim_1200x800.jpg"
                alt="Bulk staples"
                className="w-full h-64 object-cover"
                width="1200"
                height="800"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Bulk Staples</h3>
                  <p className="text-sm">Rice, flour, pulses, oils, and more</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link to="/products">
              <Button size="lg" className="gap-2">
                View All Products <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get in touch today for competitive bulk pricing and reliable supply.
          </p>
          <ContactCtas variant="large" className="justify-center" />
        </div>
      </section>
    </>
  );
}
