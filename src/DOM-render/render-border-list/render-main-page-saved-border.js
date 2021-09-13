import moment from "moment";

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
      let BGCimg = [];
      let renderNotesIndex = [];

      response.forEach(el => {
        if (el.localId === uuid) {
          findName.push(el.name);
          date.push(el.date);
          BGCimg.push(el.image);
          renderNotesIndex.push(el.notes);
        }
      });

      findName.forEach((el, i) => {

        const savedBoard = document.createElement('div');
        const dateDiv = document.createElement('div');
        const titleBoardSavedBoard = document.createElement('h6');
        const loadSevesNotes = document.createElement('div');
        const hoverDel = document.createElement('div');
        const bells = document.createElement('div');

        titleBoardSavedBoard.className = 'saved-notes-title';
        savedBoard.className = 'saved-notes';
        loadSevesNotes.className = 'load-seves-notes';
        hoverDel.className = 'open-delete-board';
        dateDiv.className = 'date';
        bells.className = 'bells';

        containerBoards.after(savedBoard);
        savedBoard.append(titleBoardSavedBoard);
        titleBoardSavedBoard.after(loadSevesNotes);
        loadSevesNotes.append(dateDiv);
        loadSevesNotes.after(hoverDel);

        if (date[i]) {
          loadSevesNotes.prepend(bells);
          dateDiv.innerHTML = date[i].split('-').join('.');
          moment().format('YYYY-MM-DD') === date[i] ? savedBoard.classList.add('shadow-notification') : null;
          moment().format('YYYY-MM-DD') === date[i] ? bells.classList.add('bellNotification') : null;
          moment().format('YYYY-MM-DD') > date[i] ? savedBoard.style.backgroundColor = '#f7bcc2' : null;
        };

        titleBoardSavedBoard.innerText = el;
        savedBoard.style.backgroundSize = '100% 80%'
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
      renderNotesIndex.reverse()
      const loadSevesNotes = document.querySelectorAll('.load-seves-notes')
      renderNotesIndex.forEach( (el, i) =>{
        el.forEach( item => {
          let notes = document.createElement('div');
          loadSevesNotes[i].append(notes);
          notes.className = 'render-moke-notes';
          notes.innerHTML = item;
        })
      })

    })

};
