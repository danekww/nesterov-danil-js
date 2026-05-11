[README.md](https://github.com/user-attachments/files/27589937/README.md)
# Работа с постами и алгоритмом

Выполнил: Нестеров Данил Юрьевич  
Группа: 229ВР

## Описание

Это работа по ОАИП.  
В проекте сделаны две части: работа с сетью и алгоритмическая задача.

В первой части страница получает посты с API и выводит их в виде карточек.  
Также есть форма для создания нового поста. Форма отправляет POST-запрос без перезагрузки страницы.

Во второй части сделана функция сжатия строки методом Run-Length Encoding.  
Функция заменяет повторяющиеся символы на символ и количество повторений.

## Что сделано

- получение постов с API;
- вывод постов на страницу;
- форма для создания нового поста;
- POST-запрос через fetch;
- отправка формы без перезагрузки страницы;
- обработка ошибок через try-catch;
- алгоритм сжатия строки;
- учёт регистра символов;
- удаление цифр из исходной строки перед сжатием;
- проверка длины сжатой строки.

## API

Получение постов:

```text
GET https://jsonplaceholder.typicode.com/posts
```

Создание поста:

```text
POST https://jsonplaceholder.typicode.com/posts
```

## Алгоритмическая задача

Задача: сжатие строки.

Пример:

```text
aaabbcdddd -> a3b2c1d4
```

Если сжатая строка получается длиннее исходной строки, функция возвращает исходную строку.

В усложнении учитывается регистр символов.  
Например, символы `a` и `A` считаются разными.

Цифры из исходной строки удаляются перед сжатием, чтобы не было путаницы при расшифровке.

Пример:

```text
aaaAA22bbb -> a3A2b3
```

## Запуск

Нужно открыть файл `index.html` в браузере.

---

# Posts and algorithm work

Completed by: Nesterov Danil Yuryevich  
Group: 229VR

## Description

This is an OAIP assignment.  
The project includes two parts: working with network requests and an algorithm task.

In the first part, the page loads posts from the API and displays them as cards.  
There is also a form for creating a new post. The form sends a POST request without reloading the page.

In the second part, there is a string compression function using Run-Length Encoding.  
The function replaces repeated characters with the character and the number of repetitions.

## What was done

- loading posts from the API;
- displaying posts on the page;
- form for creating a new post;
- POST request using fetch;
- form submission without page reload;
- error handling using try-catch;
- string compression algorithm;
- case-sensitive character processing;
- removing digits from the source string before compression;
- checking the length of the compressed string.

## API

Getting posts:

```text
GET https://jsonplaceholder.typicode.com/posts
```

Creating a post:

```text
POST https://jsonplaceholder.typicode.com/posts
```

## Algorithm task

Task: string compression.

Example:

```text
aaabbcdddd -> a3b2c1d4
```

If the compressed string is longer than the source string, the function returns the original string.

The improved version is case-sensitive.  
For example, `a` and `A` are treated as different characters.

Digits are removed from the source string before compression to avoid confusion during decoding.

Example:

```text
aaaAA22bbb -> a3A2b3
```

## How to run

Open the `index.html` file in a browser.
