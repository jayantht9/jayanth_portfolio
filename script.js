// Smooth scroll for navigation
const navLinks = document.querySelectorAll('header nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Section reveal on scroll - FIXED: Sections are visible by default
const sections = document.querySelectorAll('.section');
const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
};
const sectionObserver = new IntersectionObserver(revealSection, {
    threshold: 0.15
});
sections.forEach(section => {
    // Remove the hidden class - sections should be visible by default
    section.classList.remove('hidden');
    section.classList.add('visible'); // Make all sections visible immediately
    sectionObserver.observe(section);
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
    'Software Developer',
    'Python & Java Enthusiast',
    'Spring Boot | React JS',
    'Problem Solver',
    'Open to Opportunities!'
];
let titleIndex = 0, charIndex = 0, typingForward = true;
function typeTitle() {
    if (typingForward) {
        if (charIndex < titles[titleIndex].length) {
            typingTitle.textContent += titles[titleIndex][charIndex++];
            setTimeout(typeTitle, 80);
        } else {
            typingForward = false;
            setTimeout(typeTitle, 1200);
        }
    } else {
        if (charIndex > 0) {
            typingTitle.textContent = titles[titleIndex].substring(0, --charIndex);
            setTimeout(typeTitle, 40);
        } else {
            typingForward = true;
            titleIndex = (titleIndex + 1) % titles.length;
            setTimeout(typeTitle, 400);
        }
    }
}
typeTitle();

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
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact form alert
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for reaching out! I will get back to you soon.');
        contactForm.reset();
    });
} 