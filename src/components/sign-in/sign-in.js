import { getUserName, signIn } from '../../api/api-handlers';
import { setEmailLs, setLocalId, setToken, setUserNameLocalStorage } from '../../shared/ls-services/localStorage.js';
import { routs } from '../../shared/constants/paths.js';

export const signInHandlers = async () => {
  
  const signInForm = document.getElementById('form-sign-in');
  const forgot = document.querySelector('.forgot')

  signInForm.addEventListener('submit', event => {
    event.preventDefault();

    const email = document.getElementById('email-sign-in').value;
    const password = document.getElementById('password-sign-in').value;

    let authUser;
    let dataUsers;

    signIn(email, password)
    .then(response => {
      if (response) {
        authUser = response.data
        const { idToken: token } = response.data;
        setToken(token);
        const { email } = response.data;
        setEmailLs(email);
        getUserName()
          .then(response => {
            dataUsers = response;
            const nameUser = dataUsers.find( user => user.uuid === authUser.localId);
            setLocalId(nameUser.uuid)
            setUserNameLocalStorage(nameUser.userName);
            window.location.href = routs.main;
          })
      }
    })
  })

  forgot.onclick = () => {
    window.location.href = routs.reset_password;
  }

};

export const showPassword = () => {
  
  const hidden = document.querySelector('.hidden');
  const password = document.getElementById('password-sign-in');

  hidden.onclick = () => {
    if (password.type == 'password') {
      password.type = 'text';
    } else {
      password.type = 'password';
    };
  };

};
