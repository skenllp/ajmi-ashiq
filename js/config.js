/**
 * ============================================================
 *  NIKKAH CONFIGURATION — AJMI NAZAR & MUHAMMED ASHIQ
 *  Edit this file to update all Nikkah details across the site
 * ============================================================
 */
window.WEDDING_CONFIG = {

  /* ── SEO & METADATA ─────────────────────────────────────── */
  seo: {
    title:             'Ajmi Nazar & Muhammed Ashiq | Nikkah Invitation',
    description:       'With the blessings of Allah, join us in celebrating the Nikkah of Ajmi Nazar & Muhammed Ashiq — Sunday, 27 September 2027 at Central Jum\'a Masjid Hall, Kalampoor, Muvattupuzha.',
    ogTitle:           'Ajmi Nazar & Muhammed Ashiq | Nikkah Invitation',
    ogDescription:     'You are cordially invited to the Nikkah ceremony of Ajmi Nazar & Muhammed Ashiq — 27 September 2027.',
    ogImage:           'og-image.jpg',
    canonicalUrl:      'https://ajmi-ashiq.vercel.app/',
    themeColor:        '#C8A96A',
  },

  /* ── COUPLE ─────────────────────────────────────────────── */
  groom: {
    firstName:         'Ashiq',
    fullName:          'Muhammed Ashiq',
    role:              'The Groom',
    parentLabel:       'Beloved Son of',
    parents: [
      { name: 'Mr. Muhammed Ali',    prefix: '' },
      { name: 'Mrs. Nazeema Ali',    prefix: '&' },
    ],
  },

  bride: {
    firstName:         'Ajmi',
    fullName:          'Ajmi Nazar',
    role:              'The Bride',
    parentLabel:       'Beloved Daughter of',
    parents: [
      { name: 'Mr. Nazar P.K',          prefix: '' },
      { name: 'Mrs. Shereefa Nazar',    prefix: '&' },
    ],
  },

  /* ── HOSTING FAMILY ─────────────────────────────────────── */
  host: {
    familyName:        'THE FAMILIES',
    hostName:          'Mr. Nazar P.K & Mrs. Shereefa Nazar',
    hostTitle:         'solicit your esteemed presence with your family',
    inviteIntro:       'on the occasion of the Nikkah ceremony of our beloved',
    navLogo:           'A & M',
  },

  /* ── DATES ───────────────────────────────────────────────── */
  dates: {
    displayRange:      '27 September 2027',
    displayDot:        '27 · 09 · 2027',
  },

  /* ── COUNTDOWN ───────────────────────────────────────────── */
  countdown: {
    nikkah: {
      label:   'Nikkah Ceremony',
      target:  '2027-09-27T11:00:00',
    },
  },

  /* ── EVENTS ──────────────────────────────────────────────── */
  events: [
    {
      id:        'nikkah',
      type:      'Sacred Ceremony',
      title:     'Nikkah',
      icon:      'fas fa-mosque',
      dayName:   'Sunday',
      date:      '27 September 2027',
      time:      '11:00 AM',
      venue: {
        name:    "CENTRAL JUM'A MASJID HALL",
        address: 'Kalampoor, Muvattupuzha',
      },
      mapsUrl:   "https://www.google.com/maps/search/?api=1&query=Central+Jum%27a+Masjid+Hall%2C+Kalampoor%2C+Muvattupuzha",
      mapsLabel: 'Open Google Maps',
    },
  ],

  /* ── MUSIC ───────────────────────────────────────────────── */
  music: {
    src:    'assets/music.mp3',
    volume: 0.45,
  },

  /* ── FOOTER ──────────────────────────────────────────────── */
  footer: {
    message:     'We look forward to celebrating this blessed day with you.',
    tagline:     'Best Compliments from Dear and Near Ones',
  },

  /* ── ADMIN (Wishes Wall moderation) ─────────────────────────
     Visit the site with ?admin=1 added to the URL, e.g.:
       https://your-site.com/?admin=1
     You'll be asked for this password once per browser session.
     CHANGE THIS to something only you know before sharing the link. */
  admin: {
    password: 'AjmiMuhammed2027',
  },

};
