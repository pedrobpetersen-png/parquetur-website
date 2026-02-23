import { Cloud, CloudRain, Sun, Wind, Droplets } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface WeatherWidgetProps {
  parkName: string;
}

// Placeholder weather data - can be replaced with real API later
const getPlaceholderWeather = (parkName: string) => {
  // Simulate different weather based on park name for variety
  const weathers = [
    { temp: 24, condition: 'Partly Cloudy', humidity: 65, wind: 12, icon: Cloud },
    { temp: 28, condition: 'Sunny', humidity: 55, wind: 8, icon: Sun },
    { temp: 22, condition: 'Light Rain', humidity: 75, wind: 15, icon: CloudRain },
  ];

  const index = parkName.length % weathers.length;
  return weathers[index];
};

export function WeatherWidget({ parkName }: WeatherWidgetProps) {
  const weather = getPlaceholderWeather(parkName);
  const WeatherIcon = weather.icon;

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <WeatherIcon className="h-5 w-5 text-primary" />
          Current Weather
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <WeatherIcon className="h-16 w-16 text-primary" />
            <div>
              <div className="text-4xl font-bold text-foreground">
                {weather.temp}°C
              </div>
              <div className="text-sm text-muted-foreground">
                {weather.condition}
              </div>
            </div>
          </div>

          <div className="space-y-2 text-right">
            <div className="flex items-center justify-end gap-2 text-sm">
              <Droplets className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{weather.humidity}%</span>
            </div>
            <div className="flex items-center justify-end gap-2 text-sm">
              <Wind className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{weather.wind} km/h</span>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-muted/50 p-3 text-center text-xs text-muted-foreground">
          Perfect weather for outdoor activities!
        </div>
      </CardContent>
    </Card>
  );
}
