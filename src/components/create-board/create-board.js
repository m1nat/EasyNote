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
const tcNotes = document.querySelector('.tc-notes');
const boardName = document.querySelector('.board-name')

export const createNoteHandlers = () => {

  addNewSticker.onclick = () => {
   
    const note = document.createElement('div');
    note.className = 'tc-note';
    tcNotes.append(note);
    const tcNoteHeader = document.createElement('div');
    tcNoteHeader.className = 'tc-note-header';
    note.append(tcNoteHeader);
    const tcNoteClose = document.createElement('span')
    tcNoteClose.className = 'tc-note-close';
    tcNoteHeader.append(tcNoteClose);
    const btn = document.createElement('div');
    btn.className = 'fas fa-times';
    const title = document.createElement('div');
    title.className = 'tc-note-title';
    tcNoteHeader.after(title);
    const tcNoteBody = document.createElement('textarea');
    tcNoteBody.className = 'tc-note-body';
    title.after(tcNoteBody);

    tcNoteClose.onclick = () => {
      note.remove();
    }

    deleteSaveBoard.style.display = 'block';
  };

  homePageBtn.onclick = () => { 
    
    errNoteSaveBtnsCancel.onclick = () => {
      window.location.href = routs.main;
    };
    
    const name = getNameOfBoard();
    const stickerTextArea = document.querySelector('.tc-note-body');
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
