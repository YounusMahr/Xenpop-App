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
    
    // SVG as data URL
    const svgString = `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><g clip-path='url(#clip0_441_825)'><path d='M20.4851 20.4853C25.1714 15.799 25.1714 8.20101 20.4851 3.51472C15.7988 -1.17157 8.20087 -1.17157 3.51458 3.51472C-1.17171 8.20101 -1.17171 15.799 3.51458 20.4853C8.20087 25.1716 15.7988 25.1716 20.4851 20.4853Z' fill='url(%23paint0_linear_441_825)'/><path d='M19.7958 19.7959C24.1013 15.4903 24.1013 8.50966 19.7958 4.2041C15.4902 -0.101454 8.50953 -0.101454 4.20398 4.2041C-0.101576 8.50966 -0.101576 15.4903 4.20398 19.7959C8.50953 24.1015 15.4902 24.1015 19.7958 19.7959Z' fill='url(%23paint1_linear_441_825)'/><path opacity='0.3' d='M19.4258 19.6598C23.571 15.5146 23.571 8.79396 19.4258 4.64878C15.2807 0.503601 8.56 0.503603 4.41482 4.64878C0.269634 8.79396 0.269634 15.5146 4.41482 19.6598C8.56 23.805 15.2807 23.805 19.4258 19.6598Z' fill='#FFE482'/><path d='M19.5054 19.5055C23.6506 15.3603 23.6506 8.63967 19.5054 4.49449C15.3603 0.349306 8.63959 0.349306 4.49441 4.49449C0.349225 8.63967 0.349225 15.3603 4.49441 19.5055C8.63959 23.6507 15.3603 23.6507 19.5054 19.5055Z' fill='url(%23paint2_linear_441_825)'/><path opacity='0.4' d='M12.2464 1.6549C18.1035 1.89863 22.6539 6.84476 22.4096 12.7018C22.32 14.8506 21.5931 16.8202 20.4256 18.4448C21.7072 16.7722 22.511 14.7072 22.6054 12.4416C22.8496 6.5845 18.2992 1.6389 12.4422 1.39463C8.73389 1.23996 5.39523 3.01063 3.37976 5.8149C5.41176 3.16316 8.65496 1.50503 12.2464 1.6549Z' fill='url(%23paint3_linear_441_825)'/><path opacity='0.3' d='M17.9228 18.6728C21.3538 15.2418 21.3538 9.67908 17.9228 6.24809C14.4918 2.8171 8.92911 2.8171 5.49812 6.24809C2.06713 9.67908 2.06713 15.2418 5.49812 18.6728C8.92911 22.1038 14.4918 22.1038 17.9228 18.6728Z' fill='#2E0C00'/><path d='M18.2123 18.2124C21.6433 14.7814 21.6433 9.21863 18.2123 5.78764C14.7813 2.35665 9.21854 2.35665 5.78755 5.78764C2.35656 9.21863 2.35656 14.7814 5.78755 18.2124C9.21854 21.6433 14.7813 21.6433 18.2123 18.2124Z' fill='url(%23paint4_linear_441_825)'/><path d='M20.0965 12.3375C19.9104 16.809 16.1344 20.2831 11.6624 20.097C7.1909 19.9109 3.71676 16.1349 3.9029 11.6628C4.08903 7.19138 7.86503 3.71725 12.337 3.90338C16.8085 4.08952 20.2826 7.86605 20.0965 12.3375Z' fill='url(%23paint5_linear_441_825)'/></g><defs><linearGradient id='paint0_linear_441_825' x1='6.09899' y1='24.2773' x2='16.4803' y2='2.67726' gradientUnits='userSpaceOnUse'><stop stop-color='#FFB859'/><stop offset='0.23' stop-color='#CC5827'/><stop offset='0.67' stop-color='#FFDA6B'/><stop offset='1' stop-color='#FF9421'/></linearGradient><linearGradient id='paint1_linear_441_825' x1='4.18327' y1='21.4917' x2='19.9774' y2='2.31299' gradientUnits='userSpaceOnUse'><stop stop-color='#FFB859'/><stop offset='0.23' stop-color='#CC5827'/><stop offset='0.67' stop-color='#FFDA6B'/><stop offset='1' stop-color='#FF9421'/></linearGradient><linearGradient id='paint2_linear_441_825' x1='7.41745' y1='21.577' x2='17.2014' y2='1.12846' gradientUnits='userSpaceOnUse'><stop offset='0.26' stop-color='#B0381C'/><stop offset='1' stop-color='#FF9421'/></linearGradient><linearGradient id='paint3_linear_441_825' x1='3.37923' y1='9.91516' x2='22.6144' y2='9.91516' gradientUnits='userSpaceOnUse'><stop offset='0.26' stop-color='#B0381C'/><stop offset='1' stop-color='#FF9421'/></linearGradient><linearGradient id='paint4_linear_441_825' x1='10.4702' y1='17.6469' x2='14.2654' y2='3.63726' gradientUnits='userSpaceOnUse'><stop stop-color='#FFB859'/><stop offset='0.23' stop-color='#CC5827'/><stop offset='0.67' stop-color='#FFDA6B'/><stop offset='1' stop-color='#FF9421'/></linearGradient><linearGradient id='paint5_linear_441_825' x1='8.5013' y1='19.3119' x2='15.9712' y2='3.70018' gradientUnits='userSpaceOnUse'><stop stop-color='#FFB859'/><stop offset='0.23' stop-color='#CC5827'/><stop offset='0.67' stop-color='#FFDA6B'/><stop offset='1' stop-color='#FF9421'/></linearGradient><clipPath id='clip0_441_825'><rect width='24' height='24' fill='white'/></clipPath></defs></svg>`;
    const svgUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(svgString);
    const svgImg = new window.Image();
    svgImg.src = svgUrl;

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
                // Draw SVG at node position (centered)
                ctx.save();
                ctx.translate(x - 12, y - 12); // 12 = half of SVG size (24)
                ctx.drawImage(svgImg, 0, 0, 24, 24);
                ctx.restore();
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    // Wait for SVG image to load before animating
    svgImg.onload = animate;
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

// function addHoverEffects() {
//     // Add hover effect to footer links
//     const footerLinks = document.querySelectorAll('.footer-link');
    
//     footerLinks.forEach(link => {
//         link.addEventListener('mouseenter', function() {
//             this.style.paddingLeft = '5px';
//         });
        
//         link.addEventListener('mouseleave', function() {
//             this.style.paddingLeft = '0';
//         });
//     });
    
//     // Add hover effect to social icons
//     const socialIcons = document.querySelectorAll('.social-icon');
    
//     socialIcons.forEach(icon => {
//         icon.addEventListener('mouseenter', function() {
//             this.style.transform = 'translateY(-3px) rotate(8deg)';
//         });
        
//         icon.addEventListener('mouseleave', function() {
//             this.style.transform = 'translateY(0) rotate(0)';
//         });
//     });
// }

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
            this.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 123, 255, 0.10)`;
        });
        
        // formCard.addEventListener('mouseleave', function() {
        //     // Reset to original gradient
        //     this.style.background = 'linear-gradient(145deg, #0f2d5e, #071428)';
        // });
    }
});