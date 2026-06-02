// @ts-nocheck
import { useState, useEffect, useRef } from "react";
import "./App.css";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const artworks = [
  {
    id: 1,
    title: "Crimson Reverie",
    artist: "Isabelle Moret",
    year: 2023,
    price: 48000,
    category: "Abstract",
    medium: "Oil on Canvas",
    size: "120×180 cm",
    img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=700&q=80",
    badge: "Featured",
    likes: 312,
    description:
      "A sweeping gesture of crimson across raw linen, evoking the restless energy of memory and loss. Moret layers translucent glazes to create extraordinary depth.",
  },
  {
    id: 2,
    title: "Gilded Silence",
    artist: "Marcus Vane",
    year: 2022,
    price: 92000,
    category: "Contemporary",
    medium: "Gold Leaf & Acrylic",
    size: "90×90 cm",
    img: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=700&q=80",
    badge: "Sold",
    likes: 489,
    description:
      "Gold leaf applied over matte acrylic grounds, interrupted by deliberate silences of bare canvas. A meditation on luxury, restraint, and what remains unsaid.",
  },
  {
    id: 3,
    title: "Azure Depths",
    artist: "Anya Sorel",
    year: 2024,
    price: 35000,
    category: "Impressionist",
    medium: "Watercolour",
    size: "60×80 cm",
    img: "https://images.unsplash.com/photo-1547826039-a4b3d67d0028?w=700&q=80",
    badge: "New",
    likes: 201,
    description:
      "Sorel captures the liminal moment between ocean and sky with her signature dissolved edges and layered washes of cerulean and cobalt.",
  },
  {
    id: 4,
    title: "Obsidian Dreams",
    artist: "Léo Marchand",
    year: 2023,
    price: 127000,
    category: "Sculpture",
    medium: "Black Marble",
    size: "45×60×40 cm",
    img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=700&q=80",
    badge: "Premium",
    likes: 567,
    description:
      "Hand-carved from a single block of Marquina marble, this sculpture explores the tension between solid permanence and the illusion of fluid movement.",
  },
  {
    id: 5,
    title: "The Golden Hour",
    artist: "Isabelle Moret",
    year: 2024,
    price: 61000,
    category: "Abstract",
    medium: "Mixed Media",
    size: "100×150 cm",
    img: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=700&q=80",
    badge: "Featured",
    likes: 390,
    description:
      "Burned resin, oil pigment, and gold powder on linen. The painting seems to radiate from within — a tribute to endings that feel like beginnings.",
  },
  {
    id: 6,
    title: "Porcelain Reverie",
    artist: "Suki Tanaka",
    year: 2022,
    price: 18500,
    category: "Photography",
    medium: "Fine Art Print",
    size: "50×70 cm",
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=700&q=80",
    badge: "New",
    likes: 142,
    description:
      "Archival pigment print on museum-grade cotton rag paper. Edition 3 of 5. Signed and numbered by the artist.",
  },
  {
    id: 7,
    title: "Velvet Horizon",
    artist: "Marcus Vane",
    year: 2023,
    price: 74000,
    category: "Contemporary",
    medium: "Textile & Resin",
    size: "80×120 cm",
    img: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=700&q=80",
    badge: "Premium",
    likes: 423,
    description:
      "Hand-woven velvet panels suspended in cast resin. The work oscillates between painting, textile art, and three-dimensional relief.",
  },
  {
    id: 8,
    title: "Nocturne No. 7",
    artist: "Léo Marchand",
    year: 2024,
    price: 55000,
    category: "Abstract",
    medium: "Charcoal & Oil",
    size: "70×100 cm",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    badge: "Featured",
    likes: 278,
    description:
      "The seventh in Marchand's celebrated Nocturne series. Dense charcoal grounds are interrupted by luminous oil passages, evoking moonlight through fog.",
  },
  {
    id: 9,
    title: "Ivory Ascension",
    artist: "Anya Sorel",
    year: 2023,
    price: 44000,
    category: "Impressionist",
    medium: "Oil on Linen",
    size: "80×100 cm",
    img: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=700&q=80",
    badge: "Featured",
    likes: 310,
    description:
      "Pale ivory tones layered in classic Impressionist strokes, building form from absence. One of Sorel's most sought-after recent works.",
  },
  {
    id: 10,
    title: "Ember & Ash",
    artist: "Suki Tanaka",
    year: 2024,
    price: 29000,
    category: "Photography",
    medium: "Fine Art Print",
    size: "60×90 cm",
    img: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=700&q=80",
    badge: "New",
    likes: 189,
    description:
      "Long-exposure photography capturing the choreography of fire against total darkness. Edition 1 of 3.",
  },
  {
    id: 11,
    title: "Sapphire Column",
    artist: "Léo Marchand",
    year: 2022,
    price: 210000,
    category: "Sculpture",
    medium: "Lapis Lazuli & Steel",
    size: "30×30×120 cm",
    img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=700&q=80",
    badge: "Premium",
    likes: 634,
    description:
      "A towering column of raw lapis lazuli shards bonded to a brushed steel armature. Marchand's most ambitious sculptural work to date.",
  },
  {
    id: 12,
    title: "Rose Cipher",
    artist: "Isabelle Moret",
    year: 2024,
    price: 53000,
    category: "Contemporary",
    medium: "Encaustic & Oil",
    size: "90×130 cm",
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700&q=80",
    badge: "New",
    likes: 267,
    description:
      "Hot wax encaustic fused with oil pigment in deep rose and burgundy tones. The surface holds the history of every layer — nothing is truly erased.",
  },
];

