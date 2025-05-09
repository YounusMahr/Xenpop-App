
// -----------  hero section  ------------------

document.addEventListener('DOMContentLoaded', function() {
    // Orbit Animation
    initOrbitAnimation();
    
    // Line Chart
    initLineChart();

    // Initialize App Chart
    initAppChart();
    
    // Initialize Market Chart
    initMarketChart();
});

function initOrbitAnimation() {
    const canvas = document.getElementById('orbitCanvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    function setCanvasDimensions() {
        const container = canvas.parentElement;
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
    }
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Orbital paths and nodes
    const orbits = [
        { 
            radius: canvas.width * 0.25, 
            speed: 0.0005, 
            nodes: [{ angle: 0, color: '#3b82f6' }] 
        },
        { 
            radius: canvas.width * 0.35, 
            speed: 0.0003, 
            nodes: [{ angle: 2, color: '#f97316' }] 
        },
        {
            radius: canvas.width * 0.45,
            speed: 0.0002,
            nodes: [
                { angle: 1, color: '#3b82f6' },
                { angle: 4, color: '#f97316' }
            ]
        }
    ];
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        // Draw orbital paths
        orbits.forEach(orbit => {
            ctx.beginPath();
            ctx.arc(centerX, centerY, orbit.radius, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
            ctx.stroke();
            
            // Update and draw nodes
            orbit.nodes.forEach(node => {
                node.angle += orbit.speed;
                
                const x = centerX + Math.cos(node.angle) * orbit.radius;
                const y = centerY + Math.sin(node.angle) * orbit.radius;
                
                // Glow effect
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, 10);
                gradient.addColorStop(0, node.color);
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
                
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
                
                ctx.beginPath();
                ctx.arc(x, y, 2, 0, Math.PI * 2);
                ctx.fillStyle = '#fff';
                ctx.fill();
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

function initLineChart() {
    const canvas = document.getElementById('lineChart');
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    function setCanvasDimensions() {
        canvas.width = canvas.offsetWidth * 2;
        canvas.height = canvas.offsetHeight * 2;
        ctx.scale(2, 2); // For retina displays
    }
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Generate random data that trends upward
    function generateData() {
        const points = 20;
        const data = [];
        let value = 30;
        
        for (let i = 0; i < points; i++) {
            value += Math.random() * 10 - 3;
            value = Math.max(20, Math.min(60, value));
            data.push(value);
        }
        
        return data;
    }
    
    const data = generateData();
    
    // Draw chart
    function drawChart() {
        const width = canvas.width / 2;
        const height = canvas.height / 2;
        const padding = 5;
        const chartWidth = width - padding * 2;
        const chartHeight = height - padding * 2;
        
        // Clear canvas
        ctx.clearRect(0, 0, width, height);
        
        // Find min and max values
        const min = Math.min(...data) - 5;
        const max = Math.max(...data) + 5;
        
        // Draw line
        ctx.beginPath();
        ctx.moveTo(
            padding, 
            chartHeight - ((data[0] - min) / (max - min)) * chartHeight + padding
        );
        
        for (let i = 1; i < data.length; i++) {
            const x = (i / (data.length - 1)) * chartWidth + padding;
            const y = chartHeight - ((data[i] - min) / (max - min)) * chartHeight + padding;
            ctx.lineTo(x, y);
        }
        
        // Line style
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Fill area under the line
        ctx.lineTo(chartWidth + padding, chartHeight + padding);
        ctx.lineTo(padding, chartHeight + padding);
        ctx.closePath();
        
        // Gradient fill
        const gradient = ctx.createLinearGradient(0, 0, 0, chartHeight);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0.05)');
        ctx.fillStyle = gradient;
        ctx.fill();
    }
    
    drawChart();
    
    // Handle resize
    window.addEventListener('resize', function() {
        setCanvasDimensions();
        drawChart();
    });
}

// -----------  end hero section  ------------------

// -----------   What is Xenpop-section  ------------------
function initAppChart() {
    const ctx = document.getElementById('appChart').getContext('2d');
    
    // Generate chart data - upward trend with some fluctuations
    const labels = Array.from({length: 20}, (_, i) => i);
    const data = generateChartData(20, 30, 60, 0.7);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'XEN Price',
                data: data,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            },
            elements: {
                line: {
                    cubicInterpolationMode: 'monotone'
                }
            }
        }
    });
}

