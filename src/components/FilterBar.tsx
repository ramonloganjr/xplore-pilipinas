import React from 'react';

export type FilterCategory = 'ALL' | 'BEACHES' | 'NATURE' | 'HISTORY' | 'ADVENTURE';

interface FilterBarProps {
    activeFilter: FilterCategory;
    onFilterChange: (filter: FilterCategory) => void;
}

const filters: FilterCategory[] = ['ALL', 'BEACHES', 'NATURE', 'HISTORY', 'ADVENTURE'];

export const FilterBar: React.FC<FilterBarProps> = ({ activeFilter, onFilterChange }) => {
    return (
        <nav className="filter-bar glass-panel">
            {filters.map((filter) => (
                <button
                    key={filter}
                    className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
                    onClick={() => onFilterChange(filter)}
                    aria-pressed={activeFilter === filter}
                >
                    {filter}
                </button>
            ))}
        </nav>
    );
};
