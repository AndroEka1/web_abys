// // Fungsi untuk menampilkan pop-up "Fitur Belum Tersedia"
// function showPopup() {
//   var popup = document.getElementById("notAvailablePopup");
//   popup.style.display = "block";
// }

// // Fungsi untuk menutup pop-up
// function closePopup() {
//   var popup = document.getElementById("notAvailablePopup");
//   popup.style.display = "none";
// }

// // Menambahkan event listener untuk tautan "Activity" dan "Career" dari halaman lain
// var activityLinks = document.querySelectorAll(".activity-link");

// activityLinks.forEach(function (link) {
//   link.addEventListener("click", function (event) {
//     event.preventDefault();
//     showPopup();
//   });
// });

// // Menambahkan event listener untuk tombol tutup pop-up
// document.getElementById("closeButton").addEventListener("click", function () {
//   closePopup();
// });

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
