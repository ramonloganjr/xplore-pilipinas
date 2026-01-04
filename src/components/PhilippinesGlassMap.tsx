import React, { useState, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { GlassHeader } from './GlassHeader';
import { FilterBar, type FilterCategory } from './FilterBar';
import { DestinationCard } from './DestinationCard';
import { destinations, type Destination } from '../data/destinations';

const center: [number, number] = [12.8797, 121.7740];

// Philippines bounds - restrict map to show only the Philippines
const philippinesBounds: [[number, number], [number, number]] = [
    [4.5, 116.0],   // Southwest corner
    [21.5, 127.5],  // Northeast corner
];

// Create custom colored markers for each category
const createMarkerIcon = (color: string) => {
    return L.divIcon({
        className: 'custom-marker',
        html: `
      <div style="
        width: 24px;
        height: 24px;
        background: ${color};
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      "></div>
    `,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        popupAnchor: [0, -12],
    });
};

const categoryIcons: Record<Destination['category'], L.DivIcon> = {
    BEACHES: createMarkerIcon('#0EA5E9'),
    NATURE: createMarkerIcon('#22C55E'),
    HISTORY: createMarkerIcon('#A855F7'),
    ADVENTURE: createMarkerIcon('#EF4444'),
};

export const PhilippinesGlassMap: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<FilterCategory>('ALL');

    const handleFilterChange = useCallback((filter: FilterCategory) => {
        setActiveFilter(filter);
    }, []);

    // Filter destinations based on active filter
    const filteredDestinations = activeFilter === 'ALL'
        ? destinations
        : destinations.filter(d => d.category === activeFilter);

    return (
        <div className="map-container">
            <MapContainer
                center={center}
                zoom={6}
                minZoom={5}
                maxZoom={18}
                maxBounds={philippinesBounds}
                maxBoundsViscosity={1.0}
                style={{ width: '100%', height: '100%' }}
                zoomControl={false}
            >
                {/* OpenMapTiles OSM style - Stadia Outdoors */}
                <TileLayer
                    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
                />

                {/* Zoom controls at bottom */}
                <ZoomControl position="bottomleft" />

                {/* Markers */}
                {filteredDestinations.map((destination) => (
                    <Marker
                        key={destination.id}
                        position={[destination.position.lat, destination.position.lng]}
                        icon={categoryIcons[destination.category]}
                    >
                        <Popup className="glass-popup" closeButton={true} autoPan={true}>
                            <DestinationCard destination={destination} />
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>

            {/* Floating Glass UI */}
            <GlassHeader />
            <FilterBar activeFilter={activeFilter} onFilterChange={handleFilterChange} />
        </div>
    );
};
