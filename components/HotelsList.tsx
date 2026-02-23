import { Building2, MapPin, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Hotel {
  name: string;
  distance: string;
  priceRange: string;
  rating: number;
}

interface HotelsListProps {
  parkName: string;
}

// Placeholder hotel data - can be replaced with Google Places API later
const getPlaceholderHotels = (parkName: string): Hotel[] => {
  return [
    {
      name: `${parkName.split(' ')[1] || 'Nature'} Lodge`,
      distance: '2.5 km',
      priceRange: 'R$ 250-400',
      rating: 4.5,
    },
    {
      name: 'Eco Resort & Spa',
      distance: '5.0 km',
      priceRange: 'R$ 400-650',
      rating: 4.8,
    },
    {
      name: 'Mountain View Inn',
      distance: '3.2 km',
      priceRange: 'R$ 180-300',
      rating: 4.2,
    },
    {
      name: 'Rainforest Retreat',
      distance: '7.5 km',
      priceRange: 'R$ 300-500',
      rating: 4.6,
    },
  ];
};

export function HotelsList({ parkName }: HotelsListProps) {
  const hotels = getPlaceholderHotels(parkName);

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Building2 className="h-5 w-5 text-primary" />
          Nearby Hotels
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="flex items-start justify-between rounded-lg border p-4 transition-colors hover:bg-accent/50"
            >
              <div className="flex-1">
                <h4 className="mb-1 font-semibold text-foreground">
                  {hotel.name}
                </h4>
                <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{hotel.distance} from park</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {hotel.priceRange}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">{hotel.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg bg-muted/50 p-3 text-center text-xs text-muted-foreground">
          More accommodation options available nearby
        </div>
      </CardContent>
    </Card>
  );
}
