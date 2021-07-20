export const showErrorEmailSignUP = () => {
  const errorMessege = document.querySelector('.messege-error-email-signup');
  errorMessege.style.display = 'block'
};

export const hideErrorEmailSignUP = () => {
  const errorMessege = document.querySelector('.messege-error-email-signup');
  errorMessege.style.display = 'none'
};


export const showErrorMessegePasswordSignUP = () => {
  const passwordMessege = document.querySelector('.incorrectly-password');
  passwordMessege.style.display = 'block'
};

export const hideErrorMessegePasswordSignUP = () => {
  const passwordMessege = document.querySelector('.incorrectly-password');
  passwordMessege.style.display = 'none'
};

export const showErrorMessegeUsername = () => {
  const usernameMessege = document.querySelector('.username-messege');
  usernameMessege.style.display = 'block'
};

export const hideErrorMessegeUsername = () => {
  const usernameMessege = document.querySelector('.username-messege');
  usernameMessege.style.display = 'none'
};


