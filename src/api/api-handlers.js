import firebase from 'firebase/app';
import axios from 'axios';
require('firebase/auth');

import { FIREBASE_CONFIG, authURL, databaseURL } from './api-config';
import { showErrorNotification, showErrorNotificationRecovery, showErrorNotificationSignUp } from '../DOM-render/render-messege/error-messege';
import { routs } from '../shared/constants/paths';

export const initAPI = () => {
  firebase.initializeApp(FIREBASE_CONFIG)
};

export const signIn = (email, password) => {
  return axios.post(authURL, {
    email,
    password,
    returnSecureToken: true
  })
    .then(response => response)
    .catch(err => {
      showErrorNotification(err)
    });
};

export const signUp = async (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => response)
    .catch(err => {
      showErrorNotificationSignUp(err);
    });
};

export const createNotes = (name, text) => {
  return fetch(`${databaseURL}/notes.json`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      text
    })
  })
};

export const passwordRecovery = email => {
firebase.auth().sendPasswordResetEmail(email)
    .then(() => window.location.href = routs.sign_up)
    .catch(err => showErrorNotificationRecovery(err))
};
