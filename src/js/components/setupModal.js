 function setupModal(modalId, openBtnId, closeBtnId) {
     const modal = document.getElementById(modalId);
     const openModalBtn = document.getElementById(openBtnId);
     const closeModalBtn = document.getElementById(closeBtnId);

     openModalBtn.onclick = () => {
         modal.style.display = "block";
     };

     closeModalBtn.onclick = () => {
         modal.style.display = "none";
     };

     window.onclick = (event) => {
         if (event.target === modal) {
             modal.style.display = "none";
         }
     };
     setupModal("modal", "openModalBtn", "closeModalBtn");
 }
 export default setupModal;