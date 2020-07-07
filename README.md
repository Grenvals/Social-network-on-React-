# [Ukraine Develorers Network](https://ukrainedn.herokuapp.com/)

   Social network & news portal based on React/Redux architecture.
   
## [Review](https://www.youtube.com/watch?v=wipq1YQxvFU)
[![Review](https://user-images.githubusercontent.com/40334272/85372438-8312cf00-b53a-11ea-885f-b994aba5a635.jpg)](https://www.youtube.com/watch?v=wipq1YQxvFU)

   Always in childhood dreamed of creating a social network. I would be grateful for any comments and suggestions for improving the code.

## 🌎 [Demo online](https://ukrainedn.herokuapp.com/) (heroku)

   Google news don't work through CORS, if you want to test it, you must download and run application in local host. Sometimes through server overload, there may be errors.
  
## 📂 Folder structure 

 ```
src
   ├── api               /* side effects, requests 
   └── assets            /* images, fonts, additional files
   |     ├── fonts
   |     ├── audio
   |     └── image
   └── components 
   |     └── common      /* reusable components
   |      ...             
   |     ├── Login       /* main components, route structure
   |     ├── Profile
   |     ├── Dialogs
   |     ├── Users
   |     ├── News
   |     ├── Settings
   |     └── NotFound 
   ├── hoc               /* higher order components
   ├── redux             /* reducers, action, action creator, thunks
   ├── scss              /* global style, mixins, vars
   ├── selectors         /* selectors
   └── utils             /* handlers, validation, other...
    
```
 ## 💻 Technology stack
- ### Architecture 
     - **UI**(React), **BLL**(Redux), **DAL**(Axios, Thunk)
     
- ### Shell  
   - Для створення проекту використовував CRA. Частина додатку написана на класах, частина переписана з використанням хуків.
   
- ### Design 
   - Дизайн. Робив самостійно, черпаючи натхнення з bexance, apple і facebook. Стиль вибрав мінімалізм, metro, flat, частково з елементами сковоморфізму.
   
- ### Layout 
   * **Стилізація**. Довго вибирав на чому почати, так як багато підходів. В результаті використав звязку: 
     * **css modules** - вирішує проблему глобальності
     * **sass(scss)** - для використання змінних, міксинів і вложеності
     * **BEМ** - в даному випадку так як частину його функцій приймають на себе модулі, дозволяє розкрити scss і зручно створювати вложеність, ділити компонент на підблоки.
     * Для кастомізації скролбара використовував **react-perfect-scrollbar**.
     * Для зручного комбінування класів підключив бібліотеку **classnames**.
     * Для стилізації select використав **react-select**.
   - **Grid**. За основу взяв **flex**, в деяких місцях юзав grid. Boootstrap з Materialize вирішив не використовувати, так як все одно готові компоненти потрібно трансформувати і перебивати своїми стилями, а побудова сітки з приходом flex не займає багато часу.
   - **Адаптив**: Використав стандартний **responsive** підхід, резинова + адаптивна верстка. Для відключення рендерингу незаюзаних компонентів в залежності від ширини використав бібліотку **react-responsive**(моніторить resize, innerWidth)
   - **Анімації**. Всі анімації писав вручну, без підключення бібліотек. Щоб звязати анімації переходів з життєвим циклом компонентів в деяких місцях використав бібліотеку **react-transition-group**.
   
- ### Store
   - Для зберігання глобального стану додатка спочатку писав спрощений аналог redux  щоб зрозуміти його будову і проблеми які він вирішує, далі використовував традиційно **redux, react-redux**, щоб зручно використовувати redux всередині react(connect).
   
- ### Route
   - Для реалізації роутинга використав бібліотеку **react-router-dom**
   
- ### API 
   - Для роботи з REST API використовав бібліотеку **axios**. Для того щоб мати можливість створювати асинхронні action, сайд ефекти, підключив **redux-thunk**.  
   
- ### Forms 
   - Підключив redux-form, але не дуже подобається що redux-form створює свою гілку в глобальному сторі редакса. Всетаки дані мають оброблятись на локальному рівні. Частина написана без використання бібліотеки. 
   
- ### Selectors 
   - Для кешування селекторів використав **react-select**.
  
 ## 💻 Implemented functionality 
 
 - ### **Header** 
   - *Відображення даних авторизованого користувача (Логін/Фото)*
   - *LogIN/LogOut в залежності від авторизації з перенаправленням на сторінку логінізації.*
       
- ### **Login** 
   - *Форма введення авторизаційних даних (логін/пароль) з валідацію на стороні клієнта та сервера.*
   - *Капча, з кнопкою оновлення (спрацьовує, коли більше 4 разів введено невірний пароль).*
   - *Перенаправлення на профайл при успішній логінізації, перенаправлення з інших сторінок якщо користувач не авторизований.*
       
- ### **Profile**
   - **Інформація про користувача.**
     - *Зміна режиму (авторизований користувач/перегляд профілей користувачів)*
     - *Відображення та зміна основного фото користувача.*
     - *Відображення та редагування статусу.*
     - *Відображення даних About user, Looking for a job, Website, Contacts (facebook, twitter, instagram, github, website).*
     - *Кнопка редагування профілю з перенаправленням на сторінку налаштувань/кнопка відправлення повідомлення, якщо профайл в режимі перегляду.*
   - **Пости** 
     - *Створення та видалення постів (зміни на даний час зберігаються локально).*
         
- ### **Dialogs**
   - *Cписки діалогів і повідомлень (оновлюється кожних 15 секунд)*
   - *Форма відправки повідомлення з валідацією*
   - *Функціонал переключення між активними діалогами* 
   - *Функціонал відправки і отримання повідомлень* 
   - *Відображення кількості нових повідомлень для кожного діалогу*
      
- ### **Users**
   - *Список користувачів*
   - *Зміна кількості користувачів на сторінці*
   - *Пагінація*
   - *Підписка/відписка на користувача*
   - *Створення діалогу з користувачем*
   - *Перегляд профіля вибраного користувача*
      
- ### **News**
   - *Список новин* 
   - *Зміна кількості новин на сторінці*
   - *Вибір категорії* 
   - *Пагінація*
   - *Кількість знайдених результатів*
   - *Зміна вигляду(tablet/list/large)*
      
 - ### **Settings**
   - *Зміна фото користувача, імені, статусу, статусу активного пошуку, опису, детального опису, контактів.*
      
 - ### **Sidebars**
   - *Панель навігації* 
   - *Панель активних діалогів з автооновленням*
   - *Панель відображення останніх новин з автооновленням*
   - *Панель кількості  зареєстрованих користувачів/версії додатка.* 
   - *Аудіоплеэр для фону з переключенням стану Грати/Пауза.*
      
 - ### **Notifications**
   - *Система відображення очікування відповіді від серверу.*
   - *Система відображення повідомлень.*
   - *Обробка і виведення помилок.*
   
## 📱 Authentication, API keys
  -  In the application set default API keys fot tests, you can use it, but they have limit of requests.
  -  You can generate your new keys here and set their in api.js: 
      - [Google News API](https://newsapi.org/s/google-news-api)
      - [Social Network API](https://social-network.samuraijs.com/) (also you can register new user)

## 🚀 Running aplication local in 5 Minutes
You can running aplication on your local dev environment in 5 minutes with these steps:
1. **Install Node.js** [download](https://nodejs.org/en/). 
2. **Install Yarn** [download](https://classic.yarnpkg.com/en/docs/install#windows-stable). 
3. **Download my repository** . 
4. **Install dependencies** .

   Open CLI in aplication folder and set up in a single command:
  
   ```shell
   yarn install
   
   ```
5. **Start aplication** .

   Set up in a single command in CLI:
  
   ```shell
   yarn start
   
   ```
 ## 📱 Needs to be improved
  -  Замінити redux-form на formic.
  -  Написати свій бек, так як google news працює тільки локально, а основний сервер дуже повільний і часто не витримує навантаження.
  
 ## 📷 Screenshots
![1](https://user-images.githubusercontent.com/40334272/85372502-9e7dda00-b53a-11ea-9796-f6191a5720a8.png)
![2](https://user-images.githubusercontent.com/40334272/85372520-a5a4e800-b53a-11ea-91ef-7f6d793e2e4b.png)
![3](https://user-images.githubusercontent.com/40334272/85372523-a6d61500-b53a-11ea-9866-ca9dff8ddd0d.png)
![4](https://user-images.githubusercontent.com/40334272/85372525-a6d61500-b53a-11ea-9baa-35daeb9e7bda.png)
![5](https://user-images.githubusercontent.com/40334272/85372527-a76eab80-b53a-11ea-828f-cda6815c7468.png)
![6](https://user-images.githubusercontent.com/40334272/85372531-a76eab80-b53a-11ea-840a-c1fb28fe4d3d.png)

