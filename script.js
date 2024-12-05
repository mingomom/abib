document.addEventListener(`DOMContentLoaded`, function () {

  // 3.aos 연결
  AOS.init({
    duration: 2000,
  });

  // 서브메뉴 탭 연결
  const subMenuBox = document.querySelector(`.submenu_box`);
  const mainMenu = document.querySelectorAll(`.main_menu li`);
  // 1. .main_menu li(data-tab)에 mouseenter 시 .submenu_box 가 보여지도록
  for (const liDataTab of mainMenu) {
    liDataTab.addEventListener(`mouseenter`, function () {
      subMenuBox.classList.add(`on`);

      // 2. getAttribute 로 li의 data-tab 가져오기
      const liData = this.getAttribute(`data-tab`);
      const subMenu = document.querySelectorAll(`.submenu`);
      // 3. .submenu_box의 ul 개별 추출 -> 전체 서브메뉴 제거(클래스명 제거), 동일한 아이디명을 가진 서브메뉴 출력
      for (const subMenuList of subMenu) {
        subMenuList.classList.remove(`on`);
        const changeTab = document.querySelector(`#${liData}`);
        changeTab.classList.add(`on`);
      }
      // 4. .submenu_box 에서 mouseleave 시 .submenu_box 가 가려지도록
      subMenuBox.addEventListener(`mouseleave`, function () {
        this.classList.remove(`on`);
      });
    });
  }

  // swiper 연결
  var swiper = new Swiper(".slide_mask", {
    loop: false,

    breakpoints: {
      1480: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
      },
      960: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
      },
      760: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
    },

    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
  });
  // 햄버거버튼(#hamburger)에 클릭하면 박스(.hamburger_list) 내려오게
  const hamburgerBtn = document.querySelector(`.menu_wrap .container #hamburger`);
  const hamburgerList = document.querySelector(`.hamburger_list`);
  const hamburgerSpan = document.querySelectorAll(`#hamburger span`);
  
    hamburgerBtn.addEventListener(`click`, function (){
    hamburgerBtn.classList.toggle(`on`);
    hamburgerList.classList.toggle(`on`);
    });
  //스크롤 이벤트
  const sec3 = document.querySelector(`.sec_3`);

  window.addEventListener(`scroll`, function () {
    const scrollTop = window.scrollY;
    
    for (const spanWhite of hamburgerSpan) {
      
    const sec3OffsetTop = sec3.offsetTop - 400;
    const body = document.querySelector(`body`);
    const menuBar = document.querySelector(`.menu_wrap`);
    const topBtn = document.querySelector(`.top_btn`);

    if (scrollTop > sec3OffsetTop) {
      body.classList.add(`bg`);
      menuBar.classList.add(`on`);
      topBtn.classList.add(`active`);
      spanWhite.style.backgroundColor = `#fff`;
    } else {
      body.classList.remove(`bg`);
      menuBar.classList.remove(`on`);
      topBtn.classList.remove(`active`);
      spanWhite.style.backgroundColor = `#000`;
      }
    };
  });

});
