const menuBtn = document.querySelector(".menu-btn");
const dropDownMenu = document.querySelector(".responsive-navbar");
let openMenu = false;

menuBtn.addEventListener("click", () => {
    if(!openMenu){
        menuBtn.classList.add("open");
        dropDownMenu.classList.add("dropdown");
        openMenu = true;
    }else{
        menuBtn.classList.remove("open");
        dropDownMenu.classList.remove("dropdown");
        openMenu = false;
    }
});