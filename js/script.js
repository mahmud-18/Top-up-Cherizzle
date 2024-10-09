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

// dropdown list
function myFunction() {
  let dropdown = document.getElementById("myDropdownLogin"); // Sesuaikan ID
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdown = document.getElementById("myDropdownLogin");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }
};

function toggleDropdown() {
  let dropdownJadwal = document.querySelector(".jadwal .dropdown-jadwal");

  if (dropdownJadwal.style.display === "block") {
    dropdownJadwal.style.display = "none";
  } else {
    dropdownJadwal.style.display = "block";
  }
}

window.onclick = function (event) {
  if (!event.target.matches(".btn-jadwal")) {
    let dropdowns = document.querySelectorAll(".jadwal .dropdown-jadwal");
    dropdowns.forEach(function (dropdownJadwal) {
      if (dropdownJadwal.style.display === "block") {
        dropdown.style.display = "none";
      }
    });
  }
};

// menu
const topupBtn = document.getElementById("topup-btn");
const sosmedBtn = document.getElementById("sosmed-btn");
const apkBtn = document.getElementById("apk-btn");
const menuContainer = document.getElementById("menu-container");

const sosmedMenu = [
  { img: "img/webtoon.png", text: "Webtoon" },
  { img: "img/youtube.png", text: "Youtube" },
];

const apkPremiumMenu = [
  { img: "img/netflix.png", text: "Netflix" },
  { img: "img/spotify.png", text: "Spotify" },
  { img: "img/canva.png", text: "Canva" },
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

    img.style.display = "block";
    img.style.margin = "10px 10px";

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

topupBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Topup button clicked");
  menuContainer.innerHTML = defaultMenuHTML;
});
