import { getEmailLs, getUserNameLocalStorage, setUserNameLocalStorage } from "../../shared/ls-services/localStorage";
import { routs } from '../../shared/constants/paths.js';
import { changeUserName, getUserInfo } from "../../api/api-handlers";

const userName = document.querySelector('.aside-name');
const urerEmail = document.querySelector('.aside-email');
const userNameEdit = document.querySelector('.userName');
const email = document.querySelector('.userEmail');
const logoHome = document.querySelector('.logo-imgs');

export const profileEdit = () => {

  urerEmail.innerHTML = getEmailLs();
  userName.innerHTML = getUserNameLocalStorage();
  userNameEdit.innerHTML = getUserNameLocalStorage();
  email.innerHTML = getEmailLs();

  logoHome.onclick = () => {
    window.location.href = routs.main;
  }
  getUserInfo()
    .then(response => {
      if (response) {
        let userID = Object.values(response).find(email => email.email === getEmailLs());
        changeUser(userID.id);
      }
    })
}

export const changeUser = (userID) => {
  const asideName = document.querySelector('.aside-name')
  const renameBtn = document.querySelector('.btnblockEdit');
  renameBtn.onclick = () => {
    let userIdInfo = userID;
    const rename = userNameEdit.value;
    changeUserName(userIdInfo, rename)
      .then(response => {
        if (response) {
          getUserInfo()
            .then(result => {
              let userID = Object.values(result).find(email => email.email === getEmailLs());
              asideName.innerHTML = userID.userName
              setUserNameLocalStorage(userID.userName)
            })
        }
      })
  }
}