document.addEventListener("DOMContentLoaded", () => {
  // Navbar toggle
  const toggleBtn = document.getElementById("mobileNavToggle");
  const nav = document.getElementById("navbarSupportedContent");

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    document.body.classList.toggle("nav-open");
  });

  // Swiper Pagination function (Accept swiper instance)
  function updatePagination(swiperInstance) {
    const current = swiperInstance.realIndex + 1;
    const total = swiperInstance.slides.length;
    const paginationEl = document.getElementById('swiperCustomPagination'); // Optional
    if (paginationEl) {
      paginationEl.textContent = `${current} of ${total}`;
    }
  }

  // Swiper Initialization
  const swiper = new Swiper('#heroSwiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    on: {
      init: function () {
        updatePagination(this);
      },
      slideChange: function () {
        updatePagination(this);
      }
    }
  });

  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);

  const animateUp = (targets) => {
    gsap.utils.toArray(targets).forEach((el) => {
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
            markers: false, // set true for debugging
          }
        });
    });
  };

  // Animate Elements
  animateUp("#why-us-heading");
  animateUp(".why-us-card");
  animateUp("#our-team-heading");
  animateUp(".team-card");
  animateUp(".cta-section");
  animateUp(".footer-col");
  animateUp(".copyright");

  ScrollTrigger.refresh(); // Ensure everything is calculated
});
