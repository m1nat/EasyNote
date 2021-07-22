import { routs } from '../../shared/constants/paths.js';
import { removeToken } from '../../shared/ls-services/localStorage.js';

export const logoutHandlers = () => {
  
  const logoutBtn = document.getElementById('logout');

  logoutBtn.onclick = () => {
    removeToken();
    window.location.href =  routs.sign_in
  }

};
