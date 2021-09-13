import { createNotes } from "../../api/api-handlers";
import { addImages } from "../../DOM-render/add-img/add-img";
import { routs } from "../../shared/constants/paths";
import { getImageUrl, getLocalId, getNameOfBoard, removeImageUrl, removeNameOfBoard } from "../../shared/ls-services/localStorage";
import { addSmilesToNote } from "../../shared/smiles/smile-services";
import { addNewBoards } from "../../shared/validators/check-inputs";

const btn = document.querySelector('.aside-actions');
const menu = document.querySelector('.menu-show');
const back = document.querySelector('.back');
const boardNameHeader = document.querySelector('.board-name');
const board = document.querySelector('.board-create');
const addNewSticker = document.getElementById('add-new-note');
const menuItem = document.querySelectorAll('.aside-board-items');
const deleteSaveBoard = document.querySelector('.delete-save-board');
const delNote = document.querySelector('.del-note');
const formDelSave = document.querySelector('.footer-create-board');
const homePageBtn = document.querySelector('.home-page-btns');
const tcNotes = document.querySelector('.tc-notes');
const boardName = document.querySelector('.board-name');
const changeBoardColor = document.getElementById('change-board-color');
const colorList = document.querySelector('.change-colors-board');
const validatorNameBoard = document.querySelector('.validatorNameBoard');
const closeIncorrectBoardName = document.querySelector('.close');
const btnRountMainPage = document.querySelector('.errNoteSave-btns-cancel');
const saveBoard = document.querySelector('.errNoteSave-btns-save');
const dateReminder = document.getElementById('date-of-board');
const localId = getLocalId();

