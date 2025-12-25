// ===============================
// Node.js readline + fs
// ===============================

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ===============================
// ЗАДАНИЕ 3
// Цикл ввода строк + append в log.txt
// ===============================

function task3() {
  console.log("Введите строки. Напишите 'stop' для завершения.");

  rl.on("line", (line) => {
    if (line.toLowerCase() === "stop") {
      console.log("Программа завершена.");
      rl.close();
      return;
    }

    fs.appendFile("log.txt", line + "\n", (err) => {
      if (err) {
        console.error("Ошибка записи в log.txt");
      }
    });
  });
}

// ===============================
// ЗАПУСК
// ===============================

task3();
