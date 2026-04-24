// Выполнил: Нестеров Данил Юрьевич

// Задание 1: счётчик-настройщик
let value1 = 0;

const counter1 = document.querySelector('#counter1');
const stepInput = document.querySelector('#step');
const plus1 = document.querySelector('#plus1');
const minus1 = document.querySelector('#minus1');

plus1.addEventListener('click', function () {
  const step = Number(stepInput.value);
  value1 = value1 + step;
  counter1.textContent = value1;
});

minus1.addEventListener('click', function () {
  const step = Number(stepInput.value);
  value1 = value1 - step;
  counter1.textContent = value1;
});

// Задание 2: светофор
let value2 = 0;

const counter2 = document.querySelector('#counter2');
const plus2 = document.querySelector('#plus2');
const minus2 = document.querySelector('#minus2');

function updateColor() {
  if (value2 > 0) {
    counter2.style.color = 'green';
  } else if (value2 < 0) {
    counter2.style.color = 'red';
  } else {
    counter2.style.color = 'black';
  }
}

plus2.addEventListener('click', function () {
  value2 = value2 + 1;
  counter2.textContent = value2;
  updateColor();
});

minus2.addEventListener('click', function () {
  value2 = value2 - 1;
  counter2.textContent = value2;
  updateColor();
});

// Задание 3: уровень заряда
let value3 = 0;

const counter3 = document.querySelector('#counter3');
const statusText = document.querySelector('#status');
const plus3 = document.querySelector('#plus3');
const minus3 = document.querySelector('#minus3');

function updateStatus() {
  counter3.textContent = value3;

  if (value3 < 20) {
    statusText.textContent = 'Низкий заряд';
  } else if (value3 >= 20 && value3 <= 80) {
    statusText.textContent = 'Средний заряд';
  } else {
    statusText.textContent = 'Полный заряд!';
  }
}

plus3.addEventListener('click', function () {
  if (value3 < 100) {
    value3 = value3 + 1;
  }

  updateStatus();
});

minus3.addEventListener('click', function () {
  if (value3 > 0) {
    value3 = value3 - 1;
  }

  updateStatus();
});
