/* ===============================
   PROJECT VIDEO (AMAN MESKI 1 VIDEO)
================================ */
const hoverSign = document.querySelector('.hover-sign');

const videoList = document.querySelectorAll(
  "#projectVideo1, #projectVideo2, #projectVideo3"
);

videoList.forEach(video => {
  if (!video) return;

  // Desktop
  video.addEventListener("mouseenter", () => {
    video.play();
    hoverSign?.classList.add("active");
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    hoverSign?.classList.remove("active");
  });

  // Mobile (tap)
  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      hoverSign?.classList.add("active");
    } else {
      video.pause();
      hoverSign?.classList.remove("active");
    }
  });
});


/* ===============================
   SIDEBAR (WEB & MOBILE FIX)
================================ */
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

menu.addEventListener("click", () => {
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
  sideBar.style.pointerEvents = "auto";
});

closeIcon.addEventListener("click", () => {
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
  sideBar.style.pointerEvents = "none";
});

// Auto close saat klik menu
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    sideBar.style.pointerEvents = "none";
  });
});


/* ===============================
   MODAL
================================ */
function openModal(project){
  const modal = document.getElementById("projectModal");
  const title = document.getElementById("modalTitle");
  const desc = document.getElementById("modalDesc");

  if(project === "gamelab"){
    title.innerText = "Kunjungan Industri Gamelab";
    desc.innerText =
      "Kegiatan kunjungan industri ke Gamelab bertujuan memberikan wawasan dunia kerja IT, alur pengembangan software, budaya kerja, dan penggunaan tools profesional.";
  }

  if(project === "radnet"){
    title.innerText = "Pelatihan Domain & Hosting Radnet";
    desc.innerText =
      "Pelatihan ini membahas dasar domain, hosting, DNS, deployment website, serta pengelolaan server dan keamanan website.";
  }

  modal.style.display = "flex";
}

function closeModal(){
  document.getElementById("projectModal").style.display = "none";
}
