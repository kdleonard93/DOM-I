const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Updated Images
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let cta = document.getElementById("cta-img");
cta.setAttribute("src", siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Title
let title = document.querySelector("title");
title.textContent = "Great Idea!";

// Nav
let nav = document.getElementsByTagName("nav a"[1]);

nav[0].textContent = siteContent["nav"]["nav-item-1"];
nav[1].textContent = siteContent["nav"]["nav-item-2"];
nav[2].textContent = siteContent["nav"]["nav-item-3"];
nav[3].textContent = siteContent["nav"]["nav-item-4"];
nav[4].textContent = siteContent["nav"]["nav-item-5"];
nav[5].textContent = siteContent["nav"]["nav-item-6"];

// CTA content
// let ctaText = document.getElementsByClassName(".cta-text");
let ctaHead = document.querySelector("h1");
let button = document.querySelector("button");
let br = document.createElement("br");

ctaHead.textContent = siteContent["cta"]["h1"];

button.textContent = siteContent["cta"]["button"];

// Main Content
let featuresH4 = document.querySelectorAll("h4")[0];
featuresH4.textContent = siteContent["main-content"]["features-h4"];

let featuresP = document.querySelectorAll("p")[0];
featuresP.textContent = siteContent["main-content"]["features-content"];

let aboutH4 = document.querySelectorAll("h4")[1];
aboutH4.textContent = siteContent["main-content"]["about-h4"];

let aboutP = document.querySelectorAll("p")[1];
aboutP.textContent = siteContent["main-content"]["about-content"];

let servicesH4 = document.querySelectorAll("h4")[2];
servicesH4.textContent = siteContent["main-content"]["services-h4"];

let servicesP = document.querySelectorAll("p")[2];
servicesP.textContent = siteContent["main-content"]["services-content"];

let productH4 = document.querySelectorAll("h4")[3];
productH4.textContent = siteContent["main-content"]["product-h4"];

let productP = document.querySelectorAll("p")[3];
productP.textContent = siteContent["main-content"]["product-content"];

let visionH4 = document.querySelectorAll("h4")[4];
visionH4.textContent = siteContent["main-content"]["vision-h4"];

let visionP = document.querySelectorAll("p")[4];
visionP.textContent = siteContent["main-content"]["vision-content"];

// Contact

let contactH4 = document.querySelectorAll("h4")[5];
contactH4.textContent = siteContent["contact"]["contact-h4"];

let contactText1 = document.querySelectorAll("p")[5];
let contactText2 = document.querySelectorAll("p")[6];
let contactText3 = document.querySelectorAll("p")[7];

contactText1.textContent = siteContent["contact"]["address"];
contactText2.textContent = siteContent["contact"]["phone"];
contactText3.textContent = siteContent["contact"]["email"];

// Footer

let footer = document.querySelector("footer");
let footerP = document.querySelectorAll("p")[8];

footer.textContent = siteContent["footer"]["copyright"];