export const createNoteHandlers = () => {

  let addDateOfReminder;

  dateReminder.oninput = () => {
    if (dateReminder.value) {
      addDateOfReminder = dateReminder.value;
    }

  }

  addImages();

  const errNoteSave = document.querySelector('.errNoteSave');
  const errNoteSaveForm = document.querySelector('.errNoteSave-form');
  let newArr = [];
  let arrFontWeight = [];
  let arrFontCursivce = [];
  let arrFontStyle = [];
  let underlineArr = [];
  let fontSizeArr = [];

  colorList.style.display = 'none';

  addNewSticker.onclick = () => {
    const holder = document.createElement('div');
    const holderPanel = document.createElement('div');
    const fontWaight = document.createElement('div');
    const cursive = document.createElement('div');
    const underline = document.createElement('div');
    const orderList = document.createElement('div');
    const unorderList = document.createElement('div');
    const fontSize = document.createElement('div');
    const holderBlack = document.createElement('div');
    const note = document.createElement('div');
    const tcNoteHeader = document.createElement('div');
    const tcNoteClose = document.createElement('span')
    const btn = document.createElement('div');
    const title = document.createElement('div');
    const tcNoteBody = document.createElement('textarea');
    const wrapperEmoji = document.createElement('div');
    const firstLineEmoji = document.createElement('div');
    const secondLineEmoji = document.createElement('div');

    
    underline.innerText = 'U';
    cursive.innerText = '/';
    fontWaight.innerText = 'B';
    fontSize.innerText = 'Font Size';
    orderList.innerText = '😀'

    firstLineEmoji.className = 'emoji-line-first';
    secondLineEmoji.className = 'emoji-line-second';
    wrapperEmoji.className = 'wrapper-emoji';
    holder.className = 'holder';
    holderPanel.className = 'holder-panel';
    fontWaight.className = 'font-waight';
    cursive.className = 'cursive';
    underline.className = 'underline';
    orderList.className = 'order-list';
    unorderList.className = 'unorder-list';
    fontSize.className = 'font-size';
    holderBlack.className = 'holder-black';
    note.className = 'tc-note';
    tcNoteHeader.className = 'tc-note-header';
    tcNoteClose.className = 'tc-note-close';
    title.className = 'tc-note-title';
    btn.className = 'fas fa-times';
    tcNoteBody.className = 'tc-note-body';

    tcNotes.append(note);
    note.append(wrapperEmoji, holder, tcNoteHeader, title, tcNoteBody);
    wrapperEmoji.append(firstLineEmoji, secondLineEmoji);
    holder.append(holderPanel, holderBlack);
    holderPanel.append(fontWaight, cursive, underline, orderList, unorderList, fontSize);
    tcNoteHeader.append(tcNoteClose);

    deleteSaveBoard.style.display = 'flex';

    tcNoteBody.onclick = () => {

      const isClicked = tcNoteBody.getAttribute('clicked');

      if (!isClicked) {
        tcNoteBody.setAttribute('clicked', true);
        holder.style.display = 'flex';
      } else {
        tcNoteBody.removeAttribute('clicked');
        holder.style.display = 'none';
        wrapperEmoji.style.display = 'none';
      }
    };

    fontWaight.onclick = () => {

      const isClicked = fontWaight.getAttribute('clicked');

      if (!isClicked) {
        fontWaight.setAttribute('clicked', true);
        tcNoteBody.style.fontWeight = 'bold';
        fontWaight.style.backgroundColor = 'white';
      } else {
        tcNoteBody.style.fontWeight = 'normal';
        fontWaight.style.backgroundColor = '#c4c4c4';
        fontWaight.removeAttribute('clicked');
      }

    }

    cursive.onclick = () => {

      const isClicked = cursive.getAttribute('clicked');

      if (!isClicked) {
        cursive.setAttribute('clicked', true);
        cursive.style.backgroundColor = 'white';
        tcNoteBody.style.fontStyle = 'italic';
        tcNoteBody.style.fontFamily = 'Times New Roman, Times, serif'
      } else {
        cursive.style.backgroundColor = '#c4c4c4';
        tcNoteBody.style.fontStyle = 'normal';
        cursive.removeAttribute('clicked');
      }
    }

    underline.onclick = () => {

      const isClicked = underline.getAttribute('clicked');

      if (!isClicked) {
        underline.setAttribute('clicked', true);
        underline.style.backgroundColor = 'white';
        tcNoteBody.style.textDecoration = 'underline';
      } else {
        underline.removeAttribute('clicked');
        tcNoteBody.style.textDecoration = 'none';
        underline.style.backgroundColor = '#c4c4c4';
      }

    }

    addSmilesToNote()

    fontSize.onclick = () => {

      const isClicked = fontSize.getAttribute('clicked');

      if (!isClicked) {
        fontSize.setAttribute('clicked', true);
        fontSize.style.backgroundColor = 'white';
        const fzWrapper = document.createElement('div');
        const smallFont = document.createElement('div');
        const mediumFont = document.createElement('div');
        const upperMiddle = document.createElement('div');
        const large = document.createElement('div');
        const larger = document.createElement('div');
        const superSize = document.createElement('div');

        fontSize.append(fzWrapper);
        fzWrapper.append(smallFont, mediumFont, upperMiddle, large, larger, superSize);

        smallFont.className = 'fz-size';
        mediumFont.className = 'fz-size';
        upperMiddle.className = 'fz-size';
        large.className = 'fz-size';
        larger.className = 'fz-size';
        superSize.className = 'fz-size';
        fzWrapper.className = 'fz-wrapper';

        smallFont.innerText = '1 (8pt)';
        smallFont.style.fontSize = '0.7em';

        smallFont.onclick = () => {

          const isClicked = smallFont.getAttribute('clicked');

          if (!isClicked) {
            smallFont.setAttribute('clicked', true);
            smallFont.style.backgroundColor = 'white';
            tcNoteBody.style.fontSize = '0.7em';
          } else {
            smallFont.removeAttribute('clicked');
            smallFont.style.backgroundColor = '#c4c4c4';
          }

        }

        mediumFont.innerText = '2 (10pt)';
        mediumFont.style.fontSize = '0.8em';

        mediumFont.onclick = () => {

          const isClicked = mediumFont.getAttribute('clicked');

          if (!isClicked) {
            mediumFont.setAttribute('clicked', true);
            mediumFont.style.backgroundColor = 'white';
            tcNoteBody.style.fontSize = '0.8em';
          } else {
            mediumFont.removeAttribute('clicked');
            mediumFont.style.backgroundColor = '#c4c4c4';
          }

        }

        upperMiddle.innerText = '3 (12px)';
        upperMiddle.style.fontSize = '0.9em';

        upperMiddle.onclick = () => {

          const isClicked = upperMiddle.getAttribute('clicked');

          if (!isClicked) {
            upperMiddle.setAttribute('clicked', true);
            upperMiddle.style.backgroundColor = 'white';
            tcNoteBody.style.fontSize = '0.9em';
          } else {
            upperMiddle.removeAttribute('clicked');
            upperMiddle.style.backgroundColor = '#c4c4c4';
          }

        }

        large.innerText = '4 (14pt)';
        large.style.fontSize = '1em';

        large.onclick = () => {

          const isClicked = large.getAttribute('clicked');

          if (!isClicked) {
            large.setAttribute('clicked', true);
            large.style.backgroundColor = 'white';
            tcNoteBody.style.fontSize = '1em';
          } else {
            large.removeAttribute('clicked');
            large.style.backgroundColor = '#c4c4c4';
          }

        }

        larger.innerText = '5 (18pt)';
        larger.style.fontSize = '1.1em';

        larger.onclick = () => {

          const isClicked = larger.getAttribute('clicked');

          if (!isClicked) {
            larger.setAttribute('clicked', true);
            larger.style.backgroundColor = 'white';
            tcNoteBody.style.fontSize = '1.1em';
          } else {
            larger.removeAttribute('clicked');
            larger.style.backgroundColor = '#c4c4c4';
          }

        }

        superSize.innerText = '6 (24pt)';
        superSize.style.fontSize = '1.2em';

        superSize.onclick = () => {

          const isClicked = superSize.getAttribute('clicked');

          if (!isClicked) {
            superSize.setAttribute('clicked', true);
            superSize.style.backgroundColor = 'white';
            tcNoteBody.style.fontSize = '1.2em';
          } else {
            superSize.removeAttribute('clicked');
            superSize.style.backgroundColor = '#c4c4c4';
          }

        }

      } else {
        fontSize.style.backgroundColor = '#c4c4c4';
        fontSize.removeAttribute('clicked');
        const fzWrapper = document.querySelector('.fz-wrapper');
        fzWrapper.remove();
      }

    }

    tcNoteClose.onclick = () => {
      note.remove();

      let item;
      const list = document.querySelectorAll('.tc-note');
      list.forEach(el => item = el)

      if (!item) {
        deleteSaveBoard.style.display = 'none';
      }

    }

    delNote.onclick = () => {
      document.querySelectorAll('.tc-note').forEach(element => {
        element.remove();
        deleteSaveBoard.style.display = 'none';
      });
    }

  };

  btn.onclick = () => {
    menu.style.display = 'flex';
    btn.style.display = 'none';
  };

  back.onclick = () => {
    menu.style.display = 'none';
    btn.style.display = 'block';
  };

  menuItem.forEach(el => el.onclick = () => {
    menu.style.display = 'flex'
    btn.style.display = 'none';
  });

  const lsBoardName = getNameOfBoard();
  boardNameHeader.innerText = lsBoardName;

  changeBoardColor.onclick = () => {
    const pink = document.querySelector('.pink');
    const yellow = document.querySelector('.yellow');
    const green = document.querySelector('.green');
    const blue = document.querySelector('.blue');
    const white = document.querySelector('.white');

    colorList.style.display = 'flex';

    pink.onclick = () => board.style.backgroundColor = '#EDF2FC';
    yellow.onclick = () => board.style.backgroundColor = '#f0f0f0';
    green.onclick = () => board.style.backgroundColor = '#F5ECDB';
    blue.onclick = () => board.style.backgroundColor = '#000000';
    white.onclick = () => board.style.backgroundColor = '#ffffff';
  }

  formDelSave.addEventListener('submit', event => {
    event.preventDefault();

    const val = document.querySelectorAll('.tc-note-body');

    val.forEach(el => {
      newArr.push(el.value);
      arrFontWeight.push(el.style.fontWeight);
      arrFontCursivce.push(el.style.fontFamily);
      arrFontStyle.push(el.style.fontStyle);
      underlineArr.push(el.style.textDecoration);
      fontSizeArr.push(el.style.fontSize);
    })

    const createNewNotes = {
      name: boardName.value,
      notes: newArr,
      localId: localId,
      boardColor: board.style.backgroundColor,
      weight: arrFontWeight,
      cursive: arrFontCursivce,
      style: arrFontStyle,
      underln: underlineArr,
      fontSize: fontSizeArr,
      image: getImageUrl(),
      date: addDateOfReminder
    }

    if (addNewBoards(boardName.value)) {
      createNotes(createNewNotes)
        .then(response => {
          if (response) {
            removeNameOfBoard();
            removeImageUrl();
            window.location.href = routs.main;
          };
        })
    } else if (!addNewBoards(boardName.value)) {
      validatorNameBoard.style.display = 'flex';

      closeIncorrectBoardName.onclick = () => {
        validatorNameBoard.style.display = 'none';
      }
    }

  })


  board.onclick = () => {
    menu.style.display = 'none';
    btn.style.display = 'block';
    colorList.style.display = 'none';
    errNoteSave.style.display = 'none';
  }

  homePageBtn.onclick = () => {

    if (addNewBoards(boardName.value) && document.querySelector('.tc-note')) {
      errNoteSave.style.display = 'flex';
    } else {
      window.location.href = routs.main;
      removeImageUrl();
    }

    if (errNoteSave.style.display == 'flex') {

      btnRountMainPage.onclick = () => {
        window.location.href = routs.main;
        removeImageUrl();
      }

    }
  };

  saveBoard.onclick = async () => {

    const val = document.querySelectorAll('.tc-note-body');
    val.forEach(el => {
      newArr.push(el.value);
      arrFontWeight.push(el.style.fontWeight);
      arrFontCursivce.push(el.style.fontFamily);
      arrFontStyle.push(el.style.fontStyle);
      underlineArr.push(el.style.textDecoration);
      fontSizeArr.push(el.style.fontSize);
    })

    const createNewNotes = {
      name: boardName.value,
      notes: newArr,
      localId: localId,
      boardColor: board.style.backgroundColor,
      weight: arrFontWeight,
      cursive: arrFontCursivce,
      style: arrFontStyle,
      underln: underlineArr,
      fontSize: fontSizeArr,
      image: getImageUrl(),
      date: addDateOfReminder
    }

    await createNotes(createNewNotes)
      .then(response => {
        if (response) {
          removeNameOfBoard();
          removeImageUrl();
          window.location.href = routs.main;
        }
      })

  }

};

