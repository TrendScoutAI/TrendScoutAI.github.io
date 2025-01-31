document.addEventListener('DOMContentLoaded', (event) => {
    // Simple scroll to section functionality
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Placeholder form submission - in real use, this would handle form data
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your interest! We\'ll be in touch soon.');
    });
});