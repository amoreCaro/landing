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