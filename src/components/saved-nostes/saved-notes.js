import { routs } from "../../shared/constants/paths";
import { removeNameBoadrd, removeNotes } from "../../shared/ls-services/localStorage";

const homePageBtn = document.querySelector('.home-page-btnss');

export const savedNotesHandlers = () => {

  homePageBtn.onclick = () => {
    window.location.href = routs.main;
    removeNotes();
    removeNameBoadrd();
  }
};
