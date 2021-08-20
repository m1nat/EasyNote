import { getEmailLs, getUserNameLocalStorage } from "../../shared/ls-services/localStorage";
import { routs } from '../../shared/constants/paths.js';

const userName = document.querySelector('.aside-name');
const urerEmail = document.querySelector('.aside-email');
const userNameEdit = document.querySelector('.userName');
const email = document.querySelector('.userEmail');
const logoHome = document.querySelector('.logo-imgs');

export const profileEdit = () => {

  urerEmail.innerHTML = getEmailLs();
  userName.innerHTML = getUserNameLocalStorage();
  userNameEdit.innerHTML = getUserNameLocalStorage();
  email.innerHTML = getEmailLs();
  logoHome.onclick = () => {
    window.location.href = routs.main;
  }
}