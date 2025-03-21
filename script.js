// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


var tabcontaints = document.getElementsByClassName("tab-contents");
var tablinks = document.getElementsByClassName("navbar-link");


function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active")
    }
    for(tabcontaint of tabcontaints){
        tabcontaint.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active")
    document.getElementById(tabname).classList.add("active-tab")
}