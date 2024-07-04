function loadSection(sectionUrl) {
    fetch(sectionUrl)
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        })
        .catch(error => console.error('Error loading section:', error));
}

// Add event listeners to navigation links
const navLinks = document.querySelectorAll('.nav-menu a[data-section]');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const section = this.getAttribute('data-section');
        loadSection(section);
    });
});

// Initially load the home section
loadSection('home.html'); // Create a home.html with your homepage content if needed
// Initially load the home section
window.onload = () => {
    loadSection('home.html'); // Create a home.html with your homepage content if needed
};
