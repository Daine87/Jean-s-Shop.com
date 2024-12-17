export let selectedImage = null;
function showImage(imagePath) {
    selectedImage = imagePath;
    document.getElementById('imageDisplayer').innerHTML = `<img src="${imagePath}" alt="Selected Product">`;
}
