import { imagePath } from "../../shared/constants/paths";
import { getImageUrl, getResponseURLimage, removeImageUrl, setImageUrl } from "../../shared/ls-services/localStorage";

export const addImages = () => {

  let theCSSprop;
  const addImagesBtn = document.getElementById('add-img');
  const galery = document.querySelector('.galery');
  const menu = document.querySelector('.menu-show');
  const asideActions = document.querySelector('.aside-actions');
  const boardCreate = document.querySelector('.board-create');
  const images = document.querySelectorAll('.img');
  const close = document.querySelector('.midle-create-board-main');
  const backToMenu = document.querySelector('.back-to-menu');
  const itemAsideBoard = document.querySelectorAll('.aside-board-items');
  const refreshImage = document.querySelector('.refresh');
  const createImageBoard = getImageUrl();
  let sourceImg;
  let index;

  boardCreate.style.backgroundImage = `url("${createImageBoard}")`;
  boardCreate.style.backgroundSize = 'cover';
  boardCreate.style.backgroundRepeat = 'no-repeat';
  boardCreate.style.backgroundPosition = 'center';

  if (getImageUrl()) {
    refreshImage.style.display = 'block';
  } else {
    refreshImage.style.display = 'none';
  }

  close.onclick = () => {
    galery.style.display = 'none';
  }
  
  refreshImage.onclick = () => {

    if (!getImageUrl()) {
      galery.style.display = 'flex';
    } else {
      boardCreate.style.backgroundImage = 'none';
      refreshImage.style.display = 'none';
      menu.style.display = 'flex';
      removeImageUrl();
    }

  }
  
  addImagesBtn.onclick = () => {
    galery.style.display = 'flex';
    menu.style.display = 'none';

    itemAsideBoard.forEach(el => {
      el.onclick = () => {
        galery.style.display = 'none';
        menu.style.display = 'flex';
        asideActions.style.display = 'none';

      }
    })

    backToMenu.onclick = () => {
      galery.style.display = 'none';
      asideActions.style.display = 'block';
    }

  }

  images.forEach((el, i) => {

    el.onclick = () => {
      theCSSprop = window.getComputedStyle(el, null).getPropertyValue("background-image");
      boardCreate.style.backgroundImage = theCSSprop;
      boardCreate.style.backgroundSize = 'cover';
      boardCreate.style.backgroundRepeat = 'no-repeat';
      boardCreate.style.backgroundPosition = 'center';

      index = i;

      switch (index) {
        case 0:
          sourceImg = imagePath.zdanie_arhitektura_podsvetka;
          break;
        case 1:
          sourceImg = imagePath.tigr_ryk_zhivotnoe;
          break;
        case 2:
          sourceImg = imagePath.lotos_tsvetok_lepestki;
          break;
        case 3:
          sourceImg = imagePath.lodki_pliazh_more;
          break;
        case 4:
          sourceImg = imagePath.lodki_more_voda;
          break;
        case 5:
          sourceImg = imagePath.lodka_parus_more;
          break;
        case 6:
          sourceImg = imagePath.listia_kapli_mokryj;
          break;
        case 7:
          sourceImg = imagePath.listia_kapli_makro;
          break;
        case 8:
          sourceImg = imagePath.kamni_galka_shershavyj;
          break;
        case 9:
          sourceImg = imagePath.gory_les_derevia;
          break;
        case 10:
          sourceImg = imagePath.gorod_zdaniia_arhitekturaa;
          break;
        case 11:
          sourceImg = imagePath.gorod_zdaniia_arhitektura;
          break;
        case 12:
          sourceImg = imagePath.gorod_gorodskoj_pejzazh_zdaniia;
          break;
        case 13:
          sourceImg = imagePath.frukty_ananas_apelsin;
          break;
        case 14:
          sourceImg = imagePath.fruktovyj_led_morozhenoe;
          break;
        case 15:
          sourceImg = imagePath.rantsuzskij_buldog_sobaka_vysunutyj_iazyk;
          break;
        case 16:
          sourceImg = imagePath.fejerverk_vzryvy_iskry;
          break;
        case 17:
          sourceImg = imagePath.doroga_ulitsa_ogni;
          break;
        case 18:
          sourceImg = imagePath.doroga_pustynia_gory;
          break;
        case 19:
          sourceImg = imagePath.babochka_krylia_nasekomoe;
          break;

        default:
          break;
      }
      setImageUrl(sourceImg);

      if (getImageUrl()) {
        refreshImage.style.display = 'block';
      } else {
        refreshImage.style.display = 'none';
      }

    }

  })

}
