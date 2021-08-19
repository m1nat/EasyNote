import { addImagesEdit } from "../../DOM-render/add-img/add-img-edit";

export const savedNotesHandlers = () => {

  const menu = document.querySelector('.menu-show');
  const btn = document.querySelector('.aside-actions');
  const back = document.querySelector('.back');
  const menuItem = document.querySelectorAll('.aside-board-items');
  const board = document.querySelector('.board');
  const colorList = document.querySelector('.change-colors-board');
  const changeBoardColor = document.getElementById('change-board-color');
  const addNewSticker = document.getElementById('add-new-note');
  const tcNotes = document.querySelector('.notesWrapper-tc');
  const saveBtn = document.querySelector('.saveNewChanges');
  const addImages = document.querySelector('.add-images');
  const galerys = document.querySelector('.galerys');

  addImagesEdit();

  colorList.style.display = 'none';

  addImages.onclick = () => {
    galerys.style.display = 'flex';
    menu.style.display = 'none';
  }

  menuItem.forEach(el => el.onclick = () => {
    menu.style.display = 'flex'
    btn.style.display = 'none';
  });

  btn.onclick = () => {
    menu.style.display = 'flex'
    btn.style.display = 'none';
  };

  back.onclick = () => {
    menu.style.display = 'none';
    btn.style.display = 'block';
  };
  
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
    const smile_1 = document.createElement('div');
    const smile_2 = document.createElement('div');
    const smile_3 = document.createElement('div');
    const smile_4 = document.createElement('div');
    const smile_5 = document.createElement('div');
    const smile_6 = document.createElement('div');
    const smile_7 = document.createElement('div');
    const smile_8 = document.createElement('div');
    const smile_9 = document.createElement('div');
    const smile_10 = document.createElement('div');
    const smile_11 = document.createElement('div');
    const smile_12 = document.createElement('div');
    const smile_13 = document.createElement('div');
    const smile_14 = document.createElement('div');
    const smile_15 = document.createElement('div');
    const smile_16 = document.createElement('div');
    const smile_17 = document.createElement('div');
    const smile_18 = document.createElement('div');
    const smile_19 = document.createElement('div');
    const smile_20 = document.createElement('div');
    const smile_21 = document.createElement('div');
    const smile_22 = document.createElement('div');
    const smile_23 = document.createElement('div');
    const smile_24 = document.createElement('div');
    const smile_25 = document.createElement('div');
    const smile_26 = document.createElement('div');

    note.className = 'tc-note';
    tcNoteHeader.className = 'tc-note-header';
    tcNoteClose.className = 'tc-note-closes';
    btn.className = 'fas fa-times';
    title.className = 'tc-note-title';
    tcNoteBody.className = 'tc-note-bodys';
    saveBtn.style.display = 'flex';
    holder.className = 'holder';
    holderPanel.className = 'holder-panel';
    fontWaight.className = 'font-waight';
    cursive.className = 'cursive';
    underline.className = 'underline';
    orderList.className = 'order-list';
    unorderList.className = 'unorder-list';
    fontSize.className = 'font-size';
    holderBlack.className = 'holder-black';
    firstLineEmoji.className = 'emoji-line-first';
    secondLineEmoji.className = 'emoji-line-second';
    wrapperEmoji.className = 'wrapper-emoji';
    
    tcNotes.append( note );
    note.append( wrapperEmoji, holder, tcNoteHeader, title, tcNoteBody );
    wrapperEmoji.append( firstLineEmoji, secondLineEmoji );
    firstLineEmoji.append( smile_1, smile_2, smile_3, smile_4, smile_5, smile_6, smile_7, smile_8, smile_9, smile_10, smile_11, smile_12, smile_13);
    secondLineEmoji.append( smile_14, smile_15, smile_16, smile_17, smile_18, smile_19, smile_20, smile_21, smile_22, smile_23, smile_24, smile_25, smile_26);
    holder.append( holderPanel, holderBlack );
    holderPanel.append( fontWaight, cursive, underline, orderList, unorderList, fontSize );
    tcNoteHeader.append( tcNoteClose );

    underline.innerText = 'U';
    cursive.innerText = '/';
    fontWaight.innerText = 'B';
    fontSize.innerText = 'Font Size';
    orderList.innerText = '😀';
    smile_1.innerHTML = '&#128512';
    smile_2.innerHTML = '&#128530';
    smile_3.innerText = '😁';
    smile_4.innerText = '😆';
    smile_5.innerText = '😅';
    smile_6.innerText = '😂';
    smile_7.innerText = '😇';
    smile_8.innerText = '😍';
    smile_9.innerText = '😚';
    smile_10.innerText = '😘';
    smile_11.innerText = '😜';
    smile_12.innerText = '🤓';
    smile_13.innerText = '😎';
    smile_14.innerText = '😱';
    smile_15.innerText = '😨';
    smile_16.innerText = '😴';
    smile_17.innerText = '😪';
    smile_18.innerText = '😵';
    smile_19.innerText = '💫';
    smile_20.innerText = '🤢';
    smile_21.innerText = '🤒';
    smile_22.innerText = '😈';
    smile_23.innerText = '👿';
    smile_24.innerText = '👍';
    smile_25.innerText = '👎';
    smile_26.innerText = '👌';

    tcNoteBody.onclick = () => {

      const isClicked = tcNoteBody.getAttribute('clicked');

      if (!isClicked) {
        tcNoteBody.setAttribute('clicked', true);
        holder.style.display = 'flex';
      } else {
        tcNoteBody.removeAttribute('clicked');
        holder.style.display = 'none';
        wrapperEmoji.style.display = 'none'
      }
    }

    
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
    orderList.onclick = () => {

      orderList.setAttribute('clicked', true);
      wrapperEmoji.style.display = 'flex';

      smile_1.onclick = () => {
        tcNoteBody.value += smile_1.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_2.onclick = () => {
        tcNoteBody.value += smile_2.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_3.onclick = () => {
        tcNoteBody.value += smile_3.innerText;
        saveBtn.style.display = 'flex';

      }

      smile_4.onclick = () => {
        tcNoteBody.value += smile_4.innerText;
        saveBtn.style.display = 'flex';

      }

      smile_5.onclick = () => {
        tcNoteBody.value += smile_5.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_6.onclick = () => {
        tcNoteBody.value += smile_6.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_6.onclick = () => {
        tcNoteBody.value += smile_6.innerText;
        saveBtn.style.display = 'flex';
      }
      smile_7.onclick = () => {
        tcNoteBody.value += smile_7.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_8.onclick = () => {
        tcNoteBody.value += smile_8.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_9.onclick = () => {
        tcNoteBody.value += smile_9.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_10.onclick = () => {
        tcNoteBody.value += smile_10.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_11.onclick = () => {
        tcNoteBody.value += smile_11.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_12.onclick = () => {
        tcNoteBody.value += smile_12.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_13.onclick = () => {
        tcNoteBody.value += smile_13.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_14.onclick = () => {
        tcNoteBody.value += smile_14.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_15.onclick = () => {
        tcNoteBody.value += smile_15.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_16.onclick = () => {
        tcNoteBody.value += smile_16.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_17.onclick = () => {
        tcNoteBody.value += smile_17.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_18.onclick = () => {
        tcNoteBody.value += smile_18.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_19.onclick = () => {
        tcNoteBody.value += smile_19.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_20.onclick = () => {
        tcNoteBody.value += smile_20.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_21.onclick = () => {
        tcNoteBody.value += smile_21.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_22.onclick = () => {
        tcNoteBody.value += smile_22.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_23.onclick = () => {
        tcNoteBody.value += smile_23.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_24.onclick = () => {
        tcNoteBody.value += smile_24.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_25.onclick = () => {
        tcNoteBody.value += smile_25.innerText;
        saveBtn.style.display = 'flex';
      }

      smile_26.onclick = () => {
        tcNoteBody.value += smile_26.innerText;
        saveBtn.style.display = 'flex';
      }

    }

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
    }
  }
  
};
