Here you go! Below is the full enhanced `README.md` content for your **Web TV Streaming App**, styled with professional formatting and engaging emojis to make it easy to read and visually appealing.

---

# 📺 Web TV Streaming App

![App Screenshot](/public/images/preview/preview.png)

A modern **TV streaming application** built with **Next.js 15**, **Tailwind CSS v4**, and **TypeScript**. It features a responsive layout with a video player, trending carousel, and sidebar navigation for seamless browsing.

---

## 📊 Performance & Responsiveness

The app is fully responsive and performs exceptionally well on both desktop and mobile devices.

### 💻 Desktop View – ✅ Perfect Score

![Desktop Screenshot](/public/images/preview/desktop_performance.png)

- ⚡ **Performance**: `100%`
- 🎨 **Accessibility**: `100%`
- 🛠️ **Best Practices**: `100%`
- 🔐 **SEO**: `100%`

### 📱 Mobile View – 🟢 Near Perfect

![Mobile Screenshot](/public/images/preview/mobile_performance.png)

- ⚡ **Performance**: `97%`
- 🎨 **Accessibility**: `100%`
- 🛠️ **Best Practices**: `100%`
- 🔐 **SEO**: `100%`

> 📈 Lighthouse audit was conducted using Chrome DevTools in production mode. The application demonstrates excellent optimization and responsiveness across devices.

---

## 🚀 Live Demo

👉 [Try it live on Vercel](https://web-tv-app.vercel.app)

---

## ✨ Features

- 🎥 **Featured Video Player**
  - YouTube embed with fallback image
  - Play/pause controls
  - Persistent selection using `localStorage`

- 🔥 **Trending Videos Carousel**
  - Smooth horizontal scrolling
  - Click-to-feature video interaction
  - Fully responsive design

- 🧭 **Sidebar Navigation**
  - Collapsible and hover-expandable menu
  - User profile section
  - Clean mobile responsiveness

- ⚙️ **Technical Highlights**
  - Cross-tab synchronization via `storage` events
  - Type-safe architecture with `TypeScript`
  - Optimized performance and bundle size
  - SEO metadata and Open Graph tags

---

## 🛠 Tech Stack

| Technology         | Purpose                |
|--------------------|------------------------|
| 🟣 Next.js 15       | Framework & SSR         |
| 🎨 Tailwind CSS v4 | Styling & UI            |
| 🔄 React Hooks      | State management        |
| 🎠 Swiper.js        | Carousel functionality  |
| 🧰 React Icons      | Iconography             |
| 🚀 Vercel           | Deployment platform     |

---

## 🏗 Folder Structure

```
src/
├── app/
│   ├── api/videos/route.ts         # API endpoint for video data
│   ├── layout.tsx                  # Metadata and page wrapper
│   └── page.tsx                    # Home page with featured & trending
├── components/
│   └── Layout.tsx                  # App layout with sidebar
├── features/
│   ├── featuredVideo/              # Featured video player and types
│   ├── sidebar/                    # Sidebar navigation component
│   └── trending/                   # Trending carousel and types
├── hooks/
│   └── useFeaturedVideo.ts         # Hook to manage featured state
├── lib/
│   └── LocalStorageService/        # Safe wrapper for localStorage
├── styles/
│   └── global.css                  # Tailwind and base styles
├── types/
│   └── index.ts                    # Shared TypeScript types
└── data/
    └── videos.json                 # Static video data source
```

---

## ⚙️ Getting Started

### 🔧 Prerequisites

- Node.js v18 or higher
- npm or yarn

### 📦 Installation

```
git clone https://github.com/your-username/web-tv-app.git
cd web-tv-app
npm install
```

### 🔑 Environment Setup

Create `.env.local` file in the root:

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 💻 Run Locally

```
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧠 Key Components

- `Layout.tsx` — Main app layout with sidebar and content
- `Sidebar.tsx` — Expandable sidebar with icons and profile
- `FeaturedVideo.tsx` — Main video player with YouTube embed
- `TrendingCarousel.tsx` — Interactive carousel using Swiper.js

---

## 🔌 Hooks

### `useFeaturedVideo`

Custom hook for:
- Syncing featured video from URL or `localStorage`
- Listening for changes across tabs

Path: `src/hooks/useFeaturedVideo.tsx`

---

## 🛠️ Services

### `LocalStorageService`

Smart wrapper for localStorage with:

- JSON serialization
- TTL support
- SSR-safe memory fallback

Path: `src/lib/LocalStorageService/index.ts`

---

## 🌐 API

### `GET /api/videos`

Returns static video data from `src/data/videos.json`  
Implemented in: `src/app/api/videos/route.ts`

---

## 🚢 Deployment

- GitHub Actions CI/CD: `.github/workflows/deployment.yml`
- Auto-deploy on push to `main` via Vercel
- Supports environment variables and Vercel secrets

---

## 🔍 Metadata & SEO

Defined in `layout.tsx` with:

- Title, description, keywords
- Open Graph preview tags
- Twitter Cards
- Robots & Googlebot directives

---

## 🧪 Environment Variables

- `NEXT_PUBLIC_BASE_URL` — Base URL for fetch and assets
- Other secrets defined in Vercel settings

---

## 📫 Contact

Made with ❤️ by **Aram Khachatryan**  
🌐 [Portfolio](https://khachatryan-dev.vercel.app)

---
