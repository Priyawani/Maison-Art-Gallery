# 🏛️ Maison Art & Luxury — Unified Gallery Platform

> A next-level luxury art gallery web platform built with React & TypeScript, designed as a unified experience for art collectors, cultural patrons, and luxury enthusiasts.

---

## 🎯 About The Project

**Maison Art & Luxury** is a full-featured art gallery and luxury platform built as part of a **1-month internship challenge**. The goal was to design and develop a unified platform that blends high-end art curation with a luxury digital experience — handling real-world features like artwork browsing, artist profiles, event booking, wishlists, and private inquiries.

The platform is designed with a **dark luxury aesthetic** — inspired by Paris auction houses and high-end gallery spaces — using a rich gold, deep black, and warm ivory colour palette throughout.

---

## 🚀 Features

### 🖼️ Gallery
- Browse **12 premium artworks** across 5 categories — Abstract, Contemporary, Impressionist, Sculpture, Photography
- **Filter by category** — instant client-side filtering
- **Search** artworks by title, artist, or category
- **Sort** by price (low/high), newest, or most liked
- **Like system** — toggle likes with live count per artwork
- **Wishlist toggle** — save/unsave artworks with heart button
- **Artwork Detail Modal** — full description, medium, dimensions, price, inquiry & save actions
- **Stats bar** — live counts of artworks, artists, collectors, countries

### 👨‍🎨 Artists
- Dedicated profiles for **5 represented artists**
- Bio, origin, specialty, exhibition history, and awards
- Hover-to-colour portrait reveal effect
- Works count badge per artist

### 📅 Events
- **5 upcoming events** — Vernissage, Private, Auction, Workshop, Symposium
- One-click **seat reservation** with confirmation toast
- Dress code and venue info per event
- Colour-coded event type badges

### ❤️ Wishlist
- Personal collection of saved artworks
- **Total collection value** calculator
- Bulk inquire all saved works at once
- Remove individual works

### 📬 Contact
- Private enquiry form with name, email, phone, area of interest, message
- **Form validation** with success confirmation screen
- Gallery contact info — location, phone, email, hours

### 🎨 UI/UX
- Parallax hero section with animated shimmer title
- **Toast notifications** for all user actions
- Smooth card hover animations with image zoom
- Animated page transitions (fade-up)
- Fully responsive layout
- Custom gold scrollbar
- Sticky navbar with wishlist item counter
- Corner decorative accents on hero

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **CSS-in-JS** | All styles written inline / in `<style>` tags |
| **Google Fonts** | Cinzel · Cormorant Garamond · Jost |
| **Unsplash** | Artwork & artist imagery |
| **React Hooks** | useState, useEffect, useRef for all state & side effects |

> **No external UI libraries used** — all components built from scratch.

---

## 📁 Project Structure

```
maison-art/
├── public/
│   └── index.html          # Google Fonts loaded here
├── src/
│   ├── App.tsx             # Entire application — all pages, components, logic
│   ├── App.css             # Empty (styles in App.tsx)
│   ├── index.tsx           # React root entry point
│   └── index.css           # Global reset + scrollbar styles
├── .env.example            # Environment variable template
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v16 or above
- npm v8 or above

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/maison-art.git

# 2. Navigate into the project
cd maison-art

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will open at **http://localhost:3000**

---

## 🗺️ Roadmap

- [x] Gallery with filtering, search, sort
- [x] Artwork detail modal
- [x] Artist profiles page
- [x] Event listing & seat booking
- [x] Wishlist with value calculator
- [x] Contact / enquiry form
- [x] Like system with counter
- [x] Toast notifications
- [x] Responsive design
- [ ] Supabase backend integration
- [ ] User authentication (Login / Signup)
- [ ] Real database for artworks & artists
- [ ] Admin dashboard for gallery management
- [ ] Stripe payment / inquiry flow
- [ ] Deployment on Vercel

---

## 🎨 Design Decisions

- **Dark luxury theme** — `#0A0804` background with `#C9A84C` gold accents, inspired by high-end auction house aesthetics
- **Typography** — Cinzel for headings (classical, authoritative), Cormorant Garamond for body (elegant, editorial), Jost for labels (clean, modern)
- **No component library** — every element custom-built to match the luxury brand identity
- **Performance** — lazy-loaded images, passive scroll listeners, CSS transitions over JS animations

---

## 👩‍💻 Author

**Priyadarshini Wani**

---

<div align="center">
  Made with ♥ and a lot of gold — <strong>Maison Art & Luxury</strong>
</div>ut the [React documentation](https://reactjs.org/).
