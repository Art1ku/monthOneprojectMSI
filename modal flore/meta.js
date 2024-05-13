// Получаем элементы модального окна и кнопку закрытия
const modal = document.getElementById("myModal");
const img = document.getElementById("myImage");
const modalImg = document.querySelector(".modal-content img");
const span = document.getElementsByClassName("close")[0];

// Привязываем обработчик события к картинке - открываем модальное окно при клике
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Закрываем модальное окно при клике на крестик
span.onclick = function() {
  modal.style.display = "none";
}

// Закрываем модальное окно при клике за его пределами
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
