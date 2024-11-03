// modal variables
var modal = document.getElementById("modal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");

// sidebar variables
var sidebar = document.getElementById("sidebar");
var openSidebarBtn = document.getElementById("openSidebarBtn");
var closeSidebarBtn = document.getElementById("closeSidebarBtn");

// mega-menu variables
var megaMenu = document.getElementById("megaMenu");
var toggleMegaMenu = document.getElementById("openMegaMenu");
// phone variables
const phoneInput = document.getElementById('phone');

// slider variables
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        setInterval(nextSlide, 5000); // Automatically go to the next slide every 5 seconds
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// When the user clicks the button, open the modal 
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// When the user clicks the button, open the sidebar 
openSidebarBtn.onclick = function() {
    sidebar.style.display = "block";
}

closeSidebarBtn.onclick = function() {
    sidebar.style.display = "none";
}

// Function to open and close the modal
function toggleModal() {
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
}

// Function to toggle the mega menu
function toggleMegaMenuDisplay() {
    if (megaMenu.style.display === "block") {
        megaMenu.style.display = "none"; // Close mega menu
    } else {
        megaMenu.style.display = "block"; // Open mega menu
    }
}

// When the user clicks anywhere outside of the sidebar, close it
window.onclick = function(event) {
    if (event.target == sidebar) {
        sidebar.style.display = "none";
    }
}

// Event listeners for modal
if (openModalBtn) {
    openModalBtn.onclick = toggleModal; // Toggle modal on button click
}

if (closeModalBtn) {
    closeModalBtn.onclick = toggleModal; // Close modal on close button click
}

// Event listener for mega menu toggle
if (toggleMegaMenu) {
    toggleMegaMenu.onclick = toggleMegaMenuDisplay; // Toggle mega menu on button click
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === modal) {
        toggleModal(); // Use the toggle function to close the modal
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phone');
    const prefix = '+38';

    // Set the initial value with the prefix
    phoneInput.value = prefix;

    // Add an event listener to handle input
    phoneInput.addEventListener('input', (event) => {
        // If the value starts with the prefix, keep only the number
        if (phoneInput.value.startsWith(prefix)) {
            // Allow input of only the number without the prefix
            phoneInput.value = prefix + phoneInput.value.slice(prefix.length).replace(/[^0-9]/g, '');
        } else {
            // If the prefix is removed, restore it
            phoneInput.value = prefix;
        }
    });

    // Prevent removing the prefix on focus
    phoneInput.addEventListener('focus', () => {
        phoneInput.setSelectionRange(prefix.length, prefix.length);
    });
});