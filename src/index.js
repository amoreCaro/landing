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

// When the user clicks the button, open the modal 
openSidebarBtn.onclick = function() {
    sidebar.style.display = "block";
}

closeSidebarBtn.onclick = function() {
    sidebar.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        sidebar.style.display = "none";
    }
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



const phoneInput = document.getElementById('phone');

phoneInput.value = '+38';

phoneInput.addEventListener('input', (e) => {
    // Если пользователь удаляет префикс, восстановить его
    if (!e.target.value.startsWith('+38')) {
        e.target.value = '+38' + e.target.value.replace(/^\+38/, '');
    }
});

phoneInput.addEventListener('focus', (e) => {
    // Если пользователь фокусируется на поле, удалите префикс для редактирования
    if (e.target.value === '+38') {
        e.target.value = '';
    }
});

phoneInput.addEventListener('blur', (e) => {
    // При потере фокуса, если поле пустое, вернуть префикс
    if (!e.target.value) {
        e.target.value = '+38';
    }
});