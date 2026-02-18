import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { buildEnquiryWhatsAppLink } from '../cta/whatsapp';

interface FormData {
  name: string;
  businessType: string;
  productRequirement: string;
  quantity: string;
  contact: string;
}

export default function EnquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    businessType: '',
    productRequirement: '',
    quantity: '',
    contact: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const businessTypes = [
    'Hotel',
    'Restaurant',
    'Cafe',
    'School',
    'Hostel',
    'Hospital',
    'Canteen/Mess',
    'Catering Service',
    'Grocery Store',
    'Retail Shop',
    'Mini Mart',
    'Grocery Mart',
    'Other',
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.businessType) newErrors.businessType = 'Business type is required';
    if (!formData.productRequirement.trim()) newErrors.productRequirement = 'Product requirement is required';
    if (!formData.quantity.trim()) newErrors.quantity = 'Quantity is required';
    if (!formData.contact.trim()) newErrors.contact = 'Contact details are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  const handleWhatsAppSend = () => {
    const whatsappLink = buildEnquiryWhatsAppLink(formData);
    window.open(whatsappLink, '_blank');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      businessType: '',
      productRequirement: '',
      quantity: '',
      contact: '',
    });
    setSubmitted(false);
    setErrors({});
  };

  if (submitted) {
    return (
      <Card className="border-primary/20">
        <CardContent className="p-8 text-center">
          <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-6">
            Your enquiry has been received. Send it to us on WhatsApp for faster response.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleWhatsAppSend}
              className="gap-2 bg-[#25D366] hover:bg-[#20BD5A]"
            >
              <SiWhatsapp className="h-4 w-4" />
              Send on WhatsApp
            </Button>
            <Button variant="outline" onClick={handleReset}>
              Submit Another Enquiry
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your full name"
          className={errors.name ? 'border-destructive' : ''}
        />
        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="businessType">Business Type *</Label>
        <Select
          value={formData.businessType}
          onValueChange={(value) => setFormData({ ...formData, businessType: value })}
        >
          <SelectTrigger className={errors.businessType ? 'border-destructive' : ''}>
            <SelectValue placeholder="Select your business type" />
          </SelectTrigger>
          <SelectContent>
            {businessTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.businessType && <p className="text-sm text-destructive">{errors.businessType}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="productRequirement">Product Requirement *</Label>
        <Textarea
          id="productRequirement"
          value={formData.productRequirement}
          onChange={(e) => setFormData({ ...formData, productRequirement: e.target.value })}
          placeholder="What products do you need? (e.g., Fresh vegetables, rice, pulses, etc.)"
          rows={4}
          className={errors.productRequirement ? 'border-destructive' : ''}
        />
        {errors.productRequirement && (
          <p className="text-sm text-destructive">{errors.productRequirement}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="quantity">Quantity *</Label>
        <Input
          id="quantity"
          value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          placeholder="Approximate quantity needed (e.g., 50kg daily, 100kg weekly)"
          className={errors.quantity ? 'border-destructive' : ''}
        />
        {errors.quantity && <p className="text-sm text-destructive">{errors.quantity}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact">Contact Details *</Label>
        <Input
          id="contact"
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          placeholder="Phone number or email"
          className={errors.contact ? 'border-destructive' : ''}
        />
        {errors.contact && <p className="text-sm text-destructive">{errors.contact}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full">
        Submit Enquiry
      </Button>
    </form>
  );
}
