// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Add interactive effects to gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click effect to CTA button
document.querySelector('.cta-button').addEventListener('click', function() {
    // Scroll to gallery section
    document.querySelector('#gallery').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    
    // Add a fun animation
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.gallery-item, .about-section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Create floating jelly bean animation
function createFloatingBeans() {
    const colors = ['#ff6b6b', '#74b9ff', '#55efc4', '#fdcb6e', '#fd79a8', '#a29bfe'];
    
    for (let i = 0; i < 6; i++) {
        const bean = document.createElement('div');
        bean.style.cssText = `
            position: fixed;
            width: 12px;
            height: 20px;
            background: ${colors[i]};
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.3;
            animation: float ${5 + Math.random() * 3}s infinite ease-in-out;
        `;
        
        bean.style.left = Math.random() * 100 + 'vw';
        bean.style.top = Math.random() * 100 + 'vh';
        bean.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(bean);
    }
}

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
    }
`;
document.head.appendChild(style);

// Initialize floating beans
createFloatingBeans();

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Initial body opacity
document.body.style.opacity = '0';