# Xplore Pilipinas

An interactive tourism map showcasing the Philippines.

## Features

### Interactive Map
- Full-screen interactive map powered by Leaflet and OpenMapTiles
- Color-coded markers by category (Beaches, Nature, History, Adventure)
- Smooth pan and zoom with bounds restricted to the Philippines
- Glassmorphic zoom controls

### Destination Cards
- 16 curated destinations across all regions
- AI-generated thumbnail images
- Professional Hugeicons iconography (no emojis)
- Key information at a glance:
  - Best travel months with weather indicators
  - Daily budget range (min-max)
  - Local dish recommendations with prices
  - Golden hour times for photographers
  - Festival dates and names

### Category Filter
- Filter destinations by: All, Beaches, Nature, History, Adventure
- Pill-style filter bar with smooth transitions
- Responsive horizontal scroll on mobile

### Design System
- iOS-inspired glassmorphism aesthetic
- Consistent design tokens and CSS custom properties
- Responsive layout for all viewport sizes
- Drop-shadow logo overlay
- OpenMapTiles OSM Bright theme

### Destinations Included
1. Calle Crisologo, Vigan
2. Banaue Rice Terraces
3. Intramuros, Manila
4. Mayon Volcano
5. Underground River, Palawan
6. El Nido Lagoons
7. Boracay White Beach
8. Magellan's Cross, Cebu
9. Chocolate Hills, Bohol
10. Cloud 9, Siargao
11. Mt. Maculot, Batangas
12. Davao City
13. Coron, Palawan
14. Taal Volcano
15. Camiguin Island
16. Sagada

## Tech Stack

<table>
  <tr>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
      <br>React 19
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=ts" width="48" height="48" alt="TypeScript" />
      <br>TypeScript
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=vite" width="48" height="48" alt="Vite" />
      <br>Vite
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=css" width="48" height="48" alt="CSS" />
      <br>CSS3
    </td>
  </tr>
  <tr>
    <td align="center" width="96">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leaflet/leaflet-original.svg" width="48" height="48" alt="Leaflet" />
      <br>Leaflet
    </td>
    <td align="center" width="96">
      <img src="https://react-leaflet.js.org/img/logo-title.svg" width="48" height="48" alt="React Leaflet" />
      <br>React-Leaflet
    </td>
    <td align="center" width="96">
      <img src="https://openmaptiles.org/img/logo.svg" width="48" height="48" alt="OpenMapTiles" />
      <br>OpenMapTiles
    </td>
    <td align="center" width="96">
      <img src="https://hugeicons.com/favicon.ico" width="48" height="48" alt="Hugeicons" />
      <br>Hugeicons
    </td>
  </tr>
</table>

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ramonloganjr/xplore-pilipinas.git
cd xplore-pilipinas

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── PhilippinesGlassMap.tsx  # Main map component
│   ├── GlassHeader.tsx          # Logo header
│   ├── FilterBar.tsx            # Category filter pills
│   └── DestinationCard.tsx      # Popup card component
├── data/
│   └── destinations.ts          # Destination data
├── styles/
│   └── glass.css                # Design system & styles
├── App.tsx
└── main.tsx
public/
├── images/                      # AI-generated thumbnails
└── logo.svg
```

## License

This project is licensed under the MIT License and Creative Commons Attribution 4.0 International (CC BY 4.0).

See [LICENSE](LICENSE) for details.

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) before submitting a pull request.

## Security

For security concerns, please review our [Security Policy](SECURITY.md).

## Author

**Ramon Logan Jr.**

- Website: [www.ramonloganjr.com](https://www.ramonloganjr.com)
- Email: [iam@ramonloganjr.com](mailto:iam@ramonloganjr.com)
- LinkedIn: [linkedin.com/in/ramon-logan-jr](https://www.linkedin.com/in/ramon-logan-jr)

---

Made with care for the Philippines.
