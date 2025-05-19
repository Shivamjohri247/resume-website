// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const links = document.querySelectorAll('a');
const buttons = document.querySelectorAll('button');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.8)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
});

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.borderColor = 'transparent';
        cursor.style.backgroundColor = 'var(--primary-color)';
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.borderColor = 'var(--primary-color)';
        cursor.style.backgroundColor = 'var(--primary-color)';
    });
});

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.borderColor = 'transparent';
        cursor.style.backgroundColor = 'white';
    });
    
    button.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.borderColor = 'var(--primary-color)';
        cursor.style.backgroundColor = 'var(--primary-color)';
    });
});

// Header Scroll Effect
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Reveal Elements on Scroll
const revealElements = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    
    // Reveal Text Elements
    const revealTexts = document.querySelectorAll('.reveal-text');
    revealTexts.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
    
    // Reveal Image Elements
    const revealImages = document.querySelectorAll('.reveal-image');
    revealImages.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
    
    // Reveal Card Elements
    const revealCards = document.querySelectorAll('.reveal-card');
    revealCards.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

// Initial reveal on page load
window.addEventListener('load', () => {
    setTimeout(revealElements, 300);
});

// Reveal elements on scroll
window.addEventListener('scroll', revealElements);

// Dynamic Background Elements
const moveBackgroundElements = () => {
    const elements = document.querySelectorAll('.element');
    
    elements.forEach(element => {
        const speed = Math.random() * 0.01;
        const x = (window.innerWidth - element.offsetWidth) * Math.random();
        const y = (window.innerHeight - element.offsetHeight) * Math.random();
        
        element.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
};

// Move background elements on mouse move
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => {
        const speed = element.classList.contains('element-1') ? 20 :
                     element.classList.contains('element-2') ? -20 :
                     element.classList.contains('element-3') ? 15 :
                     element.classList.contains('element-4') ? -15 : 10;
        
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        element.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Initialize background elements
moveBackgroundElements();

// Mobile Menu Toggle
const mobileMenuToggle = () => {
    const nav = document.querySelector('nav ul');
    const menuButton = document.createElement('button');
    menuButton.classList.add('mobile-menu-toggle');
    menuButton.innerHTML = '<span></span><span></span><span></span>';
    
    document.querySelector('header .container').appendChild(menuButton);
    
    menuButton.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuButton.classList.toggle('active');
    });
};

// Initialize mobile menu if screen width is less than 768px
if (window.innerWidth < 768) {
    mobileMenuToggle();
}

// Resize event listener for mobile menu
window.addEventListener('resize', () => {
    if (window.innerWidth < 768 && !document.querySelector('.mobile-menu-toggle')) {
        mobileMenuToggle();
    }
});

// Preloader
const preloader = () => {
    const preloaderElement = document.createElement('div');
    preloaderElement.classList.add('preloader');
    preloaderElement.innerHTML = `
        <div class="preloader-content">
            <div class="logo">YN</div>
            <div class="loading-bar">
                <div class="loading-progress"></div>
            </div>
        </div>
    `;
    
    document.body.appendChild(preloaderElement);
    document.body.style.overflow = 'hidden';
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloaderElement.classList.add('loaded');
            document.body.style.overflow = '';
            
            setTimeout(() => {
                preloaderElement.remove();
            }, 1000);
        }, 1000);
    });
};

// Initialize preloader
preloader();
