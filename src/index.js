import { initAPI } from './api/api-handlers.js';
import { signInHandlers } from './components/sign-in/sign-in.js';
import { signUpHandler } from './components/sign-up/sign-up.js';
import { paths, routs } from './shared/constants/paths.js';
import { getToken } from './shared/ls-services/localStorage.js';

import './styles/style.scss';

initAPI();

window.onload = () => {
  const pathname = Object.values(paths).find(
    (path) => path === window.location.pathname
  );

  console.log(pathname);
  switch (pathname) {
    case paths.main:
      const token = getToken()

      if(!token) {
        window.location.href = routs.demo
      } else {
        console.log('check');
      }
      break;
    case paths.sign_in:
      signInHandlers();
      break;
    case paths.sign_up:
      signUpHandler();
      break;
    default:
      break;

  }
  
};
