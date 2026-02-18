import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Farmers & Manufacturers',
    description: 'We source directly from trusted farmers and quality manufacturers, ensuring freshness and competitive pricing.',
  },
  {
    title: 'Quality Check',
    description: 'Every product undergoes rigorous quality inspection to meet our high standards before delivery.',
  },
  {
    title: 'Efficient Logistics',
    description: 'Our streamlined logistics network ensures timely delivery and maintains product freshness.',
  },
  {
    title: 'Direct Delivery',
    description: 'We deliver directly to your business location, ensuring uninterrupted supply for your operations.',
  },
];

export default function StepsTimeline() {
  return (
    <div className="relative">
      {/* Desktop Timeline */}
      <div className="hidden md:block">
        <div className="flex items-start justify-between">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center flex-1 relative">
              <div className="flex items-center w-full">
                <div className="flex-1">
                  {index > 0 && <div className="h-1 bg-primary" />}
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg z-10">
                  {index + 1}
                </div>
                <div className="flex-1">
                  {index < steps.length - 1 && <div className="h-1 bg-primary" />}
                </div>
              </div>
              <div className="mt-4 text-center max-w-[200px]">
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-6">
        {steps.map((step, index) => (
          <div key={step.title} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className="w-0.5 flex-1 bg-primary mt-2 min-h-[60px]" />
              )}
            </div>
            <div className="flex-1 pb-6">
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
