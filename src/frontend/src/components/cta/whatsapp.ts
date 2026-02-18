export function buildWhatsAppLink(phone: string, message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

export function buildEnquiryWhatsAppLink(formData: {
  name: string;
  businessType: string;
  productRequirement: string;
  quantity: string;
  contact: string;
}): string {
  const message = `Hi Indomills,

I'm interested in bulk food supply. Here are my details:

Name: ${formData.name}
Business Type: ${formData.businessType}
Product Requirement: ${formData.productRequirement}
Quantity: ${formData.quantity}
Contact: ${formData.contact}

Please get in touch with me.`;

  return buildWhatsAppLink('918210088306', message);
}
