//Adding in links to other pages
//Creating the 'a' element
let link = document.createElement("a");

//Editing the destination
link.href = "phase1.html";
//Adding in text
link.innerHTML = "Phase 1";

//Adding the element to the button
document.querySelector("#p1But").appendChild(link);

let link2 = document.createElement("a");
link2.href = "phase2.html";
link2.innerHTML = "Phase 2";
document.querySelector("#p2But").appendChild(link2);

let link3 = document.createElement("a");
link3.href = "phase3.html";
link3.innerHTML = "Phase 3";
document.querySelector("#p3But").appendChild(link3);

let link4 = document.createElement("a");
link4.href = "index.html";
link4.innerHTML = "Home Page";
document.querySelector("#indexBut").appendChild(link4);

let link5 = document.createElement("a");
link5.href = "#";
link5.innerHTML = "Notes";
link5.style.color = "red";
document.querySelector("#notesBut").appendChild(link5);