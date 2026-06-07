/* ═══════════════════════════════════════════════════════
   🎀  EDIT YOUR CONTENT BELOW  🎀
═══════════════════════════════════════════════════════ */

const CONFIG = {

  // 1. Your sister's name
  sisterName: "Divine",

  // 2. The four letters from family.
  // Edit the "message" text — write what you actually feel.
  // You can use line breaks with \n
  letters: [
    {
      from: "Dad",
      message: "Happy birthday to you, Divine,\n\nYou are the one who first taught me the joy of parental love.\n\nWatching you grow from the tiny baby I held in my arms into the faithful, kind, and brilliant woman you are today has been one of the greatest privileges of my life. Indeed, you were the beginning of so many blessings in my life.\n\nToday, I thank God for your life, your faith, and your beautiful heart. May the Lord open doors of opportunity for you this year, protect your steps, and fill your heart with His perfect peace.\n\nLastly, as your father and your pastor, my prayer for you today comes from Numbers 6:24-26.\n\nI am incredibly proud to be your dad.\n\nMay God bless you.",
      signature: "— Love, Dad ♡"
    },
    {
      from: "Mum",
      message: "Happy 27th Birthday to my beautiful Daughter!!!\n\nTwenty-seven years ago, you came into this world and filled our lives with a love beyond words. Watching you grow into the remarkable woman you are today has been one of the greatest privileges and joys of my life.\n\nYou are kind, strong, intelligent, and compassionate, and I am so proud of the person you have become. Your determination inspires me, your laughter brightens every room, and your caring heart touches everyone fortunate enough to know you.\n\nAs you celebrate this special birthday, I hope you embrace every opportunity, chase every dream, and never doubt your worth. May this year bring you Happiness that fills your heart, Success that rewards your efforts, and Love that surrounds you every day.\n\nRemember that no matter how old you become, you will always be my precious daughter and one of life's greatest blessings. I am endlessly grateful for you and proud of everything you are.\n\nWishing you a wonderful 27th birthday and a year filled with beautiful memories, exciting adventures, and all the happiness you deserve.\n\nWith all my love, always.",
      signature: "— Mum xxx"
    },
    {
      from: "Joseph",
      message: "Divine, my sister, you are truly a blessing in my life, and I am so grateful for you. No matter what I am going through, you are always there to support and help me whenever I need it. When I struggle to find the right words or say something myself, you are often the one who speaks for me and stands by my side.\n\nThank you for your kindness, your encouragement, and the love you show to those around you. I appreciate all the things you do, even the things that may go unnoticed.\n\nOn your birthday, I pray that God continues to guide you, protect you, and bless you with even more wisdom, understanding, knowledge, and strength. May He open new doors for you, help you achieve your goals, and fill your life with joy, peace, and happiness.\n\nHappy Birthday, Divine! I hope you have an amazing day and a wonderful year ahead. You deserve nothing but the best.",
      signature: "— Joseph the Don"
    },
    {
      from: "John",
      message: "Sup Divine,\n\nI hope you’re well. I hope you enjoy this present. It’s a bit different than usual gifts and it just came about simply because I wanted to be intentional about encouraging you on your birthday.\n\nI could have gotten you food, maybe a spa day (which was discussed with myself and Joseph) and there are many other things but i wanted to give you something intentional, I wanted to give you something that would last.\n\nSo here is this. You are amazing, you are funny, you are special, you are annoying but ultimately, you are my sister. God appointed you to be my sister and I couldn’t have asked for a better one. I know I don’t say it a lot but I truly do love you and I always think about how I’m willing to protect you always if there ever needs to be! \n\nReally grateful for you and I hope you have a great and wonderful day or week as I know women love their birthday week celebration not just a day!!",
      signature: "— The Best Brother!!!"
    },
  ],

  // 3. Photos and videos for the carousel.
  // Mix them however you like — they play in random order.
  // For videos use { type: "video", src: "your-video.mp4" }
  // For photos use { type: "image", src: "your-photo.jpg" }
  // Add position: "top" / "bottom" / "center" / "left" / "right" to nudge cropping.
  // Examples: position: "top center"  |  position: "50% 20%"
  mediaItems: [
    { type: "image", src: "photos/graduation.JPG" },
    { type: "image", src: "photos/in-holiday.JPG" },
    { type: "image", src: "photos/justDivine.jpg", position: "top 90%" },
    { type: "image", src: "photos/mumdaddivine.JPG", position: "top 80%" },
    { type: "image", src: "photos/nigeria.JPG" },
    { type: "image", src: "photos/siblings.JPG", position: "top 120%" },
    { type: "image", src: "photos/withjoseph.JPG", position: "top center" },
    { type: "image", src: "photos/withMum.JPG", position: "top 75%" },
    { type: "image", src: "photos/younger.JPG" },
    { type: "image", src: "photos/divine-joseph.jpg" },
    { type: "image", src: "photos/youngerDivJo.jpg" },
    { type: "image", src: "photos/divRCCG.jpeg", position: "top center" },
    { type: "video", src: "videos/dancewithJoseph.MP4" },
    { type: "video", src: "videos/holidaywithMum.MP4" },
    { type: "video", src: "videos/inLeicester.MP4" },
    { type: "video", src: "videos/JoDiv.MP4" },
    { type: "video", src: "videos/grandma.MP4" },
    { type: "video", src: "videos/danceBattle.mp4" },
  ],

  // 4. Carousel timing (milliseconds)
  slideDuration: 3500,
  videoMaxDuration: 15000,

  // 5. Background music for the carousel (optional)
  // Drop your mp3/ogg file into the project folder and set the path below.
  // Set to null to disable music entirely.
  music: {
    src: "music/bigGod.mp3",
    volume: 0.4,        // 0 (silent) to 1 (full)
  }
};

