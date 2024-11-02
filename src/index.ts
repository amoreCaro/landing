import './styles/index.css'

const openSidebarBtn = document.getElementById("openSidebarBtn") as HTMLButtonElement | null;
const closeSidebarBtn = document.getElementById("closeSidebarBtn") as HTMLButtonElement | null;
const sidebar = document.getElementById("sidebar") as HTMLElement | null;

const modal = document.getElementById("modal") as HTMLDivElement | null;
const openModalBtn = document.getElementById("openModalBtn") as HTMLButtonElement | null;
const closeModalBtn = document.getElementById("closeModalBtn") as HTMLButtonElement | null;

const catalogButton = document.getElementById('catalogButton') as HTMLButtonElement;
const megaMenu = document.getElementById('megaMenu') as HTMLDivElement;

// Show the mega menu when the button is clicked
catalogButton.addEventListener('click', () => {
    // Toggle visibility of the mega menu
    if (megaMenu.style.display === 'none' || megaMenu.style.display === '') {
        megaMenu.style.display = 'block';
    } else {
        megaMenu.style.display = 'none';
    }
});

// Optional: Hide the mega menu if clicked outside of it
window.addEventListener('click', (event) => {
    if (event.target !== catalogButton && !megaMenu.contains(event.target as Node)) {
        megaMenu.style.display = 'none';
    }
});


if (openSidebarBtn && sidebar) {
    openSidebarBtn.addEventListener("click", () => {
        sidebar.style.width = "250px";
    });
}

if (closeSidebarBtn && sidebar) {
    closeSidebarBtn.addEventListener("click", () => {
        sidebar.style.width = "0";
    });
}

// Open the modal
if (openModalBtn && modal) {
    openModalBtn.onclick = () => {
        modal.style.display = "block";
    };
}

// Close the modal
if (closeModalBtn && modal) {
    closeModalBtn.onclick = () => {
        modal.style.display = "none";
    };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (modal && target === modal) {
        modal.style.display = "none";
    }
};

const phoneInput = document.getElementById('phone') as HTMLInputElement | null;

if (phoneInput) {
    // Set initial value
    phoneInput.value = '+38';

    // Handle input event
    phoneInput.addEventListener('input', (e: Event) => {
        const target = e.target as HTMLInputElement;
        // If the user removes the prefix, restore it
        if (!target.value.startsWith('+38')) {
            target.value = '+38' + target.value.replace(/^\+38/, '');
        }
    });

    // Handle focus event
    phoneInput.addEventListener('focus', (e: Event) => {
        const target = e.target as HTMLInputElement;
        // If the user focuses on the field, remove the prefix for editing
        if (target.value === '+38') {
            target.value = '';
        }
    });

    // Handle blur event
    phoneInput.addEventListener('blur', (e: Event) => {
        const target = e.target as HTMLInputElement;
        // On losing focus, if the field is empty, return the prefix
        if (!target.value) {
            target.value = '+38';
        }
    });
}