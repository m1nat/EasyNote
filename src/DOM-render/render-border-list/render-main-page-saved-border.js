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
      let date = [];
      let BGCimg = []



      response.forEach(el => {
        if (el.localId === uuid) {
          findName.push(el.name);
          date.push(el.date)
          BGCimg.push(el.image)
        }
      })
      console.log(BGCimg);

      findName.forEach((el, i) => {

        const savedBoard = document.createElement('div');
        const dateDiv = document.createElement('div');
        const titleBoardSavedBoard = document.createElement('h6');
        const loadSevesNotes = document.createElement('div');
        const hoverDel = document.createElement('div');

        titleBoardSavedBoard.className = 'saved-notes-title';
        savedBoard.className = 'saved-notes';
        loadSevesNotes.className = 'load-seves-notes';
        hoverDel.className = 'open-delete-board';
        dateDiv.className = 'date'
        
        containerBoards.after(savedBoard);
        savedBoard.append(titleBoardSavedBoard);
        titleBoardSavedBoard.after(loadSevesNotes);
        loadSevesNotes.append(dateDiv);
        loadSevesNotes.after(hoverDel);

        if (date[i]) {
          dateDiv.innerHTML = date[i].split('-').join('.')
        };

        titleBoardSavedBoard.innerText = el;
        savedBoard.style.backgroundSize = 'cover';
        savedBoard.style.backgroundRepeat = 'no-repeat';
        savedBoard.style.backgroundPosition = 'center';
        savedBoard.style.backgroundImage = `url("${BGCimg[i]}")`

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
            if (el.localId === uuid && el.name === titleBoardSavedBoard.innerText) {
              findNotes.push(el.notes);
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
