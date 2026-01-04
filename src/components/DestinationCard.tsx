import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Calendar03Icon,
    MoneyBag02Icon,
    RestaurantIcon,
    Camera01Icon,
    Sun01Icon,
    CloudIcon
} from '@hugeicons/core-free-icons';
import type { Destination } from '../data/destinations';

interface DestinationCardProps {
    destination: Destination;
    onClose?: () => void;
}

// Map weather icons
const weatherIcons: Record<string, React.FC> = {
    'sunny': () => <HugeiconsIcon icon={Sun01Icon} size={14} color="#F59E0B" />,
    'partly': () => <HugeiconsIcon icon={CloudIcon} size={14} color="#6B7280" />,
    'rainy': () => <HugeiconsIcon icon={CloudIcon} size={14} color="#3B82F6" />,
};

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
    const formatBudget = (min: number, max: number) => {
        return `₱${min.toLocaleString()}-${max.toLocaleString()}/day`;
    };

    const WeatherIcon = destination.bestTime.icon === '☀️'
        ? weatherIcons.sunny
        : destination.bestTime.icon === '🌤️'
            ? weatherIcons.partly
            : weatherIcons.rainy;

    return (
        <article className="destination-card glass-panel">
            {/* Festival Banner */}
            {destination.festival && (
                <div className="festival-banner">
                    <HugeiconsIcon icon={Calendar03Icon} size={14} color="white" />
                    <span>{destination.festival.name} — {destination.festival.date}</span>
                </div>
            )}

            <img
                src={destination.image}
                alt={destination.name}
                className="destination-card-image"
                loading="lazy"
            />

            <div className="destination-card-content">
                <div className="card-header-row">
                    <span className="destination-card-category">{destination.category}</span>
                    <span className="best-time-badge">
                        <WeatherIcon /> {destination.bestTime.months}
                    </span>
                </div>

                <h3 className="destination-card-title">{destination.name}</h3>
                <p className="destination-card-description">{destination.description}</p>

                {/* Feature Grid */}
                <div className="feature-grid">
                    {/* Budget */}
                    <div className="feature-item">
                        <HugeiconsIcon icon={MoneyBag02Icon} size={16} color="#16A34A" />
                        <span className="feature-text">{formatBudget(destination.budget.min, destination.budget.max)}</span>
                    </div>

                    {/* Local Dish */}
                    <div className="feature-item">
                        <HugeiconsIcon icon={RestaurantIcon} size={16} color="#EA580C" />
                        <span className="feature-text">{destination.localDish.name} ~{destination.localDish.price}</span>
                    </div>

                    {/* Golden Hour */}
                    {destination.goldenHour && (
                        <div className="feature-item feature-full">
                            <HugeiconsIcon icon={Camera01Icon} size={16} color="#8B5CF6" />
                            <span className="feature-text">
                                {destination.goldenHour.sunrise} / {destination.goldenHour.sunset} • {destination.goldenHour.spot}
                            </span>
                        </div>
                    )}
                </div>

                <a
                    href={destination.wikiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="destination-card-button"
                >
                    <span>Learn More</span>
                </a>
            </div>
        </article>
    );
};
