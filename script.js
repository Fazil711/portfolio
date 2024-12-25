// Smooth scrolling for navigation links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example of handling form submission (you'll need a backend to process the form data)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values (you can use these to send data to your server)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here, you would typically send the data to a server using an API
    // For example, using fetch():
    /*
    fetch('/your-api-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    */

    // For now, just log the form data
    console.log('Form Data:', { name, email, message });

    // Reset the form
    contactForm.reset();
});