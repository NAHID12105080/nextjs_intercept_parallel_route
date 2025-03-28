# Modern Multi-Pane Dashboard

A modern dashboard built with Next.js 14, featuring parallel routes, intercepting routes, and smooth animations with Framer Motion.

## Features

- 🎯 Parallel Routes for multiple sections
- 🔄 Intercepting Routes for modals
- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- ✨ Smooth animations with Framer Motion
- 📱 Responsive design
- ♿ Accessibility features

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- React Server Components

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
app/
├── dashboard/
│   ├── @analytics/     # Analytics parallel route
│   ├── @notifications/ # Notifications parallel route
│   ├── @settings/      # Settings parallel route
│   ├── users/
│   │   └── @modal/     # Intercepting route for user modals
│   └── layout.tsx      # Dashboard layout with parallel routes
├── components/         # Reusable components
└── lib/               # Utility functions
```

## Features in Detail

### Parallel Routes

The dashboard uses parallel routes to show multiple sections simultaneously:

- Analytics panel
- Notifications panel
- Settings panel

### Intercepting Routes

Clicking on a user in the users list opens a modal instead of navigating away:

- URL remains as `/dashboard/users`
- Modal content is loaded via `/dashboard/users/@modal/[userId]`
- Smooth animations for opening/closing

### Animations

- Page transitions with Framer Motion
- Modal animations
- Smooth hover effects
- Loading states

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
