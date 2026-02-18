import { Card, CardContent } from '@/components/ui/card';

interface Category {
  name: string;
  icon: string;
  description: string;
}

const categories: Category[] = [
  {
    name: 'Fresh Vegetables',
    icon: '/assets/generated/icon-fresh-vegetables.dim_256x256.png',
    description: 'Farm-fresh vegetables delivered daily. Direct from farmers to your business.',
  },
  {
    name: 'Fruits',
    icon: '/assets/generated/icon-fruits.dim_256x256.png',
    description: 'Seasonal and year-round fruits in bulk quantities for your business needs.',
  },
  {
    name: 'Rice, Atta & Flour',
    icon: '/assets/generated/icon-rice-flour.dim_256x256.png',
    description: 'Premium quality staples including rice, wheat flour, and specialty flours.',
  },
  {
    name: 'Edible Oils & Ghee',
    icon: '/assets/generated/icon-oils-ghee.dim_256x256.png',
    description: 'Pure cooking oils and ghee for commercial kitchens and food businesses.',
  },
  {
    name: 'Pulses & Grains',
    icon: '/assets/generated/icon-pulses-grains.dim_256x256.png',
    description: 'Wide variety of pulses, lentils, and grains for institutional cooking.',
  },
  {
    name: 'Spices & Masala',
    icon: '/assets/generated/icon-spices-masala.dim_256x256.png',
    description: 'Authentic spices and masala blends to enhance your culinary offerings.',
  },
  {
    name: 'Sauces & Condiments',
    icon: '/assets/generated/icon-sauces-condiments.dim_256x256.png',
    description: 'Essential sauces, condiments, and flavor enhancers for commercial use.',
  },
  {
    name: 'Other Bulk Items',
    icon: '/assets/generated/icon-other-bulk.dim_256x256.png',
    description: 'Complete range of grocery and food items for all your business requirements.',
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((category) => (
        <Card key={category.name} className="hover:shadow-lg transition-shadow">
          <CardContent className="flex flex-col items-center text-center p-6">
            <img
              src={category.icon}
              alt={category.name}
              className="h-20 w-20 mb-4"
              loading="lazy"
            />
            <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
            <p className="text-sm text-muted-foreground">{category.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
