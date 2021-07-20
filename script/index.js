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
  if(window.innerWidth <= 750){
    tab1.style.display = "flex";
    tab1.style.flexDirection = "column";
  }else{
    tab1.style.display = "grid";
    console.log("tab-1");
  }
  tab3.style.display = "none";
}

speedySearch.onclick = () => {
  tabsLinks[1].classList.add("indicator");
  tabsLinks[0].classList.remove("indicator");
  tabsLinks[2].classList.remove("indicator");
  tab1.style.display = "none";
  if(window.innerWidth <= 750){
    tab2.style.display = "flex";
    tab2.style.flexDirection = "column";
  }else{
    tab2.style.display = "grid";
  }
  tab3.style.display = "none";
}

easySharing.onclick = () => {
  tabsLinks[2].classList.add("indicator");
  tabsLinks[1].classList.remove("indicator");
  tabsLinks[0].classList.remove("indicator");
  tab1.style.display = "none";
  if(window.innerWidth <= 750){
    tab3.style.display = "flex";
    tab3.style.flexDirection = "column";
  }else{
    tab3.style.display = "grid";
  }
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

let states = [false, false, false, false];

document.getElementById("qstn-1").onclick = () => {
  let qstn = document.getElementById("qstn-1")
  let ans = document.getElementById("ans-1");
  if(!states[0]){
    ans.style.display = "block";
    qstn.style.color = "hsl(0, 94%, 66%)";
    states[0] = true;
  } else {
    ans.style.display = "none";
    states[0] = false;
    qstn.style.color = "#000";
  }
}

document.getElementById("qstn-2").onclick = () => {
  let ans = document.getElementById("ans-2");
  let qstn = document.getElementById("qstn-2");
  if(!states[1]){
    ans.style.display = "block";
    states[1] = true;
    qstn.style.color = "hsl(0, 94%, 66%)";
  } else {
    ans.style.display = "none";
    states[1] = false;
    qstn.style.color = "#000";
  }
}

document.getElementById("qstn-3").onclick = () => {
  let ans = document.getElementById("ans-3");
  let qstn = document.getElementById("qstn-3");
  if(!states[2]){
    ans.style.display = "block";
    states[2] = true;
    qstn.style.color = "hsl(0, 94%, 66%)";
  } else {
    ans.style.display = "none";
    states[2] = false;
    qstn.style.color = "#000";
  }
}

document.getElementById("qstn-4").onclick = () => {
  let qstn = document.getElementById("qstn-4");
  let ans = document.getElementById("ans-4");
  if(!states[3]){
    ans.style.display = "block";
    states[3] = true;
    qstn.style.color = "hsl(0, 94%, 66%)";
  } else {
    ans.style.display = "none";
    states[3] = false;
    qstn.style.color = "#000";
  }
}

function validate(e){
  e.preventDefault();
}