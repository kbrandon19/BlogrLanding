/* To open the nav mobile menu */
document.getElementById("ham").addEventListener("click", openMainMenu)

function openMainMenu() {
    document.getElementById("ham").classList.toggle("active");
    
    document.getElementById("nav-mobile").classList.toggle("active")
  }


/* To open the drop down menus*/
document.getElementById("drop").addEventListener("click", openInnerDrop)

function openInnerDrop(){
    document.getElementById("inner-drop-down").classList.toggle("show");

    document.getElementById("drop").classList.toggle("active")
}






