import Seo from '../components/seo/Seo';
import CategoryGrid from '../components/marketing/CategoryGrid';
import ContactCtas from '../components/cta/ContactCtas';

export default function ProductsPage() {
  return (
    <>
      <Seo
        title="Products & Categories - Bulk Food Supply | Indomills B2B Supplier"
        description="Fresh vegetables, fruits, rice, flour, oils, pulses, spices, and more. Bulk food supply for grocery stores, mini marts, hotels, restaurants, schools. Wholesale supplier Bihar."
      />

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Products & Categories</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive range of fresh vegetables, fruits, staples, and grocery items for all your business needs.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <CategoryGrid />
        </div>

        {/* Suitability Section */}
        <div className="bg-muted/30 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Perfect for Your Business</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            Our products are suitable for <strong>grocery stores</strong>, <strong>mini marts</strong>, <strong>retailer shops</strong>, <strong>grocery marts</strong>, <strong>hotels</strong>, <strong>restaurants</strong>, <strong>cafes</strong>, <strong>schools</strong>, <strong>hostels</strong>, <strong>hospitals</strong>, <strong>canteens</strong>, <strong>messes</strong>, and all <strong>institutional buyers</strong>. We understand the unique requirements of each business type and provide tailored solutions.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Quote?</h3>
          <p className="text-muted-foreground mb-6">
            Contact us today to discuss your specific requirements and get competitive bulk pricing.
          </p>
          <ContactCtas variant="large" className="justify-center" />
        </div>
      </div>
    </>
  );
}
