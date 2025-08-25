particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60,  /* fewer particles for elegance */
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": ["#d63384", "#ff6fb5", "#ffb3c6", "#c77dff"] }, /* floral colors */
    "shape": {
      "type": "image",
      "image": {
        "src": "images/petal.png", // add your floral png in /images
        "width": 30,
        "height": 30
      },
      "stroke": { "width": 0, "color": "#000" },
      "polygon": { "nb_sides": 5 }
    },
    "opacity": {
      "value": 0.6,
      "random": true
    },
    "size": {
      "value": 20,
      "random": true
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "repulse": { "distance": 100, "duration": 0.4 },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});

        // Add smooth scrolling and interactive animations
        document.addEventListener('DOMContentLoaded', function() {
            // Animate sections on scroll
            const sections = document.querySelectorAll('.section');
            const options = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, options);

            sections.forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(30px)';
                section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(section);
            });

            // Add hover effects to skill categories
            const skillCategories = document.querySelectorAll('.skill-category');
            skillCategories.forEach(category => {
                category.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px) scale(1.02)';
                });
                
                category.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });

            // Smooth scroll for CTA button
            document.querySelector('.cta-button').addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector('.contact-info').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (lightbox && lightboxImg) {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
  } else {
    console.error("Lightbox elements not found in the DOM!");
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.style.display = "none";
  }
}

