export const COLORS = {
  espresso: "#1a0f08",
  roast:    "#2d1a0e",
  caramel:  "#c8874a",
  gold:     "#e8a84c",
  cream:    "#f5ead8",
};

export const NAV_LINKS = [
  { label: "About",   href: "#about"   },
  { label: "Menu",    href: "#menu"    },
  { label: "Gallery", href: "#gallery" },
  { label: "Why Us",  href: "#why-us"  },
  { label: "Contact", href: "#contact" },
];

export const MENU_CATEGORIES = [
  { key: "all",     label: "All"            },
  { key: "chilly",  label: "Chilly"         },
  { key: "chinese", label: "Chinese"        },
  { key: "dosa",    label: "Dosa & South"   },
  { key: "snacks",  label: "Snacks"         },
  { key: "rice",    label: "Rice & Biryani" },
];

export const MENU_ITEMS = [
  // Chilly
  { id: 1,  category: "chilly",  name: "Paneer Chilly",      price: 100, emoji: "🌶️", desc: "Crispy paneer tossed with peppers & bold indo-chinese sauce." },
  { id: 2,  category: "chilly",  name: "Corn Chilly",        price: 50,  emoji: "🌽", desc: "Sweet corn kernels in a fiery tangy chilly sauce." },
  { id: 3,  category: "chilly",  name: "Potato Chilly",      price: 50,  emoji: "🥔", desc: "Crispy potato bites in spicy indo-chinese style." },
  { id: 4,  category: "chilly",  name: "Chana Chilly",       price: 50,  emoji: "🌿", desc: "Spicy chickpeas stir-fried with onion & capsicum." },
  // Chinese
  { id: 5,  category: "chinese", name: "Chowmein",           price: 50,  emoji: "🍜", desc: "Classic wok-tossed noodles with fresh veggies & soy." },
  { id: 6,  category: "chinese", name: "Hakka Noodle",       price: 50,  emoji: "🥢", desc: "Smoky hakka-style noodles — a crowd favourite every time." },
  { id: 7,  category: "chinese", name: "Chinese Bhel",       price: 50,  emoji: "🥗", desc: "Crispy noodles, tangy sauce — Mumbai street magic." },
  { id: 8,  category: "chinese", name: "Veg Manchurian",     price: 50,  emoji: "🥣", desc: "Soft veg balls in rich manchurian gravy. Always a hit." },
  // Dosa & South Indian
  { id: 9,  category: "dosa",    name: "Paneer Cheese Dosa", price: 90,  emoji: "🧀", desc: "Crispy dosa loaded with paneer filling and melted cheese." },
  { id: 10, category: "dosa",    name: "Paneer Dosa",        price: 80,  emoji: "🫓", desc: "Golden crispy dosa stuffed generously with spiced paneer." },
  { id: 11, category: "dosa",    name: "Cheese Dosa",        price: 70,  emoji: "🥞", desc: "Thin crispy dosa oozing with melted cheese." },
  { id: 12, category: "dosa",    name: "Masala Dosa",        price: 50,  emoji: "🌯", desc: "Golden crispy dosa with spiced potato filling. A classic." },
  { id: 13, category: "dosa",    name: "Onion Dosa",         price: 40,  emoji: "🧅", desc: "Crispy dosa topped with caramelised onions." },
  { id: 14, category: "dosa",    name: "Idli",               price: 30,  emoji: "🤍", desc: "Soft steamed rice cakes served with chutney & sambar." },
  { id: 15, category: "dosa",    name: "Fried Idli",         price: 50,  emoji: "🍳", desc: "Crispy-edged fried idli tossed in spices." },
  { id: 16, category: "dosa",    name: "Sambhar Vada",       price: 40,  emoji: "🍩", desc: "Crispy vada dunked in hearty sambhar — pure comfort." },
  { id: 17, category: "dosa",    name: "Utpam",              price: 60,  emoji: "🫔", desc: "Thick, soft rice pancake topped with onion & tomato." },
  // Snacks
  { id: 18, category: "snacks",  name: "Cheese Ball",        price: 80,  emoji: "🧆", desc: "Oozy cheese stuffed balls — golden fried & irresistible." },
  { id: 19, category: "snacks",  name: "French Fries",       price: 50,  emoji: "🍟", desc: "Crispy salted fries with dips — the universal comfort snack." },
  { id: 20, category: "snacks",  name: "Potato Twister",     price: 50,  emoji: "🌀", desc: "Spiral twisted potatoes, seasoned to perfection." },
  { id: 21, category: "snacks",  name: "Sandwich",           price: 50,  emoji: "🥪", desc: "Grilled veg sandwich packed with fresh fillings." },
  { id: 22, category: "snacks",  name: "Paneer Patties",     price: 40,  emoji: "🫓", desc: "Flaky pastry shells stuffed with spiced paneer." },
  { id: 23, category: "snacks",  name: "Aloo Patties",       price: 35,  emoji: "🥐", desc: "Golden aloo-stuffed patties — quick, filling, delicious." },
  { id: 24, category: "snacks",  name: "Patties Pizza",      price: 70,  emoji: "🍕", desc: "Patties base with pizza toppings — a desi-fusion treat." },
  { id: 25, category: "snacks",  name: "Maggie",             price: 50,  emoji: "🍝", desc: "The OG student fuel — made our special desi way." },
  // Rice & Biryani
  { id: 26, category: "rice",    name: "Veg Biryani",        price: 80,  emoji: "🍛", desc: "Aromatic basmati with whole spices and seasonal veggies." },
  { id: 27, category: "rice",    name: "Fried Rice",         price: 50,  emoji: "🍚", desc: "Wok-fried rice with veggies, soy sauce & pepper." },
  { id: 28, category: "rice",    name: "Veg Pulao",          price: 50,  emoji: "🌾", desc: "Light fragrant pulao — simple, satisfying, and filling." },
];

