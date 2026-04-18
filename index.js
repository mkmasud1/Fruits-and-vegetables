        var swiper = new Swiper(".home", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });



      let menu = document.querySelector('#menu_icon');
      let navbar = document.querySelector('.naav');

      menu.onclick = () =>{
        menu.classList.toggle('masud');
        navbar.classList.toggle('naav');
      }

      window.onscroll = () => {
        menu.classList.remove('masud');
        navbar.classList.remove('naav');
      }
