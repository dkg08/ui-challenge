let accordionList = document.getElementsByClassName("accordion");
console.log(accordionList);
for (let i = 0; i < accordionList.length; i++) {
  accordionList[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panelElement = this.nextElementSibling;
    panelElement.style.display =
      panelElement.style.display === "block" ? "none" : "block";
    this.lastChild.innerText =
      panelElement.style.display === "block" ? "-" : "+";
  });
}
