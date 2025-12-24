// =======================================
// Задание 1. Получить список юзеров
// =======================================

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка при получении пользователей');
    }
    return response.json();
  })
  .then(users => {
    console.log('Имена пользователей:');
    users.forEach(user => {
      console.log(user.name);
    });
  })
  .catch(error => {
    console.error('Ошибка:', error.message);
  });


// =======================================
// Задание 2. Асинхронная функция getPost(id)
// =======================================

async function getPost(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!response.ok) {
      throw new Error('Ошибка при получении поста');
    }

    const post = await response.json();
    console.log('Пост с id =', id);
    console.log(post);

    return post;
  } catch (error) {
    console.error('Ошибка:', error.message);
  }
}

// пример вызова функции
getPost(1);