import { initAPI } from './api/api-handlers.js';
import { showPassword, signInHandlers } from './components/sign-in/sign-in.js';
import { showPasswordSignUP, signUpHandler } from './components/sign-up/sign-up.js';
import { paths, routs } from './shared/constants/paths.js';
import { getToken } from './shared/ls-services/localStorage.js';
import { logoutHandlers } from './components/profile/profile';
import { createNoteHandlers } from './components/create-board/create-board.js';
import { mainPageHandlers } from './components/main-page/main-page.js';
import { recoveryPassword } from './components/reset-password/reset-password.js';
import { renderBoarder } from './DOM-render/render-border-list/render-main-page-saved-border.js';
import { renderNotes } from './DOM-render/render-border-list/render-notes.js';
import { savedNotesHandlers } from './components/saved-nostes/saved-notes.js';
import { preloaderMainPage } from './DOM-render/preloader/preloader.js';

import './styles/style.scss';
import { profileEdit } from './components/edit-profile/edit-profile.js';

initAPI();

window.onload = () => {
  const pathname = Object.values(paths).find(
    (path) => path === window.location.pathname
  );

  switch (pathname) {
    case paths.main:
      const lsToken = getToken();
      logoutHandlers();
      mainPageHandlers();
      renderBoarder();
      preloaderMainPage()
      if (!lsToken) {
        window.location.href = routs.start_page;
      }
      break;
    case paths.sign_in:
      showPassword();
      signInHandlers();
      break;
    case paths.sign_up:
      signUpHandler();
      showPasswordSignUP();
      break;
    case paths.create_board:
      createNoteHandlers();
      break;
    case paths.reset_password:
      recoveryPassword()
      break;
    case paths.saved_notes:
      renderNotes()
      savedNotesHandlers()
      preloaderMainPage()
      break;
    case paths.edit_profile:
      profileEdit();
      break;

    default:
      break;
  };

};
