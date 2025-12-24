// 1. Сравнение a и b
let a = 7;
let b = 5;

if (a > b) {
  console.log('Большее a');
} else {
  console.log('Большее b');
}

// 2. Проверка имени
let name = prompt('Введите имя');

if (name === '') {
  console.log('Имя пустое');
} else if (name.length < 2) {
  console.log('Имя слишком короткое');
} else if (name.length > 50) {
  console.log('Имя слишком длинное');
} else {
  console.log(name);
}

// 3. Алгоритм без циклов
a = 5; // ❗ НЕ let, а просто присваивание

if (a > 10) {
  console.log('a > 10');
} else {
  a = a + 1;
  console.log('a увеличено на 1:', a);
}
