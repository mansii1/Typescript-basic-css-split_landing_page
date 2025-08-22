import "./style.css";

const left = document.querySelector(".left") as HTMLDivElement;
const right = document.querySelector(".right") as HTMLDivElement;
const container = document.querySelector(".container") as HTMLDivElement;

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});
left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});
right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});
