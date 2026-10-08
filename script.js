document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple interaction for the phone mockup to follow mouse slightly
    const heroVisual = document.querySelector('.hero-visual');
    const phoneMockup = document.querySelector('.phone-mockup');

    if (heroVisual && phoneMockup) {
        heroVisual.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            phoneMockup.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        heroVisual.addEventListener('mouseleave', () => {
            phoneMockup.style.transform = `rotateY(-15deg) rotateX(5deg)`;
        });
    }
});
