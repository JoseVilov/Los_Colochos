document.addEventListener("DOMContentLoaded", () => {
    const newsletterForm = document.getElementById("newsletter-form");
    const contactForm = document.getElementById("contact-form");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const email = document.getElementById("email").value;
            alert(`Gracias por suscribirte, ${email}!`);
            newsletterForm.reset();
        });
    }

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            alert(`Gracias por contactarnos, ${name}! Hemos recibido tu mensaje.`);
            contactForm.reset();
        });
    }
});
