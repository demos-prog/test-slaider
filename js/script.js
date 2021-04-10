"use strict";
let viewport = document.getElementById("viewport").offsetWidth;
let viewportBody = document.getElementById("viewport");
let sliderBody = document.querySelector(".sliderBody");
let slides = document.querySelectorAll(".slide");
let inpNumberOfSlides = document.querySelector("#inpNumberOfSlides");
let outCurrenNumberOfSlides = document.querySelector(
  "#outCurrenNumberOfSlides"
);

let numbOfslidesToShowOnce = 1;
let numberOfSlides = slides.length;
let startSlide = 0;

outCurrenNumberOfSlides.innerHTML = numbOfslidesToShowOnce;
// ширина слайда
sliderBody.style.width =
  (viewport * numberOfSlides) / numbOfslidesToShowOnce + "px";
// ==========

inpNumberOfSlides.addEventListener("change", () => {
  if (isNaN(+inpNumberOfSlides.value)) {
    alert("Enter a NUMBER pls !!!!");
    inpNumberOfSlides.value = "";
    return;
  }
  if (+inpNumberOfSlides.value <= 0) {
    alert("Enter a POSITIVE number pls !!!!");
    inpNumberOfSlides.value = "";
    return;
  }
  numbOfslidesToShowOnce = +inpNumberOfSlides.value;
  outCurrenNumberOfSlides.innerHTML = numbOfslidesToShowOnce;
  sliderBody.style.width =
    (viewport * numberOfSlides) / numbOfslidesToShowOnce + "px";
  inpNumberOfSlides.value = "";
});

document.querySelector("#next").addEventListener("click", () => {
  if (startSlide < numberOfSlides - 1) {
    startSlide++;
  } else {
    startSlide = 0;
  }
  sliderBody.style.left =
    (-startSlide * viewport) / numbOfslidesToShowOnce + "px";
});

document.querySelector("#prev").addEventListener("click", () => {
  if (startSlide > 0) {
    startSlide--;
  } else {
    startSlide = numberOfSlides - 1;
  }
  sliderBody.style.left =
    (-startSlide * viewport) / numbOfslidesToShowOnce + "px";
});

document.querySelector("#imgButton").addEventListener("click", () => {
  alert("hello");
});

// swipe - start
let mouseIsDown = false;

viewportBody.ondragstart = function () {
  return false;
};
let startX = 0;
let endX = 0;

viewportBody.addEventListener("pointerdown", (e) => {
  startX = e.clientX;
  mouseIsDown = true;
});

document.addEventListener("pointerup", (e) => {
  endX = e.clientX;

  if (mouseIsDown) {
    sliderBody.style.left =
      (-startSlide * viewport) / numbOfslidesToShowOnce +
      (endX - startX) +
      "px";
  }

  console.log(startX - endX);
  mouseIsDown = false;
});

// swipe - end