function initMarketChart() {
    const ctx = document.getElementById('marketChart').getContext('2d');
    
    // Generate chart data - upward trend with some fluctuations
    const labels = Array.from({length: 30}, (_, i) => i);
    const data = generateChartData(30, 40, 70, 0.8);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Market Value',
                data: data,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false,
                    min: 30,
                    max: 80
                }
            },
            elements: {
                line: {
                    cubicInterpolationMode: 'monotone'
                }
            }
        }
    });
}

// Helper function to generate chart data with an upward trend and fluctuations
function generateChartData(points, min, max, volatility) {
    const data = [];
    let value = min + (max - min) * 0.5;
    
    for (let i = 0; i < points; i++) {
        // Add random fluctuation
        const change = (Math.random() - 0.5) * volatility * (max - min);
        
        // Add upward trend
        const trend = (i / points) * (max - min) * 0.3;
        
        value = value + change + trend;
        
        // Keep within bounds
        value = Math.max(min, Math.min(max, value));
        
        data.push(value);
    }
    
    return data;
}

// Add 3D hover effect to app card
document.addEventListener('DOMContentLoaded', function() {
    const appCard = document.querySelector('.app-card');
    
    if (appCard) {
        appCard.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            this.style.transform = `rotate3d(1, 1, 0, ${angleX}deg) rotateY(${angleY}deg)`;
        });
        
        appCard.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate3d(1, 1, 0, 10deg)';
        });
    }
});

// -----------   end What is Xenpop-section  ------------------

// -----------   How it work - section  ------------------

document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on page load
    animateElements();
    
    // Set up video play button functionality
    setupVideoPlayButton();
    
    // Add hover effects to step items
    addStepHoverEffects();
});

function animateElements() {
    // Animate section title
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle) {
        sectionTitle.style.opacity = '0';
        sectionTitle.style.transform = 'translateY(20px)';
        sectionTitle.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            sectionTitle.style.opacity = '1';
            sectionTitle.style.transform = 'translateY(0)';
        }, 200);
    }
    
    // Animate step items with staggered delay
    const stepItems = document.querySelectorAll('.step-item');
    stepItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 300 + (index * 150));
    });
    
    // Animate video container
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
        videoContainer.style.opacity = '0';
        videoContainer.style.transform = 'translateY(20px)';
        videoContainer.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            videoContainer.style.opacity = '1';
            videoContainer.style.transform = 'translateY(0)';
        }, 500);
    }
}

function setupVideoPlayButton() {
    const playButton = document.querySelector('.play-button');
    const videoContainer = document.querySelector('.video-container');
    
    if (playButton && videoContainer) {
        playButton.addEventListener('click', function() {
            // In a real implementation, this would play the video
            // For this demo, we'll just add a pulse animation
            
            playButton.classList.add('pulse-animation');
            
            // Show an alert indicating this would play a video
            alert('Video would play here. This is a placeholder for the actual video player.');
            
            setTimeout(() => {
                playButton.classList.remove('pulse-animation');
            }, 1000);
        });
    }
}

function addStepHoverEffects() {
    const stepItems = document.querySelectorAll('.step-item');
    
    stepItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.querySelector('.step-icon').style.transform = 'scale(1.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.querySelector('.step-icon').style.transform = 'scale(1)';
        });
    });
}

// Add intersection observer for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe all major elements
    document.querySelectorAll('.section-title, .step-item, .video-container, .download-buttons').forEach(el => {
        observer.observe(el);
    });
});

