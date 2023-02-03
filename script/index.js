var a = 10;
var b = 10;
// document.write(" "+(a+b)+" | "+(a-b)+" | "+ (a*b) + " | "+ (a/b));
console.log(10+10);
document.getElementById("main").innerHTML = "Hello mahir";
document.getElementById("main").style.color = "white";
document.getElementById("main").style.backgroundColor = "pink";
document.getElementById("main").style.border = "1px solid red";
document.getElementById("main").style.height = "100px";
document.getElementById("main").style.textAlign = "center";
document.getElementById("main").style.display = "flex";
document.getElementById("main").style.justifyContent = "center";
document.getElementById("main").style.alignItems = "center";


function clickHandler() {
    const x = document.createElement("p");
    x.className = "mahir";
    x.innerHTML = "This is a para";
    document.getElementById("main").appendChild(x);
    // document.write(typeof(x));
}