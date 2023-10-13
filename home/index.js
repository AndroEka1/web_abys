// var slideIndex = 1;
// showSlide(slideIndex);

// function nextslide(n) {
//   showSlide((slideIndex += n));
// }

// function dotslide(n) {
//   showSlide((slideIndex = n));
// }

// function showSlide(n) {
//   var i;
//   var slides = document.getElementsByClassName("imgslide");
//   var dot = document.getElementsByClassName("dot");

//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   for (i = 0; i < slides.length; i++) {
//     dot[i].className = dot[i].className.replace(" active", "");
//   }

//   slides[slideIndex - 1].style.display = "block";

//   dot[slideIndex - 1].className += " active";
// }

// // Kode untuk slider mobile

// var slideIndex = 1;
// showSlide(slideIndex);

// function nextslide(n) {
//   showSlide((slideIndex += n));
// }

// function dotslide(n) {
//   showSlide((slideIndex = n));
// }

// function showSlide(n) {
//   var i;
//   var slides = document.getElementsByClassName("imgslideMobile");
//   var dot = document.getElementsByClassName("dotMobile");

//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   for (i = 0; i < slides.length; i++) {
//     dot[i].className = dot[i].className.replace(" active", "");
//   }

//   slides[slideIndex - 1].style.display = "block";

//   dot[slideIndex - 1].className += " active";
// }

// Kode untuk slider desktop
var slideIndexDesktop = 1;
showSlideDesktop(slideIndexDesktop);

function nextslideDesktop(n) {
  showSlideDesktop((slideIndexDesktop += n));
}

function dotslideDesktop(n) {
  showSlideDesktop((slideIndexDesktop = n));
}

function showSlideDesktop(n) {
  var i;
  var slides = document.getElementsByClassName("imgslide");
  var dot = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndexDesktop = 1;
  }
  if (n < 1) {
    slideIndexDesktop = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < slides.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }

  slides[slideIndexDesktop - 1].style.display = "block";

  dot[slideIndexDesktop - 1].className += " active";
}

// Kode untuk slider mobile
var slideIndexMobile = 1;
showSlideMobile(slideIndexMobile);

function nextslideMobile(n) {
  showSlideMobile((slideIndexMobile += n));
}

function dotslideMobile(n) {
  showSlideMobile((slideIndexMobile = n));
}

function showSlideMobile(n) {
  var i;
  var slides = document.getElementsByClassName("imgslideMobile");
  var dots = document.getElementsByClassName("dotMobile");

  if (n > slides.length) {
    slideIndexMobile = 1;
  }
  if (n < 1) {
    slideIndexMobile = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndexMobile - 1].style.display = "block";
  dots[slideIndexMobile - 1].className += " active";
}

// Kode untuk settingan features-mobile
// Ambil elemen SVG dan elemen menu
const menuIcon = document.querySelector(".menu-strip-3 i"); // Menggunakan querySelector untuk mencari elemen i dalam class menu-strip-3
const menuListMobile = document.querySelector("#menuListMobile");

// Menambahkan event listener pada ikon SVG (menuIcon)
menuIcon.addEventListener("click", () => {
  // Toggle tampilan menuListMobile
  menuListMobile.classList.toggle("active");
});

// Menambahkan event listener pada area di luar menu untuk menutup menu saat diklik
document.addEventListener("click", (e) => {
  if (!menuListMobile.contains(e.target) && !menuIcon.contains(e.target)) {
    menuListMobile.classList.remove("active");
  }
});
