export const REGEXP = {
  EmailSingUP: /^(([^<>\-()[\]\\._=+?,;:\s@!"^%$#& а-яА-Я]+((\.|\-|\_)[^<>\-()[\]\\.=+?,;:\s@!"^%$#& а-яА-Я]+)*)|(".+"))@((([a-zA-Z 0-9]{2,15}|([a-zA-Z 0-9]{1,10})\_([a-zA-Z 0-9]){1,5}|([a-zA-Z 0-9]{1,10})\-([a-zA-Z 0-9]){1,5}))\.[a-zA-Z]{2,6})$/i,
  UPPER_CASE: /(?=.*[A-Z])/g,
  LOWER_CASE: /(?=.*[a-z])/g,
  NUMBERS: /(?=.*\d)/,
  EIGHT_CHARACTERS: /[a-zA-Z \d@$#!%?&*^()-=+_]{8,}/
};

export const PASSWORD_STRENGTH = {
  Weak: 1,
  Moderate: 2,
  Strong: 3,
  ['Very Strong']: 4
};
