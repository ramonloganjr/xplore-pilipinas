import React from 'react';

export const GlassHeader: React.FC = () => {
    return (
        <header className="floating-logo">
            <img
                src={`${import.meta.env.BASE_URL}logo.svg`}
                alt="Xplore Philippines"
                className="header-logo"
            />
        </header>
    );
};
