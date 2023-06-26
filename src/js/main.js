let shuffleIcon = document.getElementById("shuffleIcon");
let shuffleIconMobile = document.getElementById("shuffleIconMobile");
let likeSong = document.getElementById("likeSong");

shuffleIcon.addEventListener("click", () => {
  shuffleIcon.classList.toggle("shuffle-active");
});

shuffleIconMobile.addEventListener("click", () => {
  shuffleIconMobile.classList.toggle("shuffle-active");
});

const likedIcons = document.querySelectorAll(".liked-icon");
likedIcons.forEach((likedIcon) => {
  likedIcon.addEventListener("click", () => {
    likedIcon.classList.toggle("liked-song");
  });
});

let followBtn = document.getElementById("followBtn");
followBtn.addEventListener("click", () => {
  followBtn.classList.toggle("btn-following");
})

let followBtnMobile = document.getElementById("followBtnMobile");
followBtnMobile.addEventListener("click", () => {
  followBtnMobile.classList.toggle("btn-following");
});