const artists = [
  {
    id: 1,
    name: "Isabelle Moret",
    origin: "Paris, France",
    specialty: "Abstract Oil & Mixed Media",
    works: 24,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    bio: "Award-winning expressionist known for emotive colour fields and layered encaustic surfaces. Represented in collections across Europe, the United States and the Gulf.",
    exhibitions: ["Louvre Contemporain 2022", "Frieze London 2023", "Art Basel 2024"],
    awards: ["Prix de la Peinture Française 2021", "Gagosian Prize 2023"],
  },
  {
    id: 2,
    name: "Marcus Vane",
    origin: "London, United Kingdom",
    specialty: "Contemporary Mixed Media",
    works: 17,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Provocateur of boundaries between form, material and sensation. Vane's practice spans painting, textile, and immersive installation, often referencing luxury as critique.",
    exhibitions: ["White Cube 2021", "Serpentine Pavilion 2022", "Venice Biennale 2024"],
    awards: ["Turner Prize Shortlist 2022", "British Art Medal 2023"],
  },
  {
    id: 3,
    name: "Anya Sorel",
    origin: "Saint Petersburg, Russia",
    specialty: "Impressionist Oil & Watercolour",
    works: 31,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    bio: "Master of light and atmosphere in the classical tradition, Sorel studied under the last generation of Leningrad academicians before moving to Paris in 2008.",
    exhibitions: ["Musée d'Orsay 2020", "Christie's Private 2022", "Sotheby's Curated 2024"],
    awards: ["Russian Academy of Arts Prize 2019", "Monet Foundation Grant 2021"],
  },
  {
    id: 4,
    name: "Léo Marchand",
    origin: "Milan, Italy",
    specialty: "Sculpture & Drawing",
    works: 12,
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    bio: "Sculptor exploring the tension between stone, shadow and memory. Trained at the Accademia di Brera, Marchand works exclusively with rare natural materials.",
    exhibitions: ["Biennale di Venezia 2021", "Palazzo Grassi 2022", "Hauser & Wirth 2024"],
    awards: ["Premio Scultura Italiana 2020", "Fondazione Prada Fellowship 2022"],
  },
  {
    id: 5,
    name: "Suki Tanaka",
    origin: "Kyoto, Japan",
    specialty: "Fine Art Photography",
    works: 19,
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    bio: "Tanaka's long-exposure practice transforms fire, water and light into abstract sculptures. All works are produced in strictly limited editions on museum-grade paper.",
    exhibitions: ["Tokyo Photographic Art Museum 2021", "MoMA PS1 2023", "Les Rencontres d'Arles 2024"],
    awards: ["ICP Infinity Award 2022", "Nikon Prize 2023"],
  },
];

const events = [
  {
    id: 1,
    title: "Opening Night: Crimson Season",
    date: "June 14, 2025",
    time: "7:00 PM",
    venue: "Grand Hall — East Wing",
    type: "Vernissage",
    seats: 80,
    description: "The most anticipated opening of the season. Join us for champagne, a curator's tour, and exclusive early access to the full Crimson Season collection.",
    dress: "Black Tie",
  },
  {
    id: 2,
    title: "Collector's Evening with Marcus Vane",
    date: "June 22, 2025",
    time: "6:30 PM",
    venue: "Private Salon, 3rd Floor",
    type: "Private",
    seats: 20,
    description: "An intimate conversation between Marcus Vane and select collectors. Attendance by invitation only — RSVP required within 48 hours.",
    dress: "Smart Casual",
  },
  {
    id: 3,
    title: "Art & Champagne Auction",
    date: "July 5, 2025",
    time: "8:00 PM",
    venue: "Rooftop Terrace",
    type: "Auction",
    seats: 150,
    description: "Twenty major works from the Maison collection go to live auction under the stars. Paddle registration opens 30 minutes before the first lot.",
    dress: "Cocktail",
  },
  {
    id: 4,
    title: "Masterclass: Oil Technique with Anya Sorel",
    date: "July 12, 2025",
    time: "3:00 PM",
    venue: "Studio Gallery, Ground Floor",
    type: "Workshop",
    seats: 12,
    description: "A four-hour hands-on masterclass with Anya Sorel. Materials provided. Strictly limited to 12 participants. All skill levels welcome.",
    dress: "Casual",
  },
  {
    id: 5,
    title: "Summer Collectors' Symposium",
    date: "July 19, 2025",
    time: "11:00 AM",
    venue: "Conference Hall",
    type: "Symposium",
    seats: 60,
    description: "A full-day programme of panel discussions, market insights, and portfolio reviews with our curatorial team and leading art advisors.",
    dress: "Business",
  },
];

/* ─────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────── */
const TABS = ["Gallery", "Artists", "Events", "Wishlist", "Contact"];
const CATS = ["All", "Abstract", "Contemporary", "Impressionist", "Sculpture", "Photography"];

const BADGE_COLOR: Record<string, string> = {
  Featured: "#C9A84C",
  Sold: "#777777",
  New: "#2A9D8F",
  Premium: "#8B1A1A",
};

const EVENT_COLOR: Record<string, string> = {
  Vernissage: "#C9A84C",
  Private: "#8B1A1A",
  Auction: "#2A5FA5",
  Workshop: "#2A9D8F",
  Symposium: "#6B45A0",
};

const fmt = (p: number) => `€${p.toLocaleString("en-EU")}`;

