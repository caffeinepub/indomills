import { Card, CardContent } from '@/components/ui/card';
import { Building2, UtensilsCrossed, Coffee, GraduationCap, Bed, Hospital, Users, ChefHat, Store, ShoppingBag, ShoppingCart, Building } from 'lucide-react';

const segments = [
  {
    name: 'Hotels',
    icon: Building2,
    description: 'Reliable bulk supply for hotel kitchens and room service operations.',
  },
  {
    name: 'Restaurants',
    icon: UtensilsCrossed,
    description: 'Fresh ingredients and staples for restaurant menus and daily operations.',
  },
  {
    name: 'Cafes',
    icon: Coffee,
    description: 'Quality supplies for cafes, coffee shops, and quick-service establishments.',
  },
  {
    name: 'Schools',
    icon: GraduationCap,
    description: 'Nutritious food supplies for school canteens and meal programs.',
  },
  {
    name: 'Hostels',
    icon: Bed,
    description: 'Bulk food supplies for hostel mess and residential facilities.',
  },
  {
    name: 'Hospitals',
    icon: Hospital,
    description: 'Hygienic and quality food supplies for hospital kitchens and cafeterias.',
  },
  {
    name: 'Canteens & Messes',
    icon: Users,
    description: 'Large-scale food supply for institutional canteens and mess facilities.',
  },
  {
    name: 'Catering Services',
    icon: ChefHat,
    description: 'Flexible bulk supply for catering businesses and event services.',
  },
  {
    name: 'Grocery Stores',
    icon: Store,
    description: 'Wholesale supply for grocery stores and supermarkets.',
  },
  {
    name: 'Retail Shops',
    icon: ShoppingBag,
    description: 'Competitive pricing for retail shops and neighborhood stores.',
  },
  {
    name: 'Mini Marts',
    icon: ShoppingCart,
    description: 'Regular supply for mini marts and convenience stores.',
  },
  {
    name: 'Grocery Marts',
    icon: Building,
    description: 'Bulk supply solutions for grocery marts and food retailers.',
  },
];

export default function SegmentGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {segments.map((segment) => {
        const Icon = segment.icon;
        return (
          <Card key={segment.name} className="hover:shadow-lg transition-shadow">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{segment.name}</h3>
              <p className="text-sm text-muted-foreground">{segment.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
