import firebase from 'firebase/app';
import axios from 'axios';
require('firebase/auth');

import { FIREBASE_CONFIG, authURL, databaseURL } from './api-config';
import { showErrorNotification, showErrorNotificationRecovery, showErrorNotificationSignUp } from '../DOM-render/render-messege/error-messege';
import { routs } from '../shared/constants/paths';
import { setUIDLS, getUIDLS, setUserId } from '../shared/ls-services/localStorage';

export const initAPI = () => {
  firebase.initializeApp(FIREBASE_CONFIG);
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

export const createNotes = ( createNewNotes ) => {

  const { name, notes, localId, boardColor, weight, cursive, style, underln, fontSize } = createNewNotes; 

  return fetch(`${databaseURL}/notes.json`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name, 
      notes, 
      localId, 
      boardColor, 
      weight, 
      cursive, 
      style, 
      underln, 
      fontSize 
    })
  })
};

export const passwordRecovery = email => {
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => window.location.href = routs.sign_in)
    .catch(err => showErrorNotificationRecovery(err))
};


export const createAuthData = (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => {
      const { uid } = response.user;
      setUIDLS(uid);
    });
};

export const createUser = user => {
  const { userName, email } = user;

  return axios.post(`${databaseURL}/users.json`, {
    userName,
    email,
    uuid: getUIDLS()
  });
};

export const signUp = async user => {
  const { password, email } = user;

  try {
    await createAuthData(email, password);
    await createUser(user).then(response => setUserId(response.data.name));
    await signIn(email, password)
      .then(response => {
        if (response) {
          window.location.href = routs.sign_in;
        }
      })
  } catch (error) {
    showErrorNotificationSignUp(error)
  }

};

export const getUserName = () => {
  return axios.get(`${databaseURL}/users.json`)
    .then(response => {
      if (response) {
        return Object.keys(response.data).map(key => ({ ...response.data[key], id: key }));
      }
    })

};

export const getBoard = () => {
  return axios.get(`${databaseURL}/notes.json`)
    .then(response => {
      if (response) {
        return Object.keys(response.data).map(key => ({ ...response.data[key], id: key }));
      }
    })
};

export const removeBoard = (id) => {
  axios.delete(`${databaseURL}/notes/${id}.json`);
};

export const updateNotes = patchBoard => {
  const { name, notes, localId, boardColor, weight, cursive, style, underln, fontSize, notesID } = patchBoard; 
  return fetch(`${databaseURL}/notes/${notesID}.json`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name, 
      notes, 
      localId, 
      boardColor, 
      weight, 
      cursive, 
      style, 
      underln, 
      fontSize 
    })
  }
  )
    .then( response => response.json() )
    .then( result => {
      if ( result ) {
        window.location.href = routs.main;
      }
    })
}
