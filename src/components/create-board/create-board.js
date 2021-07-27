import { getNameOfBoard } from "../../shared/ls-services/localStorage";

const btn = document.querySelector('.aside-actions');
const menu = document.querySelector('.menu');
const back = document.querySelector('.back');
const boardNameHeader = document.querySelector('.board-name');
const dragDiv = document.querySelector('.sticker-board');
const board = document.querySelector('.board');
const addNewSticker = document.getElementById('add-new-note');



export const createNoteHandlers = () => {

  const sticker = null;
  let coordX;
  let coordY;

  addNewSticker.onclick = () => {
    const sticker = document.createElement('textarea');
    sticker.classList.add('sticker-board');
    board.append(sticker)
    console.log('check');

    sticker.draggable = true;

    sticker.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/html', 'dragstart');
      coordY = e.offsetY;
      coordX = e.offsetX;
    });

    board.addEventListener('dragover', e => {
      e.preventDefault()
    });

    board.addEventListener('drop', e => {
      sticker.style.position = 'absolute';
      sticker.style.top = (e.pageY - coordY) + 'px';
      sticker.style.left = (e.pageX - coordX) + 'px';
    });
  };


  btn.onclick = () => {
    menu.className = 'menu-show';
    btn.style.display = 'none';
  };

  back.onclick = () => {
    menu.className = 'menu';
    btn.style.display = 'block';
  };

  const lsBoardName = getNameOfBoard();
  boardNameHeader.innerText = lsBoardName;


};

