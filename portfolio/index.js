var element = document.getElementById("bread"); //Select by id
var cllist = document.getElementsByClassName("nav_elements"); //Select all the elements
var classname = element.classList; //get all class names of the element as a list 
for(var i=0;i<cllist.length;i++) {
    cllist[i].classList.remove("breadCrumps"); //remove breadcrumps 
} //add
cllist[parseInt(classname[1])-1].classList.add("breadCrumps");
