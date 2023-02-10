//Sellectors
const primaryNav = document.querySelector(".app__navbar-links");
const openMenu = document.querySelector(".burger");
// event listner
openMenu.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    openMenu.setAttribute("aria-expanded", true);
    document.querySelector(".menu-open").style.display = "none";
    document.querySelector(".menu-close").style.display = "block";
    primaryNav.style.boxShadow = "-164px 0px 0px rgba(0, 0, 0, 0.7)";
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    openMenu.setAttribute("aria-expanded", false);
    document.querySelector(".menu-open").style.display = "block";
    document.querySelector(".menu-close").style.display = "none";
    primaryNav.style.boxShadow = "none";
  }
});
//Functions
