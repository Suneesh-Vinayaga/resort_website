"use client";

import { APIProvider, Map as GoogleMap, Marker } from "@vis.gl/react-google-maps";

export function Map() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  // A sample location (e.g., a resort in Malibu)
  const position = { lat: 34.036, lng: -118.69 }; 

  if (!apiKey) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-muted text-muted-foreground p-4 text-center">
        <h3 className="font-semibold">Map Unavailable</h3>
        <p className="text-sm">Google Maps API Key is missing. Please add it to your environment variables to display the map.</p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <GoogleMap
        defaultCenter={position}
        defaultZoom={14}
        mapId="aurion-resort-map"
        className="w-full h-full"
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        <Marker position={position} />
      </GoogleMap>
    </APIProvider>
  );
}