export const GALLERY_IMAGES = [
  { id: 1, src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=700&q=80", label: "Fresh Daily"  },
  { id: 2, src: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80", label: "Chowmein"    },
  { id: 3, src: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80", label: "Masala Dosa" },
  { id: 4, src: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&q=80", label: "Veg Biryani" },
  { id: 5, src: "https://images.unsplash.com/photo-1571167366136-b57e3ed4d2ef?w=600&q=80", label: "Idli & Sambar"},
];

export const FEATURES = [
  { emoji: "🌿", title: "Fresh Ingredients", desc: "We cook with fresh produce every single day — no shortcuts, ever." },
  { emoji: "💸", title: "Student Prices",    desc: "Great food starting at just ₹30. Full meals under ₹100."         },
  { emoji: "⚡", title: "Fast Service",      desc: "No long waits. We know you have lectures to get back to."         },
  { emoji: "🏠", title: "Cozy Vibes",        desc: "A warm, chill space to eat, study, or just hang with friends."   },
];

export const CONTACT_CARDS = [
  { emoji: "📞", label: "Call Us",   value: "+91 98765 43210",     sub: "Tap to call now",  href: "tel:+919876543210"  },
  { emoji: "💬", label: "WhatsApp",  value: "Chat with Us",        sub: "Quick replies",    href: "https://wa.me/919876543210?text=Hi%20Student%20Café!" },
  { emoji: "📸", label: "Instagram", value: "@studentcafe_bhopal", sub: "Follow our page",  href: "https://instagram.com/studentcafe_bhopal" },
];

export const LOCATION_INFO = [
  { emoji: "📍", title: "Address",       lines: ["Near [College Name], [Area Name],", "Bhopal, Madhya Pradesh"] },
  { emoji: "🕐", title: "Opening Hours", lines: ["Mon–Sat: 8:00 AM – 10:00 PM", "Sunday: 9:00 AM – 9:00 PM"]  },
  { emoji: "📞", title: "Phone",         lines: ["+91 98765 43210"], link: "tel:+919876543210" },
];

export const MODAL_TABS = [
  { label: "Main Menu",    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=80" },
  { label: "South Indian", src: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=1200&q=80" },
  { label: "Dosa Menu",    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&q=80" },
];
