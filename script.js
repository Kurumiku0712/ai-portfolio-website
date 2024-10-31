// JavaScript for Sidebar Toggle
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('close-sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('translate-x-full');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.add('translate-x-full');
});

// JavaScript for Navigation Links
const navLinks = document.querySelectorAll('.sidebar nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        // Add 'active' class to clicked link
        link.classList.add('active');
    });
});
