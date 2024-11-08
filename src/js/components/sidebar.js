function sidebar(sidebarId, openBtnId, closeBtnId) {
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
sidebar("sidebar", "openSidebarBtn", "closeSidebarBtn");

export default sidebar;