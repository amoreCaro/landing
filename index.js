// Get the modal
var modal = document.getElementById("modal");

var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");

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