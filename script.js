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

// Facts section start

let counter = document.querySelector(".counter1");
let counter2 = document.querySelector(".counter2");
let counter3 = document.querySelector(".counter3");
let counter4 = document.querySelector(".counter4");

let count = 0;
let count2 = 0;
let count3 = 800;
let count4 = 0;

setInterval(() => {
  if (count == 101) {
    clearInterval();
  } else {
    count++;
    counter.innerHTML = count;
  }
}, 15);
setInterval(() => {
  if (count2 == 21) {
    clearInterval();
  } else {
    count2++;
    counter2.innerHTML = count2;
  }
}, 20);

setInterval(() => {
  if (count3 == 1030) {
    clearInterval();
  } else {
    count3++;
    counter3.innerHTML = count3;
  }
}, 0);
setInterval(() => {
  if (count4 == 15) {
    clearInterval();
  } else {
    count4++;
    counter4.innerHTML = count4;
  }
}, 30);

//Facts section start


// Testimonial section swipper start



// Testimonial section swipper end