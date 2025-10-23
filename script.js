// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Form submission handling
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const formData = new FormData(this);
        const formSuccess = document.getElementById('form-success');
        
        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                formSuccess.classList.remove('hidden');
                this.reset();
                setTimeout(() => {
                    formSuccess.classList.add('hidden');
                }, 5000);
            } else {
                throw new Error('Erreur lors de l\'envoi du formulaire');
            }
        })
        .catch(error => {
            alert('Une erreur est survenue. Veuillez réessayer plus tard.');
            console.error(error);
        });
    });
}
// Mobile menu toggle (handled in navbar component)