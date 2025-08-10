"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Monitor, Plus } from "lucide-react";
import Image from "next/image";

interface LocationStats {
  "Daily Vehicles": string;
  "Screen Size": string;
  "Key Audience": string;
}

interface Location {
  id: string;
  name: string;
  coordinates: [number, number];
  image: string;
  stats: LocationStats;
}

interface LocationDetailCardProps {
  location: Location;
  onAddToQuote?: (locationId: string) => void;
}

export default function LocationDetailCard({ location, onAddToQuote }: LocationDetailCardProps) {
  const handleAddToQuote = () => {
    if (onAddToQuote) {
      onAddToQuote(location.id);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-gray-900 mb-2">
              {location.name}
            </CardTitle>
            <div className="flex items-center text-gray-600 mb-3">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">
                {location.coordinates[0].toFixed(3)}, {location.coordinates[1].toFixed(3)}
              </span>
            </div>
          </div>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            Active
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Location Image */}
        <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={location.image}
            alt={`${location.name} billboard location`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Statistics */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900 mb-3">Location Statistics</h4>
          
          <div className="grid gap-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-sm font-medium text-gray-700">Daily Vehicles</span>
              </div>
              <span className="text-sm font-bold text-gray-900">{location.stats["Daily Vehicles"]}</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <Monitor className="h-5 w-5 text-orange-500 mr-3" />
                <span className="text-sm font-medium text-gray-700">Screen Size</span>
              </div>
              <span className="text-sm font-bold text-gray-900">{location.stats["Screen Size"]}</span>
            </div>
          </div>

          {/* Key Audience */}
          <div className="p-3 bg-blue-50 rounded-lg">
            <h5 className="text-sm font-semibold text-blue-900 mb-2">Key Audience</h5>
            <p className="text-sm text-blue-800">{location.stats["Key Audience"]}</p>
          </div>
        </div>

        {/* Action Button */}
        <Button 
          onClick={handleAddToQuote}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add to Quote
        </Button>
      </CardContent>
    </Card>
  );
}