import { REGEXP } from './regexp.js';

export const singUPEmailValidator = emailinp => emailinp.match(REGEXP.EmailSingUP);
