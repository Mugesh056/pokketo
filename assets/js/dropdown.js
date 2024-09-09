 // JavaScript for scrolling to content sections and toggling icons
 document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');
    const contentColumn = document.querySelector('.content-column');

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to the clicked item
            this.classList.add('active');

            // Get the target section ID from data-target
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            
            // Scroll to the target section
            if (targetSection) {
                contentColumn.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});