/* ═══════════════════════════════════════════════════════
   ⚙️  SITE LOGIC — no need to edit below
═══════════════════════════════════════════════════════ */

document.getElementById('name-display').textContent = `to our dearest ${CONFIG.sisterName}`;

// ─── Card overlay (focus mode) ────────────────────────
const cardOverlay = document.getElementById('card-overlay');
const cardFocusFrom = document.getElementById('card-focus-from');
const cardFocusMessage = document.getElementById('card-focus-message');
const cardFocusSignature = document.getElementById('card-focus-signature');

function openCard(letter) {
  cardFocusFrom.textContent = `From ${letter.from} — to ${CONFIG.sisterName}`;
  cardFocusMessage.innerHTML = letter.message.replace(/\n/g, '<br>');
  cardFocusSignature.textContent = letter.signature;
  cardFocusMessage.scrollTop = 0;
  cardOverlay.classList.add('active');
}

function closeCard() {
  cardOverlay.classList.remove('active');
}

cardOverlay.addEventListener('click', (e) => {
  if (e.target === cardOverlay) closeCard();
});

// ─── Envelopes ────────────────────────────────────────
const lettersGrid = document.getElementById('letters-grid');
CONFIG.letters.forEach((letter) => {
  const env = document.createElement('div');
  env.className = 'envelope';
  env.innerHTML = `
    <div class="envelope-front">
      <span class="tap-hint">open me ↓</span>
      <div class="seal"></div>
      <span class="from-label">From</span>
      <span class="name-label">${letter.from}</span>
    </div>
  `;
  env.addEventListener('click', () => openCard(letter));
  lettersGrid.appendChild(env);
});

// ─── Page navigation ──────────────────────────────────
const pages = {
  home:     document.getElementById('page-home'),
  letters:  document.getElementById('page-letters'),
  carousel: document.getElementById('page-carousel'),
};
const pageOrder = ['home', 'letters', 'carousel'];
let currentPage = 'home';

function goTo(name) {
  pages[currentPage].classList.remove('active');
  setTimeout(() => {
    pages[name].classList.add('active');
    currentPage = name;
    if (name === 'carousel') startCarousel();
    else stopCarousel();
    window.scrollTo(0, 0);
  }, 400);
}

function goBack() {
  const idx = pageOrder.indexOf(currentPage);
  if (idx > 0) goTo(pageOrder[idx - 1]);
}

