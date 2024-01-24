const slideshowData = [
  {
    id: 1,
    caption: "caption one",
    imageLink: "./images/images.jpeg",
  },
  {
    id: 2,
    caption: "caption two",
    imageLink: "./images/img-2.jpg",
  },
  {
    id: 3,
    caption: "caption three",
    imageLink: "./images/image-3.jpeg",
  },
  {
    id: 4,
    caption: "caption four",
    imageLink: "./images/img-4.jpg",
  },
];

let slideIndex = 1;
showSlide(slideIndex);

function showSlide(n) {
  slideIndex = n;
  document.querySelector(
    ".image-count"
  ).innerHTML = `${n}/${slideshowData.length}`;
  document.querySelector(".caption").innerHTML = slideshowData[n - 1].caption;
  document.querySelector(".container").style.backgroundImage = `url(${
    slideshowData[n - 1].imageLink
  })`;
}

let leftArrowElement = document.querySelector(".left-arrow");
let rightArrowElement = document.querySelector(".right-arrow");

leftArrowElement.addEventListener("click", function () {
  if (slideIndex == 1) {
    slideIndex = slideshowData.length;
  } else {
    slideIndex -= 1;
  }
  showSlide(slideIndex);
});
rightArrowElement.addEventListener("click", function () {
  if (slideIndex == slideshowData.length) {
    slideIndex = 1;
  } else {
    slideIndex += 1;
  }
  showSlide(slideIndex);
});
