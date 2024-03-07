document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            const content = this.querySelector('.dropdown-content');
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
            event.stopPropagation();
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        dropdowns.forEach(function(dropdown) {
            const content = dropdown.querySelector('.dropdown-content');
            if (!dropdown.contains(event.target)) {
                content.style.display = 'none';
            }
        });
    });
});
