const memeBtn = document.getElementById("memeBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const closePopupTwo = document.getElementById("closePopupTwo");
const scrollTop = document.getElementById("scrollTop");

memeBtn.addEventListener("click", () => {
  popup.classList.add("active");
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
});

closePopupTwo.addEventListener("click", () => {
  popup.classList.remove("active");

  document.getElementById("memes").scrollIntoView({
    behavior: "smooth"
  });
});

popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.classList.remove("active");
  }
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    popup.classList.remove("active");
  }
});