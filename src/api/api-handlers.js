import firebase from 'firebase/app';
import axios from 'axios';
require('firebase/auth');

import { FIREBASE_CONFIG, databaseURL, authURL } from "./api-config";

export const initAPI = () => {
  firebase.initializeApp(FIREBASE_CONFIG)
};


export const signIn = (email, password) => {
  return axios.post(authURL, {
    email,
    password,
    returnSecureToken: true
  })
  .then( response => response )
  .catch(err => console.log(err));
};

export const signUp = async (email, password) => {
  return firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then(response => response)
};
