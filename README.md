# Digital Menu Design Platform

A full-stack web application showcasing digital menu solutions for restaurants with interactive demos and lead generation.

## Tech Stack

- **Frontend**: React 18 + TypeScript, Vite, Tailwind CSS, Shadcn/UI
- **Backend**: Node.js + Express, TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Deployment**: GitHub Pages (frontend), Render (backend)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deploy on Render

### Configuration
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Node Version**: 18.x or higher
- **Root Directory**: Leave blank (use repository root)

### Environment Variables
Set these in your Render dashboard:
- `NODE_ENV=production`
- `DATABASE_URL=your_postgresql_connection_string`

### Auto-Deploy Setup
1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Use the build and start commands above
4. Set environment variables
5. Deploy

The server automatically uses the `PORT` environment variable provided by Render and binds to `0.0.0.0` for proper hosting.

## Features

- Interactive menu showcases (Photo, Grid, Tabbed, Carousel, QR)
- Advanced interaction patterns with custom cursor tracking
- Responsive design optimized for all devices
- Contact form with lead generation
- SEO-optimized content

## Project Structure

```
├── client/          # React frontend
├── server/          # Express backend
├── shared/          # Shared TypeScript schemas
├── dist/           # Production build output
└── assets/         # GitHub Pages assets
```
