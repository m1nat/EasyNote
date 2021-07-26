const btn = document.querySelector('.aside-actions');
const menu = document.querySelector('.menu');
const back = document.querySelector('.back');

export const createNoteHandlers = () => {

  btn.onclick = () => {
    menu.className = 'menu-show';
    btn.style.display = 'none';
  };
  
  back.onclick = () => {
    menu.className = 'menu';
    btn.style.display = 'block';
  };

};
