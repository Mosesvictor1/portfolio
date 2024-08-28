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
    imageUrl: "images/mic1.jpg",
    name: "Micheal	Adeyanju",
    description:
      "It has been good learnt new things. I really appreciated the step-by-step guidance and the real-world examples provided throughout the course. I can confidently say that I've grown as a developer, and I'm excited to apply the new skills I've gained. Thank you!",
    button: "View More",
    websiteLink: "https://micheal-jpg.github.io/Portfolio/",
  },

  {
    id: 2,
    imageUrl: "images/bash2.jpg",
    name: "Mustapha Eneji",
    description:
      "Firstly I found coding language difficult, so as time goes I discovered that I have to face my challenges. It's my race and i will come out grate.  Though It was a tough time while I was creating my website, but  i feel more confident  now and ready to apply them.",
    button: "View More",
    websiteLink: "https://bash822.github.io/lastport/",
  },
  {
    id: 3,
    imageUrl: "images/tm1.jpg",
    name: "Jonas Mike",
    description:
      "Working with Victor Moses on my web development project was a fantastic experience. He did not only delivered a flawless website but also provided excellent design recommendations that took my project to the next level.",
    button: "View More",
    websiteLink: "https://www.fenriz-gym.com/",
  },
  {
    id: 4,
    imageUrl: "images/avatar5.jpg",
    name: "Henry",
    description:
      "Victor Moses has an incredible talent for both designing and developing websites. his expertise shines through in the quality of his work, and he is always willing to go the extra mile to ensure everything was perfect. I was impressed with his professionalism.",
    button: "View More",
    websiteLink: "https://www.annscottage.com/",
  },

  {
    id: 5,
    imageUrl: "images/tm2.jpg",
    name: "Cynthia Jonas",
    description:
      "The design and development work from Victor Moses was outstanding! He brought my ideas to life with a stunning website. His teaching skills also helped me understand the technical side, making the process much more collaborative and rewarding",
    button: "View More",
    websiteLink: "https://www.labaton.com/",
  },
  {
    id: 6,
    imageUrl: "images/tm6.jpg",
    name: "Moses",
    description:
      "I couldn’t have asked for a better experience with Victor Moses. He handled everything from development to design with great attention to detail, and his teaching approach helped me understand the process. The final product was not only beautiful but also functional.",
    button: "View More",
  },
];

const testimonyDOM = document.querySelector(".card-wrapper");
console.log(testimonyDOM);
console.log(testimonyData);

displayProducts(testimonyData);
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
                   <button class="button"><a target="_blank" href=${item.websiteLink}>${item.button}</a></button>
                  </div>
                </div>`;
  });

  testimonyDOM.innerHTML = result;
}

// project-link
let projectLink = document.querySelectorAll(".project-link");

projectLink.forEach((e) => {
  e.addEventListener("click", () =>
    alert("Project link not yet available (Still in progress)")
  );
});

// <!-- ================== Reavel js section ================== -->
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 160;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// <!-- ================== Reavel js section end================== -->
