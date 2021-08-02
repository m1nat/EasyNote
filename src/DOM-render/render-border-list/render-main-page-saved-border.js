import { getBoard } from "../../api/api-handlers";
import { routs } from "../../shared/constants/paths";
import { getLocalId, setNameBoadrd, setNotes } from "../../shared/ls-services/localStorage";

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
          findName.push(el.name)
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

        savedBoard.onclick = () => {

          response.forEach(el => {
            if (el.uuid === uuid && el.name === titleBoardSavedBoard.innerText) {
              findNotes.push(el.text)
              setNotes(findNotes)
              setNameBoadrd(el.name)
            }
          })

          window.location.href = routs.saved_notes;
        }
        
      })

    })
}
