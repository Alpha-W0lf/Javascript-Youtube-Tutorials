var newItemCounter = 1;
// var ourList = document.getElementById("our-list");
var ourList = document.querySelector("#our-list");
var ourButton = document.getElementById("our-button");
var ourHeadline = document.getElementById("our-headline");
// var listItems = document.getElementById("our-list").getElementsByTagName("li")
var listItems = document.querySelectorAll("#our-list li");

// for (i = 0; i < listItems.length; i++) {
//     listItems[i].innerHTML = "Hello world.";
// }

// for(i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener("click", activateItem);
// }

ourList.addEventListener("click", activateItem);

function activateItem(e) {
    // alert("Click detected")
    // ourHeadline.innerHTML = this.innerHTML;
    // for(i = 0; i < listItems.length; i++) {
    //     listItems[i].classList.remove("active");
    // }
    // this.classList.add("active");
    if (e.target.nodeName == "LI") {
        ourHeadline.innerHTML = e.target.innerHTML;
        for(i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove("active");
        }
        e.target.classList.add("active");
    }
}

ourButton.addEventListener("click", createNewItem);

function createNewItem() {
    ourList.innerHTML += "<li>Something new " + newItemCounter + "</li>";
    newItemCounter++
}