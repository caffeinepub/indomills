import { Link } from '@tanstack/react-router';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'indomills-app'
  );

  return (
    <footer className="border-t border-brand-yellow-foreground/20 bg-brand-yellow">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <img
              src="/assets/generated/indomills-logo.dim_512x256.png"
              alt="Indomills"
              className="h-12 w-auto mb-4 object-contain"
              width="512"
              height="256"
            />
            <p className="text-sm text-brand-yellow-foreground/80 mb-4">
              Your trusted B2B food and fresh vegetable supply partner. Direct from farmers to your business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-brand-yellow-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-brand-yellow-foreground/80 hover:text-brand-yellow-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-brand-yellow-foreground/80 hover:text-brand-yellow-foreground transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/who-we-serve" className="text-brand-yellow-foreground/80 hover:text-brand-yellow-foreground transition-colors">
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-yellow-foreground/80 hover:text-brand-yellow-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-brand-yellow-foreground">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:8210088306" className="text-brand-yellow-foreground/80 hover:text-brand-yellow-foreground transition-colors">
                  8210088306
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:indomillsfood@gmail.com"
                  className="text-brand-yellow-foreground/80 hover:text-brand-yellow-foreground transition-colors"
                >
                  indomillsfood@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-brand-yellow-foreground/80">
                  Serving Bihar
                  <br />
                  <span className="text-xs">(Expansion planned)</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4 text-brand-yellow-foreground">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-brand-yellow-foreground/30 bg-background/80 hover:bg-background transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="h-4 w-4 text-brand-yellow-foreground" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-brand-yellow-foreground/30 bg-background/80 hover:bg-background transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="h-4 w-4 text-brand-yellow-foreground" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-brand-yellow-foreground/30 bg-background/80 hover:bg-background transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-4 w-4 text-brand-yellow-foreground" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-brand-yellow-foreground/30 bg-background/80 hover:bg-background transition-colors"
                aria-label="X (Twitter)"
              >
                <SiX className="h-4 w-4 text-brand-yellow-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-brand-yellow-foreground/20 pt-8 text-center text-sm text-brand-yellow-foreground/80">
          <p>
            © {currentYear} Indomills. All rights reserved.
          </p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-brand-yellow-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
