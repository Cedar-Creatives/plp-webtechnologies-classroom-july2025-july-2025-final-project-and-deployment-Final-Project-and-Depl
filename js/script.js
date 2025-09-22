// Mobile nav toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (menuToggle) {
  menuToggle.addEventListener("click", () =>
    navLinks.classList.toggle("active")
  );
}

// Testimonial slider
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
if (slides.length) {
  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 3000);
}

// Project filter
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const category = btn.dataset.category;
    projectCards.forEach((card) => {
      card.style.display =
        category === "all" || card.dataset.category === category
          ? "block"
          : "none";
    });
  });
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
document.addEventListener("click", (e) => {
  const card = e.target.closest(".project-card");
  if (card) {
    const img = card.querySelector("img");
    lightboxImg.src = img.src || "";
    lightboxCaption.textContent = card.querySelector("h4")?.textContent || "";
    lightbox.classList.add("active");
  }
});
if (lightboxClose)
  lightboxClose.addEventListener("click", () =>
    lightbox.classList.remove("active")
  );
if (lightbox)
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.classList.remove("active");
  });

// Contact form validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const formMessage = document.getElementById("formMessage");

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      formMessage.textContent = "Please fill in all fields.";
      return;
    }

    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(email.value)) {
      formMessage.textContent = "Please enter a valid email.";
      return;
    }

    formMessage.textContent = "Sending...";
    setTimeout(() => {
      formMessage.textContent = "Thanks! Your message has been received.";
      contactForm.reset();
    }, 900);
  });
}
