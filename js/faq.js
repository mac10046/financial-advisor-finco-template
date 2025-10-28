// Nav
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("mobileNavToggle");
  const nav = document.getElementById("navbarSupportedContent");

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    document.body.classList.toggle("nav-open");
  });
});

// FAQ's
const faqButtons = document.querySelectorAll('.accordion-button');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Reset all toggle icons to +
    document.querySelectorAll('.faq-toggle').forEach(icon => icon.innerHTML = '&#43;');

    // If this button is expanding, set icon to −
    const icon = button.querySelector('.faq-toggle');
    const isCollapsed = button.classList.contains('collapsed');
    if (!isCollapsed) {
      icon.innerHTML = '&#8722;';
    }
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

animateUp("#faq-content");
animateUp(".accordion-item");
animateUp("#mail-cta");
animateUp(".footer-col");
