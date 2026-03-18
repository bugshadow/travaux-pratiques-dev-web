/**
 * =====================================
 * TP3 — Site Entreprise "GPM"
 * Fichier JavaScript Principal
 * =====================================
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Bienvenue sur le site de GPM !");

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.card, .project-card, .team-grid figure');
    animatedElements.forEach(el => {
        el.classList.add('fade-in'); 
        scrollObserver.observe(el);
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); 

            if (this.checkValidity()) {
                const btn = this.querySelector('button[type="submit"]');
                const originalText = btn.textContent;
                btn.textContent = "✔ Envoi en cours...";
                btn.style.backgroundColor = "#2f855a"; 

                setTimeout(() => {
                    alert('Merci ! Votre message a bien été envoyé à GPM. Nous vous recontacterons sous 24h.');
                    this.reset(); 
                    btn.textContent = originalText;
                    btn.style.backgroundColor = ""; 
                }, 1500);
            } else {
                this.reportValidity();
            }
        });
    }

    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.02)';
                header.style.background = 'var(--surface)';
                header.style.backdropFilter = 'none';
            }
        });
    }
});
