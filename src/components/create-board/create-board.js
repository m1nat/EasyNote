import { createNotes } from "../../api/api-handlers";
import { routs } from "../../shared/constants/paths";
import { getNameOfBoard, removeNameOfBoard } from "../../shared/ls-services/localStorage";

const btn = document.querySelector('.aside-actions');
const menu = document.querySelector('.menu');
const back = document.querySelector('.back');
const boardNameHeader = document.querySelector('.board-name');
const board = document.querySelector('.board');
const addNewSticker = document.getElementById('add-new-note');
const menuItem = document.querySelectorAll('.aside-board-items');
const deleteSaveBoard = document.querySelector('.delete-save-board');
const delNote = document.querySelector('.del-note');
const formDelSave = document.querySelector('.footer-create-board');
const homePageBtn = document.querySelector('.home-page-btn');
const errNoteSave = document.querySelector('.errNoteSave');
const errNoteSaveForm = document.querySelector('.errNoteSave-form');
const errNoteSaveBtnsCancel = document.querySelector('.errNoteSave-btns-cancel');

export const createNoteHandlers = () => {
  errNoteSave.style.display = 'none'

  let coordX;
  let coordY;

  addNewSticker.onclick = () => {
    let sticker = document.createElement('textarea');
    sticker.classList.add('sticker-board');
    board.append(sticker);

    deleteSaveBoard.style.display = 'block';

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

    delNote.onclick = () => {
      sticker.remove();
    };

    formDelSave.addEventListener('submit', event => {
      event.preventDefault();
      const name = getNameOfBoard()

      if (sticker.value) {
        createNotes(name, sticker.value)
          .then(response => {
            if (response) {
              removeNameOfBoard();
              window.location.href = routs.main;
            };
          })
      }

    });

  };

  homePageBtn.onclick = () => { 
    
    errNoteSaveBtnsCancel.onclick = () => {
      window.location.href = routs.main;
    };

    const name = getNameOfBoard();
    const stickerTextArea = document.querySelector('.sticker-board');
    if (stickerTextArea) {

      errNoteSave.style.display = 'flex';
      errNoteSaveForm.addEventListener('submit', event => {
        event.preventDefault();

        createNotes(name, stickerTextArea.value)
          .then(response => {
            if (response) {
              removeNameOfBoard();
              window.location.href = routs.main;
            }
          })
      })
    } else if (!(stickerTextArea)) {
      removeNameOfBoard();
      window.location.href = routs.main;
    };

  };

  btn.onclick = () => {
    menu.className = 'menu-show';
    btn.style.display = 'none';
  };

  back.onclick = () => {
    menu.className = 'menu';
    btn.style.display = 'block';
  };

  menuItem.forEach(el => el.onclick = () => {
    menu.className = 'menu-show';
    btn.style.display = 'none';
  });

  board.onclick = () => {
    menu.className = 'menu';
    btn.style.display = 'block';
  }

  const lsBoardName = getNameOfBoard();
  boardNameHeader.innerText = lsBoardName;

};
