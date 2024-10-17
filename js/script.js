// Hamburger Menu
document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    let nav = document.getElementById("navbar-nav");
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
    }
  });

// Dropdown Login
function myFunction(event) {
  event.stopPropagation(); // Mencegah window onclick dari menutup dropdown segera
  let dropdownLogin = document.getElementById("myDropdownLogin");

  // Toggling dropdown login
  if (dropdownLogin.classList.contains("show")) {
    dropdownLogin.classList.remove("show");
    setTimeout(() => {
      dropdownLogin.style.display = "none"; // Sembunyikan setelah transisi selesai
    }, 500); // Waktu delay sesuai dengan durasi transisi
  } else {
    dropdownLogin.style.display = "block"; // Tampilkan dropdown
    setTimeout(() => {
      dropdownLogin.classList.add("show");
    }, 10); // Delay kecil untuk memastikan transisi berfungsi
  }
}

// Dropdown Jadwal
function toggleDropdown(event) {
  event.stopPropagation();
  let dropdownJadwal = document.querySelector(".jadwal .dropdown-jadwal");

  if (dropdownJadwal.style.display === "block") {
    dropdownJadwal.style.display = "none";
  } else {
    dropdownJadwal.style.display = "block";
  }
}

// Event Handler untuk klik di luar dropdown
window.onclick = function (event) {
  // Untuk dropdown login
  if (
    !event.target.matches(".dropbtn") &&
    !event.target.closest(".dropdown-content")
  ) {
    let dropdownLogin = document.getElementById("myDropdownLogin");
    if (dropdownLogin && dropdownLogin.classList.contains("show")) {
      dropdownLogin.classList.remove("show");
      setTimeout(() => {
        dropdownLogin.style.display = "none"; // Sembunyikan setelah transisi selesai
      }, 500);
    }
  }

  // Untuk dropdown jadwal
  if (
    !event.target.matches(".btn-jadwal") &&
    !event.target.closest(".dropdown-jadwal")
  ) {
    let dropdownJadwal = document.querySelector(".jadwal .dropdown-jadwal");
    if (dropdownJadwal && dropdownJadwal.style.display === "block") {
      dropdownJadwal.style.display = "none";
    }
  }
};

// menu
const topupBtn = document.getElementById("topup-btn");
const sosmedBtn = document.getElementById("sosmed-btn");
const apkBtn = document.getElementById("apk-btn");
const jokiBtn = document.getElementById("joki-btn");
const menuContainer = document.getElementById("menu-container");

const sosmedMenu = [
  {
    category: "sosmed",
    img: "img/webtoon.png",
    text: "Webtoon",
    url: "topup/webtoon.html",
  },
  {
    category: "sosmed",
    img: "img/youtube.png",
    text: "Youtube",
    url: "topup/youtube.html",
  },
];

const apkPremiumMenu = [
  {
    category: "apk",
    img: "img/netflix.png",
    text: "Netflix",
    url: "topup/netflix.html",
  },
  {
    category: "apk",
    img: "img/spotify.png",
    text: "Spotify",
    url: "topup/spotify.html",
  },
  {
    category: "apk",
    img: "img/canva.png",
    text: "Canva",
    url: "topup/canva.html",
  },
];

const jokiMenu = [
  {
    category: "joki",
    img: "img/change.png",
    text: "Mobile Legends",
    url: "topup/joki.html",
  },
  {
    category: "joki",
    img: "img/ff.png",
    text: "Free Fire",
    url: "topup/ff.html",
  },
  {
    category: "joki",
    img: "img/genshin.png",
    text: "Genshin",
    url: "topup/genshin.html",
  },
];

const defaultMenuHTML = menuContainer.innerHTML;

function changeMenu(menuData) {
  menuContainer.innerHTML = "";
  menuData.forEach((item) => {
    const kategoriCircle = document.createElement("div");
    kategoriCircle.classList.add("kategori-circle");

    const circleMenu = document.createElement("div");
    circleMenu.classList.add("circle-menu");

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.text;

    const textKategori = document.createElement("p");
    textKategori.classList.add("text-kategori");
    textKategori.innerText = item.text;

    if (item.category != "joki") {
      img.style.margin = "6px";
    }
    // Tambahkan event listener pada gambar
    img.addEventListener("click", () => {
      window.location.href = item.url; // Arahkan ke URL yang sesuai
    });

    circleMenu.appendChild(img);
    kategoriCircle.appendChild(circleMenu);
    kategoriCircle.appendChild(textKategori);
    menuContainer.appendChild(kategoriCircle);
  });
}

sosmedBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Sosmed button clicked");
  changeMenu(sosmedMenu);
});

apkBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("APK button clicked");
  changeMenu(apkPremiumMenu);
});

jokiBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Joki button clicked");
  changeMenu(jokiMenu);
});

topupBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Topup button clicked");
  menuContainer.innerHTML = defaultMenuHTML;
});

// topup ewallet
function toggleSection(sectionId) {
  let section = document.getElementById(sectionId);
  section.style.display = section.style.display === "block" ? "none" : "block";
}
