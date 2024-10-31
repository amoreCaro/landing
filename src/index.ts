
import './styles/index.css'

// Get the modal
const modal = document.getElementById("modal") as HTMLDivElement;

const openModalBtn = document.getElementById("openModalBtn") as HTMLButtonElement;
const closeModalBtn = document.getElementById("closeModalBtn") as HTMLButtonElement;

// Open the modal
openModalBtn.onclick = () => {
    modal.style.display = "block";
};

// Close the modal
closeModalBtn.onclick = () => {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target === modal) {
        modal.style.display = "none";
    }
};

const phoneInput = document.getElementById('phone') as HTMLInputElement;

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
