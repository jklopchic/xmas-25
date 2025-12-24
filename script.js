/* ==========================================
   🎄 CHRISTMAS 2025 - JAVASCRIPT 🎄
   ========================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Add some extra magic on page load
    console.log('🎄 Merry Christmas 2025! 🎄');
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // Add sparkle effect on link card hover
    document.querySelectorAll('.link-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.setProperty('--sparkle', '1');
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.setProperty('--sparkle', '0');
        });
    });
});

// Add fade-in animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

