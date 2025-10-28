// Video
function loadVideo(container) {
  container.innerHTML = `
    <div class="ratio ratio-16x9">
      <iframe src="https://www.youtube.com/embed/NEzqHbtGa9U?si=egCVE5QaeRJO33nI&autoplay=1"
              title="YouTube video" allowfullscreen allow="autoplay" style="border-radius: 10px;"></iframe>
    </div>
  `;
}

// Custom Slide Code
function setEqualHeightToSlides() {
  const slides = document.querySelectorAll('.testimonial-card');
  let maxHeight = 0;

  slides.forEach(slide => {
    slide.style.height = 'auto'; // Reset first
    maxHeight = Math.max(maxHeight, slide.offsetHeight);
  });

  slides.forEach(slide => {
    slide.style.height = `${maxHeight}px`;
  });
}
setTimeout(setEqualHeightToSlides, 500);

// Testimonial Swiper
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
});
document.querySelector('.swiper-button-prev').innerHTML = '<i class="bi bi-arrow-left-short"></i>';
document.querySelector('.swiper-button-next').innerHTML = '<i class="bi bi-arrow-right-short"></i>';

// FAQ Accordion Icon Toggle
const faqButtons = document.querySelectorAll('.accordion-button');
faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.faq-toggle').forEach(icon => icon.innerHTML = '&#43;');
    const icon = button.querySelector('.faq-toggle');
    const isCollapsed = button.classList.contains('collapsed');
    if (!isCollapsed) icon.innerHTML = '&#8722;';
  });
});

// Nav Toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("mobileNavToggle");
  const nav = document.getElementById("navbarSupportedContent");
  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    document.body.classList.toggle("nav-open");
  });
});

// GSAP Animations (infinite scroll in/out trigger)
gsap.registerPlugin(ScrollTrigger);

const animateUp = (targets) => {
  gsap.utils.toArray(targets).forEach((el, i) => {
    gsap.fromTo(el,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
          markers: false,
        }
      });
  });
};


animateUp([".hero-left"]);
animateUp(".hero-img");
animateUp([".hero-right"]);
animateUp("#about-content");
animateUp(".about-card");
animateUp("#service-content");
animateUp(".service-card");
animateUp("#quality-content");
animateUp(".video-thumbnail");
animateUp(".testimonial-heading");
animateUp(".testimonial-card");
animateUp("#pricing-content");
animateUp(".pricing-card");
animateUp([".faq-heading"]);
animateUp(".accordion-item");
animateUp(".appointment-form");
animateUp([".cta-section"]);
animateUp(".footer-col");
animateUp(".copyright");
