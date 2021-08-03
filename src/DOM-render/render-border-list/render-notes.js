import { getBoard } from "../../api/api-handlers";
import { getLocalId, getNameBoadrd, getNotes } from "../../shared/ls-services/localStorage";

const tcNotes = document.querySelector('.notesWrapper-tc');

export const renderNotes = () => {
  getBoard()
    .then( response => {
      if (response) {
        const textarea = document.querySelector('.board-name')
        const boardName = getNameBoadrd();
        let notes = getNotes();
        const textsNote = notes.split(',');
        const id = getLocalId();
        textarea.value = boardName;
        
        textsNote.forEach ( el => {
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
          tcNoteBody.innerText = el;
        })
      }
    })

}