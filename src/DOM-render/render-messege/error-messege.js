const emailMessage = document.querySelector('.email-sign-in-error-messege');
const passwordMessege = document.querySelector('.password-sign-in-error-messege');
const emailAlready = document.querySelector('.messege-error-email-signup');
const emailInput = document.getElementById('email-sign-up');
const recoveryMessage = document.querySelector('.email-recovery-error-messege');




export const showErrorEmailSignUP = () => {
  const errorMessege = document.querySelector('.messege-error-email-signup');
  errorMessege.style.display = 'block';
  errorMessege.innerHTML = 'Sorry, We dont recognize this email';
};

export const hideErrorEmailSignUP = () => {
  const errorMessege = document.querySelector('.messege-error-email-signup');
  errorMessege.style.display = 'none';
};


export const showErrorMessegePasswordSignUP = () => {
  const passwordMessege = document.querySelector('.incorrectly-password');
  passwordMessege.style.display = 'block';
};

export const hideErrorMessegePasswordSignUP = () => {
  const passwordMessege = document.querySelector('.incorrectly-password');
  passwordMessege.style.display = 'none';
};

export const showErrorMessegeUsername = () => {
  const usernameMessege = document.querySelector('.username-messege');
  usernameMessege.style.display = 'block';
};

export const hideErrorMessegeUsername = () => {
  const usernameMessege = document.querySelector('.username-messege');
  usernameMessege.style.display = 'none';
};

export const showErrorNotification = errors => {

  let errorString = errors.response.data.error.message.split('_').join(' ').toLowerCase();

  if(errorString === 'invalid email' || errorString === 'email not found') {
    emailMessage.style.display = 'block';
    emailMessage.innerText = 'Sorry, this email is not valid';
    setTimeout( () => {
      emailMessage.style.display = 'none';
    },5000)
  } else if (errorString === 'invalid password'){
    passwordMessege.style.display = 'block';
    passwordMessege.innerText = 'Sorry, this password is not valid';
    setTimeout( () => {
      passwordMessege.style.display = 'none';
    },5000)
  };

};

export const showErrorNotificationRecovery = errors => {

  let errorString = errors.message.split('_').join(' ').toLowerCase();
  if (errorString) {
    recoveryMessage.innerText = 'Sorry, this email is not valid'
    recoveryMessage.style.display = 'block'
  }

};

export const showErrorNotificationSignUp = errors => {

  if(errors){
    emailAlready.innerText = errors
    emailAlready.className = 'error-email'
    emailAlready.style.display = 'block'
    emailInput.className ='border-red-email';
    setTimeout( () => {
      emailInput.className ='reg';
      emailAlready.style.display = 'none';
    },3000)
  }

};
