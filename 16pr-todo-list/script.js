// Выполнил: Нестеров Данил Юрьевич

const todoItems = document.querySelectorAll('.todo__item');

todoItems.forEach(function (item) {
  const button = item.querySelector('.todo__btn');

  button.onclick = function () {
    item.classList.toggle('done');
  };
});
