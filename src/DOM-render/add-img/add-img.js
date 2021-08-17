import { setImageUrl } from "../../shared/ls-services/localStorage";

export const addImages = () => {

  let theCSSprop;
  const addImagesBtn = document.getElementById('add-img');
  const galery = document.querySelector('.galery');
  const menu = document.querySelector('.menu');
  const asideActions = document.querySelector('.aside-actions');
  const boardCreate = document.querySelector('.board-create');
  const images = document.querySelectorAll('.img');
  const close = document.querySelector('.midle-create-board-main');
  let sourceImg;
  let index;

  close.onclick = () => {
    galery.style.display = 'none';
  }


  addImagesBtn.onclick = () => {
    // menu.className = 'menu';
    galery.style.display = 'flex';
    asideActions.className = 'aside-actions-close';
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
          sourceImg = 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/images%2Fzdanie_arhitektura_podsvetka_196497_1920x1080.jpg?alt=media&token=104fff58-3a58-4c19-8a27-e55a880dbee7';
          break;
        case 1:
          sourceImg = 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/images%2Ftigr_ryk_zhivotnoe_217621_1920x1080.jpg?alt=media&token=44a06c04-886b-4b13-b3f2-0562c3f89ff5';
          break;
        case 2:
          sourceImg = 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/images%2Flotos_tsvetok_lepestki_217430_1920x1080.jpg?alt=media&token=42a9fd08-996c-466a-b5b0-5a87af8434a1';
          break;
        case 3:
          sourceImg = 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/images%2Flodki_pliazh_more_170322_1920x1080.jpg?alt=media&token=155314a5-e2a7-48c5-9405-0b4929a10e1f';
          break;
        case 4:
          sourceImg = 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/images%2Flodki_more_voda_217731_1920x1080.jpg?alt=media&token=636086cd-d048-4aa1-80cd-2723dcaa9398';
          break;
        case 5:
          sourceImg = 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/images%2Flodka_parus_more_217599_1920x1080.jpg?alt=media&token=c1872f62-5e01-4f1e-99ac-9e2060efa525';
          break;
        case 6:
          sourceImg = 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/images%2Flistia_kapli_mokryj_201921_1920x1080.jpg?alt=media&token=a1731d73-851e-4247-a7b9-cbd8fbcf2227';
          break;
        case 7:
          sourceImg = 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/images%2Flistia_kapli_makro_190211_1920x1080.jpg?alt=media&token=4e1adde9-8486-459e-a09c-f562293ee6e6';
          break;
        case 8:
          sourceImg = 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/images%2Fkamni_galka_shershavyj_217589_1920x1080.jpg?alt=media&token=084b8c6e-aead-46b4-8fd5-6d5387aec4b6';
          break;
        case 9:
          sourceImg = 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/images%2Fgory_les_derevia_217683_1920x1080.jpg?alt=media&token=94f4de4e-d58e-4306-aed1-1ea71026aa5d';
          break;
        case 10:
          sourceImg = 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/images%2Fgorod_zdaniia_arhitektura_217696_1920x1080.jpg?alt=media&token=4186d919-4996-461d-85f2-2cdd3c8898b0';
          break;
        case 11:
          sourceImg = 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/images%2Fgorod_zdaniia_arhitektura_217687_1920x1080.jpg?alt=media&token=51d8d677-b839-46d7-b9ad-7b9120441106';
          break;
        case 12:
          sourceImg = 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/images%2Fgorod_gorodskoj_pejzazh_zdaniia_217568_1920x1080.jpg?alt=media&token=26112afc-5ee4-4b76-b97d-f41c9ff7d952';
          break;
        case 13:
          sourceImg = 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/images%2Ffrukty_ananas_apelsin_197288_1920x1080.jpg?alt=media&token=d63b7c51-edd8-42fb-800e-bc17b99b81d9';
          break;
        case 14:
          sourceImg = 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/images%2Ffruktovyj_led_morozhenoe_led_217541_1920x1080.jpg?alt=media&token=3a2c6c8c-10a9-462f-8daf-954598dd7811';
          break;
        case 15:
          sourceImg = 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/images%2Ffrantsuzskij_buldog_sobaka_vysunutyj_iazyk_208041_1280x720.jpg?alt=media&token=b3ccac07-ecc4-47e6-ac4f-b40b988a01cf';
          break;
        case 16:
          sourceImg = 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/images%2Ffejerverk_vzryvy_iskry_215861_1920x1080.jpg?alt=media&token=f2914d99-dfa4-4ac8-ac2f-affe9d61ac53';
          break;
        case 17:
          sourceImg = 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/images%2Fdoroga_ulitsa_ogni_217609_1920x1080.jpg?alt=media&token=55a0807d-fca1-44ed-a6c4-5968a7ceb10e'
          break;
        case 18:
          sourceImg = 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/images%2Fdoroga_pustynia_gory_217612_1920x1080.jpg?alt=media&token=1d5b8931-4e1b-48e9-b209-c98989f5caef';
          break;
        case 18:
          sourceImg = 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/images%2Fbabochka_krylia_nasekomoe_217632_1920x1080.jpg?alt=media&token=733cee6e-e12c-4165-aa89-658362c327c1';
          break;

        default:
          break;
      }

      setImageUrl(sourceImg);

    }

  })

}