/* ─────────────────────────────────────────────
   APP
───────────────────────────────────────────── */
export default function App() {
  const [tab, setTab] = useState("Gallery");
  const [cat, setCat] = useState("All");
  const [wish, setWish] = useState<number[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [toast, setToast] = useState("");
  const [likes, setLikes] = useState<Record<number, number>>(
    () => Object.fromEntries(artworks.map((a) => [a.id, a.likes]))
  );
  const [liked, setLiked] = useState<Record<number, boolean>>({});
  const [bookings, setBookings] = useState<number[]>([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", message: "" });
  const [formSent, setFormSent] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const toastTimer = useRef<any>(null);

  /* Filtered + sorted artworks */
  const filtered = artworks
    .filter(
      (a) =>
        (cat === "All" || a.category === cat) &&
        (!search ||
          a.title.toLowerCase().includes(search.toLowerCase()) ||
          a.artist.toLowerCase().includes(search.toLowerCase()) ||
          a.category.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) =>
      sortBy === "price-asc"
        ? a.price - b.price
        : sortBy === "price-desc"
        ? b.price - a.price
        : sortBy === "newest"
        ? b.year - a.year
        : sortBy === "popular"
        ? likes[b.id] - likes[a.id]
        : 0
    );

  /* Parallax hero */
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Toast helper */
  const showToast = (msg: string) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2800);
  };

  const toggleWish = (id: number) => {
    setWish((w) => {
      const next = w.includes(id) ? w.filter((x) => x !== id) : [...w, id];
      showToast(next.includes(id) ? "Added to wishlist ♥" : "Removed from wishlist");
      return next;
    });
  };

  const toggleLike = (id: number) => {
    setLiked((l) => ({ ...l, [id]: !l[id] }));
    setLikes((l) => ({ ...l, [id]: l[id] + (liked[id] ? -1 : 1) }));
  };

  const inquire = (a: any) => {
    showToast(`Inquiry sent for "${a.title}"`);
  };

  const bookEvent = (ev: any) => {
    if (!bookings.includes(ev.id)) {
      setBookings((b) => [...b, ev.id]);
      showToast(`Seat reserved for "${ev.title}"`);
    }
  };

  const sendForm = (e: any) => {
    e.preventDefault();
    setFormSent(true);
  };

  const wishArtworks = artworks.filter((a) => wish.includes(a.id));

  /* ─── RENDER ─── */
  return (
    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: "#0A0804", minHeight: "100vh", color: "#F0E6D3", overflowX: "hidden" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 4px; background: #0A0804; }
        ::-webkit-scrollbar-thumb { background: #C9A84C44; border-radius: 2px; }

        /* Animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes toastIn {
          from { opacity: 0; transform: translateY(16px) translateX(-50%); }
          to   { opacity: 1; transform: translateY(0)  translateX(-50%); }
        }
        @keyframes shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.6; }
        }

        .fade-up { animation: fadeUp 0.55s ease both; }

        /* Art card */
        .art-card {
          background: #12100A;
          border: 1px solid #2A2010;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(.25,.46,.45,.94),
                      box-shadow 0.4s, border-color 0.3s;
          cursor: pointer;
        }
        .art-card:hover {
          transform: translateY(-10px) scale(1.01);
          box-shadow: 0 28px 70px #C9A84C1A;
          border-color: #C9A84C44;
        }
        .img-wrap { overflow: hidden; }
        .img-wrap img { transition: transform 0.6s cubic-bezier(.25,.46,.45,.94); }
        .art-card:hover .img-wrap img { transform: scale(1.07); }

        /* Buttons */
        .gold-btn {
          background: linear-gradient(135deg, #C9A84C, #A8863A);
          color: #0A0804;
          border: none;
          padding: 0.72rem 2rem;
          font-family: 'Cinzel', serif;
          font-size: 0.72rem;
          letter-spacing: 0.16em;
          cursor: pointer;
          transition: all 0.3s;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          white-space: nowrap;
        }
        .gold-btn:hover {
          background: linear-gradient(135deg, #E8C460, #C9A84C);
          transform: scale(1.03);
          box-shadow: 0 6px 28px #C9A84C44;
        }
        .gold-btn:disabled { opacity: 0.6; cursor: default; transform: none; }

        .ghost-btn {
          background: transparent;
          border: 1px solid #C9A84C55;
          color: #C9A84C;
          padding: 0.55rem 1.4rem;
          font-family: 'Cinzel', serif;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          cursor: pointer;
          transition: all 0.3s;
          white-space: nowrap;
        }
        .ghost-btn:hover { border-color: #C9A84C; background: #C9A84C11; }

        .danger-btn {
          background: transparent;
          border: 1px solid #8B1A1A55;
          color: #cc5555;
          padding: 0.55rem 1rem;
          font-family: 'Cinzel', serif;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s;
        }
        .danger-btn:hover { border-color: #8B1A1A; background: #8B1A1A22; }

        /* Tabs */
        .tab-btn {
          background: transparent;
          border: none;
          border-bottom: 1px solid transparent;
          color: #9E8A70;
          padding: 1rem 1.1rem;
          font-family: 'Cinzel', serif;
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          cursor: pointer;
          transition: all 0.3s;
        }
        .tab-btn:hover { color: #F0E6D3; }
        .tab-btn.active { color: #C9A84C; border-bottom-color: #C9A84C; }

        /* Cat filter */
        .cat-btn {
          background: transparent;
          border: 1px solid #2A2010;
          color: #9E8A70;
          padding: 0.4rem 1rem;
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          cursor: pointer;
          transition: all 0.25s;
          border-radius: 1px;
        }
        .cat-btn:hover { border-color: #C9A84C55; color: #F0E6D3; }
        .cat-btn.active { background: #C9A84C1A; border-color: #C9A84C; color: #C9A84C; }

        /* Input */
        .inp {
          background: #16120A;
          border: 1px solid #2A2010;
          color: #F0E6D3;
          padding: 0.75rem 1rem;
          font-family: 'Jost', sans-serif;
          font-size: 0.9rem;
          outline: none;
          transition: border 0.3s;
          width: 100%;
        }
        .inp::placeholder { color: #5A4A34; }
        .inp:focus { border-color: #C9A84C; }

        /* Tag badge */
        .tag {
          display: inline-block;
          padding: 0.2rem 0.7rem;
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          border-radius: 1px;
        }

        /* Gold divider */
        .divider {
          width: 56px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #C9A84C, transparent);
          margin: 1rem auto;
        }

        /* Shimmer text */
        .shimmer-text {
          background: linear-gradient(90deg, #C9A84C, #F0D070, #C9A84C, #A87830);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        /* Modal */
        .modal-bg {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          backdrop-filter: blur(8px);
          animation: fadeUp 0.25s ease;
        }
        .modal-inner {
          background: #12100A;
          border: 1px solid #3A2E1E;
          max-width: 920px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          display: flex;
          flex-wrap: wrap;
          position: relative;
        }

        /* Heart */
        .heart-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 1.1rem;
          transition: transform 0.2s;
          line-height: 1;
          padding: 0;
        }
        .heart-btn:hover { transform: scale(1.35); }

        /* Card hover overlay */
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, #12100Acc 0%, #12100A44 50%, transparent 100%);
          pointer-events: none;
        }

        /* Event card */
        .ev-card {
          background: #12100A;
          border: 1px solid #2A2010;
          padding: 1.8rem 2rem;
          margin-bottom: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.2rem;
          transition: border-color 0.3s, background 0.3s;
        }
        .ev-card:hover { border-color: #C9A84C44; background: #16130B; }

        /* Artist card */
        .artist-card {
          background: #12100A;
          border: 1px solid #2A2010;
          overflow: hidden;
          transition: border-color 0.35s, transform 0.35s;
          cursor: pointer;
        }
        .artist-card:hover { border-color: #C9A84C55; transform: translateY(-6px); }
        .artist-card img { transition: filter 0.5s, transform 0.5s; filter: grayscale(0.45) brightness(0.85); }
        .artist-card:hover img { filter: grayscale(0) brightness(1); transform: scale(1.04); }

        /* Toast */
        .toast {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          background: #1E1810;
          border: 1px solid #C9A84C55;
          color: #C9A84C;
          padding: 0.75rem 2rem;
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          z-index: 2000;
          white-space: nowrap;
          animation: toastIn 0.3s ease;
          pointer-events: none;
        }

        /* Section header */
        .sec-header { text-align: center; margin-bottom: 3rem; }
        .sec-eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.38em;
          color: #C9A84C;
          margin-bottom: 0.8rem;
        }
        .sec-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 400;
          letter-spacing: 0.04em;
          line-height: 1.15;
        }

        /* Responsive */
        @media (max-width: 680px) {
          .tab-btn { padding: 0.8rem 0.6rem; font-size: 0.6rem; letter-spacing: 0.1em; }
          .gold-btn { padding: 0.65rem 1.3rem; font-size: 0.66rem; }
        }
      `}</style>

      {/* ── TOAST ── */}
      {toast && <div className="toast">{toast}</div>}

      {/* ── NAVBAR ── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "#0A0804F2",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid #2A2010",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Logo */}
        <div
          style={{ fontFamily: "'Cinzel', serif", cursor: "pointer", padding: "0.8rem 0", flexShrink: 0 }}
          onClick={() => { setTab("Gallery"); }}
        >
          <div style={{ fontSize: "1.05rem", letterSpacing: "0.32em", color: "#C9A84C", lineHeight: 1 }}>MAISON</div>
          <div style={{ fontSize: "0.52rem", letterSpacing: "0.42em", color: "#9E8A70", marginTop: "2px" }}>ART & LUXURY</div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 0, overflowX: "auto" }}>
          {TABS.map((t) => (
            <button key={t} className={`tab-btn ${tab === t ? "active" : ""}`} onClick={() => setTab(t)}>
              {t}
              {t === "Wishlist" && wish.length > 0 && (
                <span
                  style={{
                    background: "#C9A84C",
                    color: "#0A0804",
                    borderRadius: "50%",
                    fontSize: "0.58rem",
                    padding: "1px 5px",
                    marginLeft: "5px",
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {wish.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Right info */}
        <div
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.72rem",
            color: "#9E8A70",
            letterSpacing: "0.1em",
            flexShrink: 0,
          }}
        >
          {filtered.length} WORKS
        </div>
      </nav>

      {/* ══════════════════════════════════════════
          HERO (Gallery only)
      ══════════════════════════════════════════ */}
      {tab === "Gallery" && (
        <div style={{ position: "relative", height: "75vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* Parallax background */}
          <div
            ref={heroRef}
            style={{
              position: "absolute",
              inset: "-25%",
              backgroundImage: "url(https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=1800&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.3) saturate(0.8)",
              willChange: "transform",
            }}
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, #0A080422 0%, #0A0804BB 70%, #0A0804 100%)",
            }}
          />
          {/* Corner decorations */}
          <div style={{ position: "absolute", top: 28, left: 28, width: 40, height: 40, borderTop: "1px solid #C9A84C44", borderLeft: "1px solid #C9A84C44" }} />
          <div style={{ position: "absolute", top: 28, right: 28, width: 40, height: 40, borderTop: "1px solid #C9A84C44", borderRight: "1px solid #C9A84C44" }} />
          <div style={{ position: "absolute", bottom: 28, left: 28, width: 40, height: 40, borderBottom: "1px solid #C9A84C44", borderLeft: "1px solid #C9A84C44" }} />
          <div style={{ position: "absolute", bottom: 28, right: 28, width: 40, height: 40, borderBottom: "1px solid #C9A84C44", borderRight: "1px solid #C9A84C44" }} />

          {/* Content */}
          <div style={{ position: "relative", textAlign: "center", padding: "2rem", maxWidth: 700 }}>
            <div
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.45em",
                color: "#C9A84C",
                marginBottom: "1.6rem",
              }}
            >
              EST. 2019 · PARIS · MILAN · NEW YORK
            </div>
            <h1
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(2.6rem, 6.5vw, 5.2rem)",
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: "0.05em",
                marginBottom: "1rem",
              }}
            >
              Where Art Meets
              <br />
              <span className="shimmer-text">Luxury</span>
            </h1>
            <div className="divider" />
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: "1rem",
                color: "#B8A080",
                maxWidth: 460,
                margin: "0 auto 2.2rem",
                lineHeight: 1.85,
              }}
            >
              Curating the world's finest contemporary works for discerning collectors and cultural patrons since 2019.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button className="gold-btn" onClick={() => { window.scrollTo({ top: 500, behavior: "smooth" }); }}>
                EXPLORE COLLECTION
              </button>
              <button className="ghost-btn" onClick={() => setTab("Events")}>
                UPCOMING EVENTS
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════
          GALLERY
      ══════════════════════════════════════════ */}
      {tab === "Gallery" && (
        <div style={{ padding: "3rem 2rem", maxWidth: 1400, margin: "0 auto" }} className="fade-up">
          {/* Stats bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "1px",
              background: "#2A2010",
              border: "1px solid #2A2010",
              marginBottom: "2.5rem",
            }}
          >
            {[
              { label: "ARTWORKS", value: artworks.length },
              { label: "ARTISTS", value: artists.length },
              { label: "COLLECTORS", value: "340+" },
              { label: "COUNTRIES", value: "28" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: "#12100A",
                  padding: "1.4rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.6rem", color: "#C9A84C", marginBottom: "0.3rem" }}>{s.value}</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#9E8A70" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Filters row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              alignItems: "center",
              marginBottom: "2rem",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {CATS.map((c) => (
                <button key={c} className={`cat-btn ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>
                  {c.toUpperCase()}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", alignItems: "center" }}>
              <input
                className="inp"
                style={{ width: 200 }}
                placeholder="Search artworks…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <select
                className="inp"
                style={{ width: 170, cursor: "pointer" }}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Sort: Default</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
                <option value="newest">Newest First</option>
                <option value="popular">Most Liked</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "5rem", fontFamily: "'Jost', sans-serif", color: "#9E8A70" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem", opacity: 0.4 }}>◇</div>
              No artworks match your search.
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {filtered.map((art, i) => (
                <div
                  key={art.id}
                  className="art-card"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {/* Image */}
                  <div
                    className="img-wrap"
                    style={{ height: 270, position: "relative" }}
                    onClick={() => setSelected(art)}
                  >
                    <img
                      src={art.img}
                      alt={art.title}
                      loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                    <div className="card-overlay" />
                    {/* Badge */}
                    <span
                      className="tag"
                      style={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        background: BADGE_COLOR[art.badge] + "28",
                        border: `1px solid ${BADGE_COLOR[art.badge]}55`,
                        color: BADGE_COLOR[art.badge],
                      }}
                    >
                      {art.badge.toUpperCase()}
                    </span>
                    {/* Wishlist heart */}
                    <button
                      className="heart-btn"
                      style={{ position: "absolute", top: 12, right: 12, color: wish.includes(art.id) ? "#C9A84C" : "#9E8A7099" }}
                      onClick={(e) => { e.stopPropagation(); toggleWish(art.id); }}
                    >
                      {wish.includes(art.id) ? "♥" : "♡"}
                    </button>
                    {/* Category at bottom */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 12,
                        left: 14,
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "0.65rem",
                        letterSpacing: "0.18em",
                        color: "#C0AA8A",
                      }}
                    >
                      {art.medium}
                    </div>
                  </div>

                  {/* Info */}
                  <div style={{ padding: "1.25rem 1.4rem" }}>
                    <div
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "0.68rem",
                        color: "#9E8A70",
                        letterSpacing: "0.16em",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {art.category} · {art.year}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "1.05rem",
                        marginBottom: "0.22rem",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {art.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontStyle: "italic",
                        fontSize: "0.9rem",
                        color: "#B8A080",
                        marginBottom: "1rem",
                      }}
                    >
                      {art.artist}
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span
                        style={{
                          fontFamily: "'Cinzel', serif",
                          color: art.badge === "Sold" ? "#777" : "#C9A84C",
                          fontSize: "1.05rem",
                        }}
                      >
                        {art.badge === "Sold" ? "SOLD" : fmt(art.price)}
                      </span>
                      <div style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
                        <button
                          className="heart-btn"
                          style={{ fontSize: "0.78rem", color: liked[art.id] ? "#C9A84C" : "#9E8A70", fontFamily: "'Jost', sans-serif" }}
                          onClick={(e) => { e.stopPropagation(); toggleLike(art.id); }}
                        >
                          {liked[art.id] ? "♥" : "♡"} {likes[art.id]}
                        </button>
                        {art.badge !== "Sold" && (
                          <button
                            className="ghost-btn"
                            style={{ padding: "0.42rem 1rem" }}
                            onClick={(e) => { e.stopPropagation(); inquire(art); }}
                          >
                            INQUIRE
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ══════════════════════════════════════════
          ARTISTS
      ══════════════════════════════════════════ */}
      {tab === "Artists" && (
        <div style={{ padding: "4rem 2rem", maxWidth: 1300, margin: "0 auto" }} className="fade-up">
          <div className="sec-header">
            <div className="sec-eyebrow">OUR ROSTER</div>
            <h2 className="sec-title">Represented Artists</h2>
            <div className="divider" />
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: "#9E8A70", maxWidth: 520, margin: "0 auto", lineHeight: 1.85 }}>
              Five of the world's most compelling voices in contemporary art, exclusively represented by Maison across all major markets.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.8rem" }}>
            {artists.map((a) => (
              <div key={a.id} className="artist-card">
                {/* Portrait */}
                <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                  <img
                    src={a.img}
                    alt={a.name}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "55%",
                      background: "linear-gradient(to top, #12100A, transparent)",
                    }}
                  />
                  <span
                    className="tag"
                    style={{
                      position: "absolute",
                      bottom: 12,
                      left: 14,
                      background: "#C9A84C22",
                      border: "1px solid #C9A84C44",
                      color: "#C9A84C",
                    }}
                  >
                    {a.works} WORKS
                  </span>
                </div>

                {/* Info */}
                <div style={{ padding: "1.4rem 1.6rem" }}>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.05rem", marginBottom: "0.28rem" }}>{a.name}</div>
                  <div
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.75rem",
                      color: "#C9A84C",
                      letterSpacing: "0.1em",
                      marginBottom: "0.7rem",
                    }}
                  >
                    {a.origin}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.84rem",
                      color: "#9E8A70",
                      lineHeight: 1.75,
                      marginBottom: "1.1rem",
                    }}
                  >
                    {a.bio}
                  </div>

                  {/* Specialty tag */}
                  <div
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.7rem",
                      color: "#7A6A50",
                      letterSpacing: "0.1em",
                      borderTop: "1px solid #2A2010",
                      paddingTop: "0.8rem",
                    }}
                  >
                    {a.specialty}
                  </div>

                  {/* Exhibitions */}
                  <div style={{ marginTop: "0.8rem" }}>
                    {a.exhibitions.map((ex) => (
                      <div
                        key={ex}
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontSize: "0.72rem",
                          color: "#7A6A50",
                          padding: "0.2rem 0",
                          paddingLeft: "0.8rem",
                          borderLeft: "1px solid #2A2010",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════
          EVENTS
      ══════════════════════════════════════════ */}
      {tab === "Events" && (
        <div style={{ padding: "4rem 2rem", maxWidth: 980, margin: "0 auto" }} className="fade-up">
          <div className="sec-header">
            <div className="sec-eyebrow">CALENDAR 2025</div>
            <h2 className="sec-title">Upcoming Events</h2>
            <div className="divider" />
          </div>

          {events.map((ev) => (
            <div key={ev.id} className="ev-card">
              <div style={{ flex: 1, minWidth: 260 }}>
                <div style={{ display: "flex", gap: "0.8rem", alignItems: "center", marginBottom: "0.7rem", flexWrap: "wrap" }}>
                  <span
                    className="tag"
                    style={{
                      background: (EVENT_COLOR[ev.type] || "#C9A84C") + "22",
                      border: `1px solid ${EVENT_COLOR[ev.type] || "#C9A84C"}44`,
                      color: EVENT_COLOR[ev.type] || "#C9A84C",
                    }}
                  >
                    {ev.type.toUpperCase()}
                  </span>
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", color: "#9E8A70" }}>
                    {ev.seats} seats · {ev.dress}
                  </span>
                </div>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.15rem", marginBottom: "0.38rem" }}>{ev.title}</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "#9E8A70", marginBottom: "0.6rem" }}>
                  {ev.date} · {ev.time} · {ev.venue}
                </div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "#7A6A50", lineHeight: 1.7, maxWidth: 540 }}>
                  {ev.description}
                </div>
              </div>
              <button
                className={bookings.includes(ev.id) ? "ghost-btn" : "gold-btn"}
                onClick={() => bookEvent(ev)}
                disabled={bookings.includes(ev.id)}
                style={{ minWidth: 150 }}
              >
                {bookings.includes(ev.id) ? "✓ RESERVED" : "RESERVE SEAT"}
              </button>
            </div>
          ))}

          {bookings.length > 0 && (
            <div
              style={{
                marginTop: "2rem",
                padding: "1.2rem 1.8rem",
                background: "#C9A84C0A",
                border: "1px solid #C9A84C33",
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.85rem",
                color: "#C9A84C",
                lineHeight: 1.7,
              }}
            >
              ✓ You have reserved {bookings.length} event{bookings.length > 1 ? "s" : ""}. Confirmation details will be sent to your registered email within 2 hours.
            </div>
          )}
        </div>
      )}

      {/* ══════════════════════════════════════════
          WISHLIST
      ══════════════════════════════════════════ */}
      {tab === "Wishlist" && (
        <div style={{ padding: "4rem 2rem", maxWidth: 1200, margin: "0 auto" }} className="fade-up">
          <div className="sec-header">
            <div className="sec-eyebrow">CURATED FOR YOU</div>
            <h2 className="sec-title">My Collection</h2>
            <div className="divider" />
          </div>

          {wishArtworks.length === 0 ? (
            <div style={{ textAlign: "center", padding: "5rem 2rem" }}>
              <div style={{ fontSize: "3.5rem", color: "#2A2010", marginBottom: "1.5rem" }}>◇</div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.2rem", color: "#9E8A70", marginBottom: "0.7rem" }}>Your wishlist is empty</div>
              <p style={{ fontFamily: "'Jost', sans-serif", color: "#5A4A34", fontSize: "0.9rem", marginBottom: "2rem" }}>
                Browse the gallery and save the works that speak to you.
              </p>
              <button className="gold-btn" onClick={() => setTab("Gallery")}>BROWSE GALLERY</button>
            </div>
          ) : (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
                {wishArtworks.map((art) => (
                  <div key={art.id} className="art-card">
                    <div
                      className="img-wrap"
                      style={{ height: 210, position: "relative", cursor: "pointer" }}
                      onClick={() => setSelected(art)}
                    >
                      <img
                        src={art.img}
                        alt={art.title}
                        loading="lazy"
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                      <div className="card-overlay" />
                    </div>
                    <div style={{ padding: "1.2rem 1.4rem" }}>
                      <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1rem", marginBottom: "0.22rem" }}>{art.title}</div>
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "0.88rem", color: "#9E8A70", marginBottom: "1rem" }}>
                        {art.artist} · {art.year}
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "1rem" }}>
                          {art.badge === "Sold" ? "SOLD" : fmt(art.price)}
                        </span>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                          {art.badge !== "Sold" && (
                            <button className="ghost-btn" style={{ padding: "0.4rem 0.9rem" }} onClick={() => inquire(art)}>
                              INQUIRE
                            </button>
                          )}
                          <button className="danger-btn" onClick={() => toggleWish(art.id)}>✕</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div
                style={{
                  background: "#12100A",
                  border: "1px solid #C9A84C33",
                  padding: "1.8rem 2rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "1.2rem",
                }}
              >
                <div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", color: "#9E8A70", letterSpacing: "0.2em", marginBottom: "0.4rem" }}>
                    ESTIMATED COLLECTION VALUE
                  </div>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.9rem", color: "#C9A84C" }}>
                    {fmt(wishArtworks.filter((a) => a.badge !== "Sold").reduce((s, a) => s + a.price, 0))}
                  </div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "#5A4A34", marginTop: "0.3rem" }}>
                    {wishArtworks.length} work{wishArtworks.length > 1 ? "s" : ""} saved
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
                  <button
                    className="gold-btn"
                    onClick={() => { wishArtworks.forEach((a) => inquire(a)); showToast("Bulk inquiry sent for all works"); }}
                  >
                    INQUIRE ALL
                  </button>
                  <button className="ghost-btn" onClick={() => setTab("Contact")}>SPEAK TO A CURATOR</button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* ══════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════ */}
      {tab === "Contact" && (
        <div style={{ padding: "4rem 2rem", maxWidth: 780, margin: "0 auto" }} className="fade-up">
          <div className="sec-header">
            <div className="sec-eyebrow">GET IN TOUCH</div>
            <h2 className="sec-title">Contact Our Curators</h2>
            <div className="divider" />
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: "#9E8A70", lineHeight: 1.85 }}>
              Private consultations are available by appointment. Our team of specialists serves private collectors, institutional buyers, and cultural foundations worldwide.
            </p>
          </div>

          {/* Contact info cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1px", background: "#2A2010", marginBottom: "2.5rem" }}>
            {[
              { icon: "◉", label: "PARIS HQ", info: "12 Rue du Faubourg Saint-Honoré, 75008" },
              { icon: "◎", label: "TELEPHONE", info: "+33 1 44 77 89 10" },
              { icon: "◈", label: "EMAIL", info: "curators@maisonart.com" },
              { icon: "◷", label: "HOURS", info: "Tue–Sat, 10 AM – 7 PM" },
            ].map((c) => (
              <div
                key={c.label}
                style={{
                  background: "#12100A",
                  padding: "1.5rem 1.2rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "1.4rem", color: "#C9A84C44", marginBottom: "0.6rem" }}>{c.icon}</div>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.22em", color: "#C9A84C", marginBottom: "0.5rem" }}>{c.label}</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", color: "#9E8A70", lineHeight: 1.6 }}>{c.info}</div>
              </div>
            ))}
          </div>

          {/* Form */}
          {!formSent ? (
            <div style={{ background: "#12100A", border: "1px solid #2A2010", padding: "2.5rem" }}>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.8rem", letterSpacing: "0.2em", color: "#C9A84C", marginBottom: "1.8rem" }}>
                PRIVATE ENQUIRY FORM
              </div>
              <form
                onSubmit={sendForm}
                style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.16em", color: "#9E8A70", display: "block", marginBottom: "0.5rem" }}>
                      FULL NAME *
                    </label>
                    <input
                      className="inp"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.16em", color: "#9E8A70", display: "block", marginBottom: "0.5rem" }}>
                      EMAIL *
                    </label>
                    <input
                      className="inp"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.16em", color: "#9E8A70", display: "block", marginBottom: "0.5rem" }}>
                      PHONE
                    </label>
                    <input
                      className="inp"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.16em", color: "#9E8A70", display: "block", marginBottom: "0.5rem" }}>
                      AREA OF INTEREST
                    </label>
                    <select
                      className="inp"
                      style={{ cursor: "pointer" }}
                      value={form.interest}
                      onChange={(e) => setForm((f) => ({ ...f, interest: e.target.value }))}
                    >
                      <option value="">Select…</option>
                      <option>Acquisition Advice</option>
                      <option>Private Sale</option>
                      <option>Corporate Collection</option>
                      <option>Event Attendance</option>
                      <option>Press Enquiry</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.16em", color: "#9E8A70", display: "block", marginBottom: "0.5rem" }}>
                    MESSAGE *
                  </label>
                  <textarea
                    className="inp"
                    required
                    rows={5}
                    placeholder="Tell us about your collecting goals, interests, or enquiry…"
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    style={{ resize: "vertical" }}
                  />
                </div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
                  <button type="submit" className="gold-btn">SEND ENQUIRY</button>
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "#5A4A34" }}>
                    We respond within 24 business hours.
                  </span>
                </div>
              </form>
            </div>
          ) : (
            <div
              style={{
                background: "#12100A",
                border: "1px solid #C9A84C33",
                padding: "3.5rem 2rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2.8rem", color: "#C9A84C", marginBottom: "1rem" }}>✦</div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.4rem", marginBottom: "0.8rem" }}>
                Thank you, {form.name}
              </div>
              <div style={{ fontFamily: "'Jost', sans-serif", color: "#9E8A70", lineHeight: 1.8, maxWidth: 400, margin: "0 auto 1.5rem" }}>
                Your enquiry has been received. A curator will contact you at <span style={{ color: "#C9A84C" }}>{form.email}</span> within 24 business hours.
              </div>
              <button
                className="ghost-btn"
                onClick={() => { setFormSent(false); setForm({ name: "", email: "", phone: "", interest: "", message: "" }); }}
              >
                SEND ANOTHER
              </button>
            </div>
          )}
        </div>
      )}

      {/* ══════════════════════════════════════════
          ARTWORK DETAIL MODAL
      ══════════════════════════════════════════ */}
      {selected && (
        <div className="modal-bg" onClick={() => setSelected(null)}>
          <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1.2rem",
                background: "none",
                border: "none",
                color: "#9E8A70",
                cursor: "pointer",
                fontSize: "1.3rem",
                zIndex: 10,
                lineHeight: 1,
              }}
            >
              ✕
            </button>

            {/* Image side */}
            <div style={{ flex: "1 1 400px", minHeight: 420, position: "relative", overflow: "hidden" }}>
              <img
                src={selected.img}
                alt={selected.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, transparent 55%, #12100ADD)",
                }}
              />
            </div>

            {/* Info side */}
            <div style={{ flex: "1 1 320px", padding: "2.8rem 2.2rem", display: "flex", flexDirection: "column", gap: "0" }}>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.68rem", letterSpacing: "0.22em", color: "#C9A84C", marginBottom: "0.6rem" }}>
                {selected.category}
              </div>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.7rem", fontWeight: 400, marginBottom: "0.38rem", lineHeight: 1.15 }}>
                {selected.title}
              </h2>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "#B8A080", fontSize: "1rem", marginBottom: "1.4rem" }}>
                {selected.artist}, {selected.year}
              </div>

              <div className="divider" style={{ margin: "0 0 1.4rem" }} />

              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: "#9E8A70", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                {selected.description}
              </p>

              {/* Details table */}
              <div style={{ borderTop: "1px solid #2A2010", marginBottom: "1.5rem" }}>
                {[
                  ["Medium", selected.medium],
                  ["Dimensions", selected.size],
                  ["Year", selected.year],
                  ["Availability", selected.badge === "Sold" ? "SOLD" : "Available"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.84rem",
                      padding: "0.65rem 0",
                      borderBottom: "1px solid #1E1A10",
                    }}
                  >
                    <span style={{ color: "#9E8A70" }}>{k}</span>
                    <span
                      style={{
                        color:
                          k === "Availability" && selected.badge === "Sold"
                            ? "#777"
                            : k === "Availability"
                            ? "#2A9D8F"
                            : "#F0E6D3",
                        fontWeight: k === "Availability" ? 400 : 300,
                      }}
                    >
                      {v}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div style={{ marginBottom: "1.8rem" }}>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", color: "#9E8A70", letterSpacing: "0.2em", marginBottom: "0.4rem" }}>
                  ASKING PRICE
                </div>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: "2rem", color: selected.badge === "Sold" ? "#777" : "#C9A84C" }}>
                  {selected.badge === "Sold" ? "SOLD" : fmt(selected.price)}
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
                {selected.badge !== "Sold" && (
                  <button
                    className="gold-btn"
                    onClick={() => { inquire(selected); setSelected(null); }}
                  >
                    INQUIRE NOW
                  </button>
                )}
                <button className="ghost-btn" onClick={() => toggleWish(selected.id)}>
                  {wish.includes(selected.id) ? "♥ SAVED" : "♡ SAVE"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: "1px solid #2A2010",
          padding: "2.5rem 2rem",
          marginTop: "5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.82rem", letterSpacing: "0.34em", color: "#C9A84C" }}>MAISON ART & LUXURY</div>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", color: "#5A4A34", marginTop: "0.3rem" }}>Paris · Milan · New York</div>
        </div>
        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", color: "#5A4A34", letterSpacing: "0.08em" }}>
          © 2025 Maison Art & Luxury. All rights reserved.
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["Privacy", "Terms", "Cookies"].map((l) => (
            <span
              key={l}
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.72rem",
                color: "#5A4A34",
                cursor: "pointer",
                letterSpacing: "0.08em",
                transition: "color 0.25s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C9A84C")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#5A4A34")}
            >
              {l}
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
}