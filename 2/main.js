// ==============================
// Задание. POST запросы + ошибки
// ==============================

// ---------- 1. createUser ----------
async function createUser(name, email, phone) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone
      })
    });

    if (!response.ok) {
      throw new Error('Ошибка при создании пользователя');
    }

    const user = await response.json();
    console.log('Пользователь создан:');
    console.log(user);

    return user;
  } catch (error) {
    console.error('Ошибка:', error.message);
  }
}

// ---------- 2. createPost ----------
async function createPost(title, body, userId) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId
      })
    });

    if (!response.ok) {
      throw new Error('Ошибка при создании поста');
    }

    const post = await response.json();
    console.log('Пост создан:');
    console.log(post);

    return post;
  } catch (error) {
    console.error('Ошибка:', error.message);
  }
}

// ==============================
// Примеры вызова функций
// ==============================

createUser(
  'Danil',
  'danil@mail.com',
  '+7 999 123-45-67'
);

createPost(
  'Мой первый пост',
  'Это тело поста, отправленного через fetch',
  1
);
