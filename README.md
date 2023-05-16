# Учебный проект для Сберуниверситета "Интернет-магазин кормов для собак DogFood"

:dog:
:dog2:
:guide_dog:
:service_dog:
:poodle:
:wolf:

Этот проект создавался на основе [React](https://github.com/facebook/create-react-app).

## Использованные технологии

1. [Create React App.](https://github.com/facebook/create-react-app)
2. [React Router.](https://reactrouter.com/en/main)
3. [Classnames.](https://www.npmjs.com/package/classnames)
4. [NewsAPI.](https://newsapi.org/docs/client-libraries/node-js)

## Доступные скрипты

В директории проекта можно запустить:

### `npm start`
Запускает приложение в режиме разработки.\
Откройте [http://localhost:3000](http://localhost:3000) для просмотра в вашем браузере.
Страница перезапускается при внесении изменений в код.

## Основной функционал проекта

- Главная страница с баннером и тремя рекламными блоками
-- Главная страница адаптирована под мобильную версию
-- Рекламные блоки разбавленыкарточками с продуктами
- Карточки с товарами и поиск доступен только для авторизованных пользователей. Если пользователь не авторизован, он видит только рекламу и не может переходить по другим страницам сайта.
- Возможность регистрации нового пользователя и авторизации.
- Получение товаров от сервера и возможность их просмотра в каталоге с поиском по названию.
- Добавлена сортировка по цене на странице Catalog


## TODO
- Добавить шрифт, как на макете npm i @font/nunito (найти кириллицу?)
- Выводить на страницу подборки, как на макете исходя из тега. Например, блок с товарами по скидке. Фильтровать массив по тегу.
- Сверстатm по макету карточку каждого товара
- Сверстать и наполнить страницу профиля - передавать в провайл токе и делать по токену запрос с инфой о пользователе (аватар, имя, мейл)
- Сверстать блок с новостями, в качестве API можно использовать находку Лексы
{Для работы - надо зарегистрироваться и получить API-токен

https://newsapi.org/docs

Пример запроса:
https://newsapi.org/v2/everything?language=ru&q=собаки&apiKey=<тут ваш токен>}
- Настоить фетч для этого API и этого блока, чтобы отображать 4 последние новости
- Хлебные крошки в каталоге.
