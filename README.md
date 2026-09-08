# Ajmi Nazar & Muhammed Ashiq — Nikkah Invitation Website

A premium, luxury Muslim Nikkah invitation website built with pure HTML5, CSS3, and Vanilla JavaScript.

## Structure

```
ajmi-muhammed-invitation/
├── index.html              # Main HTML file
├── css/
│   ├── style.css           # Main styles, variables, sections
│   ├── responsive.css      # Media queries (320px → 1440px+)
│   └── animations.css      # AOS-like scroll animations, keyframes
├── js/
│   ├── main.js             # Gate/loading screen, nav, music player
│   ├── countdown.js        # Live countdown to the Nikkah
│   └── animations.js       # Scroll reveal, parallax
├── assets/
│   ├── images/
│   │   └── background.png  # Decorative floral texture (gate/hero backdrop)
│   └── music.mp3
├── og-image.jpg / og-image.png  # WhatsApp / social preview image
└── README.md
```

## No Couple Photos

This couple did not supply any photographs, so every spot in the original
template that showed a couple photo (the gate, the opening section, the
parents' photo circles, and the "Our Story" photo) has been replaced with
typography, monogram panels, or Islamic-style ornamentation instead of a
placeholder image. If real photos become available later, search `index.html`
for `monogram-panel`, `parents-initial`, and `story-ornament-frame` to see
where an `<img>` could be swapped back in.

## Couple Details

- **Groom:** Muhammed Ashiq, S/o Mr. Muhammed Ali & Mrs. Nazeema Ali
  (Velichamthodi (H), Choorakode, Palakkad)
- **Bride:** Ajmi Nazar, D/o Mr. Nazar P.K & Mrs. Shereefa Nazar
  (Parappurath (H), Kalampoor, Muvattupuzha)

## Nikkah Ceremony

| Event  | Date                          | Time     | Venue                                              |
|--------|--------------------------------|----------|-----------------------------------------------------|
| Nikkah | Sunday, 27 September 2027     | 11:00 AM | Central Jum'a Masjid Hall, Kalampoor, Muvattupuzha  |

## Colors

| Token    | Value     |
|----------|-----------|
| Cream    | `#FAF6F0` |
| Rose     | `#C9385C` |
| Gold     | `#D4A017` |
| Blue     | `#3D6B99` |

## Fonts

- **Script (names):** Great Vibes
- **Serif (headings):** Playfair Display
- **Content (body):** Cormorant Garamond / Lato
- **Arabic:** Amiri

## Features

- ✅ Luxury tap-to-open gate with Bismillah + English translation
- ✅ Hero with parallax & entrance animations
- ✅ Live countdown to the Nikkah
- ✅ Bride & Groom / Family section
- ✅ Event card with a Google Maps link for the venue
- ✅ Quote section (Quran verse)
- ✅ Wishes wall (guest messages)
- ✅ Background music player with mute toggle
- ✅ Scroll-reveal animations
- ✅ Fully responsive (320px → 1440px+)
- ✅ SEO meta tags, Open Graph & Twitter Card

## Notes

- Countdown target is set in `js/config.js` under `countdown.nikkah.target`,
  and mirrored in `js/countdown.js`'s fallback default.
- The Google Maps link uses a search-query URL for "Central Jum'a Masjid Hall,
  Kalampoor, Muvattupuzha" (no exact coordinates were supplied) — swap in an
  exact share link once available, in both `index.html` and `js/config.js`.
- `og:url` / `canonical` use a placeholder domain `https://ajmi-muhammed.vercel.app/` —
  update once the site is deployed to its real address.
- No contact phone numbers were supplied, so the "Get in Touch" section was
  removed rather than shown with placeholder numbers. Add one back in
  `index.html` (search for "GET IN TOUCH SECTION") once numbers are available.
- **Firebase:** `js/firebase-config.js` previously pointed at the earlier
  couple's live Firebase project. It now uses placeholder credentials so the
  Wishes Wall can never write to their database. The site still works via a
  localStorage fallback; follow `FIREBASE_SETUP_GUIDE.md` to connect your own
  Firebase project if you want wishes to sync across visitors' devices.
