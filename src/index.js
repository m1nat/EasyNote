import { initAPI } from './api/api-handlers.js';
import { signInHandlers } from './components/sign-in/sign-in.js';

import './styles/style.scss';

initAPI();

signInHandlers()
