// ================== ИМПОРТЫ ==================
const readline = require("readline");
const fs = require("fs");

// ================== READLINE ==================
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ================== ГЛОБАЛЬНЫЕ ДАННЫЕ ==================
let currentUser = null;
let userPosts = [];
let userTasks = [];

// ================== ГЛАВНОЕ МЕНЮ ==================
function menu() {
  console.log("\n=== ГЛАВНОЕ МЕНЮ ===");
  console.log("1 - Войти");
  console.log("0 - Выйти");

  rl.question("Выберите действие: ", (choice) => {
    if (choice === "1") {
      login();
    } else if (choice === "0") {
      console.log("👋 До свидания");
      rl.close();
    } else {
      console.log("❌ Неверный выбор");
      menu();
    }
  });
}

// ================== ВХОД В СИСТЕМУ ==================
function login() {
  console.log("\n=== ВХОД В СИСТЕМУ ===");

  rl.question("Введите email: ", async (email) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();

      const user = users.find((u) => u.email === email);

      if (!user) {
        console.log("❌ Пользователь не найден");
        return menu();
      }

      rl.question("Введите пароль: ", (password) => {
        const correctPassword = user.username + "12345";

        if (password !== correctPassword) {
          console.log("❌ Неверный пароль");
          return menu();
        }

        console.log("✅ Успешный вход");
        currentUser = user;
        loadUserData();
      });
    } catch (err) {
      console.log("❌ Ошибка загрузки данных");
      menu();
    }
  });
}

// ================== ЗАГРУЗКА ПОСТОВ И ЗАДАЧ ==================
async function loadUserData() {
  try {
    const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts");
    const tasksRes = await fetch("https://jsonplaceholder.typicode.com/todos");

    const posts = await postsRes.json();
    const tasks = await tasksRes.json();

    userPosts = posts.filter((p) => p.userId === currentUser.id);
    userTasks = tasks.filter((t) => t.userId === currentUser.id);

    userMenu();
  } catch (err) {
    console.log("❌ Ошибка загрузки данных");
    menu();
  }
}

// ================== МЕНЮ ПОЛЬЗОВАТЕЛЯ ==================
function userMenu() {
  console.log("\n=== МЕНЮ ПОЛЬЗОВАТЕЛЯ ===");
  console.log("1 - Показать данные пользователя");
  console.log("2 - Показать посты");
  console.log("3 - Показать задачи");
  console.log("4 - Сохранить всё в файлы");
  console.log("5 - Выйти");

  rl.question("Выберите действие: ", (choice) => {
    switch (choice) {
      case "1":
        showUserData();
        break;
      case "2":
        showUserPosts();
        break;
      case "3":
        showUserTasks();
        break;
      case "4":
        saveAllToFiles();
        break;
      case "5":
        console.log("👋 Выход из аккаунта");
        currentUser = null;
        menu();
        break;
      default:
        console.log("❌ Неверный выбор");
        userMenu();
    }
  });
}

// ================== ДЕЙСТВИЯ ==================
function showUserData() {
  console.log("\n👤 ДАННЫЕ ПОЛЬЗОВАТЕЛЯ");
  console.log(currentUser);
  userMenu();
}

function showUserPosts() {
  console.log("\n📝 ПОСТЫ");
  userPosts.forEach((p) => {
    console.log(`- ${p.title}`);
  });
  userMenu();
}

function showUserTasks() {
  console.log("\n📌 ЗАДАЧИ");
  userTasks.forEach((t) => {
    console.log(`- ${t.title} [${t.completed ? "✓" : " "}]`);
  });
  userMenu();
}

function saveAllToFiles() {
  fs.writeFileSync("user.txt", JSON.stringify(currentUser, null, 2));
  fs.writeFileSync("posts.txt", JSON.stringify(userPosts, null, 2));
  fs.writeFileSync("tasks.txt", JSON.stringify(userTasks, null, 2));

  console.log("💾 Данные сохранены в файлы");
  userMenu();
}

// ================== СТАРТ ==================
menu();