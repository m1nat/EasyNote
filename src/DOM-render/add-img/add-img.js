
export const addImages = () => {
  const addImagesBtn = document.getElementById('add-img');
  const galery = document.querySelector('.galery');
  const menu = document.querySelector('.menu');
  const asideActions = document.querySelector('.aside-actions');
  const boardCreate = document.querySelector('.midle-create-board-main');

  boardCreate.onclick = () => {
    galery.style.display = 'none';
    }

  addImagesBtn.onclick = () => {
    menu.className = 'menu';
    galery.style.display = 'flex';
    asideActions.className = 'aside-actions-close';
  }
}
