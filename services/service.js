// Fungsi untuk mengarahkan ke WhatsApp dengan pesan teks
function redirectToWhatsApp(phoneNumber) {
  var countryCode = "+62"; // Ganti dengan kode negara yang sesuai
  var message = "Halo, saya tertarik dengan paket internet. Silakan beri saya informasi lebih lanjut."; // Teks pesan yang ingin Anda tambahkan
  var whatsappURL = "https://api.whatsapp.com/send?phone=" + countryCode + phoneNumber + "&text=" + encodeURIComponent(message);

  // Buka tautan WhatsApp di tab atau jendela baru
  window.open(whatsappURL, "_blank");
}

// // Mengaitkan fungsi redirectToWhatsApp dengan tombol pertama
// document.getElementById("buyPackage-container").addEventListener("click", function () {
//   redirectToWhatsApp("083814112472"); // Ganti dengan nomor WhatsApp yang diinginkan
// });

// // Mengaitkan fungsi redirectToWhatsApp dengan tombol kedua
// document.getElementById("buyPackage2").addEventListener("click", function () {
//   redirectToWhatsApp("081234567890"); // Ganti dengan nomor WhatsApp yang diinginkan
// });

// Anda dapat menambahkan lebih banyak tombol dan mengaitkannya dengan nomor WhatsApp lain jika diperlukan

// Kode untuk memebrikan warna di ul li agar tetap berwarna ketika user berada di halaman itu
// Ambil semua item menu dalam daftar
const menuItems = document.querySelectorAll("#menuList li");

// Cek halaman saat pertama kali dimuat
window.addEventListener("DOMContentLoaded", () => {
  // Ambil alamat URL saat ini
  const currentURL = window.location.href;

  // Loop melalui setiap item menu
  menuItems.forEach((menuItem) => {
    // Ambil tautan dari item menu
    const menuLink = menuItem.querySelector("a");

    // Cek apakah tautan item menu sama dengan alamat URL saat ini
    if (menuLink.href === currentURL) {
      // Tambahkan kelas "active" pada item menu yang sesuai
      menuItem.classList.add("active");
    }
  });
});

// Bagian kode dari index.js

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
