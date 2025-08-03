# 📺 TV Web App

A sleek, modern TV streaming web application built with **Next.js 15** and **Tailwind CSS v4**. This app features a dynamic home page with a featured video section, a responsive carousel of trending content, and an interactive sidebar menu.

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── api/
│   │   ├── set-featured/
│   │   │   └── route.ts        # API to update featured video
│   │   └── videos/
│   │       └── route.ts        # API to fetch videos
│   ├── layout.tsx              # Root layout wrapper
│   └── page.tsx                # Home page
│
├── components/
│   └── Layout.tsx              # Shared layout with sidebar
│
├── data/
│   └── videos.json             # Static movie/video data source
│
├── features/
│   ├── featuredVideo/
│   │   └── FeaturedVideo.tsx   # Displays and plays featured video
│   ├── sidebar/
│   │   └── Sidebar.tsx         # Interactive navigation sidebar
│   └── trending/
│       ├── TrendingCarousel.tsx# Carousel for trending videos
│       └── types.tsx           # Type definition for trending props
│
├── styles/
│   └── global.css              # Global styles and Tailwind config
│
└── types/
    └── index.ts                # Shared TypeScript type definitions
```

---

## 🚀 Getting Started

### 1. **Clone the repository**

```bash
git clone https://github.com/your-username/tv-web-app.git
cd tv-web-app
```

### 2. **Install dependencies**

```bash
npm install
```

### 3. **Configure Environment**

Create a `.env.local` file in the root and add:

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Adjust `BASE_URL` depending on your hosting (e.g., Vercel, Netlify, etc.).

### 4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 API Endpoints

### `GET /api/videos`

- Returns the full list of featured and trending videos.
- Reads from `videos.json`.

### `PATCH /api/set-featured`

- Body: `{ "id": "videoId" }`
- Sets the featured video by ID.
- Persists changes to `videos.json`.
- Returns updated featured and trending videos.

---

## 🧩 Features

- 🎬 **Featured Video Player**
    - Shows the current featured video.
    - On click, auto-plays the trailer using an embedded YouTube iframe.
    - Allows user to stop the video.

- 🔥 **Trending Carousel**
    - Fetches a maximum of 50 trending videos.
    - Scrollable and responsive carousel using `Swiper.js`.

- 📑 **Persistent Featured Selection**
    - Clicking a trending video updates the featured section after 2 seconds.
    - Saves selected video ID in `sessionStorage`.

- 🎛️ **Interactive Sidebar**
    - Expands on hover.
    - Includes profile info, menu navigation, and footer options.

---

## 💻 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/docs/upgrade-guide)
- **Carousel**: [Swiper.js](https://swiperjs.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Type Safety**: TypeScript

---

## 🗂️ JSON Structure (`/src/data/videos.json`)

```json
{
  "Featured": {
    "Id": "6",
    "Title": "Avengers: Endgame",
    ...
  },
  "TendingNow": [
    {
      "Id": "1",
      "Title": "The Irishman",
      ...
    }
  ]
}
```

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 👤 Author

**Aram Khachatryan**  
🌐 [khachatryan-dev.vercel.app](https://khachatryan-dev.vercel.app)