const menuBtn = document.querySelector(".menu-btn");
const dropDownMenu = document.querySelector(".responsive-navbar");
const cocaColaLogo = document.querySelector(".cocacola-logo");
const hamburgerMenuText = document.querySelectorAll(".responsiveText");
let openMenu = false;

menuBtn.addEventListener("click", () => {
    if(!openMenu){
        menuBtn.classList.add("open");
        dropDownMenu.classList.add("dropdown");
        hamburgerMenuText.forEach(texts => {
            texts.classList.add("animatedText")
        })
        openMenu = true;
    }else{
        menuBtn.classList.remove("open");
        dropDownMenu.classList.remove("dropdown");
        hamburgerMenuText.forEach(texts => {
            texts.classList.remove("animatedText")
        })
        openMenu = false;
    }
});

cocaColaLogo.addEventListener("click", () => {
    location.href = "https://www.coca-colaitalia.it/";
});

