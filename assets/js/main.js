// / Sticky Navbar
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sidebar = document.getElementById("mySidebar");
let sidebarButton = document.querySelector("#sidebar-close");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  sidebar.classList.toggle("show");
  sidebar.style.display = "block";
};

sidebarButton.onclick = () => {
  sidebar.style.display = "none";
  sidebar.classList.remove("show");
};

window.onscroll = () => {
  // sidebar.style.display = "none";
  // sidebar.classList.remove("show");
};

window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;

  if (windowWidth > 768) {
    sidebar.style.display = "none";
    sidebar.classList.remove("show");
  } else {
    // sidebar.style.display = "block";
    // sidebar.classList.toggle("show");
  }

  if (windowWidth > 1120) {
    // document.querySelector(".about-text").style.padding = "40px 0px 0px 0px";
  } else if (windowWidth < 1120) {
    if (document.querySelector(".show-more").innerHTML == "(Show Less)") {
      // document.querySelector(".about-text").style.padding = "0px";
    }
  }
});

window.addEventListener("load", () => {
  document.querySelector("body").classList.add("loaded");
});

$(".show-more").click(function () {
  if ($(".text").hasClass("show-more-height")) {
    $(this).text("(Show Less)");
  } else {
    $(this).text("(Show More)");
  }

  $(".text").toggleClass("show-more-height");
});
