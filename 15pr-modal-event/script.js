// Выполнил: Нестеров Данил Юрьевич

// -------------------------
// Задача 1: модалка-подтверждение
// -------------------------

const deleteProfileBtn = document.querySelector('#deleteProfileBtn');
const confirmModal = document.querySelector('#confirmModal');
const cancelDeleteBtn = document.querySelector('#cancelDeleteBtn');
const confirmDeleteBtn = document.querySelector('#confirmDeleteBtn');

deleteProfileBtn.addEventListener('click', function () {
  confirmModal.classList.remove('hidden');
});

cancelDeleteBtn.addEventListener('click', function () {
  confirmModal.classList.add('hidden');
});

confirmDeleteBtn.addEventListener('click', function () {
  console.log('Профиль удален');
  confirmModal.classList.add('hidden');
});

// В первой задаче закрытие реализовано только по кнопкам.


// -------------------------
// Задача 2: галерея картинок
// -------------------------

const gallery = document.querySelector('#gallery');
const imageModal = document.querySelector('#imageModal');
const modalImage = document.querySelector('#modalImage');
const closeImageModalBtn = document.querySelector('#closeImageModalBtn');

gallery.addEventListener('click', function (event) {
  if (event.target.tagName === 'IMG') {
    const imageSrc = event.target.dataset.full;

    modalImage.src = imageSrc;
    imageModal.classList.remove('hidden');
  }
});

closeImageModalBtn.addEventListener('click', function () {
  imageModal.classList.add('hidden');
  modalImage.src = '';
});


// -------------------------
// Задача 3: умная форма
// -------------------------

const openSubscribeBtn = document.querySelector('#openSubscribeBtn');
const subscribeModal = document.querySelector('#subscribeModal');
const subscribeContent = document.querySelector('#subscribeContent');
const subscribeForm = document.querySelector('#subscribeForm');
const emailInput = document.querySelector('#emailInput');

openSubscribeBtn.addEventListener('click', function () {
  subscribeModal.classList.remove('hidden');
  emailInput.value = '';
  emailInput.classList.remove('input-error');
});

subscribeModal.addEventListener('click', function () {
  subscribeModal.classList.add('hidden');
});

subscribeContent.addEventListener('click', function (event) {
  event.stopPropagation();
});

subscribeForm.addEventListener('submit', function (event) {
  event.preventDefault();

  if (emailInput.value.trim() === '') {
    emailInput.classList.add('input-error');
    return;
  }

  console.log('Успех!');
  subscribeModal.classList.add('hidden');
});
