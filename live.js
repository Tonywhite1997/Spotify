let navBar = document.getElementById("navBar");
let openNav = document.getElementById("openNav");
let closeNav = document.getElementById("closeNav");
let topHeader = document.getElementById("topHeader");

openNav.addEventListener("click", function(){
    navBar.style.right="0";
    topHeader.style.display="none";
})

closeNav.addEventListener("click", function(){
    navBar.style.right="-100vw";
    topHeader.style.display="flex";
})