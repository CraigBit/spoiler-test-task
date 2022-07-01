const headers = document.querySelectorAll("[data-name='spoiler-label']");

headers.forEach(function (item) {
  item.addEventListener('click', headerClick);
});

function headerClick() {
  this.classList.toggle('label-active');
  this.nextElementSibling.classList.toggle('spoiler-content');
}
