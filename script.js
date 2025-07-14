// Smooth scroll for navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('header nav a');
    console.log('Found navigation links:', navLinks.length);
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            console.log('Clicking link to:', targetId, 'Target found:', !!target);
            
            if (target) {
                // Check if smooth scrolling is supported
                if ('scrollBehavior' in document.documentElement.style) {
                    target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                } else {
                    // Fallback for older browsers
                    const targetPosition = target.offsetTop;
                    window.scrollTo(0, targetPosition);
                }
            }
        });
    });
});

// Ensure all sections are visible and scrollable
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    section.style.visibility = 'visible';
    section.style.display = 'block';
});

// Animated skill bars (to be implemented in skills section)
function animateSkillBars() {
    const bars = document.querySelectorAll('.skill-bar-inner');
    bars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
}
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// Typing effect for hero title
const typingTitle = document.getElementById('typing-title');
const titles = [
    'Full-Stack Developer',
    'Python & Java Expert',
    'Spring Boot | React JS Developer',
    'Machine Learning Enthusiast',
    'Problem Solver & Team Player',
    'Ready for New Challenges!'
];
let titleIndex = 0, charIndex = 0, typingForward = true;

function typeTitle() {
    if (typingForward) {
        if (charIndex < titles[titleIndex].length) {
            typingTitle.textContent += titles[titleIndex][charIndex++];
            setTimeout(typeTitle, 100);
        } else {
            typingForward = false;
            setTimeout(typeTitle, 2000); // Pause longer to read
        }
    } else {
        if (charIndex > 0) {
            typingTitle.textContent = titles[titleIndex].substring(0, --charIndex);
            setTimeout(typeTitle, 50);
        } else {
            typingForward = true;
            titleIndex = (titleIndex + 1) % titles.length;
            setTimeout(typeTitle, 500);
        }
    }
}

// Add cursor effect
function addCursor() {
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.style.animation = 'blink 1s infinite';
    cursor.style.color = '#ffe082';
    cursor.style.fontWeight = 'normal';
    typingTitle.appendChild(cursor);
}

// Start typing effect
setTimeout(() => {
    typeTitle();
    addCursor();
}, 1000);

// Expand/collapse for project details
const expandBtns = document.querySelectorAll('.expand-btn');
expandBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const card = this.closest('.project-card');
        card.classList.toggle('expanded');
    });
});

// Click-to-copy for email/phone
const copyElems = document.querySelectorAll('.copy');
copyElems.forEach(elem => {
    elem.addEventListener('click', function() {
        const text = this.getAttribute('data-copy');
        navigator.clipboard.writeText(text);
        this.textContent = 'Copied!';
        setTimeout(() => {
            this.textContent = text;
        }, 1200);
    });
});

// Scroll-to-top button
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });
        
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
            });
        });
    }
});

// Enhanced contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Show success message
        const button = contactForm.querySelector('button');
        const originalText = button.textContent;
        button.textContent = 'Sending...';
        button.disabled = true;
        
        setTimeout(() => {
            alert(`Thank you ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
            contactForm.reset();
            button.textContent = originalText;
            button.disabled = false;
        }, 1000);
    });
}

// Add smooth animations on scroll (non-interfering)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all sections for animation without hiding them initially
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Initialize page
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    // Ensure all sections are visible
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '1';
        section.style.visibility = 'visible';
    });
}); 