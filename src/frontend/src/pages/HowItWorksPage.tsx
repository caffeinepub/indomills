import Seo from '../components/seo/Seo';
import StepsTimeline from '../components/marketing/StepsTimeline';
import ContactCtas from '../components/cta/ContactCtas';

export default function HowItWorksPage() {
  return (
    <>
      <Seo
        title="How It Works - Farm to Restaurant Supply Process | Indomills B2B"
        description="Our 4-step process: Source from farmers, quality check, efficient logistics, direct delivery. Reliable farm to restaurant and institutional food supply in Bihar."
      />

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">How It Works</h1>
          <p className="text-xl text-muted-foreground">
            Our streamlined 4-step process ensures you get the freshest products at the best prices, delivered on time, every time.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <StepsTimeline />
        </div>

        {/* Additional Info */}
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-muted/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Simple Ordering Process</h2>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-semibold text-foreground">1.</span>
                <span>Contact us via phone or WhatsApp with your requirements</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-foreground">2.</span>
                <span>Receive a competitive quote based on your needs</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-foreground">3.</span>
                <span>Confirm your order and delivery schedule</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-foreground">4.</span>
                <span>Receive fresh, quality products at your doorstep</span>
              </li>
            </ol>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Contact us today to discuss your requirements and experience the Indomills difference.
            </p>
            <ContactCtas variant="large" className="justify-center" />
          </div>
        </div>
      </div>
    </>
  );
}
