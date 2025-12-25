const fs = require("fs");
const readline = require("readline");

// получаем имя файла из аргументов
const fileName = process.argv[2];

if (!fileName) {
  console.log("Ошибка: укажите имя файла");
  process.exit(1);
}

// 1. Читаем файл для контекста
try {
  const oldText = fs.readFileSync(fileName, "utf-8");
  console.log("Текущий текст файла:\n");
  console.log(oldText);
} catch (error) {
  console.log("Ошибка чтения файла");
  process.exit(1);
}

// 2. Консольный ввод
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("\nВведите новый текст для файла:\n", (newText) => {

  // 3. Полная перезапись файла
  fs.writeFile(fileName, newText, (err) => {
    if (err) {
      console.log("Ошибка записи файла");
    } else {
      console.log("Файл успешно перезаписан ✅");
    }
    rl.close();
  });

});
