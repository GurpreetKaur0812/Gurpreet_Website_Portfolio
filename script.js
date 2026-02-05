// ========================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(255, 126, 179, 0.15)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// ========================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const navHeight = navbar.offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        link.style.fontWeight = '';
        
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--color-primary)';
            link.style.fontWeight = '600';
        }
    });
});

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll(
    '.timeline-item, .project-card, .skill-category, .education-card, ' +
    '.leadership-card, .hobby-card, .youtube-card, .case-study-card, .contact-card'
);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// SKILL PROGRESS BARS ANIMATION
// ========================================
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
            
            skillObserver.unobserve(bar);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ========================================
// CASE STUDY PROGRESS BARS ANIMATION
// ========================================
const progressBars = document.querySelectorAll('.progress-bar-fill');

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 200);
            
            progressObserver.unobserve(bar);
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// ========================================
// SCROLL TO TOP ON PAGE LOAD
// ========================================
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ========================================
// DYNAMIC YEAR IN FOOTER (Optional)
// ========================================
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-content p');
if (footerYear) {
    footerYear.innerHTML = footerYear.innerHTML.replace('2026', currentYear);
}

// ========================================
// PARALLAX EFFECT FOR BACKGROUND ORBS
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.orb');
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.05;
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ========================================
// CARD TILT EFFECT (Optional Enhancement)
// ========================================
const cards = document.querySelectorAll('.project-card, .case-study-card, .leadership-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.1s ease';
    });
    
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transition = 'transform 0.3s ease';
        this.style.transform = '';
    });
});

// ========================================
// CONSOLE MESSAGE (Fun Easter Egg)
// ========================================
console.log('%c👋 Hello there!', 'color: #ff7eb3; font-size: 20px; font-weight: bold;');
console.log('%cLooking at the code? I love curious minds! 💖', 'color: #c77dff; font-size: 14px;');
console.log('%cFeel free to reach out: work.gurpreetk@gmail.com', 'color: #7c6bff; font-size: 12px;');

// ========================================
// LOADING ANIMATION (Optional)
// ========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// PRINT FUNCTIONALITY (Optional Enhancement)
// ========================================
function handlePrint() {
    window.print();
}

// Add keyboard shortcut for print (Ctrl/Cmd + P is default, but we can enhance)
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        handlePrint();
    }
});

// ========================================
// SCROLL PROGRESS INDICATOR (Optional)
// ========================================
function updateScrollProgress() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    // You can add a progress bar element in HTML and update it here
    // For example: progressBar.style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// ========================================
// RESPONSIVE NAVIGATION TOGGLE (for mobile)
// ========================================
// Note: Current navigation works well on mobile, but you can add a hamburger menu here if needed

// ========================================
// FORM VALIDATION (if you add a contact form later)
// ========================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ========================================
// ACCESSIBILITY ENHANCEMENTS
// ========================================
// Skip to main content functionality
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && !e.shiftKey && document.activeElement === document.body) {
        const mainContent = document.querySelector('#home');
        if (mainContent) {
            mainContent.focus();
        }
    }
});

// ========================================
// LAZY LOADING FOR IMAGES (when you add real images)
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
});

// ========================================
// THEME SWITCHER (Light/Dark Mode - Optional)
// ========================================
// You can add this functionality later if needed
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Load saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

// ========================================
// COPY TO CLIPBOARD FUNCTIONALITY
// ========================================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // You can show a toast notification here
        console.log('Copied to clipboard:', text);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// ========================================
// SMOOTH REVEAL ON SCROLL
// ========================================
const revealElements = document.querySelectorAll('.about-text p, .highlight-card, .cert-card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ========================================
// Login Modal Functionality
// ========================================

// Initialize the User Pool
const poolData = {
    UserPoolId: awsConfig.cognito.userPoolId,
    ClientId: awsConfig.cognito.userPoolWebClientId
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

function handleSignUp() {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passInput').value;
    const firstName = document.getElementById('nameInput').value;

    // Cognito uses 'given_name' for First Name
    const attributeList = [
        new AmazonCognitoIdentity.CognitoUserAttribute({ Name: 'given_name', Value: firstName }),
        new AmazonCognitoIdentity.CognitoUserAttribute({ Name: 'email', Value: email })
    ];

    userPool.signUp(email, password, attributeList, null, (err, result) => {
        if (err) {
            alert(err.message || JSON.stringify(err));
            return;
        }
        alert("Sign up successful! Please check your email for a verification code.");
        // Optional: Show a field to enter the verification code here
    });
}

// Function to switch between Login and Sign Up UI
function toggleMode() {
    const title = document.getElementById('modalTitle');
    const nameField = document.getElementById('nameField');
    const mainBtn = document.getElementById('mainBtn');

    if (title.innerText === "Sign Up") {
        title.innerText = "Login";
        nameField.style.display = "none";
        mainBtn.innerText = "Sign In";
        mainBtn.onclick = handleLogin; // Use your existing handleLogin function
    } else {
        title.innerText = "Sign Up";
        nameField.style.display = "block";
        mainBtn.innerText = "Sign Up";
        mainBtn.onclick = handleSignUp;
    }
}

// Use debounced scroll for performance
const debouncedScrollProgress = debounce(updateScrollProgress, 10);
window.addEventListener('scroll', debouncedScrollProgress);
