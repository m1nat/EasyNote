import { routs } from "../../shared/constants/paths";
import { removeNameBoadrd, removeNotes } from "../../shared/ls-services/localStorage";

export const savedNotesHandlers = () => {
  const menu = document.querySelector('.menu');
  const homePageBtn = document.querySelector('.home-page-btnss');
  const btn = document.querySelector('.aside-actions');
  const back = document.querySelector('.back');
  const menuItem = document.querySelectorAll('.aside-board-items');
  const board = document.querySelector('.board');
  const colorList = document.querySelector('.change-colors-board');
  const changeBoardColor = document.getElementById('change-board-color');
  const addNewSticker = document.getElementById('add-new-note');
  const tcNotes = document.querySelector('.notesWrapper-tc');
  const saveBtn = document.querySelector('.saveNewChanges');
  
  colorList.style.display = 'none';

  menuItem.forEach(el => el.onclick = () => {
    menu.className = 'menu-show';
    btn.style.display = 'none';
  });

  btn.onclick = () => {
    menu.className = 'menu-show';
    btn.style.display = 'none';
  };

  back.onclick = () => {
    menu.className = 'menu';
    btn.style.display = 'block';
  };
  board.onclick = () => {
    menu.className = 'menu';
    btn.style.display = 'block';
    colorList.style.display = 'none'
  };

  homePageBtn.onclick = () => {
    window.location.href = routs.main;
    removeNotes();
    removeNameBoadrd();
  };

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
  }
  addNewSticker.onclick = () => {
    const note = document.createElement('div');
    note.className = 'tc-note';
    tcNotes.append(note);
    const tcNoteHeader = document.createElement('div');
    tcNoteHeader.className = 'tc-note-header';
    note.append(tcNoteHeader);
    const tcNoteClose = document.createElement('span')
    tcNoteClose.className = 'tc-note-closes';
    tcNoteHeader.append(tcNoteClose);
    const btn = document.createElement('div');
    btn.className = 'fas fa-times';
    const title = document.createElement('div');
    title.className = 'tc-note-title';
    tcNoteHeader.after(title);
    const tcNoteBody = document.createElement('textarea');
    tcNoteBody.className = 'tc-note-bodys';
    title.after(tcNoteBody);
    saveBtn.style.display = 'flex'

    tcNoteClose.onclick = () => {
      note.remove();
    }
  }
};
