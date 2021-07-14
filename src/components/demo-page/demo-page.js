import { routs } from '../../shared/constants/paths';

export const login = () => {
  const loginBtn = document.querySelector('.login-demo');

  loginBtn.onclick = () => {
    window.location.href = routs.sign_in;
  };

};

export const signUpDemo = () => {
  const signUpBtnDemo = document.querySelector('.sign-up-demo');

  signUpBtnDemo.onclick = () => {
    window.location.href = routs.sign_up
  }
  
};

export const disableDemoBnts = () => {
  const firstItem = document.getElementById('first');
  const secondtItem = document.getElementById('second');
  const thirdItem = document.getElementById('third');
  const fourthItem = document.getElementById('fourth');
  const fifthtItem = document.getElementById('fifth');
  const sixthItem = document.getElementById('sixth');
  const modalWindow = document.querySelector('.modal-window-need-login');

  firstItem.onclick = () => {
    modalWindow.style.display = 'block';
    setTimeout( () => modalWindow.style.display = 'none', 1000);
  };

  secondtItem.onclick = () => {
    modalWindow.style.display = 'block';
    setTimeout( () => modalWindow.style.display = 'none', 1000);
  };

  thirdItem.onclick = () => {
    modalWindow.style.display = 'block';
    setTimeout( () => modalWindow.style.display = 'none', 1000);
  };

  fourthItem.onclick = () => {
    modalWindow.style.display = 'block';
    setTimeout( () => modalWindow.style.display = 'none', 1000);
  }

  fifthtItem.onclick = () => {
    modalWindow.style.display = 'block';
    setTimeout( () => modalWindow.style.display = 'none', 1000);
  };

  sixthItem.onclick = () => {
    modalWindow.style.display = 'block';
    setTimeout( () => modalWindow.style.display = 'none', 1000);
  };

};
