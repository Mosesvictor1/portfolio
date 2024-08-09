// Nav toggle start

let navContainer = document.querySelector("#nav-container");
let show = document.querySelector(".show-menu");
let hide = document.querySelector(".hide-menu");

console.log(show);
show.addEventListener("click", () => {
  navContainer.style.left = "0";
  show.style.display = "none";
  hide.style.display = "flex";
});
hide.addEventListener("click", () => {
  navContainer.style.left = "-100%";
  hide.style.display = "none";
  show.style.display = "flex";
});

// Nav toggle end
