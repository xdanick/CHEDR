document.getElementById('fileInput').addEventListener('change', handleFileUpload);

function handleFileUpload(event) {
  const files = event.target.files;
  const audioList = document.getElementById('audioList');
  audioList.innerHTML = ''; // Clear existing list

  Array.from(files).forEach((file) => {
    const audio = document.createElement('audio');
    audio.controls = true;
    const objectURL = URL.createObjectURL(file);
    audio.src = objectURL;

    const audioItem = document.createElement('div');
    audioItem.textContent = file.name;
    audioItem.appendChild(audio);

    audioList.appendChild(audioItem);
  });
}
