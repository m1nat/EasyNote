export const preloaderMainPage = () => {

  setTimeout( function () {
    const preloader = document.querySelector('.wrapper-spinner');

    if (!(preloader.classList.contains('done'))) {
      preloader.className = 'done';
    }
    
  }, 1200);

};
