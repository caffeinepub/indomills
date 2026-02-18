export default function TrustBadges() {
  const badges = [
    {
      image: '/assets/generated/badge-direct-from-farmers.dim_512x512.png',
      title: 'Direct from Farmers',
      description: 'Fresh produce sourced directly from local farmers',
    },
    {
      image: '/assets/generated/badge-quality-assured.dim_512x512.png',
      title: 'Quality Assured',
      description: 'Rigorous quality checks on every product',
    },
    {
      image: '/assets/generated/badge-trusted-hotels-schools.dim_512x512.png',
      title: 'Trusted by Hotels & Schools',
      description: 'Serving institutions across Bihar',
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {badges.map((badge) => (
        <div key={badge.title} className="flex flex-col items-center text-center">
          <img
            src={badge.image}
            alt={badge.title}
            className="h-24 w-24 mb-4"
            loading="lazy"
          />
          <h3 className="font-semibold text-lg mb-2">{badge.title}</h3>
          <p className="text-sm text-muted-foreground">{badge.description}</p>
        </div>
      ))}
    </div>
  );
}
