
export const addImages = () => {
  const addImagesBtn = document.getElementById('add-img');
  const galery = document.querySelector('.galery');
  const menu = document.querySelector('.menu');

  addImagesBtn.onclick = () => {
    menu.className = 'menu';
    galery.style.display = 'block';
  }
}