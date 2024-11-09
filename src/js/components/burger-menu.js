const BurgerMenu = () => {
  const btn = document.querySelector(".header__burger-btn");
  const menu = document.querySelector(".header__burger-menu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      btn.classList.toggle("opened");
      menu.classList.toggle("opened");
    })
  }
}

export default BurgerMenu;