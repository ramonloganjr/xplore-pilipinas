# Contributing to Xplore Philippines

Thank you for your interest in contributing to Xplore Philippines! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How to Contribute

### Reporting Bugs

1. Check if the issue already exists in the Issues tab
2. If not, create a new issue with:
   - Clear, descriptive title
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Browser/OS information

### Suggesting New Destinations

We welcome suggestions for new Philippine destinations! Please include:

1. Destination name and location (city/province)
2. Category (Beaches, Nature, History, or Adventure)
3. GPS coordinates (latitude, longitude)
4. Brief description (under 100 characters)
5. Best travel months
6. Local dish recommendation with approximate price
7. Daily budget range (min-max in PHP)
8. Golden hour times and best photo spot (optional)
9. Festival name and date (optional)
10. Wikipedia or reliable source URL

### Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Test locally with `npm run dev`
5. Commit with clear messages: `git commit -m "Add: new destination Palawan"`
6. Push to your fork: `git push origin feature/your-feature-name`
7. Open a Pull Request with:
   - Description of changes
   - Screenshots for UI changes
   - Reference to related issues

### Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/xplore-philippines.git
cd xplore-philippines

# Install dependencies
npm install

# Start dev server
npm run dev

# Run type checking
npm run build
```

### Code Style

- Use TypeScript for all new components
- Follow existing code patterns and naming conventions
- Use functional components with hooks
- Keep components small and focused
- Use CSS custom properties for theming
- Comment complex logic

### Commit Messages

Use clear, descriptive commit messages:

- `Add: new destination [name]`
- `Fix: popup not closing on mobile`
- `Update: README documentation`
- `Refactor: filter bar component`
- `Style: adjust card spacing`

## File Structure

When adding new destinations:

1. Add thumbnail image to `public/images/` (PNG, 400x300 recommended)
2. Add destination data to `src/data/destinations.ts`
3. Ensure image path matches the data entry

## Questions?

Feel free to open an issue for any questions or reach out to the maintainer:

**Ramon Logan Jr.**
- Email: iam@ramonloganjr.com
- Website: www.ramonloganjr.com

Thank you for helping make Xplore Philippines better!
