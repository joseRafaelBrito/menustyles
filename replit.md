# Restaurant Digital Menu Platform

## Overview

This is a full-stack web application for showcasing digital menu solutions to restaurants. The platform demonstrates various menu formats through interactive demos and includes a contact form for lead generation. It's built with modern web technologies and follows a monorepo structure with separate client and server applications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Shadcn/UI components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: React Hook Form for form handling, TanStack Query for server state
- **Routing**: Wouter for lightweight client-side routing
- **Icons**: Lucide React icons with React Icons for social media

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript throughout the entire stack
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Style**: REST API with JSON responses
- **Development**: Hot module replacement with Vite integration

### Build System
- **Monorepo Structure**: Shared code between client and server
- **Path Mapping**: TypeScript path aliases for clean imports
- **Development**: Unified development server with Vite middleware
- **Production**: Separate build processes for client and server

## Key Components

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Shared schema definitions in TypeScript
- **Migrations**: Database migrations managed through Drizzle Kit
- **Storage**: Abstracted storage interface with in-memory implementation for development

### API Layer
- **Contact Management**: RESTful endpoints for contact form submissions
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Validation**: Zod schema validation for request/response data
- **Logging**: Custom request logging middleware

### Frontend Components
- **Navigation**: Smooth scrolling navigation with mobile-responsive design
- **Hero Section**: Marketing-focused landing section
- **Benefits Section**: Feature showcase with icons and descriptions
- **Interactive Menu Showcase**: Advanced demo system with seven interaction patterns including contextual menus, radial navigation, and gesture-based controls
- **Menu Modals**: Traditional modal components for photo, grid, tabbed, carousel, and QR menu demonstrations
- **Contact Form**: Lead generation form with validation and submission handling
- **Footer**: Complete footer with social links and company information

### UI System
- **Design System**: Custom CSS variables for consistent theming
- **Component Library**: Comprehensive UI components from Shadcn/UI
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: ARIA-compliant components with keyboard navigation
- **Toast Notifications**: User feedback system for form submissions

## Data Flow

### Contact Form Flow
1. User fills out contact form with restaurant details
2. Form validation occurs client-side using React Hook Form + Zod
3. Valid data is submitted to `/api/contact` endpoint
4. Server validates data again and stores in database
5. Success/error feedback is shown to user via toast notifications

### Interactive Menu Showcase Flow
1. User interacts with seven different menu interaction patterns
2. Each pattern demonstrates unique UX approaches with microanimations
3. Custom cursor tracking and contextual menu systems
4. Real-time interactions include right-click menus, hover effects, and gesture-based navigation
5. Smooth CSS transitions and ARIA-compliant keyboard navigation
6. Legacy menu modals still available for traditional showcase demos

### Development Flow
1. Vite development server serves the React frontend
2. Express server handles API requests and serves static files
3. Hot module replacement enables rapid development
4. Database changes are managed through Drizzle migrations

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Components**: Radix UI primitives, Shadcn/UI, Lucide React
- **Styling**: Tailwind CSS, Class Variance Authority, clsx
- **Backend**: Express.js, Drizzle ORM, Neon Database
- **Development**: Vite, TypeScript, ESBuild
- **Validation**: Zod for schema validation
- **State Management**: TanStack Query for server state
- **Utilities**: date-fns for date handling

### Development Dependencies
- **Build Tools**: Vite, ESBuild, TypeScript compiler
- **Database Tools**: Drizzle Kit for migrations and schema management
- **CSS Tools**: Tailwind CSS, PostCSS, Autoprefixer
- **Replit Integration**: Replit-specific plugins for development environment

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express API integration
- **Database**: Neon Database with connection pooling
- **Environment Variables**: DATABASE_URL required for database connection
- **Hot Reloading**: Full-stack hot module replacement

### Production Build
- **Client Build**: Vite builds optimized static assets to `dist/public`
- **Server Build**: ESBuild bundles server code to `dist/index.js`
- **Static Serving**: Express serves built client files in production
- **Database**: Production PostgreSQL database via Neon

### Configuration
- **Environment**: NODE_ENV determines build mode
- **Scripts**: Separate scripts for development, build, and production
- **Database**: Connection string configuration via environment variables
- **Assets**: Static assets served from built client directory

The application is designed to be easily deployable on platforms like Replit, Vercel, or traditional hosting providers with Node.js support. The modular architecture allows for easy scaling and maintenance while providing a smooth development experience.