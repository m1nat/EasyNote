export const REGEXP = {
  EmailSingUP: /^(([^<>\-()[\]\\._=+?,;:\s@!"^%$#& а-яА-Я]+((\.|\-|\_)[^<>\-()[\]\\.=+?,;:\s@!"^%$#& а-яА-Я]+)*)|(".+")){2,40}@((([a-zA-Z0-9]{1,40}|([a-zA-Z0-9]{1,20})\_([a-zA-Z0-9]){1,20}|([a-zA-Z0-9]{1,20})\_([a-zA-Z0-9]){1,20}\_([a-zA-Z0-9]){1,20}|([a-zA-Z0-9]{1,20})\-([a-zA-Z0-9]{1,20})|([a-zA-Z0-9]{1,20})\-([a-zA-Z0-9]{1,20})\-([a-zA-Z0-9]{1,20})))\.[a-zA-Z]{2,63})$/i,
  UPPER_CASE: /(?=.*[A-Z])/g,
  LOWER_CASE: /(?=.*[a-z])/g,
  NUMBERS: /(?=.*[0-9])/gi,
  EIGHT_CHARACTERS: /(?=.*[!@#$%^()+=_&*-])/gi,
  SHOW_ERROR_MESSEGE_PASSWORD: /^[a-zA-Z0-9@()*=+!?^%$#&_-]{6,20}$/gi,
  USERNAME: /^[a-zA-Z0-9]{6,20}$/,
  NAME_THE_NEW_BOARD: /^[a-zA-Z 0-9!"№;%:?*()_+=:"<>/[\]]{1,20}$/
};

export const PASSWORD_STRENGTH = {
  Weak: 1,
  Moderate: 2,
  Strong: 3,
  ['Very Strong']: 4
};
