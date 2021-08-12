import { routs } from '../../shared/constants/paths';
import { getEmailLs, getUserNameLocalStorage, removeIdNotes, removeNameBoadrd, removeNameOfBoard, removeNotes, setNameOfBoard } from '../../shared/ls-services/localStorage';
import { addNewBoards } from '../../shared/validators/check-inputs';

const myBoardsBtn = document.querySelector('.create-my-boards');
const modal = document.querySelector('.wrapper-modal');
const modal_form = document.querySelector('.modal-form');
const boardNameInp = document.querySelector('.nameBoardInp');
const cancelForm = document.querySelector('.cancel');
const asideUserEmail = document.querySelector('.aside-email');
const userNameDOM = document.querySelector('.aside-name');
const errMessage = document.querySelector('.error-messege-inp-add-new-board');



export const mainPageHandlers = () => {

  boardNameInp.value = '';

  myBoardsBtn.onclick = () => {
    modal.style.display = 'block';
    removeNameBoadrd();
    removeNotes();
    removeIdNotes();
    removeNameOfBoard();
  };

  cancelForm.onclick = () => {
    window.location.href = routs.main;
  };

  asideUserEmail.innerText = getEmailLs();
  userNameDOM.innerText = getUserNameLocalStorage();

  modal_form.addEventListener('submit', event => {
    event.preventDefault();

    if (addNewBoards(boardNameInp.value)) {
      window.location.href = routs.create_board;
      setNameOfBoard(boardNameInp.value);
    } else {
      errMessage.style.display = 'block';
    }

  })
};
