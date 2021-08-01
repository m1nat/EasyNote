import { getBoard } from "../../api/api-handlers";
import { getLocalId } from "../../shared/ls-services/localStorage";

export const renderBoarder = () => {
  getBoard()
    .then(response => {
      const containerBoards = document.querySelector('.create-my-boards');
      containerBoards.innerHTML = null;
      const uuid = getLocalId();
      let findName = [];
      response.forEach(el => {
        if (el.uuid === uuid) {
          findName.push(el.name)
        }
      })

      findName.forEach(el => {
        const savedBoard = document.createElement('div');
        containerBoards.after(savedBoard);
        savedBoard.className = 'saved-notes';
        const titleBoardSavedBoard = document.createElement('h6');
        savedBoard.append(titleBoardSavedBoard);
        titleBoardSavedBoard.className = 'saved-notes-title';
        titleBoardSavedBoard.innerText = el
      })

    })
}
