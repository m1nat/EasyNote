import { getEmailLs, getLocalId, getToken, getUserNameLocalStorage, setEmailLs, setUserNameLocalStorage } from "../../shared/ls-services/localStorage";
import { routs } from '../../shared/constants/paths.js';
import { changeEmail, changeUserName, getUserInfo, updateEmail, updateEmaildb } from "../../api/api-handlers";

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
        response
        let userID = Object.values(response).find(email => email.uuid === getLocalId());
        changeUser(userID.id);
        changeUserEmail(userID.id);
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
              let userID = Object.values(result).find(email => email.uuid === getLocalId());
              asideName.innerHTML = userID.userName;
              setUserNameLocalStorage(userID.userName);
            })
        }
      })
  }
}

const changeUserEmail = (id) => {
  const showEmail = document.querySelector('.aside-email');
  const userEmail = document.querySelector('.userEmail');
  const changeEmailBtn = document.querySelector('.btnblockEdits');
  changeEmailBtn.onclick = () => {
    console.log(getToken());
    changeEmail(userEmail.value)
    .then ( response => {
      let newEmail = response.data.email
      updateEmaildb(id, newEmail)
      .then(result => {
        setEmailLs(userEmail.value)
        showEmail.innerHTML = getEmailLs()
      })
    })
  }
}
