"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import LocationDetailCard from './LocationDetailCard';
import locations from '../../content/locations.json';

// Dynamically import map components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

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

export default function NetworkMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [leafletLoaded, setLeafletLoaded] = useState(false);
  const [customIcon, setCustomIcon] = useState<any>(null);

  useEffect(() => {
    // Load Leaflet and create custom icon
    const loadLeaflet = async () => {
      const L = await import('leaflet');
      
      // Fix for default markers
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });

      // Create custom icon
      const icon = new L.Icon({
        iconUrl: 'data:image/svg+xml;base64,' + btoa(`
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="12" fill="#E57200" stroke="#0033A0" stroke-width="3"/>
            <circle cx="16" cy="16" r="6" fill="#0033A0"/>
            <circle cx="16" cy="16" r="3" fill="white"/>
          </svg>
        `),
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      setCustomIcon(icon);
      setLeafletLoaded(true);
    };

    loadLeaflet();
  }, []);

  const handleMarkerClick = (location: Location) => {
    setSelectedLocation(location);
    setIsSheetOpen(true);
  };

  const handleAddToQuote = (locationId: string) => {
    console.log(`Adding location ${locationId} to quote`);
    // Here you would typically add the location to a quote/cart state
    setIsSheetOpen(false);
  };

  if (!leafletLoaded) {
    return (
      <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading interactive map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[-24.0, 26.0]} // Center on Botswana
        zoom={7}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.coordinates as [number, number]}
            icon={customIcon}
            eventHandlers={{
              click: () => handleMarkerClick(location),
            }}
          >
            <Popup>
              <div className="text-center p-2">
                <h3 className="font-bold text-gray-900 mb-1">{location.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {location.stats["Daily Vehicles"]} daily vehicles
                </p>
                <button
                  onClick={() => handleMarkerClick(location)}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View Details →
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Location Detail Sheet */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent side="right" className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Location Details</SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            {selectedLocation && (
              <LocationDetailCard
                location={selectedLocation}
                onAddToQuote={handleAddToQuote}
              />
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}