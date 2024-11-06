import { PhoneInput } from "./components/phoneInput";
import { SetupModal } from "./components/setupModal";
import { SetupMegaMenu } from "./components/setupMegaMenu";
import { Sidebar } from "./components/sidebar";
import { Slider } from "./components/slider";


document.addEventListener("DOMContentLoaded", function() {
    PhoneInput();
    SetupModal();
    SetupMegaMenu();
    Sidebar();
    Slider();
});