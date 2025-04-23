document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('nav');
    const contactForm = document.getElementById('contactForm');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const sliderDots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    let slideInterval;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-times');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
    });

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        });
    });

    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .section-title, .work-item, .about-image, .about-content, .contact-info, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    function startSlider() {
        slideInterval = setInterval(() => {
            nextSlide();
        }, 5000);
    }

    function nextSlide() {
        goToSlide(currentSlide === testimonialSlides.length - 1 ? 0 : currentSlide + 1);
    }

    function goToSlide(n) {
        testimonialSlides[currentSlide].classList.remove('active');
        sliderDots[currentSlide].classList.remove('active');
        currentSlide = n;
        testimonialSlides[currentSlide].classList.add('active');
        sliderDots[currentSlide].classList.add('active');
    }

    sliderDots.forEach(dot => {
        dot.addEventListener('click', function() {
            clearInterval(slideInterval);
            goToSlide(parseInt(this.getAttribute('data-slide')));
            startSlider();
        });
    });

    startSlider();

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    const shapes = document.querySelectorAll('.shape');
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        shapes.forEach((shape, index) => {
            const speed = index + 1;
            const xPos = x * 20 * speed;
            const yPos = y * 20 * speed;
            
            shape.style.transform = `translate(${xPos}px, ${yPos}px)`;
        });
    });
});