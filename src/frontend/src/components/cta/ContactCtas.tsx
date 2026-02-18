import { Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';

interface ContactCtasProps {
  variant?: 'default' | 'large';
  className?: string;
}

export default function ContactCtas({ variant = 'default', className = '' }: ContactCtasProps) {
  const isLarge = variant === 'large';

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <a href="tel:8210088306">
        <Button
          size={isLarge ? 'lg' : 'default'}
          variant="outline"
          className={`gap-2 ${isLarge ? 'text-lg px-8 py-6' : ''} w-full sm:w-auto`}
        >
          <Phone className={isLarge ? 'h-5 w-5' : 'h-4 w-4'} />
          Call: 8210088306
        </Button>
      </a>
      <a
        href="https://wa.me/918210088306?text=Hi%2C%20I%27m%20interested%20in%20bulk%20food%20supply%20from%20Indomills"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size={isLarge ? 'lg' : 'default'}
          className={`gap-2 bg-[#25D366] hover:bg-[#20BD5A] ${isLarge ? 'text-lg px-8 py-6' : ''} w-full sm:w-auto`}
        >
          <SiWhatsapp className={isLarge ? 'h-5 w-5' : 'h-4 w-4'} />
          WhatsApp Us
        </Button>
      </a>
    </div>
  );
}
