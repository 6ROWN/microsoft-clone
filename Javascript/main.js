var mainMenu = document.querySelector('.main-menu')
var menuBtn = document.querySelector(".menu-bar")
var cancelBtn = document.querySelector(".cancel-btn")

menuBtn.addEventListener("click", function(e){
    mainMenu.classList.add("show")
    menuBtn.classList.add("hide")
})

cancelBtn.addEventListener("click",function(e){
    mainMenu.classList.remove("show")
    menuBtn.classList.remove("hide")
})

