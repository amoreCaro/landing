function setupMegaMenu(menuId, toggleBtnId) {
    const megaMenu = document.getElementById(menuId);
    const toggleMegaMenu = document.getElementById(toggleBtnId);

    // Function to toggle the mega menu
    function toggleMegaMenuDisplay() {
        megaMenu.style.display = megaMenu.style.display === "block" ? "none" : "block";
    }

    // Event listener for the toggle button
    if (toggleMegaMenu) {
        toggleMegaMenu.onclick = toggleMegaMenuDisplay;
    } else {
        console.warn(`Toggle button with ID "${toggleBtnId}" not found.`);
    }
}

// Initialize the mega menu with specific IDs
setupMegaMenu("megaMenu", "openMegaMenu");

// Export the function as the default export
export default setupMegaMenu;