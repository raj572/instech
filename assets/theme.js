document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = document.getElementById('theme-icon');
    let currentTheme = localStorage.getItem('theme') || 'light-mode'; // Default to light mode

    // Apply the saved theme
    document.body.classList.add(currentTheme);
    updateIcon(currentTheme);
    updateNavigationColor(currentTheme);

    themeToggleBtn.addEventListener('click', () => {
        // Remove current theme
        document.body.classList.remove(currentTheme);

        // Toggle between themes
        if (currentTheme === 'light-mode') {
            currentTheme = 'dark-mode';
        } else if (currentTheme === 'dark-mode') {
            currentTheme = 'theme-yellow'; // Example of a color theme
        } else if (currentTheme === 'theme-yellow') {
            currentTheme = 'theme-green'; // Another color theme
        } else {
            currentTheme = 'light-mode'; // Default back to light mode
        }

        // Apply the new theme
        document.body.classList.add(currentTheme);
        updateIcon(currentTheme);
        updateNavigationColor(currentTheme);
        localStorage.setItem('theme', currentTheme); // Save theme preference
    });

    function updateIcon(theme) {
        switch (theme) {
            case 'light-mode':
                themeIcon.textContent = '🌙'; // Moon icon for dark mode
                break;
            case 'dark-mode':
                themeIcon.textContent = '🌞'; // Sun icon for light mode
                break;
            case 'theme-yellow':
                themeIcon.textContent = '🟡'; // Yellow circle for color theme
                    break;
            case 'theme-bottle-green':
                themeIcon.textContent = '💚'; // Green heart for bottle green theme
                        break;
                    
                    
            default:
                themeIcon.textContent = '🌙'; // Default icon
                break;
        }
    }

    function updateNavigationColor(theme) {
        const navLinks = document.querySelectorAll('nav .nav-links a');
        navLinks.forEach(link => {
            switch (theme) {
                case 'light-mode':
                    link.style.color = 'rgb(12, 107, 99)'; // Default color for light mode
                    break;
                case 'dark-mode':
                    link.style.color = '#17d6f0'; // Color for dark mode
                    break;
                case 'theme-yellow':
                    link.style.color = '#0000ff'; // Blue color for blue theme
                    break;
                case 'theme-green':
                    link.style.color = '#00ff00'; // Green color for green theme
                    break;
                default:
                    link.style.color = 'rgb(12, 107, 99)'; // Default color
                    break;
            }
        });
    }
});
