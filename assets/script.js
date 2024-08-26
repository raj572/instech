window.addEventListener('load', () => {
    document.getElementById('loading').style.display = 'none';
});

// assets/script.js

document.addEventListener('DOMContentLoaded', () => {
    const elementsToShow = document.querySelectorAll('.fade-in');

    const showElements = () => {
        elementsToShow.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', showElements);
    showElements(); // Initial check in case elements are already in view
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        menuToggle.classList.toggle('open');
    });
});


function loadContent() {
    fetch('social.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

loadContent(); // Call the function to load content


