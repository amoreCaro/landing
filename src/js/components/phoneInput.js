export function phoneInput() {
    const phoneInput = document.getElementById('phone');
    const prefix = '+38';

    // Ensure the input element exists before proceeding
    if (phoneInput) {
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
    }
}

// Call the function after DOM content is loaded if needed
document.addEventListener('DOMContentLoaded', initializePhoneInput);