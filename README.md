# Parquetur - Natural Parks Website

A beautiful, mobile-first website for Parquetur's 6 natural parks in Brazil. Built with Next.js 14, Tailwind CSS, and modern web technologies.

## Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **6 Natural Parks**: Detailed pages for each park with galleries, information, and booking
- **Ticket Purchasing**: Simple form to book visits (ready for payment integration)
- **Image Galleries**: Lightbox viewing with smooth animations
- **Weather & Hotels**: Placeholder widgets (ready for API integration)
- **Modern UI**: Nature-inspired color palette with smooth animations
- **SEO Optimized**: Built with Next.js for excellent search engine performance

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Fonts**: Inter (body) & Playfair Display (headings)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd parquetur-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Adding Images from Google Drive

The website is designed to display beautiful park imagery. Follow these steps to add your images from Google Drive:

### Image Directory Structure

```
public/images/
├── hero/                    # Homepage hero carousel images
│   ├── hero-1.jpg
│   ├── hero-2.jpg
│   └── hero-3.jpg
├── parks/
│   ├── serra-verde/        # Parque Serra Verde images
│   │   ├── hero.jpg
│   │   ├── waterfall.jpg
│   │   ├── trail.jpg
│   │   └── wildlife.jpg
│   ├── lagoa-azul/         # Parque Lagoa Azul images
│   │   ├── hero.jpg
│   │   ├── beach.jpg
│   │   ├── underwater.jpg
│   │   └── sunset.jpg
│   ├── pantanal-verde/     # Parque Pantanal Verde images
│   │   ├── hero.jpg
│   │   ├── jaguar.jpg
│   │   ├── birds.jpg
│   │   └── sunset-wetlands.jpg
│   ├── cachoeira-grande/   # Parque Cachoeira Grande images
│   │   ├── hero.jpg
│   │   ├── main-falls.jpg
│   │   ├── swimming-pool.jpg
│   │   └── rainbow.jpg
│   ├── floresta-encantada/ # Parque Floresta Encantada images
│   │   ├── hero.jpg
│   │   ├── canopy.jpg
│   │   ├── ancient-tree.jpg
│   │   └── butterflies.jpg
│   └── costa-selvagem/     # Parque Costa Selvagem images
│       ├── hero.jpg
│       ├── beach.jpg
│       ├── cliffs.jpg
│       └── sea-turtle.jpg
```

### Steps to Download and Organize Images

1. **Download images from your Google Drive folders**

2. **Rename images according to the structure above**
   - Each park should have at least 4 images (hero + 3 gallery images)
   - Homepage hero carousel needs 3 images

3. **Optimize images for web**
   - Recommended size: 1920x1080px for hero images, 800x600px for gallery
   - Format: JPG or WebP
   - Compress to ~200-500KB per image for optimal loading

4. **Place images in the correct directories**
   - Homepage hero images → `public/images/hero/`
   - Park-specific images → `public/images/parks/[park-slug]/`

### Quick Start with Placeholder Images

The website will work without images (showing gradient backgrounds). To quickly test with placeholder images:

1. Use [Unsplash](https://unsplash.com) to download nature photos
2. Search for: waterfalls, forests, beaches, mountains, wildlife
3. Download and rename according to the structure above

## Updating Park Information

Edit the park data in `data/parks.ts`:

```typescript
{
  id: '1',
  slug: 'serra-verde',
  name: 'Parque Serra Verde',
  description: 'Short description...',
  longDescription: 'Detailed description...',
  location: {
    city: 'Your City',
    state: 'Your State',
    coordinates: { lat: -23.7937, lng: -46.3278 }
  },
  highlights: ['Highlight 1', 'Highlight 2'],
  ticketPrices: {
    adult: 45.00,
    child: 22.50,
    senior: 22.50
  },
  openingHours: 'Daily: 8:00 AM - 5:00 PM'
}
```

## Color Palette

The website uses a nature-inspired color palette:

- **Primary**: Deep Forest Green (#1a4d2e)
- **Secondary**: Earth Brown (#8b5a3c)
- **Accent**: Sky Blue (#4a90e2)
- **Background**: Warm White (#faf9f6)
- **Text**: Dark Charcoal (#2c2c2c)

## Project Structure

```
parquetur-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Homepage
│   ├── parks/             # Parks pages
│   ├── tickets/           # Ticket booking page
│   └── about/             # About page
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   ├── Header.tsx        # Site header
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero carousel
│   ├── ParkCard.tsx      # Park card component
│   └── ...               # Other components
├── data/                 # Data files
│   └── parks.ts          # Parks data
├── public/               # Static files
│   └── images/           # Image assets
└── lib/                  # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Other Deployment Options

- **Netlify**: Connect GitHub repo and deploy
- **AWS Amplify**: Use AWS hosting
- **Self-hosted**: Run `npm run build` and serve the `.next` folder

## Future Enhancements

- [ ] Integrate real weather API (OpenWeatherMap)
- [ ] Add Google Maps for park locations
- [ ] Integrate Google Places API for hotels
- [ ] Add payment processing (Stripe/PayPal)
- [ ] Implement CMS for easier content management
- [ ] Add multi-language support (Portuguese/English)
- [ ] Create user accounts for booking history
- [ ] Add email confirmations
- [ ] Implement blog section
- [ ] Add 360° virtual tours

## Support

For questions or issues, please contact the development team or open an issue in the repository.

## License

© 2026 Parquetur. All rights reserved.