// Add pulse animation style
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.2); }
            100% { transform: translate(-50%, -50%) scale(1); }
        }
        
        .pulse-animation {
            animation: pulse 0.5s ease-in-out;
        }
    `;
    document.head.appendChild(style);
});


// -----------   end How it work - section  ------------------

// -----------   FAQ's section  ------------------

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    
    // Set up FAQ accordion functionality
    setupFaqAccordion();
});

function initAnimations() {
    // Animate section title
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle) {
        sectionTitle.classList.add('fade-in');
        setTimeout(() => {
            sectionTitle.classList.add('visible');
        }, 200);
    }
    
    // Animate FAQ items with staggered delay
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
        item.classList.add('fade-in');
        setTimeout(() => {
            item.classList.add('visible');
        }, 300 + (index * 100));
    });
}

function setupFaqAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const parent = this.parentElement;
            const isActive = parent.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle active state
            if (!isActive) {
                parent.classList.add('active');
            }
            
            // Add subtle animation to the icon
            const icon = this.querySelector('i');
            icon.style.transition = 'transform 0.3s ease';
            
            // Bootstrap will handle the actual collapse functionality
        });
    });
    
    // Set up Bootstrap collapse events to sync with our custom active class
    const collapseElements = document.querySelectorAll('.faq-answer');
    collapseElements.forEach(collapse => {
        collapse.addEventListener('show.bs.collapse', function() {
            this.closest('.faq-item').classList.add('active');
        });
        
        collapse.addEventListener('hide.bs.collapse', function() {
            this.closest('.faq-item').classList.remove('active');
        });
    });
}

// Set up intersection observer for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        observer.observe(item);
    });
});

// Add hover effect to FAQ items
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateX(5px)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateX(0)';
            }
        });
    });
});

// Add keyboard accessibility
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.setAttribute('tabindex', '0');
        question.setAttribute('role', 'button');
        question.setAttribute('aria-expanded', question.parentElement.classList.contains('active') ? 'true' : 'false');
        
        question.addEventListener('keydown', function(e) {
            // Enter or Space key
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Update aria-expanded attribute when state changes
        const collapseId = question.getAttribute('data-bs-target').substring(1);
        const collapseElement = document.getElementById(collapseId);
        
        if (collapseElement) {
            collapseElement.addEventListener('show.bs.collapse', function() {
                question.setAttribute('aria-expanded', 'true');
            });
            
            collapseElement.addEventListener('hide.bs.collapse', function() {
                question.setAttribute('aria-expanded', 'false');
            });
        }
    });
});


// -----------   end FAQ's section  ------------------
// -----------   Footer section  ------------------

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    
    // Add hover effects
    addHoverEffects();
    
    // Set current year in copyright if needed
    updateCopyrightYear();
});

function initAnimations() {
    // Animate footer elements
    const footerElements = document.querySelectorAll('.footer-title, .footer-description, .contact-info, .footer-links, .copyright');
    
    footerElements.forEach((element, index) => {
        element.classList.add('fade-in');
        setTimeout(() => {
            element.classList.add('visible');
        }, 200 + (index * 100));
    });
}

function addHoverEffects() {
    // Add hover effect to footer links
    const footerLinks = document.querySelectorAll('.footer-link');
    
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.paddingLeft = '5px';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.paddingLeft = '0';
        });
    });
    
    // Add hover effect to social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) rotate(8deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0)';
        });
    });
}

function updateCopyrightYear() {
    // Update copyright year to current year if needed
    const copyrightElement = document.querySelector('.copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        const copyrightText = copyrightElement.textContent;
        
        // Only update if the year in the text is different from current year
        if (copyrightText.includes('2024') && currentYear !== 2024) {
            copyrightElement.textContent = copyrightText.replace('2024', currentYear);
        }
    }
}

// Set up intersection observer for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe footer elements
    document.querySelectorAll('.footer-title, .footer-description, .contact-info, .footer-links, .copyright').forEach(el => {
        observer.observe(el);
    });
});

// Add smooth scroll to top functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create scroll to top button
    const scrollTopButton = document.createElement('button');
    scrollTopButton.innerHTML = '<i class="bi bi-arrow-up"></i>';
    scrollTopButton.className = 'scroll-top-btn';
    scrollTopButton.style.position = 'fixed';
    scrollTopButton.style.bottom = '20px';
    scrollTopButton.style.right = '20px';
    scrollTopButton.style.display = 'none';
    scrollTopButton.style.width = '40px';
    scrollTopButton.style.height = '40px';
    scrollTopButton.style.borderRadius = '50%';
    scrollTopButton.style.backgroundColor = '#3b82f6';
    scrollTopButton.style.color = 'white';
    scrollTopButton.style.border = 'none';
    scrollTopButton.style.cursor = 'pointer';
    scrollTopButton.style.zIndex = '999';
    scrollTopButton.style.opacity = '0.8';
    scrollTopButton.style.transition = 'all 0.3s ease';
    
    document.body.appendChild(scrollTopButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });
    
    // Scroll to top when button is clicked
    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add hover effect
    scrollTopButton.addEventListener('mouseenter', function() {
        this.style.opacity = '1';
        this.style.transform = 'translateY(-5px)';
    });
    
    scrollTopButton.addEventListener('mouseleave', function() {
        this.style.opacity = '0.8';
        this.style.transform = 'translateY(0)';
    });
});


// -----------   end Footer section  ------------------

// -----------   Contact us form  ------------------

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    
    // Set up form validation and submission
    setupFormHandling();
    
    // Add hover effects
    addHoverEffects();
});

function initAnimations() {
    // Animate contact info elements
    const infoElements = document.querySelectorAll('.contact-title, .contact-subtitle, .info-item, .social-section');
    
    infoElements.forEach((element, index) => {
        element.classList.add('fade-in');
        setTimeout(() => {
            element.classList.add('visible');
        }, 200 + (index * 150));
    });
    
    // Animate form card
    const formCard = document.querySelector('.contact-form-card');
    if (formCard) {
        formCard.classList.add('fade-in');
        setTimeout(() => {
            formCard.classList.add('visible');
        }, 400);
    }
}

function setupFormHandling() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            if (validateForm()) {
                // Show loading state
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalBtnText = submitBtn.innerHTML;
                
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
                
                // Simulate form submission
                setTimeout(() => {
                    // Reset button
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                    
                    // Show success message
                    showFormMessage('success', 'Your message has been sent successfully!');
                    
                    // Reset form
                    contactForm.reset();
                }, 1500);
            }
        });
    }
}

function validateForm() {
    const fullName = document.getElementById('fullName');
    const phoneNumber = document.getElementById('phoneNumber');
    const emailAddress = document.getElementById('emailAddress');
    const message = document.getElementById('message');
    let isValid = true;
    
    // Reset previous error states
    [fullName, phoneNumber, emailAddress, message].forEach(field => {
        field.classList.remove('is-invalid');
    });
    
    // Validate full name
    if (fullName.value.trim() === '') {
        fullName.classList.add('is-invalid');
        isValid = false;
    }
    
    // Validate phone number
    if (phoneNumber.value.trim() === '' || !/^\d{7,}$/.test(phoneNumber.value.trim())) {
        phoneNumber.classList.add('is-invalid');
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailAddress.value.trim() === '' || !emailRegex.test(emailAddress.value.trim())) {
        emailAddress.classList.add('is-invalid');
        isValid = false;
    }
    
    // Validate message
    if (message.value.trim() === '') {
        message.classList.add('is-invalid');
        isValid = false;
    }
    
    return isValid;
}

function showFormMessage(type, text) {
    // Remove any existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `alert alert-${type === 'success' ? 'success' : 'danger'} mt-3 form-message`;
    messageElement.textContent = text;
    
    // Add to form
    const form = document.getElementById('contactForm');
    form.appendChild(messageElement);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        messageElement.remove();
    }, 5000);
}

function addHoverEffects() {
    // Add hover effect to info items
    const infoItems = document.querySelectorAll('.info-item');
    
    infoItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.info-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
                icon.style.backgroundColor = 'rgba(59, 130, 246, 0.2)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.info-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
                icon.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
            }
        });
    });
    
    // Add hover effect to form inputs
    const formInputs = document.querySelectorAll('.form-control');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Add intersection observer for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe all major elements
    document.querySelectorAll('.contact-title, .contact-subtitle, .info-item, .social-section, .contact-form-card').forEach(el => {
        observer.observe(el);
    });
});

// Add subtle background animation to form card
document.addEventListener('DOMContentLoaded', function() {
    const formCard = document.querySelector('.contact-form-card');
    
    if (formCard) {
        formCard.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Update the radial gradient position
            this.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(59, 130, 246, 0.1), #071428 70%)`;
        });
        
        formCard.addEventListener('mouseleave', function() {
            // Reset to original gradient
            this.style.background = 'linear-gradient(145deg, #0f2d5e, #071428)';
        });
    }
});