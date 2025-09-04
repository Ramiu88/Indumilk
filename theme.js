document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to apply the saved theme on page load
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeToggleButton.textContent = 'Light Mode';
        } else {
            body.classList.remove('dark-mode');
            themeToggleButton.textContent = 'Dark Mode';
        }
    };

    // Function to toggle the theme
    const toggleTheme = () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        themeToggleButton.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    };

    // Add event listener to the button
    themeToggleButton.addEventListener('click', toggleTheme);

    // Apply the theme when the page loads
    applySavedTheme();
});