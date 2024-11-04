function setupModal(modalId, openBtnId, closeBtnId) {
    const modal = document.getElementById(modalId);
    const openModalBtn = document.getElementById(openBtnId);
    const closeModalBtn = document.getElementById(closeBtnId);

    openModalBtn.onclick = () => {
        modal.style.display = "block";
    };

    closeModalBtn.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}
setupModal("modal", "openModalBtn", "closeModalBtn");

// mega menu
function setupMegaMenu(menuId, toggleBtnId) {
    const megaMenu = document.getElementById(menuId);
    const toggleMegaMenu = document.getElementById(toggleBtnId);

    // Function to toggle the mega menu
    function toggleMegaMenuDisplay() {
        megaMenu.style.display = megaMenu.style.display === "block" ? "none" : "block";
    }

    // Event listener for the toggle button
    toggleMegaMenu.onclick = toggleMegaMenuDisplay;
}

// Initialize the mega menu with specific IDs
setupMegaMenu("megaMenu", "openMegaMenu");

//sidebar
function setupSidebar(sidebarId, openBtnId, closeBtnId) {
    const sidebar = document.getElementById(sidebarId);
    const openSidebarBtn = document.getElementById(openBtnId);
    const closeSidebarBtn = document.getElementById(closeBtnId);

    openSidebarBtn.onclick = () => {
        sidebar.style.display = "block";
    };

    closeSidebarBtn.onclick = () => {
        sidebar.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target === sidebar) {
            sidebar.style.display = "none";
        }
    };
}

// Initialize the sidebar with specific IDs
setupSidebar("sidebar", "openSidebarBtn", "closeSidebarBtn");


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

// phone variables
const phoneInput = document.getElementById('phone');

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