const hamBurger = document.getElementById("hamburger");
const navCloser = document.getElementById("nav-closer");
const lpHeader = document.getElementById("lp_header");
const mobileNav = document.getElementById("mobile-nav");
const simpleBookmark = document.getElementById("simple-bookmark");
const speedySearch = document.getElementById("speedy-search");
const easySharing = document.getElementById("easy-sharing");
let tabsLinks = document.getElementsByClassName("tab-links");
const tab1 = document.getElementById("tab-1");
const tab2 = document.getElementById("tab-2");
const tab3 = document.getElementById("tab-3");


window.onload = () => {
  tabsLinks[0].classList.add("indicator");
  tab2.style.display = "none";
  tab3.style.display = "none";
}

simpleBookmark.onclick = () => {
  tabsLinks[0].classList.add("indicator");
  tabsLinks[1].classList.remove("indicator");
  tabsLinks[2].classList.remove("indicator");
  tab2.style.display = "none";
  tab1.style.display = "flex";
  tab1.style.flexDirection = "column";
  tab3.style.display = "none";
}

speedySearch.onclick = () => {
  tabsLinks[1].classList.add("indicator");
  tabsLinks[0].classList.remove("indicator");
  tabsLinks[2].classList.remove("indicator");
  tab1.style.display = "none";
  tab2.style.display = "flex";
  tab2.style.flexDirection = "column";
  tab3.style.display = "none";
}

easySharing.onclick = () => {
  tabsLinks[2].classList.add("indicator");
  tabsLinks[1].classList.remove("indicator");
  tabsLinks[0].classList.remove("indicator");
  tab1.style.display = "none";
  tab3.style.display = "flex";
  tab3.style.flexDirection = "column";
  tab2.style.display = "none";
}

hamBurger.onclick = () => {
  mobileNav.style.display = "flex";
  lpHeader.classList.add("mobile-bg");
  hamBurger.style.display = "none";
  navCloser.style.display = "block";
}

navCloser.onclick = () => {
  mobileNav.style.display = "none";
  lpHeader.classList.remove("mobile-bg");
  hamBurger.style.display = "block";
  navCloser.style.display = "none";
}