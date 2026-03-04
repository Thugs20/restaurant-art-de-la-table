/* ================= MENU MOBILE ================= */
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

/* ================= HERO SLIDER DYNAMIQUE ================= */

/*
    Tu peux ajouter autant d’images que tu veux ici.
    Il suffit d’ajouter un objet dans le tableau.
*/

const slides = [
    {
        image: "images/slide1.webp",
        title: "L'art de sublimer chaque saveur",
        subtitle: "Une expérience gastronomique entre passion et excellence."
    },
    {
        image: "images/slide2.webp",
        title: "L'élégance dans chaque détail",
        subtitle: "Des créations culinaires inspirées des grandes traditions."
    },
    {
        image: "images/slide3.webp",
        title: "Un voyage culinaire unique",
        subtitle: "Saveurs d'Europe et d'Afrique réunies."
    },
    {
        image: "images/slide4.webp",
        title: "Cuisine Créative et Élégante",
        subtitle: "Découvrez des plats délicats, réinvention de recettes classiques. Chaque bouchée est une nouvelle expérience gustative à chaque visite."
    },
    {
        image: "images/slide5.webp",
        title: "Ambiance Gourmet Unique",
        subtitle: "Profitez d'une atmosphère chic et conviviale pour vos repas en tête-à-tête ou vos événements spéciaux. Réservez votre table pour une soirée inoubliable."
    },
    
];

let currentSlide = 0;
const hero = document.querySelector(".hero");
const heroTitle = document.getElementById("hero-title");
const heroSubtitle = document.getElementById("hero-subtitle");

function changeSlide() {
    currentSlide = (currentSlide + 1) % slides.length;

    hero.style.backgroundImage = `url(${slides[currentSlide].image})`;
    heroTitle.textContent = slides[currentSlide].title;
    heroSubtitle.textContent = slides[currentSlide].subtitle;
}

/* Changement automatique toutes les 5 secondes */
setInterval(changeSlide, 5000);


/* ================= LIGHTBOX ================= */

function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}


/* ================= MULTILINGUE ================= */

const translations = {
    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_menu: "Menu",
        nav_gallery: "Galerie",
        nav_reservation: "Réservation",
        hero_btn: "Réserver une table",
        about_title: "Une tradition réinventée",
        about_text: "Art de la Table célèbre l'élégance culinaire en mariant savoir-faire traditionnel et créativité contemporaine.",
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
        about_title: "A reinvented tradition",
        about_text: "Art de la Table celebrates culinary elegance by blending tradition with modern creativity.",
        menu_title: "Our Menu",
        reservation_title: "Book your table"
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        element.textContent = translations[lang][key];
    });
}


/* ================= EMAILJS ================= */

/*
    IMPORTANT :
    Remplace les valeurs ci-dessous par les tiennes
*/

(function(){
    emailjs.init("wNZ091NbVmDr9SJzH");
})();

const form = document.getElementById("reservation-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_qo15ze4", "template_bibivyc", this)
        .then(() => {
            status.innerHTML = "<p style='color: #c6a75e;'>Réservation envoyée avec succès ✅</p>";
            form.reset();
        }, (error) => {
            status.innerHTML = "<p style='color: red;'>Erreur lors de l'envoi ❌</p>";
            console.error(error);
        });
});

