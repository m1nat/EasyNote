import { createNotes } from "../../api/api-handlers";
import { routs } from "../../shared/constants/paths";
import { getLocalId, getNameOfBoard, removeNameOfBoard } from "../../shared/ls-services/localStorage";

const btn = document.querySelector('.aside-actions');
const menu = document.querySelector('.menu');
const back = document.querySelector('.back');
const boardNameHeader = document.querySelector('.board-name');
const board = document.querySelector('.board-create');
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
const boardName = document.querySelector('.board-name');
const changeBoardColor = document.getElementById('change-board-color');
const colorList = document.querySelector('.change-colors-board');
const localId = getLocalId();
const newArr = [];


export const createNoteHandlers = () => {

  colorList.style.display = 'none';
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

    deleteSaveBoard.style.display = 'block';

    tcNoteClose.onclick = () => {
      note.remove();
    }

    delNote.onclick = () => {
      document.querySelectorAll('.tc-note').forEach(element => {
        element.remove();
      });
    }

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
    colorList.style.display = 'none'
  };

  const lsBoardName = getNameOfBoard();
  boardNameHeader.innerText = lsBoardName;

  changeBoardColor.onclick = () => {
    colorList.style.display = 'flex';
    const pink = document.querySelector('.pink');
    const yellow = document.querySelector('.yellow');
    const green = document.querySelector('.green');
    const blue = document.querySelector('.blue');
    const white = document.querySelector('.white');
    pink.onclick = () => board.style.backgroundColor = '#EDF2FC';
    yellow.onclick = () => board.style.backgroundColor = '#C8C7C7';
    green.onclick = () => board.style.backgroundColor = '#F5ECDB';
    blue.onclick = () => board.style.backgroundColor = '#000000';
    white.onclick = () => board.style.backgroundColor = '#ffffff';
    console.log(board.style.backgroundColor);
  }

  formDelSave.addEventListener('submit', event => {
    event.preventDefault();

    const name = boardName.value;

    const val = document.querySelectorAll('.tc-note-body');
    val.forEach(el => {
      if (el.value) {
        newArr.push(el.value);
      }
    })

    if (document.querySelector('.tc-note-body').value) {
      createNotes(name, newArr, localId, board.style.backgroundColor)
        .then(response => {
          if (response) {
            removeNameOfBoard();
            window.location.href = routs.main;
          };
        })
    }

  })

  homePageBtn.onclick = () => {

    const val = document.querySelectorAll('.tc-note-body');
    val.forEach(el => {
      if (el.value) {
        newArr.push(el.value);
      }
    })

    errNoteSaveBtnsCancel.onclick = () => {
      window.location.href = routs.main;
      removeNameOfBoard();
    };

    const name = boardName.value;
    const stickerTextArea = document.querySelector('.tc-note-body');
    if (stickerTextArea) {

      errNoteSave.style.display = 'flex';
      errNoteSaveForm.addEventListener('submit', event => {
        event.preventDefault();

        createNotes(name, newArr, localId, board.style.backgroundColor)
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

    board.onclick = () => {
      errNoteSave.style.display = 'none';
    }

  };
};
