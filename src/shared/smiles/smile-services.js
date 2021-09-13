import { routs } from "../constants/paths";

export const addSmilesToNote = () => {

  const orderList = document.querySelector('.order-list');
  const emojiLineFirst = document.querySelector('.emoji-line-first');
  const emojiLineSecond = document.querySelector('.emoji-line-second');
  const wrapperEmoji = document.querySelector('.wrapper-emoji');
  const deleteSaveBoard = document.querySelector('.delete-save-board');

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

    emojiLineFirst.append(smile_1, smile_2, smile_3, smile_4, smile_5, smile_6, smile_7, smile_8, smile_9, smile_10, smile_11, smile_12, smile_13);
    emojiLineSecond.append(smile_14, smile_15, smile_16, smile_17, smile_18, smile_19, smile_20, smile_21, smile_22, smile_23, smile_24, smile_25, smile_26);

    orderList.onclick = () => {
      let tcNoteBody;
      if (window.location.pathname === routs.saved_notes) {
        tcNoteBody = document.querySelector('.tc-note-bodys');
      } else {
        tcNoteBody = document.querySelector('.tc-note-body')
      }

      orderList.setAttribute('clicked', true);
      wrapperEmoji.style.display = 'flex';

      smile_1.onclick = () => {
        tcNoteBody.value += smile_1.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_2.onclick = () => {
        tcNoteBody.value += smile_2.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_3.onclick = () => {
        tcNoteBody.value += smile_3.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_4.onclick = () => {
        tcNoteBody.value += smile_4.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_5.onclick = () => {
        tcNoteBody.value += smile_5.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_6.onclick = () => {
        tcNoteBody.value += smile_6.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_6.onclick = () => {
        tcNoteBody.value += smile_6.innerText;
        deleteSaveBoard.style.display = 'block';
      }
      smile_7.onclick = () => {
        tcNoteBody.value += smile_7.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_8.onclick = () => {
        tcNoteBody.value += smile_8.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_9.onclick = () => {
        tcNoteBody.value += smile_9.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_10.onclick = () => {
        tcNoteBody.value += smile_10.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_11.onclick = () => {
        tcNoteBody.value += smile_11.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_12.onclick = () => {
        tcNoteBody.value += smile_12.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_13.onclick = () => {
        tcNoteBody.value += smile_13.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_14.onclick = () => {
        tcNoteBody.value += smile_14.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_15.onclick = () => {
        tcNoteBody.value += smile_15.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_16.onclick = () => {
        tcNoteBody.value += smile_16.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_17.onclick = () => {
        tcNoteBody.value += smile_17.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_18.onclick = () => {
        tcNoteBody.value += smile_18.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_19.onclick = () => {
        tcNoteBody.value += smile_19.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_20.onclick = () => {
        tcNoteBody.value += smile_20.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_21.onclick = () => {
        tcNoteBody.value += smile_21.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_22.onclick = () => {
        tcNoteBody.value += smile_22.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_23.onclick = () => {
        tcNoteBody.value += smile_23.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_24.onclick = () => {
        tcNoteBody.value += smile_24.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_25.onclick = () => {
        tcNoteBody.value += smile_25.innerText;
        deleteSaveBoard.style.display = 'block';
      }

      smile_26.onclick = () => {
        tcNoteBody.value += smile_26.innerText;
        deleteSaveBoard.style.display = 'block';
      }

    }
}