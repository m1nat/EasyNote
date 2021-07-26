import { routs } from '../../shared/constants/paths.js';
import { removeEmailLs, removeToken } from '../../shared/ls-services/localStorage.js';

export const logoutHandlers = () => {
  
  const logoutBtn = document.querySelector('.logout');

  logoutBtn.onclick = () => {
    removeToken();
    removeEmailLs();
    window.location.href =  routs.start_page;
  };

};
