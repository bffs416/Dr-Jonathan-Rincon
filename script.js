document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const contactForm = document.getElementById('contactForm');
    const header = document.getElementById('header');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }

            navMenu.classList.remove('active');
            navToggle.classList.remove('active');

            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('section[id]').forEach(section => {
        sectionObserver.observe(section);
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    });

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    const statNumbers = document.querySelectorAll('.stat-number[data-target]');

    const animateCounters = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000;
            const startTime = performance.now();

            const update = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(eased * target);

                stat.textContent = current.toLocaleString();

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    stat.textContent = target.toLocaleString();
                }
            };

            requestAnimationFrame(update);
        });
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsContainer = document.querySelector('.stats');
    if (statsContainer) {
        statsObserver.observe(statsContainer);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const treatment = document.getElementById('treatment').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !treatment) {
                showFormMessage('Por favor, completa los campos obligatorios.', 'error');
                return;
            }

            const formData = {
                name: name,
                email: email,
                phone: phone,
                treatment: treatment,
                message: message,
                date: new Date().toISOString()
            };

            console.log('Formulario enviado:', formData);

            showFormMessage('¡Gracias por tu consulta! Nos pondremos en contacto contigo pronto.', 'success');
            this.reset();
        });
    }

    function showFormMessage(msg, type) {
        const existing = document.querySelector('.form-message');
        if (existing) existing.remove();

        const div = document.createElement('div');
        div.className = `form-message form-message-${type}`;
        div.textContent = msg;
        div.style.cssText = `
            padding: 14px 20px;
            border-radius: 10px;
            font-size: 0.95rem;
            font-weight: 500;
            text-align: center;
            animation: fadeInUp 0.4s ease;
            ${type === 'success'
                ? 'background: rgba(16, 185, 129, 0.15); color: #6ee7b7; border: 1px solid rgba(16, 185, 129, 0.3);'
                : 'background: rgba(239, 68, 68, 0.15); color: #fca5a5; border: 1px solid rgba(239, 68, 68, 0.3);'
            }
        `;

        contactForm.appendChild(div);

        setTimeout(() => {
            div.style.opacity = '0';
            div.style.transform = 'translateY(-10px)';
            div.style.transition = 'all 0.3s ease';
            setTimeout(() => div.remove(), 300);
        }, 5000);
    }

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
});
