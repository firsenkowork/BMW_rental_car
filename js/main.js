$(document).ready(function () {
  $(".top__slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button__next",
    prevEl: ".slider-button__prev",
  },
  autoplay: {
    delay: 4000,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});







//...........Меню Бургер............................................................................................................

 // Создаем константу для кнопки бургера и выезжаещего меню
const headerbutton = document.querySelector(".header-button");
const navbar = document.querySelector(".navbar");

// Делаем проверку существует ли такой класс
if (headerbutton) {
  // Создаем событие клик
   headerbutton.addEventListener("click", function (e) {

     // Уберам прокрутку пири открытие меню
     document.body.classList.toggle("lock");
     //  Обращаюсь к самой иконке класс в сасс пишем без точки
     headerbutton.classList.toggle("active");
     navbar.classList.toggle("active");

   });

}

//...........Прокрутка к нужному разделу................................................

const navbarMenu = document.querySelectorAll(".navbar-item__link[data-goto]");
// проверка если что то из этого так
if (navbarMenu.length > 0) {
  navbarMenu.forEach(navbarMen => {

    // вешаем событие клик
    navbarMen.addEventListener('click', onnavbarMenClick);
    
  });


  // создаем функцию onnavbarMenClick которую написали выше
  function onnavbarMenClick(e) {
    // Сдесь мы должны получить обьект на котрый мы кликаем
    const navbarMen = e.target;
    // Строим условие заполнин ли этот атрибут еслть ли там что то, для избежания ошибок
    if (navbarMen.dataset.goto && document.querySelector(navbarMen.dataset.goto)){
      const gotoBlock = document.querySelector(navbarMen.dataset.goto);
      // высчитываем положения обьекта с учетом высоты шапки
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;




      //.....Закрыте окна меню после нажатия на нужный раздел......................................

      // мы должны проверить если обьект иконки менб актив
      if(headerbutton.classList.contains('active')) {
        // должны убрать классы (из тогл в ремув)
         document.body.classList.remove("lock");
         headerbutton.classList.remove("active");
         navbar.classList.remove("active");
      }
      // ...........................................................................................

      //...Плавная прокрутка......
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      
      // отключаем работу ссылки что бы никуда не перешло на сторний сайт
      e.preventDefault();

    }
  }
}

//................Конец меню бургер.....................................................................................................
