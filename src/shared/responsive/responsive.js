
export const responsive414px = () => {
  const body = document.getElementsByTagName('body')[0];
  const menu = document.querySelector('.menu-show');
  const board = document.querySelector('.midle-create-board-main');
  const galery = document.querySelector('.galery');
  const aside = document.querySelector('.aside-board-items')
  const boardCreate = document.getElementsByClassName('board-create');
  const note = document.querySelectorAll('.tc-note');


  menu.onclick = () => {
    if (body.clientWidth == 414) {
      board.style.width = '210px';
    } 
    board.onclick = () => {
      board.style.width = '360px';
      galery.style.display = 'none';
    }
  }

}


export const responsive375px = () => {
  const body = document.getElementsByTagName('body')[0];
  const menu = document.querySelector('.menu-show');
  const board = document.querySelector('.midle-create-board-main');
  const galery = document.querySelector('.galery');

  menu.onclick = () => {
    console.log('check');
    if (body.clientWidth == 375) {
      board.style.width = '166px';
    } 
    board.onclick = () => {
      board.style.width = '327px';
      galery.style.display = 'none';
    }
  }
}
