import { routs } from "../../shared/constants/paths";
import { removeNotes } from "../../shared/ls-services/localStorage";

const homePageBtn = document.querySelector('.home-page-btn');

export const savedNotesHandlers = () => {

  homePageBtn.onclick = () => {
    window.location.href = routs.main
    removeNotes()
  }
}