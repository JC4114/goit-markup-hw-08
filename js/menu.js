// (() => {
//   const menuBtnRef = document.querySelector("[data-menu-button]");
//   const mobileMenuRef = document.querySelector("[data-menu]");
//   const mobileBtnClose = document.querySelector("[data-menu-close]");
//   menuBtnRef.addEventListener("click", () => {
//     mobileMenuRef.classList.toggle("is-open");
//   });
//   mobileBtnClose.addEventListener("click", () => {
//     mobileMenuRef.classList.toggle("is-open");
//   });
// })();

(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();
