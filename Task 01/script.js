const toggleButton=document.getElementsByClassName("toggle-btn")[0];

const navbarListMobile=document.getElementsByClassName("navbar-list")[0];


toggleButton.addEventListener("click",()=>{
    navbarListMobile.classList.toggle("dropdown")
})