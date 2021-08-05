import { getBoard, removeBoard } from "../../api/api-handlers";
import { routs } from "../../shared/constants/paths";
import { getLocalId, setIdNotes, setNameBoadrd, setNotes } from "../../shared/ls-services/localStorage";

export const renderBoarder = () => {

  getBoard()
    .then(response => {
      const containerBoards = document.querySelector('.create-my-boards');
      containerBoards.innerHTML = null;
      const uuid = getLocalId();
      let findName = [];
      let findNotes = [];

      response.forEach(el => {
        if (el.uuid === uuid) {
          findName.push(el.name);
        }
      })

      findName.forEach((el, i) => {
        const savedBoard = document.createElement('div');
        containerBoards.after(savedBoard);
        savedBoard.className = 'saved-notes';
        const titleBoardSavedBoard = document.createElement('h6');
        savedBoard.append(titleBoardSavedBoard);
        titleBoardSavedBoard.className = 'saved-notes-title';
        titleBoardSavedBoard.innerText = el;
        const loadSevesNotes = document.createElement('div');
        titleBoardSavedBoard.after(loadSevesNotes);
        loadSevesNotes.className = 'load-seves-notes';
        const hoverDel = document.createElement('div');
        loadSevesNotes.after(hoverDel);
        hoverDel.className = 'open-delete-board';

        hoverDel.onclick = () => {


          response.forEach(element => {

            if (element.name === el) {
              removeBoard(element.id);
              savedBoard.remove();
            }
            
          })
          
        }

        loadSevesNotes.onclick = () => {
          response.forEach(el => {

            if (el.uuid === uuid && el.name === titleBoardSavedBoard.innerText) {
              findNotes.push(el.text);
              setNotes(findNotes);
              setNameBoadrd(el.name);
              setIdNotes(el.id)
            }

          })
          window.location.href = routs.saved_notes;
        }

      })

    })

};
