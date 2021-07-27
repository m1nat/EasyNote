import { routs } from '../../shared/constants/paths';
import { getEmailLs, setNameOfBoard } from '../../shared/ls-services/localStorage';
import { addNewBoards } from '../../shared/validators/check-inputs';

const myBoardsBtn = document.querySelector('.create-my-boards');
const modal = document.querySelector('.wrapper-modal');
const modal_form = document.querySelector('.modal-form');
const boardNameInp = document.querySelector('.nameBoardInp');
const errMessage = document.querySelector('.error-messege-inp-add-new-board');
const cancelForm = document.querySelector('.cancel');
const saveBtn = document.querySelector('.save');
const asideUserEmail = document.querySelector('.aside-email');

export const mainPageHandlers = () => {

  boardNameInp.value = '';

  myBoardsBtn.onclick = () => {
    modal.style.display = 'block';
  };

  cancelForm.onclick = () => {
    window.location.href = routs.main;
  };

  asideUserEmail.innerText = getEmailLs();

  modal_form.addEventListener('submit', event => {
    event.preventDefault();

    if (addNewBoards(boardNameInp.value)) {
      window.location.href = routs.create_board;
      setNameOfBoard(boardNameInp.value);
    } else {
        errMessage.style.display = 'block';
    };

  })
};
