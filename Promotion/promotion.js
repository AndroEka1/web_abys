// Mendapatkan elemen tombol dan pop-up
var promoButton1 = document.getElementById("promoButton1");
var promoButton2 = document.getElementById("promoButton2");
var promoButton3 = document.getElementById("promoButton3");
var promoPopup = document.getElementById("promoPopup");
var closeButton = document.getElementById("closeButton");

// Menambahkan event listener untuk tombol "Lihat Detail"
promoButton1.addEventListener("click", function () {
  showPopup();
});

promoButton2.addEventListener("click", function () {
  showPopup();
});

promoButton3.addEventListener("click", function () {
  showPopup();
});

// Menambahkan event listener untuk tombol "Tutup"
closeButton.addEventListener("click", function () {
  closePopup();
});

// Fungsi untuk menampilkan pop-up
function showPopup() {
  promoPopup.style.display = "block";
}

// Fungsi untuk menutup pop-up
function closePopup() {
  promoPopup.style.display = "none";
}

// Menambahkan event listener untuk tombol tutup pop-up
document.getElementById("closeButton").addEventListener("click", function () {
  closePopup();
});

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
