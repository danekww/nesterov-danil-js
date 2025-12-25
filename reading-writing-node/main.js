// ================================
// Чтение и запись файла
// Работа с консольным вводом
// ================================

const fs = require("fs");
const readline = require("readline");

// -------------------------------
// ЗАДАНИЕ 1
// Ввод строки и запись в output.txt
// -------------------------------

const rl1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl1.question("Введите строку текста: ", (text) => {
  fs.writeFile("output.txt", text, (err) => {
    if (err) {
      console.log("Ошибка записи в output.txt");
      return;
    }
    console.log("Текст сохранён в output.txt");
    rl1.close();
  });
});

// -------------------------------
// ЗАДАНИЕ 2
// Чтение data.txt и подсчёт
// -------------------------------

fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Ошибка чтения data.txt");
    return;
  }

  const lines = data.split("\n").length;
  const chars = data.length;

  console.log("Количество строк:", lines);
  console.log("Количество символов:", chars);
});

// -------------------------------
// ЗАДАНИЕ 3
// Цикл ввода + append в log.txt
// -------------------------------

const rl2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Введите строки. Напишите 'stop' для завершения.");

rl2.on("line", (line) => {
  if (line.toLowerCase() === "stop") {
    console.log("Программа завершена.");
    rl2.close();
    return;
  }

  fs.appendFile("log.txt", line + "\n", (err) => {
    if (err) {
      console.log("Ошибка записи в log.txt");
    }
  });
});