let toggler = document.querySelector(".toggler");

document.addEventListener("click", event => {
    if (event.target.classList.contains("toggle") || event.target.classList.contains("fa-bag-shopping")) {
        document.body.classList.toggle("show-nav");
  } else if (event.target.className == "overlay-1") {
    document.body.classList.remove("show-nav");
  } else if (event.target.classList.contains("xmark")) {
    document.body.classList.remove("show-nav");
  }
});