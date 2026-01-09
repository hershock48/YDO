# Youth Development Organisation Uganda (YDO) Website

A website for Youth Development Organisation Uganda (YDO), a community-based organization in Northern Uganda focused on rehabilitation and empowerment in post-conflict regions.

## About

YDO provides education support, psycho-social services, vocational training, life skills development, and advocacy for children, women, and vulnerable populations in Northern Uganda. The organization serves as a core implementation partner with Be A Number, International.

## Technology Stack

- **Next.js 16.1.1** - React framework
- **React 19.2.3** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Node.js** - Runtime environment

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3002](http://localhost:3002) in your browser.

The development server runs on port 3002 (different from Be A Number's port 3001) to allow both sites to run simultaneously.

## Project Structure

```
YDO/
├── src/
│   └── app/
│       ├── about/          # About Us page
│       ├── programs/       # Programs page
│       ├── impact/         # Impact page
│       ├── partnership/    # Partnership page
│       ├── contact/        # Contact page
│       ├── layout.tsx      # Root layout
│       ├── page.tsx        # Homepage
│       └── globals.css     # Global styles
├── public/                 # Static assets (images, etc.)
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Available Scripts

- `npm run dev` - Start development server (port 3002)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Design

The website features:
- Warm color scheme (orange/blue) distinct from Be A Number's gray/black palette
- Youth-focused, community-centered design
- Responsive layout for all devices
- Clear navigation and accessible structure

## Deployment

The site can be deployed to Vercel, Netlify, or any platform supporting Next.js applications.

## Partnership

YDO is a core implementation partner with [Be A Number, International](https://beanumber.org), a U.S.-based 501(c)(3) nonprofit focused on building sustainable community systems in Northern Uganda.

## Contact

- **Email:** info@theyouth.world
- **Location:** Omoro District, Northern Uganda
- **Website:** https://theyouth.world

## License

Copyright © 2025 Youth Development Organisation Uganda. All rights reserved.