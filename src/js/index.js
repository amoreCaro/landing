import slider from "./components/slider";
import sidebar from "./components/sidebar";
import setupMegaMenu from "./components/setupMegaMenu";
import phoneInput from "./components/phoneInput";

document.addEventListener("DOMContentLoaded", function() {
    setupModal();
    slider();
    sidebar();
    setupMegaMenu();
    phoneInput();
})