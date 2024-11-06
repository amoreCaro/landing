import { phoneInput } from "./components/phoneInput";
import { setupModal } from "./components/setupModal";
import { setupMegaMenu } from "./components/setupMegaMenu";
// import { Sidebar } from "./components/sidebar";
// import { Slider } from "./components/slider";


document.addEventListener("DOMContentLoaded", function() {
    phoneInput();
    setupModal();
    setupMegaMenu();
    // Sidebar();
    // Slider();
});