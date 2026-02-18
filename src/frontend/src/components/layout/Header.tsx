import { useState } from 'react';
import { Link, useNavigate, useRouterState } from '@tanstack/react-router';
import { Menu, X, Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Who We Serve', href: '/who-we-serve' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Why Choose Us', href: '/why-choose-us' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-yellow-foreground/20 bg-brand-yellow backdrop-blur supports-[backdrop-filter]:bg-brand-yellow/95">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/assets/generated/indomills-logo.dim_512x256.png"
            alt="Indomills"
            className="h-9 w-auto md:h-11 object-contain"
            width="512"
            height="256"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-medium text-brand-yellow-foreground/80 transition-colors hover:text-brand-yellow-foreground"
              activeProps={{ className: 'text-brand-yellow-foreground font-semibold' }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center space-x-3 lg:flex">
          <a href="tel:8210088306">
            <Button variant="outline" size="sm" className="gap-2 border-brand-yellow-foreground/30 bg-background/80 hover:bg-background text-brand-yellow-foreground">
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">8210088306</span>
            </Button>
          </a>
          <a
            href="https://wa.me/918210088306?text=Hi%2C%20I%27m%20interested%20in%20bulk%20food%20supply%20from%20Indomills"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white">
              <SiWhatsapp className="h-4 w-4" />
              WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-brand-yellow-foreground/10">
              <Menu className="h-6 w-6 text-brand-yellow-foreground" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[340px] flex flex-col">
            <SheetHeader className="text-left">
              <SheetTitle className="flex items-center justify-between">
                <span className="text-lg font-semibold">Menu</span>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </SheetTitle>
            </SheetHeader>

            <Separator className="my-4" />

            <nav className="flex flex-col space-y-1 flex-1">
              {navigation.map((item) => {
                const isActive = currentPath === item.href;
                return (
                  <SheetClose asChild key={item.name}>
                    <Link
                      to={item.href}
                      className={`
                        px-4 py-3 rounded-lg text-base font-medium transition-all
                        ${
                          isActive
                            ? 'bg-primary/10 text-primary border-l-4 border-primary'
                            : 'text-foreground/80 hover:bg-accent hover:text-foreground'
                        }
                      `}
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>

            <Separator className="my-4" />

            <div className="flex flex-col space-y-3 pb-4">
              <a href="tel:8210088306" className="w-full">
                <Button variant="outline" className="w-full gap-2 h-11">
                  <Phone className="h-4 w-4" />
                  Call: 8210088306
                </Button>
              </a>
              <a
                href="https://wa.me/918210088306?text=Hi%2C%20I%27m%20interested%20in%20bulk%20food%20supply%20from%20Indomills"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full gap-2 h-11 bg-[#25D366] hover:bg-[#20BD5A]">
                  <SiWhatsapp className="h-4 w-4" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
