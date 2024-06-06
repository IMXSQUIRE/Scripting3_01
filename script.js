 /*
         Title: How to Make Portfolio Website Using HTML CSS and JavaScript
         Author: Ludiflex
         Date: 18 Aug 2023 
         Availability: https://www.youtube.com/watch?v=jVD9ZmWxhX8
         */
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});
document.addEventListener('DOMContentLoaded', (event) => {
    //  this creates a smooth scrolling feel when going through my portfolio.
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scrolling animation
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.5, 
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});