// ─── Carousel ─────────────────────────────────────────
const frame = document.getElementById('carousel-frame');
let carouselIdx = -1;
let carouselTimer = null;
let carouselStarted = false;
let isPlaying = true;
let mediaOrder = [];
let slideStartTime = null;
let currentSlideDuration = 0;
let pauseTime = null;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildSlide(item) {
  const slide = document.createElement('div');
  slide.className = 'carousel-slide';
  if (item.type === 'video') {
    const v = document.createElement('video');
    v.src = item.src;
    v.muted = true;
    v.playsInline = true;
    v.autoplay = true;
    if (item.position) v.style.objectPosition = item.position;
    slide.appendChild(v);
  } else {
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = '';
    if (item.position) img.style.objectPosition = item.position;
    slide.appendChild(img);
  }
  return slide;
}

function nextSlide() {
  if (mediaOrder.length === 0) mediaOrder = shuffle(CONFIG.mediaItems);
  carouselIdx = (carouselIdx + 1) % mediaOrder.length;
  showSlide(mediaOrder[carouselIdx]);
}

function prevSlide() {
  if (mediaOrder.length === 0) mediaOrder = shuffle(CONFIG.mediaItems);
  carouselIdx = (carouselIdx - 1 + mediaOrder.length) % mediaOrder.length;
  showSlide(mediaOrder[carouselIdx]);
}

function showSlide(item) {
  const existing = frame.querySelectorAll('.carousel-slide');
  const slide = buildSlide(item);
  frame.appendChild(slide);

  requestAnimationFrame(() => {
    setTimeout(() => slide.classList.add('active'), 30);
    existing.forEach(s => {
      s.classList.remove('active');
      setTimeout(() => s.remove(), 1300);
    });
  });

  const duration = item.type === 'video'
    ? CONFIG.videoMaxDuration
    : CONFIG.slideDuration;
  currentSlideDuration = duration;
  slideStartTime = Date.now();
  pauseTime = null;

  if (isPlaying) {
    clearTimeout(carouselTimer);
    carouselTimer = setTimeout(nextSlide, duration);
  }
}

function startCarousel() {
  if (carouselStarted) return;
  carouselStarted = true;
  mediaOrder = shuffle(CONFIG.mediaItems);
  nextSlide();
  playMusic();
}

function stopCarousel() {
  clearTimeout(carouselTimer);
  pauseMusic();
}

// ─── Music ────────────────────────────────────────────
let audio = null;
let musicMuted = false;

if (CONFIG.music) {
  audio = new Audio(CONFIG.music.src);
  audio.loop = true;
  audio.volume = CONFIG.music.volume ?? 0.4;
}

function playMusic() {
  if (!audio || musicMuted) return;
  audio.play().catch(() => {});
}

function pauseMusic() {
  if (!audio) return;
  audio.pause();
}

function toggleMusic() {
  if (!audio) return;
  musicMuted = !musicMuted;
  const btn = document.getElementById('musicBtn');
  if (musicMuted) {
    audio.pause();
    btn.classList.add('muted');
  } else {
    audio.play().catch(() => {});
    btn.classList.remove('muted');
  }
}

function togglePlay() {
  isPlaying = !isPlaying;
  const btn = document.getElementById('playPauseBtn');
  btn.textContent = isPlaying ? '⏸' : '▶';
  const activeSlide = frame.querySelector('.carousel-slide.active');
  if (isPlaying) {
    if (activeSlide) activeSlide.classList.remove('paused');
    const elapsed = pauseTime !== null ? (pauseTime - slideStartTime) : 0;
    const remaining = Math.max(500, currentSlideDuration - elapsed);
    slideStartTime = Date.now() - elapsed;
    pauseTime = null;
    carouselTimer = setTimeout(nextSlide, remaining);
  } else {
    clearTimeout(carouselTimer);
    pauseTime = Date.now();
    if (activeSlide) activeSlide.classList.add('paused');
  }
}

// Keyboard nav
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (cardOverlay.classList.contains('active')) closeCard();
    else goBack();
  }
  if (currentPage === 'carousel') {
    if (e.key === 'ArrowRight') nextSlide();
    else if (e.key === 'ArrowLeft') prevSlide();
    else if (e.key === ' ') { e.preventDefault(); togglePlay(); }
  }
});
