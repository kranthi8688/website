/* script.js */
// You can add JavaScript for interactive elements here,
// such as form submission handling, image carousels, etc.

// Example: Simple alert on form submission (for demonstration purposes)
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        alert('Your inquiry has been sent! (This is a demo)');
        // In a real scenario, you would send the form data to a server here.
    });
}
