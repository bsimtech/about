// Toggle functionality for FAQs, service details, etc.
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all toggle elements
    const toggleElements = document.querySelectorAll('[data-toggle]');
    
    toggleElements.forEach(element => {
        const targetId = element.getAttribute('data-toggle');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            // Set initial state
            targetElement.style.display = 'none';
            element.classList.add('toggle-closed');
            
            // Add click event
            element.addEventListener('click', function() {
                if (targetElement.style.display === 'none') {
                    targetElement.style.display = 'block';
                    this.classList.remove('toggle-closed');
                    this.classList.add('toggle-open');
                } else {
                    targetElement.style.display = 'none';
                    this.classList.remove('toggle-open');
                    this.classList.add('toggle-closed');
                }
            });
        }
    });
    
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const accordionContent = this.nextElementSibling;
            
            // Close all other accordion items
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                    item.querySelector('.accordion-content').style.maxHeight = null;
                }
            });
            
            // Toggle current item
            accordionItem.classList.toggle('active');
            
            if (accordionItem.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });
});