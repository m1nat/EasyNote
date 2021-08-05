import { getBoard, updateNotes } from "../../api/api-handlers";
import { routs } from "../../shared/constants/paths";
import { getIdNotes, getLocalId, getNameBoadrd, getNameOfBoard, getNotes } from "../../shared/ls-services/localStorage";

export const renderNotes = () => {
  getBoard()
    .then(response => {
      if (response) {
        const check = document.querySelector('.change-colors-board');
        const tcNotes = document.querySelector('.notesWrapper-tc');
        const board = document.querySelector('.board');
        const changeData = document.querySelector('.delete-save-board');
        const textarea = document.querySelector('.board-name');
        const saveBtn = document.querySelector('.saveNewChanges');
        const homePageBtn = document.querySelector('.home-page-btnss');
        const form = document.querySelector('.footer-save');
        const newTextNotes = document.querySelectorAll('.tc-note-bodys')
        const arrText = [];
        let colorBoard;
        const boardName = getNameBoadrd();
        let notes = getNotes();
        const textsNote = notes.split(',');
        const id = getLocalId();

        saveBtn.style.display = ''
        textarea.value = boardName;

        response.forEach(el => {
          if (el.uuid === id && boardName === el.name) {
            board.style.backgroundColor = el.color;
            colorBoard = el.color;
          }
        })

        textsNote.forEach(el => {
          const note = document.createElement('div');
          const tcNoteHeader = document.createElement('div');
          const tcNoteClose = document.createElement('span')
          const btn = document.createElement('div');
          const title = document.createElement('div');
          const tcNoteBody = document.createElement('textarea');

          note.className = 'tc-note';
          tcNoteHeader.className = 'tc-note-header';
          tcNoteClose.className = 'tc-note-closes';
          btn.className = 'fas fa-times';
          title.className = 'tc-note-title';
          tcNoteBody.className = 'tc-note-bodys';

          tcNotes.append(note);
          note.append(tcNoteHeader);
          tcNoteHeader.append(tcNoteClose);
          tcNoteHeader.after(title);
          title.after(tcNoteBody);

          tcNoteBody.innerText = el;

          tcNoteClose.onclick = () => {

            note.remove();
            saveBtn.style.display = 'flex';
            const notes = document.querySelector('.tc-note')
            if (!(notes)) {
              saveBtn.style.display = 'none';
            }
          };
        });


        textarea.oninput = () => {
          boardName === textarea.value ? saveBtn.style.display = 'none' : saveBtn.style.display = 'flex';
        }

        check.onclick = () => {
          if (colorBoard === board.style.backgroundColor) {
            saveBtn.style.display = 'none';
          } else {
            saveBtn.style.display = 'flex';
          }
        };

        newTextNotes.forEach(el => {
          const val = el.value
          el.oninput = () => {
            if (el.value === val) {
              saveBtn.style.display = 'none';
            } else {
              saveBtn.style.display = 'flex';
            }
          }
        })

        form.addEventListener('submit', event => {
          event.preventDefault();

          const valueOfTextArea = document.querySelectorAll('.tc-note-bodys');
          valueOfTextArea.forEach(el => arrText.push(el.value));
          const bdName = document.querySelector('.board-name')

          const patchBoard = {
            color: board.style.backgroundColor,
            name: bdName.value,
            text: arrText,
            uuid: getLocalId(),
            notesID: getIdNotes()
          };
           updateNotes(patchBoard);

        })

        homePageBtn.onclick =  () => {
          window.location.href = routs.main
        }

      }
    })

}

