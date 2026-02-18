import Seo from '../components/seo/Seo';
import SegmentGrid from '../components/marketing/SegmentGrid';

export default function WhoWeServePage() {
  return (
    <>
      <Seo
        title="Who We Serve - Hotels, Restaurants, Schools, Grocery Stores | Indomills B2B"
        description="Indomills serves hotels, restaurants, cafes, schools, hospitals, grocery stores, retail shops, mini marts, and all institutional buyers. Reliable B2B food supply in Bihar."
      />

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Who We Serve</h1>
          <p className="text-xl text-muted-foreground">
            We partner with a diverse range of businesses and institutions, providing reliable bulk food supply tailored to each sector's unique needs.
          </p>
        </div>

        {/* Segments Grid */}
        <div className="mb-12">
          <SegmentGrid />
        </div>

        {/* Additional Info */}
        <div className="max-w-3xl mx-auto text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Your Business, Our Priority</h2>
          <p className="text-muted-foreground">
            No matter the size or type of your business, we have the capacity and expertise to meet your bulk food supply needs. From daily fresh vegetable deliveries to large-scale staple orders, we ensure consistent quality and timely service.
          </p>
        </div>
      </div>
    </>
  );
}
