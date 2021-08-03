import { routs } from '../../shared/constants/paths.js';
import { clearLocalStorage } from '../../shared/ls-services/localStorage.js';

export const logoutHandlers = () => {

  const logoutBtn = document.querySelector('.logout');

  logoutBtn.onclick = () => {
    clearLocalStorage();
    window.location.href = routs.start_page;
  };

};
