//   TABS INDICATOR MOVEMENT

let tabs = document.querySelectorAll(".tabs-box .tab");
let tabsBox = document.querySelector(".tabs-box");
let tabNum = document.querySelector(".tabs-info p span");
let indicator = document.querySelector(".tabs-box .indicator");

tabs[0].onclick = () => {
    tabsBox.classList.remove("one", "two", "three");
    tabsBox.classList.add("one");
    tabNum.innerHTML = "1";
    indicator.innerHTML = "TAB 1"
}

tabs[1].onclick = () => {
    tabsBox.classList.remove("one", "two", "three");
    tabsBox.classList.add("two");
    tabNum.innerHTML = "2";
    indicator.innerHTML = "TAB 2"
}

tabs[2].onclick = () => {
    tabsBox.classList.remove("one", "two", "three");
    tabsBox.classList.add("three");
    tabNum.innerHTML = "3";
    indicator.innerHTML = "TAB 3"
}


// Menu Icon Functions

let menuIcon = document.querySelector(".header .menu-icon");
let navBackground = document.querySelector(".header .navbar .background");
let links = document.querySelectorAll(".header .navbar a");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active")
});

links.forEach(a => {
    a.addEventListener("click", () => {
        menuIcon.classList.remove("active");
    })
});

navBackground.onclick = () => { menuIcon.classList.remove("active"); }

// Navbar Links Activation

let features = document.getElementById("features");
let about = document.getElementById("about");
let pricing = document.getElementById("pricing");
let review = document.getElementById("review");
let contact = document.getElementById("contact");

window.onscroll = () => {
    if (scrollY > contact.offsetTop - 100) {
        removeActive();
        links[4].classList.add("active");
    } else if (scrollY > review.offsetTop - 100) {
        removeActive();
        links[3].classList.add("active");
    } else if (scrollY > pricing.offsetTop - 100) {
        removeActive();
        links[2].classList.add("active");
    } else if (scrollY > about.offsetTop - 100) {
        removeActive();
        links[1].classList.add("active");
    } else if (scrollY >= features.offsetTop - 100) {
        removeActive();
        links[0].classList.add("active");
    } else {
        removeActive();
    }
}

function removeActive() {
    links.forEach(link => {
        link.classList.remove("active");
    });
}