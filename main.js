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
            <div class="logo">SJ</div>
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

// Data-driven content loader
const loadProfileData = async () => {
	try {
		const response = await fetch('data/profile.json', { cache: 'no-store' });
		if (!response.ok) return;
		const data = await response.json();

		// Document title
		if (data?.meta?.title) {
			document.title = data.meta.title;
		}

		// Hero section
		const heroTitle = document.querySelector('.hero h1');
		const heroSubtitle = document.querySelector('.hero p');
		const resumeLink = document.querySelector('.download-button');
		if (data?.hero?.title && heroTitle) heroTitle.textContent = data.hero.title;
		if (data?.hero?.subtitle && heroSubtitle) heroSubtitle.textContent = data.hero.subtitle;
		if (data?.hero?.resumeUrl && resumeLink) {
			resumeLink.setAttribute('href', data.hero.resumeUrl);
		}

		// About / Introduction
		const introParagraph = document.querySelector('.introduction .intro-content p');
		if (data?.about?.intro && introParagraph) {
			introParagraph.textContent = data.about.intro;
		}

		// Skills
		if (Array.isArray(data?.skills?.categories)) {
			const skillCards = document.querySelectorAll('.skills-grid .skill-card');
			data.skills.categories.forEach((category, index) => {
				const card = skillCards[index];
				if (!card) return;
				const titleEl = card.querySelector('h3');
				const descEl = card.querySelector('p');
				const listEl = card.querySelector('ul');
				if (category.title && titleEl) titleEl.textContent = category.title;
				if (category.description && descEl) descEl.textContent = category.description;
				if (Array.isArray(category.technologies) && listEl) {
					listEl.innerHTML = category.technologies.map(t => `<li>${t}</li>`).join('');
				}
			});
		}

		// Experience
		if (Array.isArray(data?.experience)) {
			const workGrid = document.querySelector('.work-grid');
			if (workGrid) {
				workGrid.innerHTML = data.experience.map((job, idx) => {
					const delayClass = idx === 1 ? ' delay-1' : idx === 2 ? ' delay-2' : '';
					const highlights = Array.isArray(job.highlights) ? job.highlights.map(h => `<li>${h}</li>`).join('') : '';
					const imageSrc = job.image || 'assets/project-1.svg';
					return `
						<div class="work-item reveal-card${delayClass}">
							<div class="work-image">
								<img src="${imageSrc}" alt="${job.company || ''}">
							</div>
							<h3>${job.company || ''}</h3>
							<p>${job.role || ''}</p>
							<p class="work-period">${job.period || ''}</p>
							<ul class="work-highlights">${highlights}</ul>
						</div>
					`;
				}).join('');
			}
		}

		// Education & Certifications (Notes)
		const notesGrid = document.querySelector('.notes-grid');
		if (notesGrid && (Array.isArray(data?.education) || Array.isArray(data?.certifications))) {
			const eduHtml = (data.education || []).map((e, idx) => {
				const delayClass = idx === 1 ? ' delay-1' : idx === 2 ? ' delay-2' : '';
				return `
					<div class="note-item reveal-card${delayClass}">
						<h3>${e.degree || ''}</h3>
						<p>${e.institution || ''}${e.period ? ` (${e.period})` : ''}</p>
						${e.meta ? `<p>${e.meta}</p>` : ''}
					</div>
				`;
			}).join('');
			const certHtml = (data.certifications || []).map((c, idx) => {
				const delayClass = idx === 1 ? ' delay-1' : idx === 2 ? ' delay-2' : '';
				return `
					<div class="note-item reveal-card${delayClass}">
						<h3>${c.name || ''}</h3>
						<p>${c.issuer || ''}${c.validity ? ` • ${c.validity}` : ''}</p>
						${c.link ? `<a href="${c.link}" target="_blank" rel="noopener" class="read-more">View Certificate</a>` : ''}
					</div>
				`;
			}).join('');
			notesGrid.innerHTML = eduHtml + certHtml;
		}

		// Contact & Socials
		if (data?.contact?.email) {
			const contactBtn = document.querySelector('.contact-button');
			if (contactBtn) {
				contactBtn.setAttribute('href', `mailto:${data.contact.email}`);
			}
			const emailP = Array.from(document.querySelectorAll('.contact-info p')).find(p => p.textContent.includes('@'));
			if (emailP) {
				emailP.innerHTML = `<span>✉️</span> ${data.contact.email}`;
			}
		}
		if (data?.contact?.phone) {
			const phoneP = Array.from(document.querySelectorAll('.contact-info p')).find(p => p.textContent.includes('+') || p.textContent.includes('📞'));
			if (phoneP) {
				phoneP.innerHTML = `<span>📞</span> ${data.contact.phone}`;
			}
		}
		if (data?.social) {
			const linkedinLink = document.querySelector('a[aria-label="LinkedIn"]');
			const githubLink = document.querySelector('a[aria-label="GitHub"]');
			const linkedinCta = document.querySelector('.button-secondary[aria-label="LinkedIn"]');
			if (data.social.linkedin && linkedinLink) linkedinLink.setAttribute('href', data.social.linkedin);
			if (data.social.github && githubLink) githubLink.setAttribute('href', data.social.github);
			if (data.social.linkedin && linkedinCta) linkedinCta.setAttribute('href', data.social.linkedin);
		}
	} catch (err) {
		// Fail silently; keep static content
	}
};

// Load profile data on DOMContentLoaded
document.addEventListener('DOMContentLoaded', loadProfileData);

// Theme toggle and persistence
const applyTheme = (theme) => {
	const html = document.documentElement;
	html.setAttribute('data-theme', theme);
	try { localStorage.setItem('theme', theme); } catch (_) {}
};

const initTheme = () => {
	let theme = 'light';
	try {
		const stored = localStorage.getItem('theme');
		if (stored) theme = stored;
		else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) theme = 'dark';
	} catch (_) {}
	applyTheme(theme);
	const toggle = document.getElementById('theme-toggle');
	if (toggle) {
		toggle.addEventListener('click', () => {
			const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
			applyTheme(next);
		});
	}
};

document.addEventListener('DOMContentLoaded', initTheme);

// Active nav highlighting on scroll
const initActiveNav = () => {
    const sections = ['about', 'work', 'notes', 'contact'];
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const link = document.querySelector(`nav a[href="#${id}"]`);
            if (!link) return;
            if (entry.isIntersecting) {
                document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
                link.classList.add('active');
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });

    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });
};

document.addEventListener('DOMContentLoaded', initActiveNav);
