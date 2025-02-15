/************** Navbar Toggle **************/

// Toggle navbar and menu icon
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggle cross icon
    navbar.classList.toggle('active'); // Toggle active class on navbar
};

/************** Navbar Active Links on Scroll **************/

// Highlight active nav link based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
        }
    });

    // Toggle sticky header
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close menu on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/************** Mobile Menu Toggle **************/

document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.Animated-Radial-Menu .menu');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x'); // Toggle cross icon
        menu.classList.toggle('active'); // Toggle active class on radial menu
        navbar.classList.toggle('active'); // Toggle active class on navbar
    };
});

/************** Dark Mode Toggle **************/

// Toggle dark mode
const darkModeToggle = document.getElementById('darkmode');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('active');
    // Toggle between sun and moon icons
    darkModeToggle.classList.toggle('bx-moon');
    darkModeToggle.classList.toggle('bx-sun');
});

/************** Modal Pop-up **************/

document.addEventListener("DOMContentLoaded", function() {
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');

    // Function to open modal
    function openModal(modalId) {
        document.getElementById(modalId).style.display = 'block';
    }

    // Function to close modal
    function closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }

    box1.addEventListener("click", () => openModal('modal1'));
    box2.addEventListener("click", () => openModal('modal2'));

    // Add event listeners to close buttons
    const closeButtons = document.querySelectorAll('.services_modal-close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.parentElement.parentElement.id;
            closeModal(modalId);
        });
    });
});

/************** Scroll Reveal Animation **************/
// Scroll Reveal Animation code should be added here if needed.
