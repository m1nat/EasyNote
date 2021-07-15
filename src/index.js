import { initAPI } from './api/api-handlers.js';
import { disableDemoBnts, login, signUpDemo } from './components/demo-page/demo-page.js';
import { logoutHandlers } from './components/profile/profile.js';
import { showPassword, signInHandlers } from './components/sign-in/sign-in.js';
import { showPasswordSignUP, signUpHandler } from './components/sign-up/sign-up.js';
import { paths, routs } from './shared/constants/paths.js';
import { getToken } from './shared/ls-services/localStorage.js'

import './styles/style.scss';

initAPI();

window.onload = () => {
  const pathname = Object.values(paths).find(
    (path) => path === window.location.pathname
  );

  switch (pathname) {
    case paths.main:
      const lsToken = getToken();

      if (!lsToken) {
        window.location.href = routs.demo;
      } else {
        logoutHandlers();
      };
      break;
    case paths.sign_in:
      showPassword();
      signInHandlers();
      break;
    case paths.sign_up:
      signUpHandler();
      showPasswordSignUP();
      break;
    case paths.demo:
      login();
      signUpDemo();
      disableDemoBnts();
      break;
    default:
      break;
  };

};
