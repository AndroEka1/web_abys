// // script.js

// const navigation = document.querySelector(".contactMoto");
// const features = document.querySelector(".features");

// window.addEventListener("scroll", () => {
//   const scrollY = window.scrollY;

//   // Tambahkan atau hapus kelas CSS sesuai dengan posisi scroll
//   if (scrollY > 100) {
//     navigation.classList.add("hidden");
//     features.classList.add("follow-scroll");
//   } else {
//     navigation.classList.remove("hidden");
//     features.classList.remove("follow-scroll");
//   }
// });

function initMap() {
  var location = { lat: -6.2, lng: 106.816666 }; // Ganti dengan koordinat yang sesuai

  var map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 15,
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Lokasi Anda",
  });
}

// Kode untuk mengatur bagian answer pada class question web
document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua elemen pertanyaan
  const questions = document.querySelectorAll(".question");

  // Tambahkan event listener untuk setiap pertanyaan
  questions.forEach((question) => {
    question.addEventListener("click", () => {
      // Toggle kelas active pada elemen li
      const parentListItem = question.parentElement;
      parentListItem.classList.toggle("active");

      // Sembunyikan semua jawaban kecuali yang terkait dengan pertanyaan yang diklik
      const answers = document.querySelectorAll(".answer");
      answers.forEach((answer) => {
        answer.style.display = "none";
      });

      // Tampilkan jawaban yang terkait dengan pertanyaan yang diklik
      const answer = parentListItem.querySelector(".answer");
      answer.style.display = "block";

      // Ganti ikon menjadi panah ke atas
      const icon = question.querySelector(".fa-solid");
      icon.classList.toggle("fa-angle-down");
      icon.classList.toggle("fa-angle-up");

      // Tambahkan transisi 0.5 detik pada ikon
      icon.style.transition = "transform 3s";
    });
  });
});

// Kode untuk mengatur bagian answer pada class question Mobile
document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua elemen pertanyaan
  const questions = document.querySelectorAll(".questionMobile");

  // Fungsi untuk menyembunyikan jawaban
  function hideAnswer(question) {
    question.classList.remove("active");
    const answer = question.querySelector(".answerMobile");
    answer.style.maxHeight = null;
  }

  // Tambahkan event click ke setiap elemen pertanyaan
  questions.forEach((question) => {
    question.addEventListener("click", () => {
      // Cek apakah pertanyaan ini sudah aktif
      const isActive = question.classList.contains("active");

      // Semua pertanyaan di-set kembali ke hidden
      questions.forEach((q) => hideAnswer(q));

      // Jika pertanyaan tidak aktif, aktifkan
      if (!isActive) {
        question.classList.add("active");
        const answer = question.querySelector(".answerMobile");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});

// Akhir Kode untuk mengatur bagian answer pada class question Mobile

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
