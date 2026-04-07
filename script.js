/* ============================================================
   ART DE LA TABLE — JavaScript
   Projet de démonstration portfolio · Fabrice Houeto
   ============================================================ */

/* ──────────── THEME TOGGLE ──────────── */
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

/* ──────────── HEADER SCROLL ──────────── */
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ──────────── MOBILE MENU ──────────── */
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}

document.addEventListener('click', (e) => {
    const nav = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('active');
    }
});

/* ──────────── HERO SLIDER ──────────── */
const slides = [
    {
        image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1800&q=80",
        title: "L'art de sublimer chaque saveur",
        subtitle: "Une expérience gastronomique entre passion et excellence."
    },
    {
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80",
        title: "L'élégance dans chaque détail",
        subtitle: "Des créations culinaires inspirées des grandes traditions."
    },
    {
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1800&q=80",
        title: "Un voyage culinaire unique",
        subtitle: "Saveurs d'Europe et d'Afrique réunies."
    },
    {
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1800&q=80",
        title: "Cuisine Créative et Élégante",
        subtitle: "Chaque bouchée est une nouvelle expérience gustative."
    },
    {
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1800&q=80",
        title: "Ambiance Gourmet Unique",
        subtitle: "Une atmosphère chic et conviviale pour vos moments d'exception."
    }
];

let currentSlide = 0;
const heroBg = document.getElementById('heroBg');
const heroTitle = document.getElementById('hero-title');
const heroSubtitle = document.getElementById('hero-subtitle');
const dotsContainer = document.getElementById('slideDots');

// Build dots
slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

function animateTitle(text) {
    heroTitle.innerHTML = '';
    text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.animationDelay = `${i * 0.028}s`;
        heroTitle.appendChild(span);
    });
}

animateTitle(slides[0].title);

function goToSlide(index) {
    currentSlide = index;
    const slide = slides[currentSlide];

    heroBg.style.opacity = 0;
    heroBg.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        heroBg.style.backgroundImage = `url(${slide.image})`;
        heroBg.style.opacity = 1;
    }, 500);

    animateTitle(slide.title);

    heroSubtitle.style.opacity = 0;
    setTimeout(() => {
        heroSubtitle.textContent = slide.subtitle;
        heroSubtitle.style.opacity = 1;
        heroSubtitle.style.transition = 'opacity 0.5s ease';
    }, 300);

    document.querySelectorAll('.slide-dot').forEach((d, i) => {
        d.classList.toggle('active', i === currentSlide);
    });
}

setInterval(() => {
    goToSlide((currentSlide + 1) % slides.length);
}, 5500);

/* ──────────── PARALLAX HERO ──────────── */
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (heroBg && scrollY < window.innerHeight) {
        heroBg.style.transform = `scale(1.05) translateY(${scrollY * 0.25}px)`;
    }
}, { passive: true });

/* ──────────── SCROLL ANIMATIONS ──────────── */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
    observer.observe(el);
});

/* ──────────── MENU FILTERS ──────────── */
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        document.querySelectorAll('.menu-card').forEach(card => {
            if (filter === 'all' || card.dataset.cat === filter) {
                card.classList.remove('hidden');
                card.style.animation = 'none';
                setTimeout(() => { card.style.animation = ''; }, 10);
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

/* ──────────── LIGHTBOX ──────────── */
function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || 'Image agrandie';
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
});

/* ──────────── TESTIMONIALS ──────────── */
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');

function showTestimonial(index) {
    testimonialCards.forEach(c => c.classList.remove('active'));
    testimonialCards[index].classList.add('active');
    currentTestimonial = index;
}

function nextTestimonial() {
    showTestimonial((currentTestimonial + 1) % testimonialCards.length);
}

function prevTestimonial() {
    showTestimonial((currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length);
}

setInterval(nextTestimonial, 6000);

/* ──────────── MULTILINGUAL ──────────── */
const translations = {
    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_menu: "Menu",
        nav_gallery: "Galerie",
        nav_reservation: "Réservation",
        hero_btn: "Réserver une table",
        about_eyebrow: "Notre Histoire",
        about_title: "Une tradition réinventée",
        about_text: "Art de la Table célèbre l'élégance culinaire en mariant savoir-faire traditionnel et créativité contemporaine. Chaque assiette raconte un voyage, chaque bouchée, une émotion.",
        menu_eyebrow: "Nos créations",
        menu_title: "Notre Menu",
        reservation_title: "Réservez votre table"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_menu: "Menu",
        nav_gallery: "Gallery",
        nav_reservation: "Reservation",
        hero_btn: "Book a table",
        about_eyebrow: "Our Story",
        about_title: "A reinvented tradition",
        about_text: "Art de la Table celebrates culinary elegance by blending traditional know-how with contemporary creativity. Each dish tells a journey, each bite, an emotion.",
        menu_eyebrow: "Our creations",
        menu_title: "Our Menu",
        reservation_title: "Book your table"
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });
    document.getElementById('btnFR').style.color = lang === 'fr' ? 'var(--gold)' : '';
    document.getElementById('btnEN').style.color = lang === 'en' ? 'var(--gold)' : '';
}

/* ──────────── RESERVATION FORM (démo) ──────────── */
const form = document.getElementById('reservation-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    btn.textContent = 'Envoi en cours…';
    btn.disabled = true;

    // Simulation (projet démo – aucune donnée n'est envoyée)
    setTimeout(() => {
        status.innerHTML = '<p style="color: var(--gold-light); margin-top: 8px;">✓ Simulation réussie — ceci est un projet de démonstration, aucune réservation n\'est enregistrée.</p>';
        form.reset();
        btn.textContent = 'Réserver';
        btn.disabled = false;
    }, 1200);
});
