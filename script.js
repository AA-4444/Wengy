// script.js

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach((element, index) => {
        element.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(element);
    });
});
