"use strict";
let viewport = document.getElementById("viewport").offsetWidth;
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

inpNumberOfSlides.addEventListener("change", ()=>{
  if (isNaN(+inpNumberOfSlides.value)) {
    alert("Enter a NUMBER pls !!!!");
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

document.querySelector('#imgButton').addEventListener('click', ()=>{
  console.log("hello");
})
