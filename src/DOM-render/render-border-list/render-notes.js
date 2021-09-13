import { getBoard, removeBoard, updateNotes } from "../../api/api-handlers";
import { routs } from "../../shared/constants/paths";
import { getIdNotes, getLocalId, getNameBoadrd, getNotes, getResponseURLimage, removeResponseURLimage, setIdNotes, setResponseURLimage, setURL } from "../../shared/ls-services/localStorage";
import { addSmilesToNote } from "../../shared/smiles/smile-services";
import { addNewBoards } from "../../shared/validators/check-inputs";

const saveBtn = document.querySelector('.saveNewChanges');
const menu = document.querySelector('.menu-show');
const btn = document.querySelector('.aside-actions');
const galerys = document.querySelector('.galerys');
const backToMenus = document.querySelector('.back-to-menus');
const refreshImage = document.querySelector('.refresh-image');
const board = document.querySelector('.board');

let weight = [];
let size = [];
let cursive = [];
let family = [];
let underline = [];
let arrFontWeight = [];
let arrFontCursivce = [];
let arrFontStyle = [];
let underlineArr = [];
let fontSizeArr = [];

export const renderNotes = async () => {
  await getBoard()
    .then(response => {
      if (response) {

        const check = document.querySelector('.change-colors-board');
        const tcNotes = document.querySelector('.notesWrapper-tc');
        const textarea = document.querySelector('.board-name');
        const homePageBtn = document.querySelector('.home-page-btnss');
        const form = document.querySelector('.footer-save');
        const formHomePage = document.querySelector('.errNoteSavess');
        const validatorNameBoard = document.querySelector('.validatorNameBoard');
        const closeIncorrectBoardName = document.querySelector('.close');
        const notes = getNotes();
        let textsNote;
        const boardName = getNameBoadrd();
        const id = getLocalId();
        const idNote = getIdNotes()
        let arrText = [];
        let colorBoard;
        let backgroundImages;

        saveBtn.style.display = 'none';
        textarea.value = boardName;

        response.forEach(el => {
          if (el.localId === id && boardName === el.name && idNote === el.id ) {
            board.style.backgroundColor = el.boardColor;
            colorBoard = el.boardColor;
            weight = el.weight;
            cursive = el.cursive;
            family = el.style;
            underline = el.underln;
            size = el.fontSize;
            textsNote =  el.notes;
            setIdNotes(el.id);
            
            if (el.image) {
              setResponseURLimage(el.image)
              setURL(el.image)
              backgroundImages = el.image
              board.style.backgroundImage = `url("${backgroundImages}")`;
              refreshImage.style.display = 'block';
            }

          }
        })


        board.style.backgroundSize = 'cover';
        board.style.backgroundRepeat = 'no-repeat';
        board.style.backgroundPosition = 'center';

        textsNote.forEach(el => {
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
          const tcNoteClose = document.createElement('span');
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
          note.className = 'tc-note';
          tcNoteHeader.className = 'tc-note-header';
          tcNoteClose.className = 'tc-note-closes';
          btn.className = 'fas fa-times';
          title.className = 'tc-note-title';
          tcNoteBody.className = 'tc-note-bodys';
          holder.className = 'holder';
          holderPanel.className = 'holder-panel';
          fontWaight.className = 'font-waight';
          cursive.className = 'cursive';
          underline.className = 'underline';
          orderList.className = 'order-list';
          unorderList.className = 'unorder-list';
          fontSize.className = 'font-size';
          holderBlack.className = 'holder-black';

          tcNotes.append(note);
          note.append(wrapperEmoji, holder, tcNoteHeader, title, tcNoteBody);
          wrapperEmoji.append(firstLineEmoji, secondLineEmoji);
          holder.append(holderPanel, holderBlack);
          holderPanel.append(fontWaight, cursive, underline, orderList, unorderList, fontSize);
          tcNoteHeader.append(tcNoteClose);


          tcNoteBody.innerText = el;

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
              tcNoteBody.style.fontStyle = 'normal'
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

          wrapperEmoji.style.display = 'none';
          
          addSmilesToNote();

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
              const superSize = document.createElement('div')

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
            saveBtn.style.display = 'flex';
            const notes = document.querySelector('.tc-note');
            if (!(notes)) {
              saveBtn.style.display = 'none';
            }
          };
        });

        const list = document.querySelectorAll('.tc-note-bodys');
        list.forEach((el, i) => {
          el.style.fontWeight = weight[i];
          el.style.fontFamily = cursive[i];
          el.style.fontStyle = family[i];
          el.style.textDecoration = underline[i];
          el.style.fontSize = size[i];
        })

        list.forEach(el => {
          const val = el.value
          el.oninput = () => {
            if (el.value === val) {
              saveBtn.style.display = 'none';
            } else {
              saveBtn.style.display = 'flex';
            }
          }
        })

        textarea.oninput = () => {
          boardName === textarea.value ? saveBtn.style.display = 'none' : saveBtn.style.display = 'flex';
        }

        check.onclick = () => {
          colorBoard === board.style.backgroundColor ? saveBtn.style.display = 'none' : saveBtn.style.display = 'flex';
        };



        form.addEventListener('submit', event => {
          event.preventDefault();

          const bdName = document.querySelector('.board-name');
          const valueOfTextArea = document.querySelectorAll('.tc-note-bodys');

          valueOfTextArea.forEach(el => {
            arrText.push(el.value);
            arrFontWeight.push(el.style.fontWeight);
            arrFontCursivce.push(el.style.fontFamily);
            arrFontStyle.push(el.style.fontStyle);
            underlineArr.push(el.style.textDecoration);
            fontSizeArr.push(el.style.fontSize);
          });

          const patchBoard = {
            name: bdName.value,
            notes: arrText,
            localId: getLocalId(),
            boardColor: board.style.backgroundColor,
            weight: arrFontWeight,
            cursive: arrFontCursivce,
            style: arrFontStyle,
            underln: underlineArr,
            fontSize: fontSizeArr,
            notesID: getIdNotes(),
            image: getResponseURLimage()
          };

          if (addNewBoards(bdName.value)) {
            updateNotes(patchBoard);
          } else if (!addNewBoards(bdName.value)) {
            validatorNameBoard.style.display = 'flex';

            closeIncorrectBoardName.onclick = () => {
              validatorNameBoard.style.display = 'none';
            }

          }

        })

        board.onclick = () => {

          formHomePage.style.display = 'none';
          check.style.display = 'none';
          menu.style.display = 'none';
          btn.style.display = 'block';
          galerys.style.display = 'none';

        }

        homePageBtn.onclick = () => {

          const bdName = document.querySelector('.board-name');
          const cancel = document.querySelector('.errNoteSave-btns-cancels');
          const valueOfTextArea = document.querySelectorAll('.tc-note-bodys');
          const save = document.querySelector('.errNoteSave-btns-saves');
          const note = document.querySelector('.tc-note');
          const emptyNotes = document.querySelector('.incorrect-board');
          const deleteBoard = document.querySelector('.incorrect-board-btn-cancel');
          const keepUp = document.querySelector('.incorrect-board-btn-save');

          if (!note) {
            emptyNotes.style.display = 'flex';
            formHomePage.style.display = 'none';

            deleteBoard.onclick = () => {
              removeBoard(getIdNotes())
                .then(response => {
                  if (response) {
                    removeResponseURLimage();
                    window.location.href = routs.main;
                  }
                })
            }
            keepUp.onclick = () => {
              emptyNotes.style.display = 'none';
              formHomePage.style.display = 'none';
            }
          }

          cancel.onclick = () => {
            window.location.href = routs.main;
          }

          if (colorBoard !== board.style.backgroundColor || bdName.value !== getNameBoadrd() || arrText.join('') !== textsNote.join('') || addNewBoards(bdName.value)) {
            formHomePage.style.display = 'flex';
            save.onclick = () => {

              valueOfTextArea.forEach(el => {
                arrText.push(el.value);
                arrFontWeight.push(el.style.fontWeight);
                arrFontCursivce.push(el.style.fontFamily);
                arrFontStyle.push(el.style.fontStyle);
                underlineArr.push(el.style.textDecoration);
                fontSizeArr.push(el.style.fontSize);
              });

              const patchBoard = {
                name: bdName.value,
                notes: arrText,
                localId: getLocalId(),
                boardColor: board.style.backgroundColor,
                weight: arrFontWeight,
                cursive: arrFontCursivce,
                style: arrFontStyle,
                underln: underlineArr,
                fontSize: fontSizeArr,
                notesID: getIdNotes(),
                image: getResponseURLimage()
              };

              updateNotes(patchBoard);

            }
          } else if (colorBoard === board.style.backgroundColor || bdName.value === name || arrText.join('') === textsNote.join('')) {
            window.location.href = routs.main;
          }

        }

      }

    })

  backToMenus.onclick = () => {
    galerys.style.display = 'none';
  }

  refreshImage.onclick = () => {
    board.style.backgroundImage = 'none';
    refreshImage.style.display = 'none';
    removeResponseURLimage();
  }
}
