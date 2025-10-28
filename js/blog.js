// Nav
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("mobileNavToggle");
  const nav = document.getElementById("navbarSupportedContent");

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    document.body.classList.toggle("nav-open");
  });
});

// Blog
const blogData = [
  { img: './assets/images/blog-img1.png', time: '5 mins', title: 'Lorem Ipsum is simply dummy text dummy text ?' },
  { img: './assets/images/blog-img2.png', time: '3 mins', title: 'Lorem Ipsum is simply dummy text dummy text ?' },
  { img: './assets/images/blog-img3.png', time: '12 mins', title: 'Lorem Ipsum is simply dummy text dummy text ?' },
  { img: './assets/images/blog-img4.png', time: '5 mins', title: 'Lorem Ipsum is simply dummy text dummy text ?' },
  { img: './assets/images/blog-img5.png', time: '5 mins', title: 'Lorem Ipsum is simply dummy text dummy text ?' },
  { img: './assets/images/blog-img6.png', time: '5 mins', title: 'Lorem Ipsum is simply dummy text dummy text ?' },
  { img: './assets/images/blog-img1.png', time: '12 mins', title: 'Lorem Ipsum is simply dummy text dummy text ?' },
  { img: './assets/images/blog-img2.png', time: '5 mins', title: 'Lorem Ipsum is simply dummy text dummy text ?' },
  { img: './assets/images/blog-img3.png', time: '5 mins', title: 'Lorem Ipsum is simply dummy text dummy text ?' },
  { img: './assets/images/blog-img4.png', time: '5 mins', title: 'Lorem Ipsum is simply dummy text dummy text ?' },
  { img: './assets/images/blog-img5.png', time: '5 mins', title: 'Lorem Ipsum is simply dummy text dummy text ?' },
  { img: './assets/images/blog-img6.png', time: '12 mins', title: 'Lorem Ipsum is simply dummy text dummy text ?' },
];

// Pagination
const blogsPerPage = 8;
let currentPage = 1;

const blogContainer = document.getElementById('blogContainer');
const paginationLabel = document.getElementById('paginationLabel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const totalPages = Math.ceil(blogData.length / blogsPerPage);

function renderBlogs() {
  blogContainer.style.opacity = '0'; // Start fade out

  setTimeout(() => {
    blogContainer.innerHTML = '';

    const start = (currentPage - 1) * blogsPerPage;
    const end = start + blogsPerPage;
    const currentBlogs = blogData.slice(start, end);

    currentBlogs.forEach((blog, index) => {
      const activeClass = (index === 1 && currentPage === 1) ? 'border ' : '';
      blogContainer.innerHTML += `
        <div class="col">
          <div class="d-flex align-items-center rounded-4 p-3 bg-white h-100 ${activeClass}">
            <img src="${blog.img}" class="rounded-3 me-3 flex-shrink-0" style="width: 120px; height: 120px; object-fit: cover;" alt="blog">
            <div>
              <p class="text-muted small mb-2">Time to read : ${blog.time}</p>
              <h6 class="fw-bold m-0">${blog.title}</h6>
            </div>
          </div>
        </div>`;
    });

    // Update pagination label
    paginationLabel.textContent = `${currentPage}/${totalPages}`;

    // Reset and style buttons
    prevBtn.className = 'paginate-btn';
    nextBtn.className = 'paginate-btn';
    prevBtn.querySelector('i').className = 'bi bi-arrow-left-short';
    nextBtn.querySelector('i').className = 'bi bi-arrow-right-short';

    if (totalPages === 1 || currentPage === 1) {
      prevBtn.classList.add('btn-muted');
      nextBtn.classList.add('btn-focused');
    } else if (currentPage === totalPages) {
      prevBtn.classList.add('btn-focused');
      nextBtn.classList.add('btn-muted');
    } else {
      prevBtn.classList.add('btn-focused');
      nextBtn.classList.add('btn-focused');
    }

    // Disable logic (optional)
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    // Fade back in
    blogContainer.style.opacity = '1';

  }, 150);
}

// Button click listeners
prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderBlogs();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderBlogs();
  }
});

// First render
renderBlogs();

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

animateUp("#blog-content");
animateUp("#search-section");
animateUp("#featured-content");
animateUp("#blogContainer");
animateUp(".cta-section");
animateUp(".footer-col");
animateUp(".copyright");
