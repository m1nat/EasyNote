import { passwordRecovery } from "../../api/api-handlers";

const formRecovery = document.querySelector('.form-recovery');
const resetPasswordInput = document.querySelector('.reset-password-input');

export const recoveryPassword = () => {

  formRecovery.addEventListener('submit', event => {
    event.preventDefault();

    passwordRecovery(resetPasswordInput.value);
    
  })
};
