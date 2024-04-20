document.addEventListener('DOMContentLoaded', function () {
    const accordionBtns = document.querySelectorAll('.accordion-btn');

    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Update copyright year once DOMContentLoaded
    var currentYear = new Date().getFullYear();
    document.getElementById('copyright-year').textContent = currentYear;
});

