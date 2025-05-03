// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle mobile menu
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
    
    // Track navigation history for back button support
    let historyStack = [];
    
    window.addEventListener('popstate', function(event) {
        if (historyStack.length > 0) {
            const lastPage = historyStack.pop();
            // Handle navigation to last page
            console.log('Navigating back to:', lastPage);
        }
    });
    
    // Add current page to history when links are clicked
    document.querySelectorAll('a[href^="#"], a[href^="/"], a[href^="http"]').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    historyStack.push(window.location.href);
                    window.history.pushState(null, '', this.getAttribute('href'));
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (!this.getAttribute('href').startsWith('http') || 
                      this.getAttribute('href').includes(window.location.hostname)) {
                historyStack.push(window.location.href);
            }
        });
    });
});