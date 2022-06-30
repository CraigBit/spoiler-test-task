const headers = document.querySelectorAll("[data-name='spoiler-title']");

headers.forEach(function (item) {
  item.addEventListener('click', headerClick);
});

function headerClick() {
  this.classList.toggle('title-active');
  this.nextElementSibling.classList.toggle('spoiler-body');
}
