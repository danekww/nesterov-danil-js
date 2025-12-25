// ===== 1. Проверка email =====
function inputEmail() {
  const email = prompt("Введите email:");

  const emailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z.]+\.[a-zA-Z]{2,6}$/;

  if (emailRegex.test(email)) {
    alert("Email корректный ✅");
  } else {
    alert("Ошибка ❌ Некорректный email");
  }
}

// ===== 2. Проверка города =====
function inputCity() {
  const cityRegex = /^[А-Яа-яA-Za-z\s-]{2,}$/;

  while (true) {
    const city = prompt("Введите город проживания:");

    if (cityRegex.test(city)) {
      alert("Город принят ✅");
      break;
    } else {
      alert("Ошибка ❌ Введите корректное название города");
    }
  }
}
