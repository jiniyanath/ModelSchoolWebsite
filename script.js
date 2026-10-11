
/* ==========================================
   MOBILE SIDEBAR
========================================== */

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", function () {

    sidebar.classList.toggle("active");

});


/* Close Mobile Menu After Clicking Navigation */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth <= 900) {

            sidebar.classList.remove("active");

        }

    });

});


/* ==========================================
   HERO IMAGE SLIDER
========================================== */

const heroSlides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

const nextHero = document.getElementById("nextHero");
const prevHero = document.getElementById("prevHero");

let heroIndex = 0;


/* Show Slide */

function showHeroSlide(index) {

    heroSlides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    dots.forEach(function (dot) {

        dot.classList.remove("active");

    });


    heroSlides[index].classList.add("active");

    dots[index].classList.add("active");

}


/* Next Slide */

function nextHeroSlide() {

    heroIndex++;

    if (heroIndex >= heroSlides.length) {

        heroIndex = 0;

    }

    showHeroSlide(heroIndex);

}


/* Previous Slide */

function previousHeroSlide() {

    heroIndex--;

    if (heroIndex < 0) {

        heroIndex = heroSlides.length - 1;

    }

    showHeroSlide(heroIndex);

}


/* Button Events */

nextHero.addEventListener("click", nextHeroSlide);

prevHero.addEventListener("click", previousHeroSlide);


/* Dot Events */

dots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {

        heroIndex = index;

        showHeroSlide(heroIndex);

    });

});


/* Automatic Slider */

setInterval(nextHeroSlide, 5000);



/* ==========================================
   PROGRAM CAROUSEL
========================================== */

const programCarousel =
    document.getElementById("programCarousel");

const programCards =
    document.querySelectorAll(".program-card");

const programNext =
    document.getElementById("programNext");

const programPrev =
    document.getElementById("programPrev");

let programIndex = 0;


/* Get Number of Visible Cards */

function getVisibleCards() {

    if (window.innerWidth <= 650) {

        return 1;

    }

    if (window.innerWidth <= 1100) {

        return 2;

    }

    return 3;

}


/* Update Carousel */

function updateProgramCarousel() {

    const visibleCards = getVisibleCards();

    const cardWidth =
        programCards[0].offsetWidth;

    const gap = 25;

    const translate =
        programIndex * (cardWidth + gap);

    programCarousel.style.transform =
        `translateX(-${translate}px)`;

}


/* Next Program */

programNext.addEventListener("click", function () {

    const visibleCards = getVisibleCards();

    const maxIndex =
        programCards.length - visibleCards;


    if (programIndex < maxIndex) {

        programIndex++;

    } else {

        programIndex = 0;

    }


    updateProgramCarousel();

});


/* Previous Program */

programPrev.addEventListener("click", function () {

    const visibleCards = getVisibleCards();

    const maxIndex =
        programCards.length - visibleCards;


    if (programIndex > 0) {

        programIndex--;

    } else {

        programIndex = maxIndex;

    }


    updateProgramCarousel();

});


/* Reset Carousel on Resize */

window.addEventListener("resize", function () {

    programIndex = 0;

    updateProgramCarousel();

});


/* ==========================================
   LIGHTBOX GALLERY
========================================== */

const galleryItems =
    document.querySelectorAll(".gallery-item");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");


/* Open Lightbox */

galleryItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const image =
            item.querySelector("img");

        lightboxImage.src = image.src;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* Close Lightbox */

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "auto";

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


/* Close When Clicking Background */

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


/* ==========================================
   VIDEO MODAL
========================================== */

const playVideo =
    document.getElementById("playVideo");

const videoModal =
    document.getElementById("videoModal");

const videoClose =
    document.getElementById("videoClose");

const youtubeVideo =
    document.getElementById("youtubeVideo");

const videoURL =
    "https://www.youtube.com/embed/Scxs7L0vhZ4?autoplay=1";


/* Open Video */

playVideo.addEventListener("click", function () {

    youtubeVideo.src = videoURL;

    videoModal.classList.add("active");

    document.body.style.overflow = "hidden";

});


/* Close Video */

function closeVideo() {

    videoModal.classList.remove("active");

    youtubeVideo.src =
        "https://www.youtube.com/embed/Scxs7L0vhZ4";

    document.body.style.overflow = "auto";

}


videoClose.addEventListener(
    "click",
    closeVideo
);


/* Close Video on Background Click */

videoModal.addEventListener("click", function (event) {

    if (event.target === videoModal) {

        closeVideo();

    }

});


/* ==========================================
   ACTIVE NAVIGATION ON SCROLL
========================================== */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   ESCAPE KEY
========================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeLightbox();

        closeVideo();

    }

});
