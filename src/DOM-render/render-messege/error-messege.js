export const showErrorEmailSignUP = () => {
  const errorMessege = document.querySelector('.messege-error-email-signup');
  errorMessege.style.display = 'block'
};

export const hideErrorEmailSignUP = () => {
  const errorMessege = document.querySelector('.messege-error-email-signup');
  errorMessege.style.display = 'none'
};