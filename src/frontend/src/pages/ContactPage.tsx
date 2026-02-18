import Seo from '../components/seo/Seo';
import EnquiryForm from '../components/forms/EnquiryForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Indomills - B2B Food Supplier Bihar | Call 8210088306"
        description="Contact Indomills for bulk food supply. Phone: 8210088306, Email: indomillsfood@gmail.com. Serving Bihar with expansion planned. Get a quote today."
      />

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with us for bulk food supply enquiries. We're here to help your business succeed.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a
                        href="tel:8210088306"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        8210088306
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Call us for immediate assistance</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <SiWhatsapp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <a
                        href="https://wa.me/918210088306?text=Hi%2C%20I%27m%20interested%20in%20bulk%20food%20supply%20from%20Indomills"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Chat with us on WhatsApp
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Quick response guaranteed</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:indomillsfood@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        indomillsfood@gmail.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Send us your requirements</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Service Area</h3>
                      <p className="text-muted-foreground">Bihar</p>
                      <p className="text-sm text-muted-foreground mt-1">Expansion planned across India</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                      <p className="text-sm text-muted-foreground mt-1">Sunday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us an Enquiry</h2>
            <Card>
              <CardContent className="p-6">
                <EnquiryForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
