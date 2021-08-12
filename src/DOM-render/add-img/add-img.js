
export const addImages = () => {
  const addImagesBtn = document.getElementById('add-img');
  const tcNotes = document.querySelector('.tc-notes');

  addImagesBtn.onclick = () => {
    const noteImage = document.createElement('div');
    const inputImageWrapper = document.createElement('div');
    const inputFile = document.createElement('input');
    const arrow = document.createElement('i');
    inputFile.type = 'file';
    
    noteImage.className = 'img-wrapper';
    inputImageWrapper.className = 'file-upload';
    arrow.className = 'fa-arrow-up';
    arrow.classList.add('fa');

    tcNotes.append(noteImage);
    noteImage.append(inputImageWrapper);
    inputImageWrapper.append(inputFile , arrow);

  }
}