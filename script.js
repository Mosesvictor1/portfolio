//-> import productsData
// import { testimonyData } from "./Testimonies";

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

// class Products {
//   //-> while loading the page get products from api end point
//   getProducts() {
//     return testimonyData;
//   }
// }

/*============ Build our products data ==============*/

 const testimonyData = [
  {
    id: 1,
    imageUrl: "images/profile1.jpg",
    name: "Moses",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor impedit tenetur nulla at cupiditate mollitia iusto maiores enim quibusdam architecto harum doloremque, in dolores vel voluptas excepturi delectus illum magnam?",
    button: "View More",
  },

  {
    id: 2,
    imageUrl: "images/profile1.jpg",
    name: "Moses",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor impedit tenetur nulla at cupiditate mollitia iusto maiores enim quibusdam architecto harum doloremque, in dolores vel voluptas excepturi delectus illum magnam?",
    button: "View More",
  },
  {
    id: 3,
    imageUrl: "images/profile1.jpg",
    name: "Moses",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor impedit tenetur nulla at cupiditate mollitia iusto maiores enim quibusdam architecto harum doloremque, in dolores vel voluptas excepturi delectus illum magnam?",
    button: "View More",
  },
  {
    id: 4,
    imageUrl: "images/profile1.jpg",
    name: "Moses",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor impedit tenetur nulla at cupiditate mollitia iusto maiores enim quibusdam architecto harum doloremque, in dolores vel voluptas excepturi delectus illum magnam?",
    button: "View More",
  },

  {
    id: 5,
    imageUrl: "images/profile1.jpg",
    name: "Moses",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor impedit tenetur nulla at cupiditate mollitia iusto maiores enim quibusdam architecto harum doloremque, in dolores vel voluptas excepturi delectus illum magnam?",
    button: "View More",
  },
  {
    id: 6,
    imageUrl: "images/profile1.jpg",
    name: "Moses",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor impedit tenetur nulla at cupiditate mollitia iusto maiores enim quibusdam architecto harum doloremque, in dolores vel voluptas excepturi delectus illum magnam?",
    button: "View More",
  },
];


const testimonyDOM = document.querySelector(".card-wrapper");
console.log(testimonyDOM)
console.log(testimonyData)

displayProducts(testimonyData)
function displayProducts(products) {
      let result = "";
  
      products.forEach((item) => {
        result += ` <div class="card swiper-slide">
                  <div class="image-content">
                   <span class="overlay"></span>
                   <div class="card-image">
                     <img src="${item.imageUrl}" alt="customer profile" class="card-img">
                   </div>
   
                  </div>
                  <div class="card-content">
                   <h2 class="name">${item.name}</h2>
                   <p class="description">${item.description}</p>
                   <button class="button">${item.button}</button>
                  </div>
                </div>`;
      });
  
      testimonyDOM.innerHTML = result;
    }
